// Get Element Value By ID Function 
function getValueByIdName (id) {
    return document.getElementById (id).value;
}
// Get Element InnerText By ID Function
function getInnerTextByIdName (id) {
  return document.getElementById (id).innerText
}
// Show modal function
function showConfirmation() {
    document.getElementById('successModal').classList.add('modal-open');
  }

  // Close modal function
  function closeModal() {
    document.getElementById('successModal').classList.remove('modal-open');
  }
