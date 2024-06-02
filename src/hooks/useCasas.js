import { useEffect, useState } from "react";
import { listarCasas } from "../services/api";

export function useCasas() {
    const [casasApi, setCasasApi] = useState([]);

    useEffect(() => {
        listarCasas(setCasasApi);
    }, [])

    return casasApi;
}