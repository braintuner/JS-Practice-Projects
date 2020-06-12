//We’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

//In this project we will build the Magic Eight Ball using control flow in JavaScript.


var username="jim";
var userQuestion="whats up!";
username? console.log(`Hello! ${username} `) : console.log('Hello!') ;

console.log(userQuestion);
var randomNumber=Math.floor(Math.random()*8);
var eightball="";
switch(randomNumber){
  case 0:
  eightball='It is certain' ;
  break;
  case 1:
  eightball='It is decidedly so' ;
  break;
  case 2:
  eightball= 'Reply hazy try again';
  break;
  case 3:
  eightball= 'Cannot predict now';
  break;
  case 4:
  eightball='Do not count on it' ;
  break;
  case 5:
  eightball= 'My sources say no';
  break;
  case 6:
  eightball= 'Outlook not so good';
  break;
  case 7:
  eightball= 'Signs point to yes';
  break;
}
  console.log(eightball);
