console.log("test")
function sendMail(){
// get the form element
const form = document.querySelector('.phpp-email-form');
// add a submit event listener to the form
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent the form from submitting normally

  // get the form data
  const formData = new FormData(form);
console.log(formData)

  // send the form data to the API endpoint
//   const response = await fetch('https://baa0-2405-201-d002-c-3c0d-5b23-afe-1c02.ngrok.io/send_email', {
  const response = await fetch('http://52.66.130.115:8000/send-email', {

    method: 'POST',
    body: formData
  });

  // check the response status
  if (response.ok) {
    // show success message
    const sentMessage = document.querySelector('.sent-message');
    sentMessage.style.display = 'block';
    form.reset();
  } else {
    // show error message
console.log("error")
    const errorMessage = document.querySelector('.error-message');
    errorMessage.style.display = 'block';
  }
});

}
