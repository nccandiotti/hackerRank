// instructions : Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  const minArray = sortedArr.filter((el, index) => index < arr.length - 1)
  const maxArray = sortedArr.filter((el, index) => index !== 0)
  console.log(
    minArray.reduce((a, b) => a + b),
    maxArray.reduce((a, b) => a + b)
  )
}