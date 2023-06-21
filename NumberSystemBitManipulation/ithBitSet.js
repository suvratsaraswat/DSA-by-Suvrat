function ithBitSet(num, i) {
    if ((num>>i) & 1) return true;
    return false;
}

console.log(ithBitSet(8,2));