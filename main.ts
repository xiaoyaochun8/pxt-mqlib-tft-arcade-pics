namespace mqlib {
    export enum TftArcade {
        //% block="背景1"
        imBg,
        //% block="背景2"
        imBg2,
        //% block="背景3"
        imBg3,
        //% block="白云"
        imCloud,
        //% block="花"
        imFlower,
        //% block="草"
        imGrass,
        //% block="树"
        imTree,
        //% block="狗"
        imDog,
        //% block="猴"
        imMonkey,
        //% block="恐龙"
        imDragon,
        //% block="房子"
        imHouse,
        //% block="汽车"
        imCar,
        //% block="飞机"
        imPlane,
    }
    let bgColor = 0
    function getColorByStr(s: string): number {
        //颜色 1 (白)
        if (s == '1') {
            return 0xFFFF
        //颜色 2 (红)
        } else if (s == '2') {
            return 0x001F
        //颜色 3 (粉红色)
        } else if (s == '3') {
            return 0xC49F
        //颜色 4 (橙)
        } else if (s == '4') {
            return 0x341F
        //颜色 5 (黄)
        } else if (s == '5') {
            return 0x07FF
        //颜色 6 (teal)
        } else if (s == '6') {
            return 0xA4E4
        //颜色 7 (绿)
        } else if (s == '7') {
            return 0x56EF
        //颜色 8 (蓝)
        } else if (s == '8') {
            return 0xA9E0
        //颜色 9 (浅蓝色)
        } else if (s == '9') {
            return 0xFF90
        //颜色 10 (紫)
        } else if (s == 'a') {
            return 0xC171
        //颜色 11 (淡紫色)
        } else if (s == 'b') {
            return 0x9C14
        //颜色 12 (dark purple)
        } else if (s == 'c') {
            return 0x6A0B
        //颜色 13 (tan)
        } else if (s == 'd') {
            return 0xC67C
        //颜色 14 (棕色)
        } else if (s == 'e') {
            return 0x3A32
        //颜色 15 (黑色)
        } else if (s == 'f') {
            return 0x0000
        //颜色 0 (透明度)
        } else {
            return bgColor
        }
    }
    /**
     * 将多行地图字符串转换为 行x列 二维字符数组
     * @param str 原始多行字符串
     * @returns 二维数组：array[行][列] = 字符
     */
    function convertToGrid(str: string): string[][] {
        return str
            .split('\n') // 按换行符分割成每一行
            .filter(line => line.trim() !== '') // 过滤空行、空白行（去掉首尾空行）
            .map(line => line.split('')); // 每一行拆分成单个字符的数组
    }
    //% subcategory="tft"
    //% group='tft彩屏'
    //% block="tft彩屏显示图片 $im 在位置x: $xStart, y $yStart"
    export function tftShowArcade(im: TftArcade, xStart: number, yStart:number) {
        let imgStr = ""
        if (im == TftArcade.imBg) {
            bgColor = 0xFF90
            RBTFT18.drawRectangle(0, 0, 128, 160, bgColor)
            return
        } else if (im == TftArcade.imBg2) {
            bgColor = 0x56EF
            RBTFT18.drawRectangle(0, 0, 128, 160, bgColor)
            return
        } else if (im == TftArcade.imBg3) {
            bgColor = 0x341F
            RBTFT18.drawRectangle(0, 0, 128, 160, bgColor)
            return
        } else if (im == TftArcade.imCloud) {
            imgStr = imCloud
        } else if (im == TftArcade.imFlower) {
            imgStr = imFlower
        } else if (im == TftArcade.imGrass) {
            imgStr = imGrass
        } else if (im == TftArcade.imTree) {
            imgStr = imTree
        } else if (im == TftArcade.imDog) {
            imgStr = imDog
        } else if (im == TftArcade.imMonkey) {
            imgStr = imMonkey
        } else if (im == TftArcade.imDragon) {
            imgStr = imDragon
        } else if (im == TftArcade.imHouse) {
            imgStr = imHouse
        } else if (im == TftArcade.imCar) {
            imgStr = imCar
        } else if (im == TftArcade.imPlane) {
            imgStr = imPlane
        }
        const grid = convertToGrid(imgStr);
        // const width = grid[0].length <= 127 ? grid[0].length : 127;
        let width = grid[0].length
        if(width > 127){
            width = 127
        }
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < width; x++) {
                let pixel = grid[y][x]
                if (pixel) {
                    RBTFT18.drawPixel(x + xStart, y + yStart, getColorByStr(pixel))
                }
            }
        }
    }
    
    //鸡腿
    const imTft999 = `
    `;

    const imCloud = `
    .........bbbb...........
    .......bb1111bb.........
    ......bb111111bbbbb.....
    ......b1111111ddd11b....
    ......b11111111d1111b...
    ...bbbd11111111d1111b...
    ..b11111111111111111bb..
    .b11111111111111111d11b.
    .b111d11111111111111111b
    cdd1d111111111111111111c
    cdddd11111111111111111dc
    cddbd11111d11111dd111dc.
    .cbbdd111dddd11ddbdddcc.
    .ccbbdddddbdddddddbcc...
    ...cccdddbbbdddddcc.....
    ......ccccccccccc.......
    `;
    const imFlower = `
    ....................
    ....................
    ....................
    ....................
    ....................
    ...........444......
    ..........4eee4.....
    ..........44444.....
    ...........444......
    .....444....7.......
    ....4eee4...7.......
    ....44444..77.7.....
    .....444...7766.....
    ......7....766......
    .......7...76.......
    .....7777..7........
    ......6667.6........
    .........666........
    ....................
    ....................
    `;
    const imGrass = `
    . . 6 7 7 8 . .
    . 6 7 7 8 . . .
    . 8 7 8 . . 6 8
    . 8 7 8 . 6 6 8
    . . 8 6 8 8 8 .
    . . . 8 6 8 . .
    6 6 . . 8 7 8 .
    8 6 6 8 7 7 8 .
    . 8 8 7 7 8 . .
    . 8 7 7 8 . . .
    . 8 7 8 . 8 6 .
    . 8 7 8 . 8 6 6
    . . 8 6 8 . 8 8
    . . . 8 6 8 . .
    . . . . 8 7 8 .
    . . . 6 7 7 8 .
    `;
    const imTree = `
    ......cc66......
    .....c6576c.....
    ....c677576c....
    ....cc677666....
    ...cc6c6667cc...
    ..6c666777cc6c..
    ..c76666766776..
    ..c6777777776c..
    ..cc67777776cc..
    .c67cc76676676c.
    .c777666667777c.
    .c6777777777766.
    .cc7767776776666
    c676cc6766666776
    c777766666677776
    cc7777777777776c
    .c676777677767c.
    ..cc667666766c..
    ...ccc6c66ccc...
    .....cccccc.....
    .......ee.......
    ......eeee......
    .....eeeeee.....
    .......ee.......
    `;
    const imDog = `
    bbbb........bbbb.................
    c99bb......bb99b.................
    c999bb....bb999c.................
    c9b99bccccb99b9c.................
    c9bb99bccb99bb9c.................
    c93b99999999b39c.................
    c93399999999339c.................
    c99399999999399c.................
    c99999991199999c.................
    c999ff91119ff99c........bbbbbb...
    c999ff91111ff99c.......c999999bb.
    c99991111111999c......c99999999b.
    c9991111fff1199c.....c9991119999b
    c999c11fff1199bc.....c9911111999b
    c999cc111111c9bc.....c911dd11199b
    c99999bb33cc99bcc....cbddbbd1199c
    c999999b33c99999bbccccbbdbbb1199c
    c9999999bb9999999999999999bb1999c
    c999911119999999999999999999b999c
    c999111111999999999999999999999c.
    c99911111119999999999999999999cc.
    c99111111119999999999999999999c..
    c99111111111999999999999999999c..
    cb9111111111999999999999999999c..
    .f9111111111999999999999999999c..
    .ff111111111999999999999999999c..
    ..fb11111111999999999999999999c..
    ...fb1111119999999111111999999c..
    ...fbbb11119999991111111199999c..
    ....fbbfffb9999ccccccccccb9999c..
    ....fbbf..f999c.....fbbf.c9999c..
    ....fbbf..f999c.....fbbf.cc9999c.
    ....fbbf..f99c.......fbf..cc999c.
    ....fbbf..f99c.......fbbf..cc99c.
    ....fbbf..f99c.......fbbf...c99c.
    ....fbbf..f99c......fbbbf...c99c.
    ...fbbbf..f99c......ffff....cb9c.
    ...fbbf..f999c.............c999c.
    ...ffff..f99cc.............c999c.
    .........fffc..............cccc..
    `;
    const imMonkey = `
    . . . . f f f f f . . . . . . .
    . . . f e e e e e f . . . . . .
    . . f d d d d e e e f . . . . .
    . c d f d d f d e e f f . . . .
    . c d f d d f d e e d d f . . .
    c d e e d d d d e e b d c . . .
    c d d d d c d d e e b d c . . .
    c c c c c d d e e e f c . . . .
    . f d d d d e e e f f . . . . .
    . . f f f f f e e e e f . . . .
    . . . . f f e e e e e e f . f f
    . . . f e e f e e f e e f . e f
    . . f e e f e e f e e e f . e f
    . f b d f d b f b b f e f f e f
    . f d d f d d f d d b e f f f f
    . . f f f f f f f f f f f f f .
    `;
    const imDragon = `
    ........................
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb55555bcc555555c
    ......cb555555555c55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb1bbbc.
    ....ccd55ddddd5bbbb335c.
    ...ccbdddddddd5bbbb335c.
    .ccccddddddddd55bbb335c.
    cdcccdddddb55bb5bb3335c.
    cddbddddddb555bb5b3335c.
    cddddddddddb5555b53335c.
    ccddddddbd55bb55c5555c..
    .ccddddbbbdd55cccbccc...
    ...ccbbbcbddddccdddc....
    .....ccccdd555dccccc....
    ........cccccccc........
    `;
    const imHouse = `
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `;
    const imCar = `
    . . . . . . . e e e e e . . . .
    . . . . . e e 2 2 2 2 2 e . . .
    . . . . e e 2 2 2 2 2 2 2 e . .
    . . . . e 9 4 2 2 2 2 2 4 b e .
    . . e e 9 9 4 2 2 2 2 2 4 9 b e
    . e 2 2 9 9 4 4 2 2 2 2 4 9 9 e
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e
    e 2 2 2 9 9 e e e e e e e 9 9 e
    e 2 2 2 9 b e b b b e b e b 9 e
    e 2 e e e e b b b b e b b e b e
    e e 3 3 e e 2 2 2 2 e 2 2 e e e
    e 3 3 e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e f f f e e e e f f f e e
    . e e f b b c f e e f b b c f .
    . . . . c f f . . . . c f f . .
    `;
    const imPlane = `
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `;
}