import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './home/Home';
import Layout from './component/Layout';
import { About } from './about/About';
import './server.js';
import Vans, { VansLoader } from './van/Vans.js';
import Error from './component/erro/Error.js';
// import VansDetail, { vansIdLoader } from './van/vansDetail.tsx';
import ErrorElement from './component/erro/ErrorElement.js';
import HostLayout from './host/HostLayout.js';
import Dashboard from './host/Dashboard.js';
import HostVan, { hostLoader } from './host/HostVan.js';
import Income from './host/Income.js';
import Review from './host/Review.js';
import HostVanDetails, { hostDetailLoader } from './host/HostVanDetails.js';
import Price from './host/nav/Price.js';
import Photo from './host/nav/Photo.js';
import Detail from './host/nav/Detail.js';
import Login, { actionLoader, loginLoader } from './component/auth/Login.js';
import VansDetail, { vansIdLoader } from './van/VansDetail.tsx';
import { requireAuth } from './component/Utils.tsx';


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  errorElement={<ErrorElement />} 
      loader={async ()=>{
        return null
      }} element={<Layout />}>
        <Route path="*"  errorElement={<ErrorElement />} 
        loader={async ()=>{
          return null
        }} element={<Error />} />
        <Route index  errorElement={<ErrorElement />}  
        loader={async ()=>{
          return null
        }}element={<Home />} />
        <Route path='about' errorElement={<ErrorElement />} loader={async ()=>{
          return null
        }}  element={<About />} />
         <Route 
          path='login' element={<Login />} loader={loginLoader} 
          action={actionLoader}  errorElement={<ErrorElement />}   
          />
        <Route 
          path='vanHome' errorElement={<ErrorElement />}  loader={VansLoader} 
          element={<Vans />}/>          
        <Route 
          path='vanHome/:id' loader={vansIdLoader}
          element={<VansDetail />} errorElement={<ErrorElement />} />
       
          {/* HOST----SECTION */}
        <Route path='host'  errorElement={<ErrorElement />} 
          loader={async ({request})=>{
              return await requireAuth(request) }} element={<HostLayout />}>

          <Route index  errorElement={<ErrorElement />} 
            loader={async ({request})=>{
              return await requireAuth(request) }} element={<Dashboard />} />

          <Route path='van' errorElement={<ErrorElement />} 
            loader={hostLoader} element={<HostVan />} />   

          <Route path='income' errorElement={<ErrorElement />} 
            loader={async ({request})=>{
              return await requireAuth(request) }} element={<Income />} />

          <Route path='review' errorElement={<ErrorElement />}  
            loader={async ({request})=>{
              return await requireAuth(request) }}element={<Review />} />

          <Route path='van/:id' errorElement={<ErrorElement />} 
            loader={hostDetailLoader} element={<HostVanDetails />}>

            <Route index errorElement={<ErrorElement />}  
              loader={async ({request})=>{
              return await requireAuth(request) }}element={<Detail />} />

            <Route path='photo' errorElement={<ErrorElement />} 
              loader={async ({request})=>{
              return await requireAuth(request) }} element={<Photo />} />

            <Route path='price' errorElement={<ErrorElement />}  
              loader={async ({request})=>{
              return await requireAuth(request) }}element={<Price />} />

          </Route>
        </Route>        
       
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router} />      
    </>
  )
}

export default App
