export default function Modal (){
    

    function openOrClose(){
        document.querySelector('.modal-wrapper').classList.toggle('active')
    }

    return {openOrClose}
}
