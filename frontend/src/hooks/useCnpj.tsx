import { useState } from "react";

export default function useCnpj(){

    const [cnpj, setCnpj] = useState<string>("")
    const [cnpjError, setCnpjError] = useState<string>("")

    const validateCnpj = (value: string) => {
        const regex = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/
        return regex.test(value)
    }

    const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCnpj(value);

        // Validação do CNPJ
        if (value.length >= 14 && !validateCnpj(value)) {
            setCnpjError("CNPJ inválido! Use o formato: 00.000.000/0000-00 ou apenas dígitos.");
        } else {
            setCnpjError("");
        }
    };

    return{handleCnpjChange, cnpj, cnpjError, setCnpj}
}