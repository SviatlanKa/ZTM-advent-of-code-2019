const startNum = 272091;
const endNum = 815432;

//Part 1 for checkDouble
// const checkDouble = (charArr) => {
//     let isDouble = false;
//     for (let i = 1; i < charArr.length; i++) {
//         if (Number(charArr[i - 1]) === Number(charArr[i])) {
//             isDouble = true;
//             break;
//         }
//     }
//     return isDouble;
// };

//Part 2 for check double numbers
const checkOnlyDouble = (charArr) => {
    let isDouble = false;
    let repeatCharArr = [charArr[0]];
    for (let i = 1; i < charArr.length; i++) {
        if (Number(charArr[i - 1]) === Number(charArr[i])) {
            repeatCharArr.push(charArr[i]);
        } else if (repeatCharArr.length !== 2) {
            repeatCharArr = [charArr[i]];
        } else return !isDouble;
    }
    return repeatCharArr.length === 2 ? !isDouble : isDouble;
};

const checkDecrease = (charArr) => {
    let isNotDecrease = true;
    for (let i = 1; i < charArr.length; i++) {
        if (Number(charArr[i - 1]) > Number(charArr[i])) {
            return !isNotDecrease;
        }
    }
    return isNotDecrease;
};

function countMatchPassword() {
    let numForCheck;
    let counter = 0;
    for (let i = 0; i <= endNum - startNum; i++) {
        numForCheck = (startNum + i).toString().split('');
        if (checkOnlyDouble(numForCheck) && (checkDecrease(numForCheck))) {
            counter++;
        }
    }
    return counter;
}

console.log(countMatchPassword());