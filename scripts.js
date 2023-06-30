let suppress = false
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', e => {
    suppress = true
    document.body.classList.add('invert')
    document.body.style.backgroundColor = card.dataset.hex
  })
  card.parentNode.addEventListener('mouseleave', e => {
    document.body.classList.remove('invert')
    document.body.style.backgroundColor = 'white'
  })
})
