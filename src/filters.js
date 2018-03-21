
const divideFilter = (x, y) => {
    const z = (x / y).toFixed(2) * 100
    return Math.ceil(z)
}

const plusFilter = (x, y) => {
    const a = parseFloat(x, 10)
    const b = parseFloat(y, 10)
    const z = a + b
    return z
}

const leftTime = (end) => {
    const now_time = new Date().toLocaleDateString()

    const now_time_stamp = new Date(now_time).getTime()
    const end_stamp = new Date(end.substring(0, 10)).getTime()

    const gap_stamp = end_stamp - now_time_stamp

    return Math.ceil(gap_stamp / 1000 / 3600 / 24 - 1)
}

const easyToChinese = (n) => {
    const str = '一二三四五六七八九十'
    const init_n = parseInt(n)
    const c = str[init_n]

    return c
}

const numToChinese = (n) => {
    // if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
    //     return '数据非法'
    // }
    let chinese = '千百拾亿千百十万千百十元角分', new_pra = n, str = ''
    new_pra += '.00'
    const p = new_pra.indexOf('.')
    if (p >= 0) {
        new_pra = new_pra.substring(0, p) + new_pra.substr(p + 1, 2)
        chinese = chinese.substr(chinese.length - new_pra.length)
    }

    for (let i = 0; i < n.length; i++) {
        str += '零一二三四五六七八九'.charAt(n.charAt(i)) + chinese.charAt(i)
    }
    return str.replace(/零(千|百|十|角)/g, '零').replace(/(零)+/g, '零').replace(/零(万|亿|元)/g, '$1').replace(/(亿)万|壹(十)/g, '$1$2').replace(/^元零?|零分/g, '').replace(/元$/g, '')
}

const bankChage = (name) => {
    const bank_list = {
        ABC: '农业银行',
        BJBANK: '北京银行',
        BOC: '中国银行',
        CCB: '建设银行',
        CEB: '光大银行',
        CIB: '兴业银行',
        CITIC: '中信银行',
        CMB: '招商银行',
        CMBC: '民生银行',
        COMM: '交通银行',
        GDB: '广发银行',
        HXBANK: '华夏银行',
        ICBC: '工商银行',
        PSBC: '邮储银行',
        SHBANK: '上海银行',
        SPABANK: '平安银行',
        SPDB: '浦发银行'
    }
    const backChinese = bank_list[name]

    return backChinese
}

const timeFormmat = (stamp) => {
    const b = stamp
    const c = parseInt(b) * 1000
    const stamp_time = new Date(c)
    const year = stamp_time.getFullYear()

    let month = stamp_time.getMonth() + 1,
        date = stamp_time.getDate(),
        hour = stamp_time.getHours(),
        minute = stamp_time.getMinutes(),
        second = stamp_time.getSeconds()

    month = month < 10 ? `0${month}` : month
    date = date < 10 ? `0${date}` : date

    hour = hour < 10 ? `0${hour}` : hour

    minute = minute < 10 ? `0${minute}` : minute

    second = second < 10 ? `0${second}` : second
    const a = `${year}-${month}-${date}  ${hour}:${minute}:${second}`
    return a
}

export default {
    divideFilter,
    plusFilter,
    leftTime,
    numToChinese,
    easyToChinese,
    bankChage,
    timeFormmat
}
