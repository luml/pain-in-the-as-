const counts = 10
const unitHeight = 60
const unitWidth = 100

let mat = document.querySelector(".mat")

for(let i = 0; i < counts; i ++){
  const left = 100 * (i + 1)
  // How doesn't delay work ?
  setInterval(appendMat(left), 500)
}

function appendMat(left) {
    for(let j = 0; j < counts; j ++){
        const bottom = 110 * (j + 1)
    
        let rightTie = document.createElement('div')
        rightTie.classList.add('right-tie')
        let leftTie = document.createElement('div')
        leftTie.classList.add('left-tie')
    
        rightTie.style.top = bottom + 'px'
        rightTie.style.left = left + 'px'
    
        leftTie.style.top = bottom + 'px'
        leftTie.style.left = left + 'px'
    
        mat.appendChild(leftTie)
        mat.appendChild(rightTie)
      }
}
