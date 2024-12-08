import { readInput } from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 1.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 1.
 */
const solvePart1 = (data) => {
    const dataList = data.replaceAll("\r", "").split("\n");
    const matrix = dataList.map(item => item.split(""));

    const rows = matrix.length;
    const cols = matrix[0].length;
    const word = "XMAS"
    const wordLength = word.length;

    const directions = [
        [0, 1],   // Horizontal direita
        [0, -1],  // Horizontal esquerda
        [1, 0],   // Vertical abaixo
        [-1, 0],  // Vertical acima
        [1, 1],   // Diagonal inferior direita
        [-1, -1], // Diagonal superior esquerda
        [1, -1],  // Diagonal inferior esquerda
        [-1, 1],  // Diagonal superior direita
    ];

    let sumXMAS = 0;

    function isValidDirection(x, y, dx, dy) {
        for (let i = 0; i < wordLength; i++) {
            const nx = x + i * dx;
            const ny = y + i * dy;

            if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || matrix[nx][ny] !== word[i]) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (const [dx, dy] of directions) {
                if (isValidDirection(i, j, dx, dy)) {
                    sumXMAS++;
                }
            }
        }
    }

    return sumXMAS;
};

const input = readInput("./src/day-04/input.txt");
console.log("Resultado Parte 1:", solvePart1(input));
