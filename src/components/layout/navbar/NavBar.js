import {Link} from 'react-router-dom'
import Container from '../Container/Container'
import styles from './NavBar.module.css'
import logo from '../../../imgs/logo.png'

function NavBar(){
    return (
        <nav class={styles.NavBar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='Project Manager' className={styles.logo}/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Mesa</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/projectGrid'>Projetos</Link>
                    </li>

                    <li className={styles.item}>                        
                        <Link to='/newproject'>Novo Projeto</Link>
                    </li>                    
                </ul>

            </Container>
      </nav>
    )
}

export default NavBar