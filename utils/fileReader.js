const fs = require("fs");
const path = require("path");

/**
 * Lê o conteúdo de um arquivo de texto.
 * @param {string} filePath Caminho para o arquivo de input.
 * @returns {string} Conteúdo do arquivo como string.
 */
const readInput = (filePath) => {
    try {
        const absolutePath = path.resolve(filePath); // Resolve o caminho absoluto
        return fs.readFileSync(absolutePath, "utf8").trim(); // Lê e remove espaços extras
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${filePath}`);
        throw error;
    }
};

module.exports = { readInput };
