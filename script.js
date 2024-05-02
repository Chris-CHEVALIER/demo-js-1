console.log('Coucou :) :) :)')

let firstName = 'Chris'
const lastName = 'Chevalier'

let fruits = ['banane', 'pomme', 'abricot']
//console.log(4 === "4")

fruits.unshift('fruit du dragon')
fruits.push('durian')
/* fruits.shift() */
fruits.forEach(fruit => {
  if (fruit !== 'fruit du dragon') {
    console.log(fruit)
  }
})

fruits.sort()
fruits.reverse()
console.table(fruits)

let cosmo = {
  name: 'Cosmo',
  age: 1,
  breed: 'Golden Retriever',
  weigth: 31,
  size: 120
}

document.write(
  cosmo.name + ' a ' + cosmo.age + ' ans et il pèse ' + cosmo.weigth + 'kg.'
)
document.write(
  `<p>${cosmo.name} a ${cosmo.age} ans et il pèse ${cosmo.weigth} kg.</p>`
)

for (const key in cosmo) {
  if (Object.hasOwnProperty.call(cosmo, key)) {
    const element = cosmo[key]
    console.log(key + ':' + element)
  }
}
