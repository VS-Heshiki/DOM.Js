const DeleteButton = () => {
  const deleteButton = document.createElement('button')
  
  deleteButton.classList.add('delete-button')
  deleteButton.innerText = 'X'
  
  deleteButton.addEventListener('click', deleteTask)

  return deleteButton
}

const deleteTask = (event) => {
  const deleteButton = event.target

  const taskDelete = deleteButton.parentElement

  taskDelete.remove()

  return deleteButton
}

export default DeleteButton