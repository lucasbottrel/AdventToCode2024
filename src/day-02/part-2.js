import { readInput } from "../../utils/fileReader.js";

function IsSafe(code) {
    const maxDiff = 3;
    const minDiff = 1;

    let order = code[0] < code[1] ? "asc" : "desc";

    for (let i = 0; i < code.length - 1; i++) {
        const num = code[i];
        const nextNum = code[i + 1];

        if (nextNum) {
            if (
                nextNum == num ||
                (order == "asc" && nextNum < num) ||
                (order == "desc" && nextNum > num) ||
                Math.abs(nextNum - num) < minDiff ||
                Math.abs(nextNum - num) > maxDiff
            ) {
                return { isSafe: false, errorIndex: i + 1 };
            }
        }
    }

    return { isSafe: true, errorIndex: -1 };
}

/**
 * Resolve o problema da Parte 2.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 2.
 */
const solvePart2 = (data) => {
    const dataList = data.replaceAll("\r", "").split("\n");

    let safeCodesCount = 0;

    dataList.forEach((code) => {
        let codeNumbers = code.split(/\s+/).map(Number);

        let result = IsSafe(codeNumbers);
        if (result.isSafe) {
            safeCodesCount++;
            return;
        }

        // Try to remove every level and revalidate
        for (let i = 0; i < codeNumbers.length; i++) {
            const filteredNumbers = [...codeNumbers];
            filteredNumbers.splice(i, 1);

            const testResult = IsSafe(filteredNumbers);
            if (testResult.isSafe) {
                safeCodesCount++;
                return;
            }
        }

        if (result.isSafe) safeCodesCount++;
    });

    return safeCodesCount;
};

const input = readInput("./src/day-02/input.txt");
console.log("Resultado Parte 2:", solvePart2(input));
