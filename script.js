const name = 'Василий'
console.log(name)

let admin = name
console.log(admin)

// 1000 + '108' будет 1000108 потому что число и строка конкатенируются

let Tc = prompt ('Введите температуру по цельсию: ')
let Tf = (9 / 5) * Tc + 32
alert('Температура по фаренгейту: ' + Tf)