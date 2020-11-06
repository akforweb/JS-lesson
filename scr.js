var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 потому что а + 1
d = b++; alert(d);           // 1 постфиксная форма возвращает число до увеличения
c = (2+ ++a); alert(c);      // 5 потому что а из первого примера
d = (2+ b++); alert(d);      // 4 потому что б из второго примера
alert(a);                    // 3 потому что сумма
alert(b);                    // 3 потому что сумма

var a = 2;
var x = 1 + (a *= 2); // х = 5

const a = 1
const b = 2
if (a >= 0 && b >= 0) {
alert(a - b);
}
if (a <= 0 && b <= 0) {
alert(a * b);
}
if (a >= 0 || b >= 0, a >= 0 || b >= 0) {
alert(a + b);
}

a = 9
switch(a){
   case a <= 15:
        alert(a);
        break;
        }

null = 0  потому что так true
