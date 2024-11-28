import {decode as base64_decode, encode as base64_encode} from 'base-64';
import {GOETGEVONDEN} from "./config";
import {GEONAMES} from "./config";

export function goToGoet( name: string, cat: string) {
    const query = {"terms": {[cat]: [name]}};
    window.open(GOETGEVONDEN + base64_encode(JSON.stringify(query)));
}

export function goToGeoNames( id: string) {
    window.open(GEONAMES + id);
}

export function goToGoetLocation( name: string, id: string) {
    const query = {"terms": {"locationName": [name], "locationId": [id]}};
    window.open(GOETGEVONDEN + base64_encode(JSON.stringify(query)));
}