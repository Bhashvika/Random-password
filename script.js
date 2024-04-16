const passwordbox=document.getElementById('password');
const length=12;
const Uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@!#$%^&*()~_+|{}[]><?/-=";
const allchars=Uppercase+Lowercase+number+symbol;
function createpassword(){
    let password="";
    password+=Uppercase[Math.floor(Math.random()*Uppercase.length)];
    password+=Lowercase[Math.floor(Math.random()*Lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
          password+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    passwordbox.value=password;
}
function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}