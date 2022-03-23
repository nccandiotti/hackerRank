// SOLVED - ALL TEST CASES PASS

"use strict"

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on("end", function () {
  inputString = inputString.split("\n")

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  const minArray = sortedArr.filter((el, index) => index < arr.length - 1)
  const maxArray = sortedArr.filter((el, index) => index !== 0)
  console.log(
    minArray.reduce((a, b) => a + b),
    maxArray.reduce((a, b) => a + b)
  )
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10))

  miniMaxSum(arr)
}
