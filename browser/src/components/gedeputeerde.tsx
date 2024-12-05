import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {IGedeputeerde} from "../misc/interfaces";
import DetailTable from "../misc/detailTable";
import EntityRow from "../misc/entityRow";
import {goToGoet} from "../misc/functions";
import {RAA} from "../misc/config";

export default function Gedeputeerde() {
    const {id} = useParams();
    const data = useLoaderData() as IGedeputeerde;
    const navigate = useNavigate();
    const hasRAA = data.RAA_nr !== 0;
    const isItem = data.id !== "0";


    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Gedeputeerde</h1>
                {isItem ? (<>
                <div className="entityTable">
                    <EntityRow label="ID" value={data.id}/>
                    <EntityRow label="Entiteit" value={data.name}/>
                    <EntityRow label="Leefjaren" value={data.leefjaren}/>
                    <EntityRow label="Provincie" value={data.provincie}/>
                </div>
                <div className="entityInstances">
                    <h2>Waar komt deze entiteit voor?</h2>
                    <ul>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                goToGoet(data.id, "delegateId");
                            }}>Goetgevonden
                            </div>
                        </li>
                        {hasRAA && <li>
                            <div className="hcClickable" onClick={() => {
                                window.open(RAA + data.RAA_nr);
                            }}>Repertorium van Ambtenaren en Ambtsdragers
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