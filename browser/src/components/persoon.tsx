import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {IResultItem} from "../misc/interfaces";
import DetailTable from "../misc/detailTable";

export default function Persoon() {
    const {id} = useParams();
    const persData = useLoaderData() as IResultItem;
    const navigate = useNavigate();

    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Persoon</h1>
                <DetailTable data={persData}/>
                <div className="entityInstances">
                    <h2>Instances</h2>
                    <ul>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                alert("Actief zodra id's en URL's bekend zijn")
                            }}>AnnoViz
                            </div>
                        </li>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                alert("Actief zodra id's en URL's bekend zijn")
                            }}>Schutte
                            </div>
                        </li>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                alert("Actief zodra id's en URL's bekend zijn")
                            }}>RAA
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="goBack" onClick={() => navigate(-1)}>Terug naar vorige pagina</div>
            </div>
        </div>
    )
}