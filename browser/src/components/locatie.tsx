import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {ILocatie} from "../misc/interfaces";
import DetailTable from "../misc/detailTable";
import LocationMap from "./locationMap"
import EntityRow from "../misc/entityRow";
import {goToGoetLocation} from "../misc/functions";
import {goToGeoNames} from "../misc/functions";

export default function Locatie() {
    const {id} = useParams();
    const data = useLoaderData() as ILocatie;
    const navigate = useNavigate();
    const isLink = data.links !== undefined;
    let hasMap = false;
    let lat = 0;
    let lon = 0;
    const isItem = data.id !== "0";
    if (data.geo_data !== undefined && data.geo_data.lat !== undefined && data.geo_data.lon !== undefined) {
        hasMap = true;
        lat = data.geo_data.lat;
        lon = data.geo_data.lon;
    }
    let list: string[] = [];
    if (data.labels !== undefined) {
        data.labels.map((item) => {list.push(item.label)});
    }

    // @ts-ignore
    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Locatie</h1>
                {isItem ? (<>
                <div className="entityTable">
                    <EntityRow label="ID" value={data.id}/>
                    <EntityRow label="Entiteit" value={data.name}/>
                    <EntityRow label="Regio" value={data.geo_data?.region}/>
                    <EntityRow label="Huidig land" value={data.geo_data?.modern_country}/>
                    <EntityRow label="Huidige provincie" value={data.geo_data?.modern_province}/>
                    <EntityRow label="Beginjaar" value={data.first_year}/>
                    <EntityRow label="Eindjaar" value={data.last_year}/>
                    <EntityRow label="Categorieën" value={list.join('; ')}/>
                    <EntityRow label="Coördinaten" value={data.geo_data?.coordinates}/>
                </div>
                {hasMap && <LocationMap lat={lat} lon={lon}/>}
                <div className="entityInstances">
                    <h2>Waar komt deze entiteit voor?</h2>
                    <ul>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                goToGoetLocation(data.name, data.id);
                            }}>Goetgevonden
                            </div>
                        </li>
                        {isLink && <li>
                            <div className="hcClickable" onClick={() => {
                                // @ts-ignore
                                goToGeoNames(data.links[0].target);
                            }}>Geonames
                            </div>
                        </li>}
                    </ul>
                </div></>) : (
                    <div>De entiteit die u zocht is (nog) niet in de entiteitenbrowser opgenomen.</div>
                )}
                <div className="goBack" onClick={() => navigate(-1)}>Terug naar vorige pagina</div>
            </div>
        </div>
    )
}