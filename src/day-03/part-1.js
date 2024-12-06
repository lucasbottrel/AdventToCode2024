import { readInput } from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 1.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 1.
 */
const solvePart1 = (data) => {
    const dataList = data.replaceAll("\r", "").split("\n");

    const regex = /mul\(\d{1,3},\d{1,3}\)/g;

    let totalSum = 0;

    dataList.forEach((element) => {
        // Remove everything except "mul(123,456)"
        const filtered = element.match(regex)?.join(";") || "";

        const operations = filtered.split(";");

        let operationsSum = 0;

        operations.forEach((operation) => {
            let values = operation.match(/\d{1,3}/g).map(Number);
            operationsSum += values[0] * values[1];
        });

        totalSum += operationsSum;
    });

    return totalSum;
};

const input = readInput("./src/day-03/input.txt");
console.log("Resultado Parte 1:", solvePart1(input));
