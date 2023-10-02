 import { useParams } from "react-router-dom"
 import Main from "./Main"
 import { useDispatch } from "react-redux"
 import { fetchMovie,fetchShow } from "../../Features/Slice/Omdb";
 export default function Search() {
   const dispatch=useDispatch();
    const {name}=useParams()   
    console.log(name)
    if (name && name.length != 0) {
        dispatch(fetchMovie(name))
        dispatch(fetchShow(name))
    }
    return(
        <Main></Main>

    )
}