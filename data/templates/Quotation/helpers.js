const handlebars = require('handlebars');

const helpers = require('handlebars-helpers')();


function totalCal(items) {
    var sum = 0
    items.forEach((i) => {
        sum +=   Number(i.quantity)* Number(i.rate);
    })
    return comma(sum)
}

function amountCal(quantity, rate){
    return comma(Number(quantity) * Number(rate)); 
}


function now() {
    var date = new Date().toDateString();
    var arr = date.split(" ");
    return   arr[2] +" "+ arr[1] + " " + arr[3];
}

function time(){
    var date  = new Date();
    var hours =  date.getHours();
    var minutes =  date.getMinutes();
    return hours + ":" + minutes;
}

function comma(number){
    var text = number.toString();
    var arrText = text.split(".");
    var toAddComma = arrText[0];   

    for (var i = toAddComma.length - 3; i > 0 ; i -= 3) {
        toAddComma = toAddComma.substring(0, i) + "," + toAddComma.substring(i, toAddComma.length);
      }
      
     if(arrText[1]){
         if(arrText[1].length > 2){
            arrText[1] = arrText[1].substring(0,2);
         }
         if(arrText[1].length == 1){
             arrText[1] += "0";
         }
         return  toAddComma  + "." + arrText[1];
     } 
     return  toAddComma + ".00";
} 

var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

function inWords (str) {
    
    var num =  Number(str.replace(/,/g,""));
    if (num === 0) return 'Zero';
    if ((num = num.toString()).length > 9) return 'Over Flow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return ; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Only ' : '';
    return str;
}
