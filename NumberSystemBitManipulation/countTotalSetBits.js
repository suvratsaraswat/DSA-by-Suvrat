const countTotalSetBits = num => {
    if (num === 0) return 0;

    let x = largestPowerOf2inRange(num);

    let bitsUpto2toX = x * (1 << (x - 1));
    let msbFrom2rx = num - (1 << x) + 1;
    let rest = num - (1 << x)
    let count = bitsUpto2toX + msbFrom2rx + countTotalSetBits(rest);
    return count
}

const largestPowerOf2inRange = n => {
    let x = 0;
    while ((1 << x) <= n) x++;
    return x - 1;
}

console.log(countTotalSetBits(18));