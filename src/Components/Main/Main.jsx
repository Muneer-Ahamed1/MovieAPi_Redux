import { useSelector } from "react-redux"
import Loading from "../Loading"
import Movie from "./Movie"
import Shows from "./Shows"

const Main=()=>{
    

    const arr1 = useSelector((val) => val.Omdb.movieData)
    const arr2=useSelector((val)=>val.Omdb.showData)
    
    const loading=useSelector(val=>val.Omdb.status.loading)
    const error=useSelector(val=>val.Omdb.status.error)
    console.log(arr1)
    if(loading) {
        return (
            <Loading></Loading>
        )
    }
    
        else if (arr1 || arr2) {
    return(
        <div className="Main bg-slate-100 dark:bg-slate-900">
         { arr1 && arr1.Search && <Movie title={"Movie"} arr={arr1}></Movie>}
          {arr2 && arr2.Search &&  <Shows title={"Show"} arr={arr2}></Shows>}
        </div>
    )
        }
        
}



export default Main;
