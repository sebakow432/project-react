import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className = { styles.navigation }>
      <Container>
        <div className = {styles.navContainer}>
          <div className = { styles.icon }>
            <a href = "/"> <i className="fa fa-tasks"></i> </a>
          </div>
          <ul className = {styles.menu}>
            <li><NavLink className={({ isActive }) => 
            isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
            </li>
            <li><NavLink className={({ isActive }) => 
              isActive ? styles.linkActive : undefined} to="favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => 
              isActive ? styles.linkActive : undefined} to="About">About</NavLink>
            </li>
          </ul>   
        </div>   
      </Container>
    </nav>
  )
}

export default NavBar;