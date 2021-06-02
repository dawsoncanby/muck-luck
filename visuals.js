const body = document.getElementsByTagName('body')[0]
const canvas = document.getElementsByTagName('canvas')[0]
const c = canvas.getContext('2d')

const fixSize = () => {
  canvas.width = body.clientWidth
  canvas.height = body.clientHeight
}

window.addEventListener('resize', fixSize)
fixSize()

const logo = new Image()
logo.src = 'img/muck-luck.png'
logo.onload = () => {
  let x = 0
  let y = 0
  let w = 220
  let h = 100
  let vx = 0.7
  let vy = 1.3


  const animate = () => {
    requestAnimationFrame(animate)

    c.fillStyle = '#222'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.drawImage(logo, x, y, w, h)

    x += vx
    y += vy

    if (x <= 0 || x + w >= canvas.width) vx *= -1
    if (y <= 0 || y + h >= canvas.height) vy *= -1
  }
  animate()
}


