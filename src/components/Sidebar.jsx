import styles from './Sidebar.module.css'
import capa from '../assets/fundo-capa.svg'
import fotoPerfil from '../assets/foto-perfil.jpeg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar (){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capa}/>

      <div className={styles.perfil}>
        <Avatar src="https://avatars.githubusercontent.com/u/97069636?v=4"/>
        <strong>Rian Lucas</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}