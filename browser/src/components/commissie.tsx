import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {ICommissie} from "../misc/interfaces";
import DetailTable from "../misc/detailTable";
import EntityRow from "../misc/entityRow";
import {goToGoet} from "../misc/functions";

export default function Commissie() {
    const {id} = useParams();
    const data = useLoaderData() as ICommissie;
    const navigate = useNavigate();
    let list: string[] = [];
    if (data.labels !== undefined) {
        data.labels.map((item) => {list.push(item.label)});
    }

    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Commissie</h1>
                <div className="entityTable">
                    <EntityRow label="ID" value={data.id}/>
                    <EntityRow label="Entiteit" value={data.name}/>
                    <EntityRow label="Beginjaar" value={data.first_year}/>
                    <EntityRow label="Eindjaar" value={data.last_year}/>
                    <EntityRow label="Categorieën" value={list.join(', ')}/>
                </div>
                <div className="entityInstances">
                    <h2>Waar komt deze entiteit voor?</h2>
                    <ul>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                goToGoet(data.name, "commissionName");
                            }}>Goetgevonden
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="goBack" onClick={() => navigate(-1)}>Terug naar vorige pagina</div>
            </div>
        </div>
    )
}