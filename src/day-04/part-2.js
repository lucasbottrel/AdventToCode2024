import {readInput} from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 2.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 2.
 */
const solvePart1 = (data) => {
    const dataList = data.replaceAll("\r", "").split("\n");
    const matrix = dataList.map((item) => item.split(""));

    const rows = matrix.length;
    const cols = matrix[0].length;

    let sumXMAS = 0;

    function findX_MAS(i, j) {
        if (i < 0 || j < 0 || i >= rows || j >= cols || matrix[i][j] !== "A") {
            return false;
        }

        if (i - 1 < 0 || j - 1 < 0 || i + 1 >= rows || j + 1 >= cols) {
            return false;
        }

        const topLeft = matrix[i - 1][j - 1];
        const topRight = matrix[i - 1][j + 1];
        const bottomLeft = matrix[i + 1][j - 1];
        const bottomRight = matrix[i + 1][j + 1];

        if (
            (topLeft == "M" || topLeft == "S") &&
            (bottomRight == "M" || bottomRight == "S") &&
            topLeft !== bottomRight &&
            (topRight == "M" || topRight == "S") &&
            (bottomLeft == "M" || bottomLeft == "S") &&
            topRight !== bottomLeft
        )
            return true;

        return false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (findX_MAS(i, j)) {
                sumXMAS++;
            }
        }
    }

    return sumXMAS;
};

const input = readInput("./src/day-04/input.txt");
console.log("Resultado Parte 1:", solvePart1(input));
