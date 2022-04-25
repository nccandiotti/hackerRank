function reverseString(str) {
  // type your code here
  const arr = str.split("")
  for (i = arr.length - 1; i >= 0 - 1; i--) {
    console.log(arr[i])
  }
  return arr.join("")
}
