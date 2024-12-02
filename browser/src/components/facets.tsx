import React from "react";
import {FreeTextFacet, ListFacet, SliderFacet, FacetsParams} from '@knaw-huc/browser-base-react';
import {FACET_URL} from "../misc/config";

export default function Facets({registerFacet, unregisterFacet, setFacet, searchValues}: FacetsParams) {
    return <>
        <FreeTextFacet registerFacet={registerFacet} unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Entiteit"
                   field="name"
                   url={FACET_URL}
                   flex={false}
                   usePost={true}
                   addFilter={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Type"
                   field="category"
                   url={FACET_URL}
                   flex={false}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Categorie"
                   field="labels.label"
                   url={FACET_URL}
                   flex={false}
                   usePost={true}
                   addFilter={true}
                   searchValues={searchValues}/>
        <SliderFacet
            registerFacet={registerFacet}
            unregisterFacet={unregisterFacet}
            setFacet={setFacet}
            name="Beginjaar"
            field="first_year"
            min={1580}
            max={1800}/>
        <SliderFacet
            registerFacet={registerFacet}
            unregisterFacet={unregisterFacet}
            setFacet={setFacet}
            name="Eindjaar"
            field="last_year"
            min={1580}
            max={1800}/>
    </>;
}
