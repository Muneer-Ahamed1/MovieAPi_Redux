import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './Store.jsx'
import { Provider } from 'react-redux'
import Main from './Components/Main/Main.jsx'
import Details from './Components/Main/Details.jsx'
import Search from './Components/Main/Search.jsx'
import WatchList from './Components/Main/WatchList.jsx'
import Movie from './Components/Main/Movie.jsx'
import Shows from './Components/Main/Shows.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,

} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Main/>} />
      <Route path='Movie' element={<Movie/>}/>
      <Route path='Shows' element={<Shows/>}/>
      <Route path='details/:id' element={<Details/>}/>
      <Route path='search/:name' element={<Search/>}/>
      <Route path='watchlist' element={<WatchList/>}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
  </Provider> 
)
