import { readFileSync } from "fs";
import { resolve } from "path";

/**
 * Lê o conteúdo de um arquivo de texto.
 * @param {string} filePath Caminho para o arquivo de input.
 * @returns {string} Conteúdo do arquivo como string.
 */
export const readInput = (filePath) => {
    try {
        const absolutePath = resolve(filePath); // Resolve o caminho absoluto
        return readFileSync(absolutePath, "utf8").trim(); // Lê e remove espaços extras
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${filePath}`);
        throw error;
    }
};
