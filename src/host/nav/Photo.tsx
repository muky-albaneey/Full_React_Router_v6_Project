import { useOutletContext } from "react-router-dom";

const Photo = () => {
    const {hostDetail} = useOutletContext();
    return (
      <div className='flexCenter' style={{justifyContent: 'center'}}>
          {<img src={hostDetail.imageUrl} style={{width: '70%'}} alt="" />}
          {<img src={hostDetail.imageUrl} style={{width: '20%'}} alt="" />}
      </div>
    )
}

export default Photo
