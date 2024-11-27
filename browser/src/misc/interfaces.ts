export interface IResultItem {
    id: string,
    activity_hint_begin: string,
    activity_hint_end: string,
    provenance: string,
    name: string,
    category: string,
    labels: Ilabel[],
    person_data?: IPersonData

}

export interface IPersonData{
    life_begin: string,
    life_end: string,
    province: string
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