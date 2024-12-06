import { readInput } from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 2.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 2.
 */
const solvePart2 = (data) => {
    const dataList = data.replaceAll("\r", "").split("\n");

    const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

    let totalSum = 0;
    let keepMul = true;

    dataList.forEach((line) => {
        const instructions = line.match(regex);

        if (instructions) {
            instructions.forEach((instruction) => {
                if (instruction === "do()") {
                    keepMul = true;
                } else if (instruction === "don't()") {
                    keepMul = false;
                } else if (keepMul) {
                    const values = instruction.match(/\d{1,3}/g).map(Number);
                    totalSum += values[0] * values[1];
                }
            });
        }
    });

    return totalSum;
};

const input = readInput("./src/day-03/input.txt");
console.log("Resultado Parte 2:", solvePart2(input));
