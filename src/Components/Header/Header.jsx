import "../../index.css"
import Logo from "../../assets/logo.png"
import { FiMenu } from "react-icons/fi"
import Menu from "./Nav-md"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import ThemeButton from "./ThemeButton"
import { useTheme } from "../../Context/Mode"
import { Link as ScrollLink } from "react-scroll"
import Movie from "../Main/Movie"

const Header = () => {
    const [bool, setBool] = useState(false)
    const [vl, setVl] = useState("");
    const arr = useSelector((value) => value.Omdb.watchList);
    console.log(useTheme());
    const [theme,setTheme]=useState(true);
    

    return (
        <>
            <nav className="sticky top-0 light:bg-slate-50 dark:bg-slate-800 z-50 border-0	">
                <div className="wrapper flex px-4 py-2 border-2 rounded-md md:justify-evenly justify-between dark:bg-slate-700 dark:border-slate-60 bg-slate-50 border-0">
                    <Link to={"/"}>
                        <div className="logo h-12 flex items-center">

                            <img src={Logo} className="h-full dark:text-white dark:hover:text-lime-500 " />
                            <h1 className="mx-2 text-2xl font-bold hover:text-lime-700 dark:text-white">RULZ</h1>
                        </div>
                    </Link>

                    <div className="link hidden md:flex items-center">
                        <ul className="flex items-center gap-2 p-2 font-medium">
                        <Link className="text-xl text-center hover:text-lime-500 dark:text-white dark:hover:text-lime-500 active:bg-red-800" to={`/Movie`} activeClass="active"  spy={true} smooth={true} offset={-70} duration={500}>

                            <li className="text-xl text-center hover:text-lime-500 dark:text-white dark:hover:text-lime-500">
                                Movie
                            </li>
                            </Link>
                            <Link className="text-xl text-center hover:text-lime-500 dark:text-white dark:hover:text-lime-500 active:bg-red-800" to={`/Shows`} activeClass="active"  spy={true} smooth={true} offset={-70} duration={500}>

                            <li className="text-xl text-center hover:text-lime-500 dark:text-white dark:hover:text-lime-500">
                                Shows
                            </li>
                            </Link>
                            <NavLink className="text-xl text-center hover:text-lime-500 dark:text-white dark:hover:text-lime-500" to={`/watchlist`}>
                                WatchList- [{arr.length}]
                            </NavLink>
                        </ul>

                    </div>

                    <div className="search flex items-center md:w-2/5">
                        <div className="Search w-[100%] hidden md:flex">
                            <input type="text" className="input px-3 py-1 w-2/3 mx-2 rounded-lg"
                                onChange={(e) => setVl(e.target.value)}
                                value={vl}

                            />
                            {
                                (vl.length != 0) ? (<NavLink className="btn bg-lime-900  p-2 text-white hover:bg-lime-500 rounded-md " to={`search/${vl}`}>
                                    Search
                                </NavLink>) :
                                    (<NavLink className="btn bg-lime-900  p-2 text-white hover:bg-lime-500 rounded-md ">
                                        Search
                                    </NavLink>)
                            }
                        </div>
                        <div className="menu">
                            <FiMenu className="md:hidden w-8 h-8" onClick={() => setBool(!bool)}></FiMenu>
                        </div>

                    </div>
                    <ThemeButton Click={()=>setTheme(!(theme))} theme={theme}></ThemeButton>
                </div>
            </nav>
            <Menu bool={bool} ></Menu>
        </>
    )
}
export default Header