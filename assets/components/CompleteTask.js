const ButtonCompleteTask = () => {
  const checkButton = document.createElement('button')
  checkButton.classList.add('check-button')
  checkButton.innerText = '✔'
  checkButton.addEventListener('click', completeTask)

  return checkButton
}

const completeTask = (event) => {
  const checkButton = event.target

  const taskComplete = checkButton.parentElement

  taskComplete.classList.toggle('done')
}

export default ButtonCompleteTask