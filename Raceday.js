/*Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).*/

let raceNumber = Math.floor(Math.random() * 1000);
let early=true;
let age=78;
if ( early && age>18){
  raceNumber+=1000;
  }
if(early && age>18){
console.log(`Racetime is 9:30 am. Race ID:${raceNumber}`);
}
else if(early=false && age>18){
console.log(`Race starts at 11:00am. Race id ${raceNumber} `);
} 
else if (age < 18){
  console.log(`Race starts at 12:30 pm. Rac Id ${raceNumber}`);
}
else if(age===18){
  console.log('Please seek the registeration desk.')
} 