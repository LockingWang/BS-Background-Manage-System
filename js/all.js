
// menuToggleBtn
const menuToggleBtn = document.querySelector('#toggle-btn')
const body = document.querySelector('body')

menuToggleBtn.addEventListener('click',(e) => {
    e.preventDefault;
    body.classList.toggle('sidebar-toggled');
})

// modal
const deleteModal = document.getElementById('deleteModal')
deleteModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-order-id');
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalBodyInput = document.getElementById('deleteText');

  modalBodyInput.textContent = recipient;
})