export default async function handleSubmitForm() {
  const form = document.querySelector('.pageclip-form')
  Pageclip.form(form, {
    onSubmit: function (event) {
      console.log('Submitting form')
    },
    onResponse: function (error, response) {
      if (error) {
        console.error(error)
      }
      console.log(response)
    },
    successTemplate: `<h1>Message successfully sent!</h1>
<h2>I will be in touch shortly.</h2>
<br><br>
<p>Tap to close</p>`,
  })
}
