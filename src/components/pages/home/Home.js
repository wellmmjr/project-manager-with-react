import styles from './Home.module.css'
import desk from '../../../imgs/desk.svg'

import LinkButton from '../../layout_components/linkButton/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
        <h1>
          Bem-vindo ao <span>Project Manager</span>
        </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar projeto" />
        <img src={desk} alt="My Desk" />
      </section>
    )
}

export default Home