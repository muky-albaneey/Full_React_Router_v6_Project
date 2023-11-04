import { Await, Link, NavLink, Outlet, defer, useLoaderData } from "react-router-dom"
import { getHostVans } from "../Api"
import { requireAuth } from "../component/Utils"
import React from "react"

export async function hostDetailLoader({params,request}){
    await  requireAuth(request)
    return defer({vandId : getHostVans(params.id)})
}

const HostVanDetails = () => {
    
    const active = {
        color: 'brown',
        textDecoration: 'underline'
    }

    const hostDetail = useLoaderData()

    function renderElement(hostDetail){
      return (
        <section>
        <Link to='..' relative='path'>🔙Back Home 🏡 </Link>
          <div className="hostDetailWrapper ">
    <div className='hosinfoCon flexCenter'>
         <img src={hostDetail.imageUrl} alt="" />
         <div className='hosinfoCon2 flexColStart'>
          <i className={`vanType ${hostDetail.type} selected`}>{hostDetail.type}</i>
          <h2>{hostDetail.name}</h2>
         <p>${hostDetail.price}/day</p>                
        </div>
     </div>


    <div className="hostNavCon flexCenter">
        <NavLink to='.' end style={({isActive}) => isActive ? active : null}>Details</NavLink>
        <NavLink to='price' style={({isActive}) => isActive ? active : null}>Pricing</NavLink>
        <NavLink to='photo' style={({isActive}) => isActive ? active : null}>Photos</NavLink>
    </div>
    <Outlet context={{hostDetail}} />
   
   
</div>
    </section>
      )
    }

  return (
    <div>
        <React.Suspense fallback={<h1>Loading.......⚒ </h1>}>
            <Await resolve={hostDetail.vandId}>
                {renderElement}
            </Await>
        </React.Suspense>
    </div>
  )
}

export default HostVanDetails
