import {BASE_URL} from "./config";
import {IResultItem} from "./interfaces";

export default async function EntityLoader(entity: string, id: string) {
    const result = await fetch(BASE_URL + entity + '/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await result.json() as IResultItem;
}