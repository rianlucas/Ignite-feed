import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>

          <Avatar src="https://avatars.githubusercontent.com/u/97069636?v=4"/>

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

        <p><a href="#">👉 {' '} jane.design/doctorcare</a> </p>

        <p>
          <a href="#">#novoprojeto </a>{' '}
          <a href=""> #nlw</a> {' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          placeholder='Deixe um comentario'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
      </div>

    </article>
    )
}