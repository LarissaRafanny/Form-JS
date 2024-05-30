import { PRECO_BASE, 
    VALOR_ADICIONAL_POR_BANHEIRO,
    VALOR_ADICIONAL_POR_M2_CONSTRUIDO, 
    VALOR_ADICIONAL_POR_QUARTO, 
    VALOR_ADICIONAL_POR_VAGA,
    VALOR_ADICIONAL_POR_M2_TERRENO } from "../constants/preco";

export function calcularPrecoImovel(
    nquartos,
    nbanheiros,
    nvagas,
    areaConstuida,
    areaTerreno
) {
    return PRECO_BASE +
        VALOR_ADICIONAL_POR_QUARTO * nquartos +
        VALOR_ADICIONAL_POR_BANHEIRO * nbanheiros +
        VALOR_ADICIONAL_POR_VAGA * nvagas +
        VALOR_ADICIONAL_POR_M2_CONSTRUIDO * areaConstuida +
        VALOR_ADICIONAL_POR_M2_TERRENO * areaTerreno;
}

