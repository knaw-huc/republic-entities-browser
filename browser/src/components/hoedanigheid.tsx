import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {IHoedanigheid} from "../misc/interfaces";
import EntityRow from "../misc/entityRow";
import {goToGoet} from "../misc/functions";

export default function Hoedanigheid() {
    const {id} = useParams();
    const data = useLoaderData() as IHoedanigheid;
    const navigate = useNavigate();
    const isItem = data.id !== "0";
    let list: string[] = [];
    if (isItem) {
        data.labels.map((item) => {
            list.push(item.label)
        });
    }
    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Hoedanigheid</h1>
                {isItem ? (<>
                <div className="entityTable>">
                    <EntityRow label="ID" value={data.id}/>
                    <EntityRow label="Entiteit" value={data.name}/>
                    <EntityRow label="Beginjaar" value={data.first_year}/>
                    <EntityRow label="Eindjaar" value={data.last_year}/>
                    <EntityRow label="Categorieën" value={list.join('; ')}/>
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
                </div></>) : (
                    <div>De entiteit die u zocht is (nog) niet in de entiteitenbrowser opgenomen.</div>
                    )}
                <div className="goBack" onClick={() => navigate(-1)}>Terug naar vorige pagina</div>
            </div>
        </div>
    )
}