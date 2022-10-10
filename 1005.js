let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let A = parseFloat(lines.shift(1));
let B = parseFloat(lines.shift(2));

let media = (3.5 * A + 7.5 * B) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
