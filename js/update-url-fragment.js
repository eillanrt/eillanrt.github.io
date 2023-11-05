// Update URL hash on scroll
const sections = document.querySelectorAll('section')

const sectionIds = []

sections.forEach((section) => {
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

export default window.addEventListener('scroll', updateURLFragment)
