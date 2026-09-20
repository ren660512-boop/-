/* Original 8-bar chiptune, synthesized locally. No samples or external music. */
(() => {
  let context, master, noise, timer, next=0, tick=0, active=false, enabled=true, unlocked=false;
  let currentMode='home', currentStage=0, volume=.35;
  const melody=[72,76,79,76,74,76,79,83,81,79,76,null,74,76,79,null,69,72,76,79,76,72,71,72,76,79,81,79,76,74,72,null,65,69,72,76,74,72,69,null,69,72,77,76,74,72,69,67,67,71,74,79,77,74,71,null,74,77,79,83,81,79,74,71];
  const chords=[[48,52,55],[45,48,52],[41,45,48],[43,47,50]];
  const hz=m=>440*Math.pow(2,(m-69)/12);
  function tone(m,at,len,level,type='triangle') {
    const oscillator=context.createOscillator(), gain=context.createGain();
    oscillator.type=type;oscillator.frequency.value=hz(m);oscillator.connect(gain);gain.connect(master);
    gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(level,at+.009);gain.gain.exponentialRampToValueAtTime(.0001,at+len);
    oscillator.start(at);oscillator.stop(at+len+.025);
  }
  function drum(at,kick) {
    const gain=context.createGain();gain.connect(master);
    if(kick){const o=context.createOscillator();o.frequency.setValueAtTime(135,at);o.frequency.exponentialRampToValueAtTime(42,at+.12);o.connect(gain);gain.gain.setValueAtTime(.26,at);gain.gain.exponentialRampToValueAtTime(.0001,at+.15);o.start(at);o.stop(at+.16);}
    else {const src=context.createBufferSource(),filter=context.createBiquadFilter();src.buffer=noise;filter.type='highpass';filter.frequency.value=4300;src.connect(filter);filter.connect(gain);gain.gain.setValueAtTime(.045,at);gain.gain.exponentialRampToValueAtTime(.0001,at+.045);src.start(at);src.stop(at+.05);}
  }
  function pump(){if(!active||context.state!=='running')return;if(next<context.currentTime-.2)next=context.currentTime+.03;const duration=60/(112+currentStage*2)/2;let safety=0;while(next<context.currentTime+.13&&safety++<5){const i=tick%64, chord=chords[Math.floor(i/16)];if(i%8===0)chord.forEach(n=>tone(n+12,next,duration*6,.037,'sine'));if(i%4===0){tone(chord[0]-12,next,duration*1.8,.15);drum(next,true)}if(i%2===0)drum(next,false);if(melody[i]!==null)tone(melody[i],next,duration*.8,.082);tick++;next+=duration;}}
  function refresh(){const btn=document.getElementById('music');if(btn){btn.textContent=enabled?'♫ BGM 开':'♫ BGM 关';btn.setAttribute('aria-pressed',String(enabled));}if(!context)return;const shouldPlay=enabled&&unlocked&&!document.hidden&&!['paused','lost'].includes(currentMode);master.gain.cancelScheduledValues(context.currentTime);master.gain.setTargetAtTime(shouldPlay?volume*(currentMode==='quiz'?.45:1):0,context.currentTime,.04);if(shouldPlay&&!active){active=true;next=context.currentTime+.035;pump();timer=setInterval(pump,25)}else if(!shouldPlay&&active){active=false;clearInterval(timer);timer=null;}}
  async function unlock(){if(!enabled)return;try{if(!context){context=new(window.AudioContext||window.webkitAudioContext)();master=context.createGain();master.gain.value=0;master.connect(context.destination);noise=context.createBuffer(1,Math.ceil(context.sampleRate*.06),context.sampleRate);const a=noise.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=Math.random()*2-1;}await context.resume();unlocked=true;refresh();}catch{enabled=false;refresh();}}
  window.SodaMusic={unlock,sync(mode,stage){if(mode===currentMode&&stage===currentStage)return;currentMode=mode;currentStage=stage;refresh()},toggle(){enabled=!enabled;if(enabled)void unlock();refresh()},setVolume(v){volume=Math.max(0,Math.min(.6,Number(v)/100*.6));refresh()},status(){return{enabled,active,unlocked,volume}}};
  document.addEventListener('visibilitychange',refresh);window.addEventListener('pagehide',()=>{clearInterval(timer);context?.close()},{once:true});
})();
