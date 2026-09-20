# 雪碧大作战 · 好友挑战 v1.1

轻量网页小游戏，无需安装或联网资源。打开 dist/index.html 即可开始。

## 操作

- WASD 或方向键移动；按住空格或 J 自动朝最近 Boss 普通攻击。
- E 喝雪碧，恢复最多 34 点生命，每关 3 瓶。满血不会消耗。
- Esc 暂停，切走页面自动暂停。手机使用方向按钮和平 A 按钮。
- 每关补满生命和雪碧，失败直接重试当前关卡。

## 关卡

1. 小狗：上海话文字弹幕、小忧郁波纹。
2. 简单：昆明人，文字弹幕与算术对决。答对让简单扣血，答错或超时不惩罚玩家。
3. 陆远：首先、其次、因此，三段逻辑预警。
4. 元元：折返的回忆，召唤松鼠冲刺造成暴击；小狗、酒神助阵起哄。
5. 苦茶籽与酒神：情侣双人关，共用血条，代码封路和重拳合招。

v1.1 新增屋顶夜景背景、原创循环电子 BGM、独立音乐开关与音量、回血快捷键与低血量提醒、命中爆光、气泡拖尾、施法光环、重拳冲击波和回血涟漪。小狗追加“外乡人”“松江最强”“臭外地的”等熟人嘴贫台词。地区梗与上海话文字混用，未包含真人配音或上海话录音。

点击开始后音乐才会播放，以符合浏览器自动播放限制。暂停或切出页面时停止音乐，算术环节降低音乐音量。音乐由 music.js 在设备上合成，不需要下载外部音频，也不调用模型。

角色形象为虚构草图，并非真人肖像。主角显示为“你”，雪碧明确作为回血道具。

## 发布到 itch.io / GitHub Pages

导出的 ZIP 包根目录直接包含 index.html，解压后可离线玩。

itch.io：创建项目 → Kind of project 选择 HTML → 上传 ZIP → 勾选 This file will be played in the browser → 建议嵌入尺寸 1280 × 900，开启全屏按钮与移动端支持 → 预览 → 选择公开可见性。参考：https://itch.io/docs/creators/html5

GitHub：将游戏文件解压上传到你选择的仓库根目录 → Settings → Pages → Deploy from a branch → main / root → 保存。参考：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

游戏源码无 API 密钥、无付费接口、无玩家账号服务；游玩和音乐在访客浏览器中运行。托管流量仍受所用平台政策与额度约束。

## 检查

JavaScript 语法检查通过。逻辑模拟通过五关击败流程、生命/药量、暂停与重试、算术答对/答错/超时、松鼠暴击、情侣合招、移动边界和结构化操作合法/非法输入。浏览器已确认实际战斗、关卡进度和失败界面，未捕获到脚本错误。

## 素材

dist/arena.png：本轮使用内置 Imagegen 生成的屋顶夜景背景，1536 × 1024。生成提示词：Create a polished 1536x1024 2D top-down pixel-art video game arena BACKGROUND ONLY, no UI, no text, no characters. A cozy neon rooftop hangout in a contemporary Chinese city at night, deep navy and teal palette, electric lime accent lights. Orthographic straight overhead view, not isometric. Wide clean rectangular central rooftop play field covers center 85% width and 75% height, with subtle dark tiled floor and faint circular faded paint in middle, uncluttered to read game projectiles. Only along outer perimeter: low parapet walls, small plant pots, rooftop ventilation boxes, a few cafe stools and an unbranded glowing green drink vending machine in top left, warm string lights along upper edge. Tiny skyline and distant windows beyond roof only at far top edge. Stylish detailed crisp pixel art matching anime chibi arcade characters, restrained contrast in central floor, attractive luminous edges. No logos, no lettering, no watermarks, no baked-in interface. Landscape composition.

dist/music.js：原创八小节循环合成旋律，没有使用商业歌曲或外部采样。

dist/characters.png：内置 Imagegen 一次生成，1536 × 1024，四列两行。以下为生成提示词。绘图结果为深色背景，游戏以卡牌形式展示；酒神当前立绘仍可继续调整得更偏男性化。

Use case: stylized-concept. Asset type: live Canvas game sprite sheet, not a mockup. Generate one 1536x1024 PNG, exactly four equal columns and two equal rows, with eight isolated full-body sprites. Each cell is 384x512. Place each sprite centrally inside its cell, with generous empty margin and feet at consistent baseline, no sprite crossing cell boundaries. Clean genuine transparent background preferred; if transparency unavailable use perfectly flat solid dark navy #111c32. No grid lines, no labels, no lettering, no scenery, no shadows outside silhouettes. Detailed charming crisp pixel art, chibi proportions but unmistakably adult human characters, consistent scale, clean readable silhouettes, front-facing slight three-quarter view. Seven Chinese adult characters and one squirrel. Row 1 left to right: (1) protagonist with short black hair in mint-green hoodie holding a small green soda can; (2) Xiaogou, cheerful young adult man from Shanghai, orange dog-ear hoodie; (3) Jiandan, handsome stylish adult male nightclub model aesthetic, black and gold blazer with open collar, holding a book; (4) Luyuan, handsome adult male lawyer, navy suit, silver glasses, holding paper. Row 2 left to right: (5) Yuanyuan, young adult woman wearing violet jacket, wistful expression, holding phone; (6) Kuchazi, adult male programmer, glasses, teal hoodie, holding laptop; (7) Jiushen, masculine-presenting adult woman, short dark hair, loose black jacket, broad relaxed stance, tired stoic face; (8) cute copper-colored squirrel summon with large curled tail. Keep the exact order and uniform regular 4x2 grid. Full bodies including footwear and all props entirely contained. No additional characters, no text, no watermark.
