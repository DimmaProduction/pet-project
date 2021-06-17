import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

import imgProfile from '../../img/avatar.png';
import imgProfiles from '../../img/person_profile.png';
import imgDashboards from '../../img/dashboard.png';
import imgUsers from '../../img/users.png';

const Header = (props) => {
  return (
    <div className={css.main}>
      {/* <h2>HEADER</h2> */}
      {/* <header>This Project is made by DIMMA</header> */}
      
        <div className={css.profile}>
          <img src={imgProfile} alt='O'></img>
          <NavLink to='./myProfile' >Profile</NavLink>
        </div>
        <div className={css.links}>
          <div>
            <NavLink to='./profiles' >Profiles</NavLink>
            <img src={imgProfiles} alt='prof_img'></img>
          </div>
          <div>
            <NavLink to='/dashboards'>Dashboards</NavLink>
            <img src={imgDashboards} alt='prof_img'></img>
          </div>
          <div>
            <NavLink to='/users'>Users</NavLink>
            <img src={imgUsers} alt='prof_img'></img>
          </div>
        </div>
        <div className={css.log}>
          {/* <a href='/authentication'>log out</a> */}
          <NavLink to='/'>Log out</NavLink>
        </div>
        
    </div>
  );
}

export default Header;
