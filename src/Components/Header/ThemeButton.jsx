import { MdDarkMode } from "react-icons/md"
import { useTheme } from "../../Context/Mode"

export default function ThemeButton({ theme, Click }) {
    const { setMode } = useTheme()
    if (theme) {
        setMode('light')
    }
    else {
        setMode('dark')
    }

    return (
        <>
        <Button Click={Click}>{theme}</Button>
        </>

    )
}
export function ThemeNav({theme,Click}) {
    const { setMode } = useTheme()
    if (theme) {
        setMode('light')
    }
    else {
        setMode('dark')
    }

    return (
        <>

        <Button2 Click={Click}>{theme}</Button2>
        </>

    )
}

const Button = ({ children, Click }) => {

    return (
        <button className="hidden md:flex items-center  pr-2 font-medium border-2 border-solid px-1 py-1 border-slate-800 rounded-md bg-slate-600 text-white border-white hover:border-slate-500"
            onClick={
                Click}
        >
            <span className='px-2'>
                <MdDarkMode className="w-7 h-7 text-slate-500" ></MdDarkMode>
            </span>
            {(children) ? 'Dark' : (
                'Light')}
        </button>
    )
}

const Button2 = ({ children, Click }) => {
    return (
        <button className="flex items-center  pr-3 font-medium border-2 border-solid px-2 py-2 border-slate-800 rounded-md bg-slate-600 text-white md:hidden" 
        onClick={Click}
        >
            <span className='px-2'>
                <MdDarkMode className="w-7 h-7 text-slate-500" ></MdDarkMode>
            </span>
            {(children) ? 'Dark' : (
                'Light')}
        </button>
    )
}