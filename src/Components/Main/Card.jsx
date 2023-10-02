import { useDispatch } from "react-redux"
import { add } from "../../Features/Slice/Omdb";
import { Link } from "react-router-dom";

const Cards = ({ Title, Year, Poster, imdbID }) => {
    const dispatch = useDispatch();
    function watchList() {
        const obj = {
            title: Title,
            year: Year,
            poster: Poster,
            id: imdbID
        }
        dispatch(add(obj))
    }

    return (
        <>
            <Link to={`/details/${imdbID}`} className="hover:translate-x-2 hover:translate-y-2 transition-transform hover:scale-90 " >
                <div className="Card md:w-[80%] text-gray-700 mx-[auto] flex flex-col hover:shadow-lg p-2 justify-evenly border-2  rounded-md shadow-[lime] bg-white dark:bg-slate-700 dark:hover:border-lime-200 dark:border-slate-500
               sm:w-[100%] 
                ">
                    <div className="img h-[70%] ">
                        <img src={Poster} alt="Poster img" className="w-[100%] h-[100%]" />
                    </div>
                    <div className="wrap flex flex-col gap-4 sm:items-center">
                        <h2 className="title text-lg text-center font-bold hover:text-lime-800 active:text-lime-500 dark:text-white dark:hover:text-lime-200">{Title}</h2>
                        <div className="wrap-2 flex px-4 items-center sm:flex-col sm:justify-center ">
                            <p className="year font-semibold text-lg dark:text-white dark:hover:text-lime-200">({Year})</p>
                            <button className="btn bg-lime-600 px-2 py-2 hover:bg-lime-500 text-white active:bg-lime-800 rounded-md  transition-shadow ml-[auto] p-3 md:p-2 md:text-lg"
                                onClick={() => watchList()}
                            >Watch List</button>
                        </div>

                    </div>



                </div>
            </Link>
        </>)
}
export default Cards;