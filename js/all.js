
// menuToggleBtn
const menuToggleBtn = document.querySelector('#toggle-btn')
const body = document.querySelector('body')

menuToggleBtn.addEventListener('click',(e) => {
    e.preventDefault;
    body.classList.toggle('sidebar-toggled');
})