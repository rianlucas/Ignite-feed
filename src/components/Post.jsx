import styles from './Post.module.css'
import avatar from '../assets/foto-perfil.jpeg'

export function Post() {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <img className={styles.avatar} src={avatar} />

          <div className={styles.authorInfo}>
            <strong>Rian Lucas</strong>
            <span>Software Engineer</span>
          </div>

        </div>

        <time title="27 de abril as 17:05" dateTime="2022-04-27 17:05">
          Publicado ha 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">👉 jane.design/doctorcare</a> </p>

        <p><a href="#">#novoprojeto #nlw #rocketseat</a> </p>
      </div>

    </article>
    )
}