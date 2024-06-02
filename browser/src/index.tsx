import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom';
import {
  App,
  PageHeader,
  Search,
  Detail as BrowserDetail,
  createSearchLoader,
  searchUtils,
  SearchParams
} from '@knaw-huc/browser-base-react';
import Facets from './components/Facets.js';
import ListItem from './components/ListItem.js';

// @ts-ignore
import logo from './assets/logo.svg';
import './index.css';

const title = 'REPUBLIC Entity Browser';
const shortTitle = 'REPUBLIC Entity Browser';
const searchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, '/browse', 10);
//const detailLoader = createDetailLoader(id => `/vocab/${id}`);

const pageHeader = <PageHeader
    title={shortTitle}
    logo={<img src={logo} className="logo" alt="REPUBLIC Logo"/>}/>;

const routeObject: RouteObject = {
  path: '/',
  element: <App header={pageHeader}/>,
  children: [{
    index: true,
    loader: async ({request}) => searchLoader(new URL(request.url).searchParams),
    element: <Search title={title} pageLength={10} withPaging={true}
                     hasIndexPage={false} showSearchHeader={false} updateDocumentTitle={false}
                     searchParams={SearchParams.PARAMS} FacetsComponent={Facets} ResultItemComponent={ListItem}/>
  }]
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={createBrowserRouter([routeObject])}/>
    </React.StrictMode>
);
