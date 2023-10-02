import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { fetchDetails } from "../../Features/Slice/Omdb";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Features/Slice/Omdb";
import Loading from "../Loading";
export default function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(id)
    useEffect(() => {
        if (id) {
            dispatch(fetchDetails(id));
        }
    }, [dispatch])
    const arr = useSelector((value) => value.Omdb.showDetail);
    const loading = useSelector((value) => value.Omdb.status.loading)

  

    if (loading) {
        return <Loading></Loading>
    }
    else if (arr) {
        let count=true;

        const { Title, Poster, Writer, Genre, Runtime, Ratings, Plot, Released, Country,Year,imdbID } = arr;

        function watchList() {
            if(count) {
            const obj = {
                title: Title,
                year: Year,
                poster: Poster,
                id: imdbID
            }
            count=false;
            dispatch(add(obj))
        }
        }
    

        return (
            <div className="details flex flex-col items-center p-4 bg-slate-100 min-h-[100vh] md:flex md:flex-row md:gap-5 md:justify-center dark:bg-slate-900 ">
                <div className="img-wrap p-3 bg-white rounded-md md:order-2 md:w-1/4 md:m-h-[60vh] dark:bg-slate-600">
                    <img src={Poster} alt="No img" className="w-[100%] h-[100%] rounded-md" />
                </div>
                <div className="text-wrap  bg-slate-50 md:w-2/4 sm:m-h-[80vh]  grid justify-center content-evenly p-5 md:h-[65vh] rounded-lg dark:bg-gray-200">
                    <h1 className="title font-bold text-2xl text-center hover:text-lime-600 space-x-1 md:text-3xl ">{Title}
                        ( {Released} )
                    </h1>
                    <h1 className="writer text-lg font-medium text-center">{Writer}</h1>
                    <h1 className="genere text-lg font-medium text-center">{Genre}</h1>
                    <h1 className="runtime text-lg font-medium text-center">Runtime : {Runtime}</h1>
                    {(Ratings) ? <h1 className=" rating text-lg font-medium text-center px-2">{Ratings[0].Source} : {Ratings[0].Value}
                    </h1> : ("")}

                    <h1 className="country  text-lg font-medium text-center px-2">
                        {Country}

                    </h1>
                    <h1 className="plot text-lg font-normal text-center">
                        <summary>
                            {Plot}
                        </summary>
                    </h1>
                    <h1 className="flex mx-[auto]">
                        <button className="btn bg-lime-600 px-2 py-2 hover:bg-lime-500 text-white active:bg-lime-800 rounded-md  transition-shadow ml-[auto] p-3 md:p-2 md:text-lg"
                            onClick={() => watchList()}
                        >Watch List</button>                     </h1>


                </div>
            </div>
        )
    }
}