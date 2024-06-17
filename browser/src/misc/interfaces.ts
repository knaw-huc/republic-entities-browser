export interface IResultItem {
    id: string,
    activity_hint_begin: string,
    activity_hint_end: string,
    provenance: string,
    name: string,
    cat: string,
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