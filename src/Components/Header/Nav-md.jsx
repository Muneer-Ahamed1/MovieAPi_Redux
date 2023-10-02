import { MdDarkMode } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovie, fetchShow } from "../../Features/Slice/Omdb";
import { ScrollLink } from "react-scroll"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeNav } from "./ThemeButton";
import Movie from "../Main/Movie";
import Shows from "../Main/Shows";
export default function Menu({ bool }) {
    const [vl, setVl] = useState("");
    const dispatch = useDispatch();
    const arr = useSelector((value) => value.Omdb.watchList);
    const [theme, setTheme] = useState(true);



    return (
        <>
            {
                (bool) ?
                    (<div className="Menu absolute right-0 border-2 top-16 border-solid  py-3 px-1 rounded-md flex flex-col gap-7 bg-gray-200 " >
                        <div className="search flex gap-1 border-2 w-[100%] border-t-[0] border-l-0 border-r-0 pb-1">
                            <input type="text" className="ip-menu px-2 py-1 font-mono hover:shadow-md rounded-md focus:border-lime-400"
                                onChange={(e) => setVl(e.target.value)}
                                value={vl}
                            />
                            {(vl.length != 0) ?
                                (<NavLink className="btn bg-lime-600 px-2 py-1 hover:bg-lime-500 text-white active:bg-lime-800 rounded-md  transition-shadow"
                                    to={`search/${vl}`}
                                >Search</NavLink>) :
                                (<NavLink className="btn bg-lime-600 px-2 py-1 hover:bg-lime-500 text-white active:bg-lime-800 rounded-md  transition-shadow"

                                >Search</NavLink>)
                            }
                        </div>
                        
                        <div className="movie">
                            <NavLink to={"/Movie"} className="active:text-lime-600">
                                <h1 className="text-xl p-2 hover:bg-slate-200 active:bg-slate-400 font-medium border-t-[0] border-l-0 border-r-0 border-2 border-gray-600 active:text-lime-600"
                                >Movies</h1>
                            </NavLink>
                            <NavLink to={"/Shows"}>
                                <h1 className="text-xl p-2 hover:bg-slate-200 active:bg-slate-400 font-medium border-t-[0] border-l-0 border-r-0 border-2 border-gray-600">Shows</h1>
                            </NavLink>
                            <h1 className="text-xl p-2 hover:bg-slate-200 active:bg-slate-400 font-medium border-t-[0] border-l-0 border-r-0 border-2 border-gray-600"
                            >
                                <NavLink to={`/watchlist`}>
                                    Watch List-{arr.length}
                                </NavLink>
                            </h1>
                        </div>
                        <div className="mode mt-[auto]  border-b-0 border-l-0 border-r-0 border-2 p-2">
                            <ThemeNav Click={() => setTheme(!(theme))} theme={theme} ></ThemeNav>
                        </div>
                    </div>) :
                    ("")
            }
        </>
    )
}