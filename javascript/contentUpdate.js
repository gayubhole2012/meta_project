
//Web page content update
/*let answer = prompt('What is your name?');
if(typeof(answer) === 'string'){
  var h1 = document.createElement('h1');
  h1.innerHTML = answer;
  document.body.appendChild(h1);
}*/

let answer = prompt('What is your name?');
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
  console.log(input.value)
}) // 

//assignment
var h1 = document.querySelector('h1');

var arr = [
  'Example Domain',
  'First Click',
  'Second Click',
  'Third Click'
] 

function handleClicks(){
    switch(h1.innerText){
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            braek;
        case arr[2]:
            h1.innerText = arr[3];
            break;
         default:
            h1.innerText = arr[0];
            }
}

h1.addEventListener('click', handleClicks)


//how to convert a JSON string to a JavaScript object with the parse method
//how to convert a JavaScript object to a JSON string using the stringfy method
//retrieving data from APIs converting the JSON strings to JavaScript objects will be a standard workflow. 

//JSON

'{"greeting": "Hello"}'
'{"greeting": "Hello"}'
const jsonstr= '{"greeting": "Hello"}'
undefined
JSON.parse(jsonstr)
{greeting: 'Hello'}
const aplainobj = JSON.parse(jsonstr)
undefined
aplainobj.greeting = 'hi'
'hi'
aplainobj
{greeting: 'hi'}
const data = {
    firstname : "JHON",
    lastname: "karl",
    greeting: "Hello",
}
undefined
JSON.stringify(data)
'{"firstname":"JHON","lastname":"karl","greeting":"Hello"}'