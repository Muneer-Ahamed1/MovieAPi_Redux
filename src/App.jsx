import Page from "./Page"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovie, fetchShow } from "./Features/Slice/Omdb";
import { useTheme } from "./Context/Mode";
import ThemeProvider from "./Context/Mode";

function App() {
  const dispatch = useDispatch();
const  dark = () => {
    return "dark";
  }
  const light = () => {
    return "light";
  }
  const [mode, setMode] = useState("light")
  useEffect(() => {
    const movie = "Harry Potter"
    const show = "Friends"
    dispatch(fetchMovie(movie));
    dispatch(fetchShow(show))
  }, [])

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(mode);
  }, [mode])


  const arr1 = useSelector((value) => value.Omdb.movieData);
  const arr2 = useSelector((value) => value.Omdb.showData);
  return (
    <>
      <ThemeProvider value={{ mode, light, dark ,setMode}}>
        <Page></Page>
      </ThemeProvider>
    </>
  )
}

export default App
