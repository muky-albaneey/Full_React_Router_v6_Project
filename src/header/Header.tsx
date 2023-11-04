import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';
import avatar from '../assets/avatar.png'
const Header = () => {

  const navigate = useNavigate();

   function logout(){
    localStorage.removeItem("loggedIn");
    navigate('login');
  }

  return (
    <div className='heading flexCenter secondaryColor'>
        <aside className='aside flexCenter'>
            <h1><NavLink to='/'>#navlife</NavLink></h1>
        </aside>
      <nav className='navigation flexCenter'>
        <NavLink to='about'>about</NavLink>
        <NavLink to='host'>host</NavLink>
        <NavLink to='vanHome'>van</NavLink>
        <NavLink to='login'>
          <img src={avatar} alt="" className='avatar' />
        </NavLink>
        <button onClick={logout} className='logoutBtn'>logout</button>
      </nav>
    </div>
  )
}

export default Header
