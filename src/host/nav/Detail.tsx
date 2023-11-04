import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Detail = () => {

    const {hostDetail} = useOutletContext();    
  return (
    <div>
    <h4><span>Name : </span>{hostDetail.name} 📛 </h4>
     <h4><span>Category : </span>{hostDetail.type} 🤪 </h4>
     <h4><span>Description : </span>
         {hostDetail.description} 🖥 
     </h4>
     <h4><span>Visibility</span> 📢 Public</h4>
 </div>
  )
}

export default Detail
