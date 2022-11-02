/*
* 计算表格列宽，能同时适配表头的宽度
* 参数:
    data:Array 必填，需要填入表格的数据
    header:Array 选填, 表头的数据(如不填入可能造成表头换行)
*/
export default function tableColWidth (data, header) {
    let widthArr = []
    let index = 0
    // 先将第一组数据对象的长度保存
    for (let key in data[0]) {
        widthArr.push(data[0][key].length)
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
                }
                index++
            }
        }
    }
    console.log(widthArr)
    for (let i = 0; i < header.length; i++) {
        if (header[i].label.length > widthArr[i]) {
            widthArr[i] = header[i].label.length
        }
    }

    // 一个14px字符需要13的空间 80起步
    // 根据字符串的长度返回对应的宽度
    for (let i = 0; i < widthArr.length; i++) {
        if (widthArr[i] < 4) {
            widthArr[i] = 80
        } else if (widthArr[i] >= 4 && widthArr[i] < 7) {
            widthArr[i] = widthArr[i] * 14 + 30
        } else if (widthArr[i] >= 7 && widthArr[i] <= 9) {
            widthArr[i] = widthArr[i] * 14 + 30
        } else {
            widthArr[i] = widthArr[i] * 14 + 30
        }
    }
    return widthArr
}
