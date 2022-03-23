// 6/10 sample cases passed
"use strict"

const fs = require("fs")

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  let hhInt = parseInt(s.charAt(0) + s.charAt(1))
  const mmss = s.slice(3, 8)
  const amPm = s.slice(8, 10)
  if (amPm === "am") {
    return s.slice(0, 8)
  } else {
    hhInt += 12
    hhInt.toString
    return hhInt + ":" + mmss
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const s = readLine()

  const result = timeConversion(s)

  ws.write(result + "\n")

  ws.end()
}
