const hamburger = document.getElementById('hamburger');
const headerNav = document.getElementById('header-nav')

hamburger.addEventListener('click', (event) => {
  const expanded = hamburger.getAttribute('aria-expanded')
  hamburger.setAttribute('aria-expanded', expanded === "true" ? "false" : "true")

  const className = expanded === "false" ? "header__nav header__nav--show" : "header__nav"
  headerNav.setAttribute('class', className)
})