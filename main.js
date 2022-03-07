const toggleButton = document.getElementsByClassName('toggle-bar')[0]
const navbarLinks = document.getElementsByClassName('ul-nav')[0]
const navbarContain = document.getElementsByClassName('nav-contain')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
  
})
