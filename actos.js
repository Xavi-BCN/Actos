const scriptURL = 'https://script.google.com/macros/s/AKfycbwxPk8hGNGGTTmH2uNI_ck6ZlHMK74MMdKKivrP34jH0YRRrYfpzj51B-40Qsxu80br/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})