let abc= prompt("Uch xonali son kiriting=")

m=abc % 100 % 10
n=(abc % 100 - m) / 10
s= (abc-abc % 100) / 100
x=m * 100 + n * 10 + s

console.log("Raqamlari teskari bo'lgan son :", x);