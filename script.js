function login(){
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
const message=document.getElementById('message');

if(email==='admin' && password==='1234'){
message.style.color='lime';
message.textContent='Login Successful!';
}else{
message.style.color='red';
message.textContent='Invalid Email or Password!';
}
}
