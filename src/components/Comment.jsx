import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/97069636?v=4"/>
    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.authorAndTime}>
              <strong>Rian Lucas</strong>

              <time title="27 de abril as 17:05" dateTime="2022-04-27 17:05">
                Cerca de 1h atras
              </time>

            </div>

            <button title='Deletar comentario'>
              <Trash size={20}/>
            </button>

          </header>

          <p>Muito bom Devon, parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  )
}