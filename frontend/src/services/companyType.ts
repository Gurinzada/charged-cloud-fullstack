
export type CategoryType = "ME" | "LTDA" | "SS" | "SA" | "ASFL"

export type CompanyProps = {
    id:number,
    name: string,
    email: string,
    cnpj: string,
    address: string,
    category: CategoryType,
    description: string,
    website: string,
}

