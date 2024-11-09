const questions = [
{
'que': 'Inside which HTML element do we put the JavaScript?',
'a':    '<javscript>',
'b':    '<js>',
'c':    '<scripting',
'd':    '<script>',  
'correct': 'd'
},

{
'que':  'Where is the correct place to insert a JavaScript?',
'a':    'The <boby>',
'b':    'The<head>',
'c':    'Both the <head> section and the <body> section are correct',
'd':    'None of them',
'correct': 'c'
},

{
'que':  'How to write an IF statement in JavaScript?',
'a':    'if i = 5 then',
'b':    'if i = 5',
'c':    'if(i == 5)',
'd':    'if i == 5 then',
'correct': 'c'
},

{
'que':  'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
'a':    'if i <> 5',
'b':    'if (i <> 5)',
'c':    'if(i != 5)',
'd':    'if i =! 5 then',
'correct': 'c'
},

{
'que':  'How does a WHILE loop start?',
'a':    'while (i <= 10)',
'b':    'while (i <= 10; i++)',
'c':    'while i 1 to 10',
'd':    'Both a and b',
'correct': 'a'
},
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
if(index === total) {
return endQuiz ()
}
reset ();
const data = questions[index]
//console.log(data)
quesBox.innerText = `${index+1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
const data = questions[index];
const ans = getAnswer()
if (ans == data.correct){
right ++;
}else{
wrong ++
}
index ++;
loadQuestion();
return;
}
const getAnswer = () => {
let answer;
optionInputs.forEach(
(input) => {
if (input.checked){
answer = input.value;
}
}

)
return answer;
}
const reset = () => {
optionInputs.forEach(
(input) => {
input.checked = false;
}
)
}
const endQuiz = () => {
document.getElementById("box").innerHTML = `
<div style = "text-align:center"> 
<h3>Thanks for taking part in our quiz – we hope it was fun!</h3>
<h2> ${right} / ${total} are correct</h2>
</div>
`
}
//initial call
loadQuestion();