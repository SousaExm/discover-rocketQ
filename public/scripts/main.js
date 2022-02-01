import Modal from './modal.js'

const modal = Modal()


const checkButtons = document.querySelectorAll(".actions a.check")
const cancelButton = document.querySelector(".button.cancel")
const deleteButtons = document.querySelectorAll(".actions a.delete")

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')



checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

deleteButtons.forEach(button => {
    button.addEventListener("click", event => {handleClick(event, false)})
})


cancelButton.addEventListener("click", handleClick)


function handleClick (event, check = true){
    
    event.preventDefault()
    const text = check? "Marcar como lida" : "Excluir"
    const youSure = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    const slug = check? "check" : "delete"

    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
    
    
    modalTitle.innerHTML = `${text} essa pergunta`
    modalDescription.innerHTML = youSure
    modalButton.innerHTML = `sim, ${text.toLowerCase()}`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.openOrClose()
}