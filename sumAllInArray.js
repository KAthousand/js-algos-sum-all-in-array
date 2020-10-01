//SUM ALL IN ARRAY

let total = 0
const sumAllInArray = arr => {

  arr.forEach((num) => {
    if (isNaN(num) === false) {
      total += Number(num)
    }
  })
  return total
}
//parseInt
console.log(sumAllInArray(["-1", "a", 4, "-32", 8, "94"]))

module.exports = {
  sumAllInArray
}
