const choices = document.querySelectorAll('.choice')
choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    choices.forEach((item) => {
      item.classList.remove('active')
    })
    e.target.classList.add('active')
  })
})
