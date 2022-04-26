theMeesh = {}

theMeesh.copyEmail = () => {
  let myEmail = document.querySelector('#myEmail').innerText;
  document.addEventListener('click', function() {
    navigator.clipboard
    .writeText('mishos.steve@gmail.com')
  })
}

theMeesh.navTransition = () => {
const homeNav = document.querySelector('#homeNav')
const aboutNav = document.querySelector('#aboutNav')
const portfolioNav = document.querySelector('#portfolioNav')
const homePage = document.querySelector('#homePage')
const aboutPage = document.querySelector('#aboutPage')
const portfolioPage = document.querySelector('#portfolioPage')

homeNav.addEventListener('click', function() {
  homePage.classList.add('active');
  aboutPage.classList.remove('active');
  portfolioPage.classList.remove('active');
  homePage.classList.remove('inactive');
  aboutPage.classList.add('inactive');
  portfolioPage.classList.add('inactive');
})

aboutNav.addEventListener('click', function() {
  homePage.classList.remove('active');
  aboutPage.classList.add('active');
  portfolioPage.classList.remove('active');
  homePage.classList.add('inactive');
  aboutPage.classList.remove('inactive');
  portfolioPage.classList.add('inactive');
})

portfolioNav.addEventListener('click', function() {
  homePage.classList.remove('active');
  aboutPage.classList.remove('active');
  portfolioPage.classList.add('active');
  homePage.classList.add('inactive');
  aboutPage.classList.add('inactive');
  portfolioPage.classList.remove('inactive');
})
}

theMeesh.init = () => {
theMeesh.copyEmail()
theMeesh.navTransition()
}

theMeesh.init()