import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://avatars.githubusercontent.com/u/97069636?v=4",
      name: "Rian Lucas",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: "👉  jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-04-29 17:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:"https://avatars.githubusercontent.com/u/61101830?v=4",
      name: "Vitao",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: "👉  jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-04-26 19:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl:"https://avatars.githubusercontent.com/u/109232580?v=4",
      name: "Ayrtin",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: "👉  jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-04-27 10:00:00')
  }
]

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content = {post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
