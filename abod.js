/*
var str = "rabbits are furry";
var position = str.search(/bits/);
if(position >=0)
    document.write("'bits' appears in position ",position,"<br/>");
else 
    document.write("'bits' does not appear in str <br/> ");

function tst_phone_num(num){
var ok = num.search (/\d{3}-\d{4}/);
if(ok==0)
    return true;
else 
    return false;

}
tst = tst_phone_num("44-1234 ");
if (tst)
    document.write("error in tst_phone_num <br/>");
else 
    document.write("44-1234 is not alegal phone number <br/>"); 
var str = "my 3 kings beat your 2 aces";
var matches = str.match(/[ab]/g);
document.write("match is ",matches  ,"<br/>"); */
var name = prompt("اكتب اسمك");



 {
    var enter = confirm("مرحباً  بك يا " + name + "، هل تريد دخول الموقع؟");

    if (enter) {
        alert("أهلاً بك في الموقع");
    } else {
        alert("وداعاً");
    }
}















