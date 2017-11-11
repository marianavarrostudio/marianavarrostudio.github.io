(function () {
  var cv = document.querySelector('a.link.cv')
  var mail = document.querySelector('a.link.mail')
  var portfolio = document.querySelector('a.link.portfolio')
  var dribble = document.querySelector('a.link.dribble')
  var other = document.querySelector('a.link.other')
  var box = document.querySelector('div.deco-box')

  cv.addEventListener('mouseover', changeColor)
  portfolio.addEventListener('mouseover', changeColor)
  mail.addEventListener('mouseover', changeColor)
  dribble.addEventListener('mouseover', changeColor)
  other.addEventListener('mouseover', changeColor)

  function removeOther () {
    box.className = 'deco-box'
  }

  function changeColor (evt) {
    var elem = evt.target
    removeOther()

    switch (elem) {
      case cv:
        box.className += ' cv'
        break
      case portfolio:
        box.className += ' portfolio'
        break
      case mail:
        box.className += ' mail'
        break
      case dribble:
        box.className += ' dribble'
        break
      case other:
        box.className += ' other'
        break
    }
  }
})()
