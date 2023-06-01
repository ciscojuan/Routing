import { useParams } from "react-router-dom";
import GetPosts from "../assets/components/getPosts";

const subcategories = () =>{
    const {subCategoria} = useParams 
    return(
        <GetPosts url={`/posts?subcategoria=${subCategoria}`}/>
    )
}

export default subcategories