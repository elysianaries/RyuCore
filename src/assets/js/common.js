const numToChineseBig = (n) => {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
        return "数据非法";
    }
    let chinese = "京亿万仟佰拾兆万仟佰拾亿仟佰拾万仟佰拾元角分"
    let str = ""
    n += "00"
    const p = n.indexOf('.');
    if (p >= 0) {
        n = n.substring(0, p) + n.substr(p+1, 2);
        chinese = chinese.substr(chinese.length - n.length);
    }

    for (let i = 0; i < n.length; i++) {
         str += '零贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + chinese.charAt(i);
    }
    return str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(兆|万|亿|元)/g, "$1").replace(/(兆|亿)万/g, "$1").replace(/(京|兆)亿/g, "$1").replace(/(京)兆/g, "$1").replace(/(京|兆|亿|仟|佰|拾)(万?)(.)仟/g, "$1$2零$3仟").replace(/^元零?|零分/g, "").replace(/(元|角)$/g, "$1整");
}

const numToChinese = (n) => {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
        return "数据非法";
    }
    let chinese = "千百拾亿千百十万千百十元角分"
    let str = ""
    n += ".00"
    const p = n.indexOf('.');
    if (p >= 0) {
        n = n.substring(0, p) + n.substr(p+1, 2);
        chinese = chinese.substr(chinese.length - n.length);
    }

    for (let i = 0; i < n.length; i++) {
         str += '零一二三四五六七八九'.charAt(n.charAt(i)) + chinese.charAt(i);
    }
    return str.replace(/零(千|百|十|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(十)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "")
}

export {
    numToChinese
}
