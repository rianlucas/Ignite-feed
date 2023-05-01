import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post(props) {

  const [comments, setComments] = useState([
    'Post muito legal!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

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

  function handleCreateNewComment() {
    event.preventDefault()
    const newCommentText = event.target.comment.value

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

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
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}

        <p>
          <a href="#">#novoprojeto </a>{' '}
          <a href=""> #nlw</a> {' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          name = "comment" 
          placeholder = 'Deixe um comentario'
          value = {newCommentText}
          onChange = {handleNewCommentChange}
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map (comment => {
          return(
            <Comment 
              onDeleteComment = {deleteComment}
              key = {comment} 
              content={comment}
            />
          ) 
        })}
      </div>

    </article>
    )
}