import ButtonCompleteTask from './components/CompleteTask.js'
import DeleteButton from './components/DeleteTask.js'

const newButtonTask = document.querySelector('[data-form-button]')

const createNewTask = (event) => {
  event.preventDefault()
    
    const list = document.querySelector('[data-list]')
    const newTask = document.querySelector('[data-form-input]')
    const value = newTask.value

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class='content'>${value}</p>`

    task.innerHTML = content

    task.appendChild(ButtonCompleteTask())
    task.appendChild(DeleteButton())
    list.appendChild(task)
    newTask.value = ''
} 

  newButtonTask.addEventListener('click', createNewTask )