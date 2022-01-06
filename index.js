function countMissingEnclosingBracket(inputString) {

  let count = 0;

  inputString.split('').map(bracket => {
    if (bracket === "(") {
      count++

      return
    }

    count--
  })

  return count
}

function replaceStr(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function countTransform(inputString) {
  // ())

  inputString.split('').map((bracket, index) => {

  })

}

function min_change(inputString) {

  // 1 check if inputString starts with ")" --> transform one by one (no need to count missing enclosing bracket)
  if (inputString[0] === ")") {
    let requiredTransformationCount = countTransform(inputString)

    return requiredTransformationCount
  }

  let missingEnclosingBracketCount = countMissingEnclosingBracket(inputString)

  // negative --> transform one by one
  if (missingEnclosingBracketCount < 0) {
    let requiredTransformationCount = countTransform(inputString)

    return requiredTransformationCount
  }

  // zero --> brackets are valid
  // positive --> brackets are valid (if added by T)
  return 0

}