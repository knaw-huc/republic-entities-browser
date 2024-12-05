import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {IOrganisatie} from "../misc/interfaces";
import EntityRow from "../misc/entityRow";
import {goToGoet} from "../misc/functions";

export default function Organisatie() {
    const {id} = useParams();
    const data = useLoaderData() as IOrganisatie;
    const navigate = useNavigate();
    const isItem = data.id !== "0";
    let list: string[] = [];
    if (data.labels !== undefined) {
        data.labels.map((item) => {list.push(item.label)});
    }


    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Organisatie</h1>
                {isItem ? (<>
                <div className="entityTable">
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
                                goToGoet(data.name, "organisationName");
                            }}>Goetgevonden
                            </div>
                        </li>
                        {data.links.map((item, index) => {
                            return (<li key={index}>
                                <div className="hcClickable" onClick={() => {
                                    navigate("/locatie/" + item.target);
                                }}>Entiteitenbrowser: {item.description}
                                </div>
                            </li>)
                        })}
                    </ul>
                </div></>) : (
                    <div>De entiteit die u zocht is (nog) niet in de entiteitenbrowser opgenomen.</div>
                )}
                <div className="goBack" onClick={() => navigate(-1)}>Terug naar vorige pagina</div>
            </div>
        </div>
    )
}