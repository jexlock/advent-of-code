const filePath = "./input.txt";
const file = Bun.file(filePath);

// const stream = await file.stream();
// const decoder = new TextDecoder();
//
// let totalSum = 0;
//
// for await (const chunk of stream) {
//   let line = decoder.decode(chunk);
//   const regexPattern = /[0-9]/;
//   let lineSum = 0;
//   console.log(line)
//   console.log(line.match(regexPattern))
//   console.log("afterlin")
//   // const arrayOfNumbersInLine = [...line.matchAll(regexPattern)];
//   // arrayOfNumbersInLine.array.forEach(element => {
//   //   lineSum += element;
//   // });
//   // totalSum += lineSum;

const text = await file.text() as String;
const regexPattern = /[0-9]/g;
const intPattern = /[0-9]/g;
const stringPattern = /one|two|three|four|five|six|seven|eight|nine|ten|/g;


const lines = text.split("\n");
let totalSum = 0;

function findAllNumbersInLine(line: string) {
  const lineLower = line.toLowerCase();

  lineLower.search(intPattern)
  lineLower.search(stringPattern)

  return 0;
}

lines.forEach((line) => {
  if (!line) {
    return
  }
  let lineCalibrationValue = "";
  let numbersInLineArray = [...line.matchAll(regexPattern)]
  const foundCount = numbersInLineArray.length
  lineCalibrationValue += String(numbersInLineArray[0]);
  if (foundCount > 1) {
    lineCalibrationValue += String(numbersInLineArray[foundCount - 1]);
  }
  else {
    lineCalibrationValue += lineCalibrationValue;
  }
  console.log(`Line: ${line}`)
  console.log(`Value:  ${lineCalibrationValue}`)
  totalSum += Number(lineCalibrationValue)
})

console.log(totalSum)
