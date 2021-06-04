const body = document.getElementsByTagName('body')[0]
const canvas = document.getElementsByTagName('canvas')[0]
const c = canvas.getContext('2d')

const fixSize = () => {
  canvas.width = body.clientWidth
  canvas.height = body.clientHeight
}

window.addEventListener('resize', fixSize)
fixSize()

const logos = [
  '01',
  '02',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '12',
  '13',
  '14',
  '15',
  '16',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '27',
]
  .map(e => {
    const logo = new Image()
    logo.src = `img/logotypes-${e}.png`
    return logo
  })

const pickLogo = () => {
  const idx = Math.floor(Math.random() * logos.length)
  return logos[idx]
}

let x = 10
let y = 10
let w = 360
let h = 270
let vx = 0.07
let vy = 0.13

let logo = pickLogo()

const animate = timestamp => {
  timestamp = timestamp || 0
  const progress = timestamp - lastRender
  requestAnimationFrame(animate)

  c.fillStyle = '#222'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.drawImage(logo, x, y, w, h)

  x += vx * progress
  y += vy * progress

  if (x <= 0 || x + w >= canvas.width) {
    logo = pickLogo()
    vx *= -1
  }
  if (y <= 0 || y + h >= canvas.height) {
    logo = pickLogo()
    vy *= -1
  }

  lastRender = timestamp
}

let lastRender = 0

animate()


