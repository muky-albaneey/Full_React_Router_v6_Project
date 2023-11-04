import React from 'react'
import { getVans } from '../Api'
import { Await, Link, defer, useLoaderData, useSearchParams } from 'react-router-dom'
import './van.css';

export async function VansLoader(){
    
    return defer({vans: getVans()})
}

const Vans = () => {
    const vanDataPromise = useLoaderData();
    const [search, setSerach] = useSearchParams();

console.log(search.toString());
    function handleSearchChange(key, value){
        setSerach((prev)=>{
            if(value === null){
              prev.delete(key)
            }else{
              prev.set(key,value)
            }
            return prev;
        });
       
      }
      const typeFilter = search.get('type');

      // const dataFilter = typeFilter ? vanData.filter((data, index) => {
      //   return data.type === typeFilter
      // }) : vanData

  //   const vansInfo = dataFilter.map(data =>(
  //       <div className='vanContainer' key={data.id}>
            
  //           <Link to={data.id}  state={{searchParams: search.toString(), type: typeFilter}} className='flexColStart'>
  //               <img src={data.imageUrl} alt="all_Con" />
  //               <div className='vanInfo flexCenter'>
  //                   <h3>{data.name}</h3>
  //                   <p>{data.price}<span>/day</span></p>
                
  //               </div>
  //               <i className={`vanType ${data.type} selected`}>{data.type}</i>
  //           </Link >
  // </div>   
  //   ))
  return (
    <div className='vanWrapper flexColStart'>
        <h1>Explore our van option🎠 </h1>
        <React.Suspense fallback={<h1>Loading vans 🚌 ....</h1>}>
          <Await resolve={vanDataPromise.vans}>
            {vanData =>{
              const dataFilter = typeFilter ? vanData.filter((data, index) => {
                return data.type === typeFilter
              }) : vanData

              const vansInfo = dataFilter.map(data =>(
                <div className='vanContainer' key={data.id}>
                    
                    <Link to={data.id}  state={{searchParams: search.toString(), type: typeFilter}} className='flexColStart'>
                        <img src={data.imageUrl} alt="all_Con" />
                        <div className='vanInfo flexCenter'>
                            <h3>{data.name}</h3>
                            <p>{data.price}<span>/day</span></p>
                        
                        </div>
                        <i className={`vanType ${data.type} selected`}>{data.type}</i>
                    </Link >
              </div>   
              ))

              return(
              <>
                <nav className='searchNav flexCenter'>
                  
                  <button className={`types simple ${typeFilter === "simple" ? 'selected' : null}`}  onClick={() => handleSearchChange("type","simple")}>simple</button>
                  <button className={`types rugged ${typeFilter === "rugged" ? 'selected' : null}`} onClick={() => handleSearchChange("type","rugged")}>rugged</button>
                  <button className={`types luxury ${typeFilter === "luxury" ? 'selected' : null}`} onClick={() => handleSearchChange("type","luxury")}>luxury</button>
                  
                  {vansInfo ? (   <button className='filter' onClick={() => handleSearchChange("type",null)}>Clear filter ⏏ </button> ) : null}
                  </nav>
                  <div className="dataCon flexCenter">
                {vansInfo}                            
              </div>
              </>
              )
            }

            }
          
        </Await> 
        </React.Suspense>  
    </div>
  )
}

export default Vans
