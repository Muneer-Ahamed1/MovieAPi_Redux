import Card from "./Card"
import "../../index.css"
import { useSelector } from "react-redux"
import { EMPTY } from "./Shows"
const Movie = ({arr}) => {
    let title="Movie"
    const arr1 = useSelector((val) => val.Omdb.movieData)

    
    if(arr1 && arr1.Search?.length!=0) { 

    return (
        <div className="list p-2">
            <h1 className="title-movie uppercase text-3xl md:text-3xl px-4 font-extrabold hover:text-lime-600 active:text-lime-800 text-gray-800 border-b-2 border-white hover:border-lime-800 dark:text-white dark:hover:text-lime-400">{title}</h1>
            <div className="List p-3 grid sm:grid-cols-2  md:grid-cols-3 gap-5 lg:grid-cols-4">

                {
                    arr1 && arr1.Search?.filter((value)=>value.Poster!="N/A").map((value) => {
                        const { Title, Year, Poster, imdbID } = value;
                        return (
                            <Card Title={Title}
                                Year={Year}
                                Poster={Poster}
                                imdbID={imdbID}
                                key={imdbID}
                            ></Card>
                        )
                    })
                }


            </div>
        </div>
            )
    }
    else{
        return (
            <EMPTY>
                {title}
            </EMPTY>
        )
    }
}

export default Movie