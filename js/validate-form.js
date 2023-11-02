window.addEventListener('load', () => {
  function validateContactForm() {
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const body = document.getElementById('body').value

    if (email === '') {
      alert('Please enter your email address.')
      return false
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return false
    }

    if (subject === '') {
      alert('Please enter a subject.')
      return false
    }

    if (body === '') {
      alert('Please enter a message.')
      return false
    }

    return true
  }

  const submitButton = document.querySelector('button[type="submit"]')

  submitButton.addEventListener('click', (event) => {
    if (!validateContactForm()) {
      event.preventDefault()
    }
  })
})
