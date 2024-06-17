import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom';
import {
  App,
  PageHeader,
  Search,
  Detail as BrowserDetail,
  createSearchLoader,
  createDetailLoader,
  searchUtils,
  SearchParams
} from '@knaw-huc/browser-base-react';
import Facets from "./components/facets";
import ListItem from "./components/listItem";
import Detail from "./components/detail";
import Persoon from "./components/persoon";
import logo from './assets/img/logo.png';

// @ts-ignore
import './index.css';
import './assets/css/rep_entities.css';
import Commissie from "./components/commissie";

const title = 'REPUBLIC Entity Browser';
const shortTitle = 'REPUBLIC Entity Browser';
const searchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, 'http://localhost:5000/browse', 30);
const detailLoader = createDetailLoader(id => `http://localhost:5000/detail/${id}`);

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
  },
    {
      path: '/detail/:id',
      loader: async ({params}) => detailLoader(params.id as string),
      element: <BrowserDetail title={title} updateDocumentTitle={false} DetailComponent={Detail}/>
    },
    {
      path: '/persoon/:id',
      element: <Persoon/>
    },
    {
      path: '/commissie/:id',
      element: <Commissie/>
    }
  ]
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={createBrowserRouter([routeObject])}/>
    </React.StrictMode>
);
