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
    envoyes: IGezant[]
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
    labels: Ilabel[]
}

export interface ICommissie {
    id: string,
    name: string,
    labels: Ilabel[]
}

export interface IOrganisatie {
    id: string,
    name: string,
    labels: Ilabel[],
    links: IOrgLink[]
}

export interface IOrgLink {
    type: string,
    target: string,
    target_category: string,
    description: string
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
    links?: IGeoLink[]
}

export interface IGeoLink {
    type: string,
    target: string
}