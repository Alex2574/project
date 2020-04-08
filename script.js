
var data = new Array();

require('fs').readFileSync('count.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
data.push(line);
});



var sum = 0;
for( var line = 0; line < data.length -1; line++)
{
sum += parseFloat(data[line]);
}

var avg = sum/(data.length-1);
var min = Math.min.apply(Math, data);
var max = Math.max.apply(Math, data);
console.log(data);

console.log(" The average is: " + avg + " the minimum is " + min + " the maximum is " + max);



