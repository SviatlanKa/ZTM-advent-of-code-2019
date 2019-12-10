const input_data = [
    3,225,1,225,6,6,1100,1,238,225,104,0,1102,59,58,
    224,1001,224,-3422,224,4,224,102,8,223,223,101,3,224,224,1,
    224,223,223,1101,59,30,225,1101,53,84,224,101,-137,224,224,
    4,224,1002,223,8,223,101,3,224,224,1,223,224,223,1102,42,83,
    225,2,140,88,224,1001,224,-4891,224,4,224,1002,223,8,223,1001,
    224,5,224,1,223,224,223,1101,61,67,225,101,46,62,224,1001,224,
    -129,224,4,224,1002,223,8,223,101,5,224,224,1,223,224,223,1102,
    53,40,225,1001,35,35,224,1001,224,-94,224,4,224,102,8,223,223,
    101,6,224,224,1,223,224,223,1101,5,73,225,1002,191,52,224,1001,
    224,-1872,224,4,224,1002,223,8,223,1001,224,5,224,1,223,224,223,
    102,82,195,224,101,-738,224,224,4,224,1002,223,8,223,1001,224,2,
    224,1,224,223,223,1101,83,52,225,1101,36,77,225,1101,9,10,225,1,
    113,187,224,1001,224,-136,224,4,224,1002,223,8,223,101,2,224,224,
    1,224,223,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,
    99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,
    1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,
    227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,
    294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,
    225,1101,314,0,0,106,0,0,1105,1,99999,1007,226,226,224,1002,223,
    2,223,1006,224,329,1001,223,1,223,1108,226,226,224,102,2,223,223,
    1006,224,344,101,1,223,223,1007,677,677,224,102,2,223,223,1006,
    224,359,101,1,223,223,1108,677,226,224,1002,223,2,223,1005,224,
    374,1001,223,1,223,7,677,226,224,102,2,223,223,1005,224,389,1001,
    223,1,223,1008,677,677,224,1002,223,2,223,1005,224,404,101,1,
    223,223,108,226,226,224,1002,223,2,223,1006,224,419,101,1,223,
    223,1008,226,677,224,1002,223,2,223,1006,224,434,1001,223,1,223,
    1107,677,226,224,1002,223,2,223,1005,224,449,101,1,223,223,1008,
    226,226,224,102,2,223,223,1005,224,464,1001,223,1,223,8,226,226,
    224,1002,223,2,223,1006,224,479,1001,223,1,223,107,226,677,224,
    102,2,223,223,1005,224,494,1001,223,1,223,7,226,226,224,102,2,
    223,223,1005,224,509,1001,223,1,223,107,226,226,224,102,2,223,
    223,1005,224,524,101,1,223,223,107,677,677,224,1002,223,2,223,
    1006,224,539,101,1,223,223,8,677,226,224,1002,223,2,223,1006,
    224,554,101,1,223,223,1107,677,677,224,1002,223,2,223,1005,224,
    569,101,1,223,223,108,226,677,224,1002,223,2,223,1006,224,584,
    101,1,223,223,7,226,677,224,1002,223,2,223,1005,224,599,1001,
    223,1,223,8,226,677,224,102,2,223,223,1006,224,614,1001,223,1,
    223,108,677,677,224,1002,223,2,223,1006,224,629,1001,223,1,223,
    1007,226,677,224,1002,223,2,223,1006,224,644,101,1,223,223,1108,
    226,677,224,102,2,223,223,1005,224,659,1001,223,1,223,1107,226,677,
    224,102,2,223,223,1006,224,674,1001,223,1,223,4,223,99,226
];

const getInstruction = (optCode) => {
    const optCodeArr = [0, 0, 0, 0];
    if (optCode < 100) {
        optCodeArr[0] = optCode;
        return optCodeArr;
    };
    if (optCode > 100) {
        const optCodeAsDigits = optCode.toString().split('').reverse();
        optCodeArr[0] = Number(optCodeAsDigits[0])
        for (let i = 2; i < optCodeAsDigits.length; i++) {
            optCodeArr[i - 1] = Number(optCodeAsDigits[i]);
        }
        return optCodeArr;
    }
};

function diagnoseProgram(diagnosticProgram, id) {
    const inputData = [...diagnosticProgram];
    const input = id;
    let output = '';
    let optCodePos = 0;
    let optCode = [];
    let param1, param2;

    while (inputData[optCodePos] !== 99) {
        optCode = getInstruction(inputData[optCodePos]);
        param1 = optCode[1] === 0 ? inputData[inputData[optCodePos + 1]] : inputData[optCodePos + 1];
        param2 = optCode[2] === 0 ? inputData[inputData[optCodePos + 2]] : inputData[optCodePos + 2];

        switch (optCode[0]) {
            case 1:
                optCode[3] === 0 ? inputData[inputData[optCodePos + 3]] = param1 + param2
                    : inputData[optCodePos + 3] = param1 + param2;
                optCodePos += 4;
                break;
            case 2:
                optCode[3] === 0 ? inputData[inputData[optCodePos + 3]] = param1 * param2
                    : inputData[optCodePos + 3] = param1 * param2;
                optCodePos += 4;
                break;
            case 3:
                optCode[1] === 0 ? inputData[inputData[optCodePos + 1]] = input
                    : inputData[optCodePos + 1] = input;
                optCodePos += 2;
                break;
            case 4:
                if (param1 > 0) {
                    output = new String(output + param1);
                }
                optCodePos += 2;
                break;
            case 5:
                optCodePos = param1 !== 0 ? optCodePos = param2 : optCodePos + 3;
                break;
            case 6:
                optCodePos = param1 === 0 ? optCodePos = param2 : optCodePos + 3;
                break;
            case 7:
                if (optCode[3] === 0) {
                    param1 < param2 ? inputData[inputData[optCodePos + 3]] = 1
                        : inputData[inputData[optCodePos + 3]] = 0;
                } else {
                    param1 < param2 ? inputData[optCodePos + 3] = 1
                        : inputData[optCodePos + 3] = 0;
                }
                optCodePos += 4;
                break;
            case 8:
                if (optCode[3] === 0) {
                    param1 === param2 ? inputData[inputData[optCodePos + 3]] = 1
                        : inputData[inputData[optCodePos + 3]] = 0;
                } else {
                    param1 === param2 ? inputData[optCodePos + 3] = 1
                        : inputData[optCodePos + 3] = 0;
                }
                optCodePos += 4;
                break;
            case 9:
            default:
                console.log('Wrong OptCode!', optCodePos);
                break;
        }
    }
    return output;
}

console.log('Output', diagnoseProgram(input_data, 5));


