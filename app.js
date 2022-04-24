const choices = document.querySelectorAll('.choice')
const submitBtn = document.querySelector('.submit')
const card = document.querySelector('.card')
let rate
choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    choices.forEach((item) => {
      item.classList.remove('active')
    })
    e.target.classList.add('active')
    rate = e.target.getAttribute('data-value')
  })
})
submitBtn.addEventListener('click', () => {
  if (!rate) return
  card.innerHTML = `<div class="final">
    <img src="/images/illustration-thank-you.svg" alt="thank you illustration" class="thanks">
      <small class="rate">You selected ${rate} out of 5</small>
      <h2>Thank you!</h2>
      <p>we appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  </div>`
})
