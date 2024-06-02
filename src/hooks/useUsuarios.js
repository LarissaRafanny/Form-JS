import { useEffect, useState } from "react";
import { listarUsuarios } from "../services/api";

export function useUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        listarUsuarios(setUsuarios)
    }, [])

    return usuarios;
}