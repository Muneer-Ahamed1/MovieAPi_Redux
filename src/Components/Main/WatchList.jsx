import { add, remove } from "../../Features/Slice/Omdb"
import { useDispatch, useSelector } from "react-redux"
const WatchList = () => {
    const arr = useSelector((val) => val.Omdb.watchList);
    const dispatch = useDispatch();
    console.log(arr)
    const del = (id) => {
        dispatch(remove(id))
    }
    if (arr.length == 0) {
        return (
            <div className="no flex items-center justify-center h-[90vh] dark:bg-slate-900">
                <h1 className="emp text-5xl hover:translate-x-3 hover:translate-y-3 hover:scale-95 transition-transform hover:text-lime-600 text-center dark:text-white">EMPTY WATCH LIST</h1>
            </div>
        )
    }
    else {
        return (
            <div className="WatchList bg-slate-200 min-h-screen p-4 dark:bg-slate-900">
                <h1 className="title md:text-4xl font-bold text-center text-slate-900 hover:text-lime-800 m-3 border-b-2 pb-3 text-2xl dark:text-slate-50">Your Watchlist</h1>
                <div className="List flex flex-col sm:p-4 p-2 gap-8 sm:mx-5 lg:grid lg:grid-cols-2 ">
                    {
                        arr && arr.map((val) => {
                            const { poster, title, id } = val
                            return (
                                <div className="w-[100%] bg-slate-100 rounded-lg dark:bg-gray-200" key={id}>
                                    <div className="Card md:w-[80%] lg:w-[100%] rounded-lg grid sm:grid-cols-2 gap-4 justify-center my-2 grid-rows-[20rem] md:p-5  p-2 w-[100%] hover:translate-x-2 hover:translate-y-2 transition-transform hover:scale-90">
                                        <img src={poster} alt="Poster img" className=" md: h-[100%] rounded-md p-4 m-[auto] bg-white" />
                                        <div className="wrap flex flex-col items- p-1 md:h-[100%] md:p-5 justify-center gap-6 mr-[auto]">
                                            <h1 className="title  sm:text-2xl md:text-2xl font-sanif font-semibold w-[100%] bg-white rounded-md px-2 text-xl p-3 md:scale-110 dark:bg-gray-100">{title}</h1>
                                            <div className="button flex justify-center">
                                                <button onClick={() => del(id)} className="btn md:text-xl p-2 md:p-2 bg-lime-900 text-white rounded-lg border-2 border-lime-900 hover:border-lime-600 font-medium  ">Delete</button>

                                            </div>
                                        </div>



                                    </div>
                                </div>
                            )

                        })
                    }
                </div>

            </div>
        )
    }
}
export default WatchList;