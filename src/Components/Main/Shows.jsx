import Card from "./Card"
import "../../index.css"
import { useSelector } from "react-redux"

const Shows = ({title,arr}) => {
    const arr2=useSelector((val)=>val.Omdb.showData)
    title="SHOWS"

    
    if(arr2 && arr2.length!=0) { 

    return (
        <div className="list p-2">
            <h1 className="title-movie uppercase text-3xl md:text-3xl px-4 font-extrabold hover:text-lime-600 active:text-lime-800 text-gray-800 border-b-2 border-white hover:border-lime-800 dark:text-white dark:hover:text-lime-400">{title}</h1>
            <div className="List p-3 grid sm:grid-cols-2  md:grid-cols-3 gap-5 lg:grid-cols-4">

                {
                    arr2 && arr2.Search?.filter((value)=>value.Poster!="N/A").map((value) => {
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


export function EMPTY({children}) {
    return(
        <div className="no flex items-center justify-center h-[90vh] dark:bg-slate-900">
                <h1 className="emp text-5xl hover:translate-x-3 hover:translate-y-3 hover:scale-95 transition-transform hover:text-lime-600 text-center dark:text-white">DOES NOT CONTAINS {children}</h1>
            </div>
    )
}
export default Shows