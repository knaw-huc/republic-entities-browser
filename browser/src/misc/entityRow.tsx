import React from "react";

export default function EntityRow({label, value}: {label: string, value: string | undefined}) {
    const hasValue = value !== undefined && value !== "";
    return (
        <>
            { hasValue && <div className="entityRow">
            <div className="entityLabel">{label}:</div>
            <div className="entityValue">{value}</div>
        </div>}
        </>
    )
}