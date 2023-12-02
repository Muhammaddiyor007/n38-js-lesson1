let abc= prompt("Uch xonali son kiriting=")

m=abc % 100 % 10
n=(abc % 100 - m) / 10
s= (abc-abc % 100) / 100
x=s * 100 + m * 10 + n

console.log("Natija:", x);