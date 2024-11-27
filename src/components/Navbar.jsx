/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import wfh from "../assets/img/work-from-home.png"
import logout from "../assets/img/logout.png"

function Navbar(props){
    const {bghw = 'bg-inherit', bgihw = 'bg-inherit'} = props

    return(
                <header className="flex bg-yellow-500 px-8 py-3 w-full justify-between items-center z-10 relative">
                    <Link to="/" >
                        <div className="flex gap-2 items-center p-2 bg-neutral-800 rounded-xl hover:scale-105 transform duration-300 max-sm:px-2 max-sm:py-1">
                            <img className="w-10 h-10 max-sm:w-5 max-sm:h-5" src={wfh} alt="Homework"/>
                            <h1 className="max-sm:text-base text-3xl text-yellow-500 font-bold" style={{fontFamily: "Dancing Script"}}>Homework</h1>
                        </div>
                    </Link>
                    <nav className="">
                        <ul className="flex gap-20 items-center font-extrabold text-2xl max-sm:text-sm max-sm:gap-2" style={{fontFamily: "Dancing Script"}}>
                            <Link to="/Homework" className={`"${bghw} hover:scale-110 transform duration-300 rounded-full "`}>
                                <li className="p-3 hover:bg-white hover:scale-110 transform duration-300 rounded-full max-sm:p-1">Homework</li>
                            </Link>
                            <Link to="/InputHomework" className={`"${bgihw} hover:scale-110 transform duration-300 rounded-full "`}>
                                <li className="p-3 hover:bg-white hover:scale-110 transform duration-300 rounded-full max-sm:p-1">Input Homework</li>
                            </Link>
                        </ul>
                    </nav>
                    <Link to="/Login" className="hover:bg-white rounded-full transition duration-300 p-3 max-sm:p-1">
                        <img className="w-8 h-8 max-sm:w-5 max-sm:h-5" src={logout} alt=""/>
                    </Link>
                </header>
    )
}

export default Navbar