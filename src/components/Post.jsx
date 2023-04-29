import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post(props) {

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
  }).format(props.publishedAt)

  const publishedDateRelativeFromNow = formatDistanceToNow(props.publishedAt,{
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>

          <Avatar src={props.author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>

        </div>

        <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
          {publishedDateRelativeFromNow} 
        </time>

      </header>

      <div className={styles.content}>
        {props.content.map(item => {
          if (item.type === 'paragraph') {
            return <p>{item.content}</p>
          } else if (item.type === 'link') {
            return <p><a href="#">{item.content}</a></p>

          }
        })}

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