import styles from './Avatar.module.css'

export function Avatar(props, {hasBorder = true}) {

  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={props.src}  
    />
  )
}