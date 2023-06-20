
function eded(x) {
    s = 0;
    while (x > 0) {
        q = x % 10;
        s = s + q;
        x = Math.floor(x / 10);
    }
    return s;
}

let a = 289;
while (a > 9) {
    a = eded(a);
}

console.log(a);

