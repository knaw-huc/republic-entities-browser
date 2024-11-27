import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {IHoedanigheid} from "../misc/interfaces";
import EntityRow from "../misc/entityRow";
import {goToGoet} from "../misc/functions";

export default function Hoedanigheid() {
    const {id} = useParams();
    const data = useLoaderData() as IHoedanigheid;
    const navigate = useNavigate();

    let list: string[] = [];
    data.labels.map((item) => {list.push(item.label)});

    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Hoedanigheid</h1>
                <div className="entityTable>">
                    <EntityRow label="ID" value={data.id}/>
                    <EntityRow label="Entiteit" value={data.name}/>
                    <EntityRow label="Categorieën" value={list.join(', ')}/>
                </div>
                <div className="entityInstances">
                    <h2>Waar komt deze entiteit voor?</h2>
                    <ul>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                goToGoet(data.name, 'roleName');
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