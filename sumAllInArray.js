//SUM ALL IN ARRAY

const sumAllInArray = arr => {
  let total = 0
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
