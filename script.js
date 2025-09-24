// Array declaration
let todoListArray = [];

listTodoEach();
// putting input tetx in a variable
let inputText = document.querySelector('.js-input');

let todoHTML = '';

// loop and list each todo 
function listTodoEach (){
  let todoHTML = '';
  for(let i=0; i<todoListArray.length; i++){
    const todo = todoListArray[i];
    const html = `<p><ul><li>${todo}</li></ul></p>`;
    todoHTML += html;
  }
  document.querySelector('.js-display').innerHTML = todoHTML;
}

  //get text from input, add to array and console
  function addTodoToArray() {
    document.querySelector('.js-todo-add-button').addEventListener('click', () =>{
    todoListArray.push(inputText.value);
    listTodoEach();
    inputText.value = '';
    });
  }
  addTodoToArray();

// pressing enter key onkeyboard to add
  document.body.addEventListener('keydown', () =>{
    if(event.key === 'Enter'){
      todoListArray.push(inputText.value);
      listTodoEach();
      inputText.value = '';
    }
  });