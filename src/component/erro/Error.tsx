import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flexColStart' style={{backgroundColor:'antiquewhite', width: '80%', margin: '0 auto', height: '600px', justifyContent: 'center'}}>
      <h2 className='flexColStart' ><span>Sorry, the page you were</span> <span>looking for was not found 🐵 </span></h2>
      <NavLink to='/' style={{width:'70%',textAlign: 'center', padding: '1.3rem',color: 'white', backgroundColor: 'black'}}>Return home 🔜 </NavLink>
    </div>
  )
}

export default Error
