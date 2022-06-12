// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var arr=sentence.split(" ");
console.log(arr)
var b=new Array(i);
for (var i=0;i<arr.length;i++){
    b[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
}
sentence=b.join(" ");
console.log(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.slice(1,money.length));