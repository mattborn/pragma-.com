document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('pointerenter', e => {
    document.body.classList.add('invert')
    document.body.style.backgroundColor = card.dataset.hex
  })
  card.parentNode.addEventListener('pointerleave', e => {
    document.body.classList.remove('invert')
    document.body.style.backgroundColor = 'white'
  })
})
