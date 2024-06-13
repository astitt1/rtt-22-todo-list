//Add a todo

//access the button element

const button = document.getElementById('add-todo')
console.log(button)

//function to run when the button is clicked
function handleAddTodo() {
    //what do I want to happen in here?
    console.log('button is clicked!')
}

//add an event listener to my button
button.addEventListener("click", handleAddTodo)