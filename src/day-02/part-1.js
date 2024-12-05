import { readInput } from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 1.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 1.
 */
const solvePart1 = (data) => {
    const dataList = data.replaceAll("\r", "").split("\n");

    let safeCodesCount = 0;

    dataList.forEach((element) => {
        const maxDiff = 3;
        const minDiff = 1;

        const nums = element.split(/\s+/).map(Number);

        let safe = true;
        let order = nums[0] < nums[1] ? "asc" : "desc";

        nums.forEach((num, index) => {
            const nextNum = nums[index + 1];

            if (nextNum) {
                if (nextNum == num) safe = false;
                if (order == "asc" && nextNum < num) safe = false;
                if (order == "desc" && nextNum > num) safe = false;

                const diff = Math.abs(nextNum - num);
                if (diff < minDiff || diff > maxDiff) {
                    safe = false;
                }
            }
        });

        if (safe) safeCodesCount++;
    });

    return safeCodesCount;
};

const input = readInput("./src/day-02/input.txt");
console.log("Resultado Parte 1:", solvePart1(input));
