const input = [
    1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,9,19,23,2,
    23,10,27,1,27,5,31,1,31,6,35,1,6,35,39,2,39,13,43,1,9,
    43,47,2,9,47,51,1,51,6,55,2,55,10,59,1,59,5,63,2,10,63,
    67,2,9,67,71,1,71,5,75,2,10,75,79,1,79,6,83,2,10,83,87,
    1,5,87,91,2,9,91,95,1,95,5,99,1,99,2,103,1,103,13,0,99,
    2,14,0,0
];

//Part One
// function restoreProgram(arr) {
//     let analizingArr = [...arr];
//     analizingArr[1] = 12;
//     analizingArr[2] = 2;
//     let idx = 0;
//     while (analizingArr[idx] !== 99) {
//         const firstPos = analizingArr[idx + 1];
//         const secondPos = analizingArr[idx + 2];
//         const thirdPos = analizingArr[idx + 3];
//         analizingArr[thirdPos] = analizingArr[idx] === 1
//             ? analizingArr[firstPos] + analizingArr[secondPos]
//             : analizingArr[firstPos] * analizingArr[secondPos];
//         idx += 4;
//     }
//     return intCodeInput[0];
//   };


//Modificated Part One

function restoreProgram(inputData, param1, param2) {
    let intCodeInput = [...inputData];
    intCodeInput[1] = param1;
    intCodeInput[2] = param2;
    let optCode = 0;

    while (intCodeInput[optCode] !== 99) {
        const firstInputPos = intCodeInput[optCode + 1];
        const secondInputPos = intCodeInput[optCode + 2];
        const outputPos = intCodeInput[optCode + 3];

        intCodeInput[outputPos] = intCodeInput[optCode] === 1
            ? intCodeInput[firstInputPos] + intCodeInput[secondInputPos]
            : intCodeInput[optCode] === 2
                ? intCodeInput[firstInputPos] * intCodeInput[secondInputPos]
                : intCodeInput[outputPos];
        optCode += 4;
    }
    return intCodeInput[0];
};

console.log(restoreProgram(input, 12, 2));

//Part Two

function findNounVerb(inputData, output) {
    let intCodeInput = [...inputData];
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++){
            if (output === restoreProgram(intCodeInput, noun, verb)) {
                return noun * 100 + verb;
            }
        }
    }
};

console.log(findNounVerb(input, 19690720));
