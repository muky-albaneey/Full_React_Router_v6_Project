import React from 'react'
import { Await, Link, defer, useLoaderData, useLocation, useParams } from 'react-router-dom'
import { getVans } from '../Api'
import { requireAuth } from '../component/Utils'

export async function vansIdLoader({params}){    
    return defer({vans : getVans(params.id)})
}

const VansDetail = () => {
    const searchParam= useParams()
    const vanDetailsData = useLoaderData()
    const locationInfo = useLocation()

console.log(vanDetailsData)
const type =locationInfo.state?.type || "all vans";

function renderElement(vanDetailsData){
    
    return(
        <>
            <Link to={`..?${locationInfo.state?.searchParams || ""}`} relative='path'>
                Back to {type}
            </Link>
                
            <div className='vanDetail flexColStart'>
                <img src={vanDetailsData.imageUrl} alt="" />
                <i className={`vanType ${vanDetailsData.type} selected`}>{vanDetailsData.type}</i>
                <h2>{vanDetailsData.name}</h2>
                <article className='vanPrice' key={vanDetailsData.id}>
                    <span className='price'>
                        ${vanDetailsData.price}<span className='day'>/day</span>
                    </span>
                    <p>{vanDetailsData.description}</p>
                    <button className={`linkButton vanType ${vanDetailsData.type}`}>Rent this {vanDetailsData.type} 😇  van
                    </button>
                </article>
            </div>
        </>
    )
}
  return (
    <div className='vanDetailWrapper flexColStart'> 
      <React.Suspense fallback={<h2>Loading.......🙋 </h2>}>
        <Await resolve={vanDetailsData.vans}>
                {renderElement}
            </Await>
      </React.Suspense>
               
    </div>
  )
}

export default VansDetail
