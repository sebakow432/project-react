import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {

  return (
    <nav className = { styles.navigation }>
      <Container>
        <div className = {styles.navContainer}>
          <div className = { styles.icon }>
            <a href = "/"> <i className="fa fa-tasks"></i> </a>
          </div>
          <ul className = {styles.menu}>
            <li><a href = "/">Home</a></li>
            <li><a href = "/favorite">favorite</a></li>
            <li><a href = "/about">About</a></li>
          </ul>   
        </div>   
      </Container>
    </nav>
  )
}

export default NavBar;