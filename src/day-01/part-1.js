import { readInput } from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 1.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 1.
 */
const solvePart1 = (data) => {
    const dataList = data.replaceAll("\r", "").split("\n");

    const list1 = [];
    const list2 = [];

    dataList.forEach((element) => {
        const [a, b] = element.split(/\s+/);
        list1.push(a);
        list2.push(b);
    });

    if (list1.length !== list2.length) {
        throw new Error("The lists have different lengths");
    }

    list1.sort();
    list2.sort();

    let sum = 0;

    list1.forEach((element, index) => {
        const num1 = Number(element);
        const num2 = Number(list2[index]);

        if (!isNaN(num1) && !isNaN(num2)) {
            const diff = Math.abs(num1 - num2);
            sum += diff;
        } else {
            console.warn(`Non numeric values found: ${num1}, ${num2}`);
        }

        sum += Math.abs(num1 - num2);
    });

    return sum;
};

const input = readInput("./src/day-01/input.txt");
console.log("Resultado Parte 1:", solvePart1(input));
