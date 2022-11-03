/*
* 计算表格列宽，能同时适配表头的宽度
* 最大能匹配26个字符串的单行显示，大于26之后开始换行
* 参数:
    data:Array 必填，需要填入表格的数据
    header:Array 选填, 表头的数据(如不填入可能造成表头换行)
*/
export default function tableColWidth (data, header, FontSize) {
    let widthArr = []
    let StringArr = []
    let FontWidth = []
    let index = 0
    if (!FontSize) {
        FontSize = 14
    }
    // 先将第一组数据对象的长度保存
    for (let key in data[0]) {
        widthArr.push(data[0][key].length)
        StringArr.push(data[0][key])
    }

    // 从第二组开始对比
    for (let i = 1; i < data.length; i++) {
        for (let i = 1; i < data.length; i++) {
            // 对比开始
            for (let key in data[i]) {
                if (index === widthArr.length) {
                    index = 0
                }
                // 如果后者更大则替换掉
                if (data[i][key].length > widthArr[index]) {
                    widthArr[index] = data[i][key].length
                    StringArr[index] = data[i][key]
                }
                index++
            }
        }
    }

    // 对比请求头的长度是否比数据长度大
    for (let i = 0; i < header.length; i++) {
        if (header[i].label.length > widthArr[i]) {
            widthArr[i] = header[i].label.length
            StringArr[i] = header[i].label
        }
    }

    // 80起步
    // 根据字符串的长度返回对应的宽度
    // 计算宽度
    function getwidth (txt, font) {
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        ctx.font = font
        return ctx.measureText(txt).width
    }

    StringArr.forEach((currentValue, index, arr) => {
        FontWidth.push(getwidth(currentValue, FontSize))
    })
    for (let i = 0; i < FontWidth.length; i++) {
        if (widthArr[i] <= 4) {
            FontWidth[i] = 80
        } else if (widthArr[i] >= 5 && widthArr[i] <= 10) {
            FontWidth[i] += 70
        } else if (widthArr[i] >= 11 && widthArr[i] <= 22) {
            FontWidth[i] += 110
        } else {
            FontWidth[i] += 120
        }
    }
    return FontWidth
}
