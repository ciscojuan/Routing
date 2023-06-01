import { useState, useEffect } from 'react'
import "../assets/css/blog.css"
import { buscar } from '../api/api'
import GetCategories from '../assets/components/Posts/getCategories'
import GetPosts from '../assets/components/getPosts'
import Subcategories from './Subcategories'
/* import SubCategoria from './SubCategoria' */
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'

const Categoria = () => {
    const [subcategorias, setSubcategorias] = useState([])
    const { id } = useParams()

    const url = useResolvedPath("").pathname


    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            setSubcategorias(response[0].subcategorias)
        })
    }, [id])


    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <GetCategories />
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path='/' element={<GetPosts url={`/posts?categoria=${id}`} />} />
                <Route path='/:subcategoria' element={<Subcategories />} />
            </Routes>

        </>
    )
}

export default Categoria