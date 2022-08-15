
function max(number) {
  let numArr = [-22, 44, 14, 67, -333, 650, 340, 54, 222, 99];

  let longNumArr = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > longNumArr) {
      longNumArr = numArr[i];
    }
  }

  return longNumArr;
}

let resultMaxNum = max();

console.log(resultMaxNum);

