import { getHostVans } from '../Api'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import './host.css';
import { requireAuth } from '../component/Utils';
import React from 'react';

export async function hostLoader({request}){
    await  requireAuth(request);    
    return defer({hostVans: getHostVans()})
}

const HostVan = () => {

    const vansDataPromise = useLoaderData()

 
    return (
        <React.Suspense fallback={<h1>Loading......🚌 </h1>}>
            <Await resolve={vansDataPromise.hostVans}> 
        {
            hostVan=>{
                const data =
                <div className='host flexColStart'>
                 {hostVan.map((hostVan) =>(
                    <Link to={hostVan.id} key={hostVan.id} className='hostWrapper flexCenter'>
                          <div className='hostContainer flexCenter' key={hostVan.id}>
                              <img src={hostVan.imageUrl} alt="" />
                              <div className="hotVanInfo">
                                  <h3>{hostVan.name}</h3>
                                  <p>${hostVan.price}/day</p>
                              </div>
                          </div>
                      </Link>
                    
                ))
                 }
               </div>
               return(
                <>
                    <div className='host_mother flexCenter'>
                    {data}      
                    </div>
                </>
               )
            }
        }
    </Await>
        </React.Suspense>
       
    )
    
    }

export default HostVan
