window.addEventListener('load', () => {
  // document.getElementById('loader')
  const loader = document.querySelector('.loader') 
  loader.classList.add('loader__hidden') 
  loader.addEventListener('transitionend', () => { 
    document.body.removeChild(loader)
  })
})