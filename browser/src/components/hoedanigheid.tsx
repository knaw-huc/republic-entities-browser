import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {IResultItem} from "../misc/interfaces";
import DetailTable from "../misc/detailTable";

export default function Hoedanigheid() {
    const {id} = useParams();
    const data = useLoaderData() as IResultItem;
    const navigate = useNavigate();

    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Hoedanigheid</h1>
                <DetailTable data={data}/>
                <div className="entityInstances">
                    <h2>Instances</h2>
                    <ul>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                alert("Actief zodra id's en URL's bekend zijn")
                            }}>AnnoViz
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="goBack" onClick={() => navigate(-1)}>Terug naar vorige pagina</div>
            </div>
        </div>
    )
}