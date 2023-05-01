import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment(props) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    props.onDeleteComment(props.content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return(
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://avatars.githubusercontent.com/u/97069636?v=4"
      />
      
    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.authorAndTime}>
              <strong>Rian Lucas</strong>

              <time title="27 de abril as 17:05" dateTime="2022-04-27 17:05">
                Cerca de 1h atras
              </time>

            </div>

            <button onClick={handleDeleteComment} title='Deletar comentario'>
              <Trash size={24}/>
            </button>

          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>

    </div>
  )
}