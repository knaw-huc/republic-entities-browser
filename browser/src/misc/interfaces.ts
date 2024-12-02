export interface IResultItem {
    id: string,
    activity_hint_begin: string,
    activity_hint_end: string,
    provenance: string,
    name: string,
    category: string,
    labels: Ilabel[],

}

export interface IPersoon{
    id: string,
    name: string,
    labels: Ilabel[],
    raa: IPersoonLink[],
    delegates: IPersoonLink[],
    envoyes: IGezant[],
    first_year: string,
    last_year: string
}

export interface IGezant{
    name: string,
    link: string
}

export interface IPersoonLink{
    name: string,
    id: string
}

export interface Ilabel {
    label: string
}

export interface IHoedanigheid {
    id: string,
    name: string,
    labels: Ilabel[],
    first_year: string,
    last_year: string
}

export interface ICommissie {
    id: string,
    name: string,
    labels: Ilabel[],
    first_year: string,
    last_year: string
}

export interface IOrganisatie {
    id: string,
    name: string,
    labels: Ilabel[],
    links: IOrgLink[],
    first_year: string,
    last_year: string
}

export interface IOrgLink {
    type: string,
    target: string,
    target_category: string,
    description: string
}

export interface IGedeputeerde {
    id: string,
    name: string,
    provincie: string,
    RAA_nr: string,
    leefjaren: string,
    delegate_name: string
}

export interface ILocatie {
    id: string,
    name: string,
    labels?: Ilabel[],
    geo_data?: {
        region?: string,
        modern_country?: string,
        modern_province?: string,
        coordinates?: string,
        lat?: number,
        lon?: number
    }
    links?: IGeoLink[],
    first_year: string,
    last_year: string
}

export interface IGeoLink {
    type: string,
    target: string
}