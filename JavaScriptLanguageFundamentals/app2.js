const name = "mobin";
const age = 22;
const job = "web dev";
const city = "turlock";

let html;
//without template strings (es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li> <li>Job: ' + job + ' </li> <li>City: ' + city + '</li></ul>';

//template strings/template literal (es6)

html = `
    <ul>
        <li>${name} </li>
        <li>${age} </li>
        <li>${job} </li>
        <li>${city} </li>
    </ul>

`

document.body.innerHTML = html;

//Switches
const color = "red";
switch (color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log("color is blue");
        break
    default:
        console.log("Color is not blue")
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`today is ${day}`);