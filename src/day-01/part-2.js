import { readInput } from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 2.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 2.
 */
const solvePart2 = (data) => {
    const dataList = data.replaceAll("\r", "").split("\n");

    let list1 = [];
    const list2 = [];

    dataList.forEach((element) => {
        const [a, b] = element.split(/\s+/);
        list1.push(a);
        list2.push(b);
    });

    list1 = [...new Set(list1)];

    let sum = 0;

    list1.forEach((e1) => {
        const repetitions = list2.filter((e2) => e2 === e1).length;
        sum += repetitions * Number(e1);
    });

    return sum;
};

const input = readInput("./src/day-01/input.txt");
console.log("Resultado Parte 2:", solvePart2(input));
