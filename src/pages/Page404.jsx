import image from "../assets/img/doguito404.svg"
import '../assets/css/404.css'

const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Doguito" />
            <p className="notfound-text">This is not the page you are looking for</p>
        </main>
    )
}

export default Page404