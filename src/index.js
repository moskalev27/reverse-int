module.exports = function reverse(n) {
    n = Math.abs(n)
    // console.log(n);
    let str = n.toString();
    return str.split("").reverse().join("");
}
// console.log(reverse(234));