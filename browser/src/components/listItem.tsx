import React from 'react';
import {Ilabel, IResultItem} from '../misc/interfaces';
import {useNavigate} from "react-router-dom";


export default function ListItem({item}: { item: IResultItem }) {
    const nav = useNavigate();
    //const era = period(item.activity_hint_begin, item.activity_hint_end);
    let LiveAndLetDie = "";
    let provincie = "";
   /* if (item.cat === "Persoon") {
        LiveAndLetDie = "(" + item.person_data?.life_begin + "-" + item.person_data?.life_end + ")";
        provincie = ", " + item.person_data?.province;
    }*/

    function period(begin:string, end:string) {
        if (begin !== '0' && end !== '0') {
            return ', ' + begin + '-' + end;
        } else {
            if (begin !== '0') {
                return ', ' + begin;
            } else {
                if (end !== '0') {
                    return ', ' + end;
                } else {
                    return "";
                }
            }
        }
    }

    function goToPage(cat: string, id:string) {
        switch(cat) {
            case "Persoonsnaam":
                nav("/persoon/" + id);
                break;
            case "Commissie":
                nav("/commissie/" + id);
                break;
            case "Locatie":
                nav("/locatie/" + id);
                break;
            case "Organisatie":
                nav("/organisatie/" + id);
                break;
            case "Hoedanigheid":
                nav("/hoedanigheid/" + id);
                break;
            case "Gedeputeerde":
                nav("/gedeputeerde/" + id);
                break;
        }
    }

    return (
        <div className="hcResultListDetail">
            <div className="resultName" onClick={() => goToPage(item.category, item.id)}>{item.name}</div>
            <div>{item.category}</div>
        </div>
    );
}