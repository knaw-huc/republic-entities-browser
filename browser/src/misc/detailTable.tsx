import React from "react";
import {IResultItem} from "./interfaces";

export default function DetailTable({data}: {data:IResultItem}) {
    let list: string[] = [];
    data.labels.map((item) => {list.push(item.label)});

    return (
        <div className="entityTable">

        </div>
    )
}