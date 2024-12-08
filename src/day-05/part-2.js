import {readInput} from "../../utils/fileReader.js";

/**
 * Resolve o problema da Parte 2.
 * @param {string} data Dados do input.
 * @returns {number|string} Solução para a Parte 2.
 */
const solvePart2 = (data) => {
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

        function fixUpdate(update) {
            const pages = update.split(",");

            const dependencyGraph = new Map();

            orderRules.forEach((rule) => {
                const [left, right] = rule.split("|");
                if (!pages.includes(left) || !pages.includes(right)) return;

                if (!dependencyGraph.has(left)) dependencyGraph.set(left, []);
                dependencyGraph.get(left).push(right);
            });

            const visited = new Set();
            const stack = [];
            const tempMark = new Set();

            function visit(node) {
                if (tempMark.has(node)) {
                    throw new Error("Ciclo detectado nas regras");
                }
                if (!visited.has(node)) {
                    tempMark.add(node);
                    const neighbors = dependencyGraph.get(node) || [];
                    neighbors.forEach(visit);
                    tempMark.delete(node);
                    visited.add(node);
                    stack.push(node);
                }
            }

            pages.forEach((page) => {
                if (!visited.has(page)) visit(page);
            });

            return stack.reverse();
        }

        if (!updateIsValid) {
            const fixedUpdate = fixUpdate(update);
            const middleElement =
                fixedUpdate[Math.floor(fixedUpdate.length / 2)];

            sum += Number(middleElement);
        }
    });

    return sum;
};

const input = readInput("./src/day-05/input.txt");
console.log("Resultado Parte 2:", solvePart2(input));
