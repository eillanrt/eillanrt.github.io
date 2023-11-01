document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section')

  const sectionIds = []

  sections.forEach(function (section) {
    sectionIds.push(section.id)
  })

  function updateURLFragment() {
    const scrollPosition = window.scrollY

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]
      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.clientHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Set the URL fragment to the ID of the current section
        history.replaceState(null, null, `#${sectionIds[i]}`)
        break
      }
    }
  }

  window.addEventListener('scroll', updateURLFragment)

  updateURLFragment()
})
