import { useOutletContext } from 'react-router-dom';

const Price = () => {
    const {hostDetail} = useOutletContext();
  return (
    <div>
      <h4><span>Price : </span>{hostDetail.price} 💰 </h4>    
    </div>
  )
}

export default Price
