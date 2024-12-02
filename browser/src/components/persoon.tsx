import React from "react";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {IPersoon} from "../misc/interfaces";
import EntityRow from "../misc/entityRow";
import {goToGoet} from "../misc/functions";
import {RAA} from "../misc/config";


export default function Persoon() {
    const {id} = useParams();
    const data = useLoaderData() as IPersoon;
    const navigate = useNavigate();
    const hasRAA = data.raa !== undefined && data.raa.length > 0;
    const hasDelegates = data.delegates !== undefined && data.delegates.length > 0;
    const hasEnvoys = data.envoyes !== undefined && data.envoyes.length > 0;
    let list: string[] = [];
    if (data.labels !== undefined) {
        data.labels.map((item) => {list.push(item.label)});
    }
    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <h1>Persoonsnaam</h1>
                <EntityRow label="ID" value={data.id}/>
                <EntityRow label="Entiteit" value={data.name}/>
                <EntityRow label="Beginjaar" value={data.first_year}/>
                <EntityRow label="Eindjaar" value={data.last_year}/>
                <EntityRow label="Categorieën" value={list.join(', ')}/>
                <div className="entityInstances">
                    <h2>Waar komt deze entiteit voor?</h2>
                    <ul>
                        <li>
                            <div className="hcClickable" onClick={() => {
                                goToGoet(data.name, 'personName');
                            }}>Goetgevonden
                            </div>
                        </li>
                        {hasDelegates && <li>
                            <>Gedeputeerden
                                <ul>
                            {data.delegates.map((item, index) => {
                                return (
                                    <li>{item.name}
                                        <div className="listLink" onClick={() => {
                                            goToGoet(item.id,  'delegateId');
                                        }}>Goetgevonden</div>
                                        <div className="listLink" onClick={() => {
                                            navigate("/gedeputeerde/" + item.id);
                                        }}>Entiteitenbrowser</div></li>
                                )
                            })}</ul></>
                        </li>}
                        {hasRAA && <li>
                            <li>
                                <>Repertorium van Ambtenaren en Ambtsdragers
                                    <ul>
                                        {data.raa.map((item, index) => {
                                            return (
                                                <li className="listLink" key={index} onClick={() => {
                                                    window.open(RAA + item.id)
                                                }}>{item.name}</li>
                                            )
                                        })}</ul></>
                            </li>
                        </li>}
                        {hasEnvoys && <li>
                            Repertoria van diplomatieke vertegenwoordigers
                            <>
                                <ul>
                                    {data.envoyes.map((item, index) => {
                                        return (
                                            <li className="listLink" key={index} onClick={() => {
                                                window.open(item.link)
                                            }}>{item.name}</li>
                                        )
                                    })}</ul>
                            </>
                        </li>}
                    </ul>
                </div>
                <div className="goBack" onClick={() => navigate(-1)}>Terug naar vorige pagina</div>
            </div>
        </div>
    )
}