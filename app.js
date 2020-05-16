const widthCounts = window.innerHeight / 60
const heightCounts = window.innerWidth / 60
const unitHeight = 60
const unitWidth = innerWidth / 100



let mat = document.querySelector(".mat")

for(let i = 0; i < heightCounts; i ++){
  const left = 90 * (i + 1)
  //TODO How doesn't delay work ?
  setInterval(appendMat(left), 500)
}

function appendMat(left) {
    for(let j = 0; j <  widthCounts; j ++){
        const bottom = 100 * (j + 1)
    
        let rightTie = document.createElement('div')
        rightTie.classList.add('right-tie', 'skew')
        let leftTie = document.createElement('div')
        leftTie.classList.add('left-tie', 'shift')
    
        rightTie.style.top = bottom + 'px'
        rightTie.style.left = left + 'px'
    
        leftTie.style.top = bottom + 'px'
        leftTie.style.left = left + 'px'
    
        mat.appendChild(leftTie)
        mat.appendChild(rightTie)
      }
}
