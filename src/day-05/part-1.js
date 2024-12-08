import {readInput} from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 1.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 1.
 */
const solvePart1 = (data) => {
    let [orderRules, updates] = data.replaceAll("\r", "").split("\n\n");

    orderRules = orderRules.split("\n");
    updates = updates.split("\n");

    let sum = 0;

    updates.forEach((update) => {
        const pages = update.split(",");

        let updateIsValid = true;

        pages.forEach((page, index) => {
            orderRules.forEach((rule) => {
                const [left, right] = rule.split("|");

                if (left != page) return;

                let ruleIndex = pages.indexOf(right);
                if (ruleIndex <= index && ruleIndex != -1)
                    updateIsValid = false;
            });
        });

        if (updateIsValid) {
            let updateList = update.split(",");
            const middleElement = updateList[Math.floor(updateList.length / 2)];

            sum += Number(middleElement);
        }
    });

    return sum;
};

const input = readInput("./src/day-05/input.txt");
console.log("Resultado Parte 1:", solvePart1(input));
