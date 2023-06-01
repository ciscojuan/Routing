import GetCategories from "../assets/components/Posts/getCategories"
import GetPosts from "../assets/components/getPosts"
const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
    <GetCategories />
    <GetPosts url={"/posts"}/>
    </main>
  )
}

export default Home
