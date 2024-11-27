import React from "react";
import {IResultItem} from "./interfaces";

export default function DetailTable({data}: {data:IResultItem}) {
    let list: string[] = [];
    data.labels.map((item) => {list.push(item.label)});

    return (
        <div className="entityTable">
            <div className="entityRow">
                <div className="entityLabel">Naam:</div>
                <div className="entityValue">{data.name}</div>
            </div>
            {data.category === 'Persoon' && <div className="entityRow">
                <div className="entityLabel">Geboortejaar:</div>
                <div className="entityValue">{data.person_data?.life_begin}</div>
            </div>}
            {data.category === 'Persoon' && <div className="entityRow">
                <div className="entityLabel">Sterfjaar:</div>
                <div className="entityValue">{data.person_data?.life_end}</div>
            </div>}
            {data.category === 'Persoon' && <div className="entityRow">
                <div className="entityLabel">Provincie:</div>
                <div className="entityValue">{data.person_data?.province}</div>
            </div>}
            <div className="entityRow">
                <div className="entityLabel">Actief van:</div>
                <div className="entityValue">{data.activity_hint_begin}</div>
            </div>
            <div className="entityRow">
                <div className="entityLabel">Actief tot:</div>
                <div className="entityValue">{data.activity_hint_end}</div>
            </div>
            <div className="entityRow">
                <div className="entityLabel">Categorie:</div>
                <div className="entityValue">{list.join(', ')}</div>
            </div>
            <div className="entityRow">
                <div className="entityLabel">Provenance:</div>
                <div className="entityValue">{data.provenance}</div>
            </div>
        </div>
    )
}