function isValidIpSegment(str) {
    let resBool = true;
    let tempVal = Number(str);
    if (
        str.length === 0 || isNaN(tempVal) ||
        tempVal > 255 || tempVal < 0 ||
        (str.length > 1 && str[0] === '0')
    ) {
        resBool = false;
    }
    return resBool;
}

function restoreIpAddresses(s) {
    const resArr = [];
    backTracking(s, 0, []);
    return resArr;

    function backTracking(s, startIndex, route) {
        let length = s.length;
        if (route.length === 4 && startIndex >= length) {
            resArr.push(route.join('.'));
            return;
        }
        if (route.length === 4 || startIndex >= length) return;
        let tempStr = '';
        for (let i = startIndex + 1; i <= Math.min(length, startIndex + 3); i++) {
            tempStr = s.slice(startIndex, i);
            if (isValidIpSegment(tempStr)) {
                route.push(s.slice(startIndex, i));
                backTracking(s, i, route);
                route.pop();
            }
        }
    }
}

console.log(restoreIpAddresses('25525511135'))