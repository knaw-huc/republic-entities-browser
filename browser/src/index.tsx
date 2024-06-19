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
import EntityLoader from "./misc/entityLoader";
import logo from './assets/img/logo.png';

// @ts-ignore
import './index.css';
import './assets/css/rep_entities.css';
import Commissie from "./components/commissie";
import Locatie from "./components/locatie";
import Organisatie from "./components/organisatie";
import Hoedanigheid from "./components/hoedanigheid";

const title = 'REPUBLIC Entity Browser';
const shortTitle = 'REPUBLIC Entity Browser';
const searchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, '/browse', 30);
const detailLoader = createDetailLoader(id => `/detail/${id}`);

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
      loader: ({params}) =>  EntityLoader('persoon', params.id as string),
      element: <Persoon/>
    },
    {
      path: '/persoon/:id' + '.html',
      loader: ({params}) =>  EntityLoader('persoon', params.id as string),
      element: <Persoon/>
    },
    {
      path: '/commissie/:id',
      loader: ({params}) =>  EntityLoader('commissie', params.id as string),
      element: <Commissie/>
    },
    {
      path: '/locatie/:id',
      loader: ({params}) =>  EntityLoader('locatie', params.id as string),
      element: <Locatie/>
    },
    {
      path: '/organisatie/:id',
      loader: ({params}) =>  EntityLoader('organisatie', params.id as string),
      element: <Organisatie/>
    },
    {
      path: '/hoedanigheid/:id',
      loader: ({params}) =>  EntityLoader('hoedanigheid', params.id as string),
      element: <Hoedanigheid/>
    }
  ]
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={createBrowserRouter([routeObject])}/>
    </React.StrictMode>
);
