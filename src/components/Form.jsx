import wfh from "../assets/img/work-from-home.png"
import { Link } from "react-router-dom"

function Form(){
    return(
        <div className="bg-white h-max rounded-md p-10 max-sm:p-5">
            <form action="" method="post" className="flex flex-col justify-center gap-5">
                <div className="flex flex-col gap-1 items-center">
                    <img className="w-14 h-14" src={wfh} alt=""/>
                    <h1 className="text-3xl font-extrabold" style={{fontFamily: 'Dancing Script'}}>Login Tugas</h1>
                    <span className="text-sm">Form Login Website Tugas Pribadi</span>
                </div>
                <div className="flex gap-2 items-center">
                    <label className="max-sm:text-sm" htmlFor="username">Username : </label>
                    <input className="p-2 border-2 hover:border-yellow-500" type="text" name="username" id="username" placeholder="Amir Ganteng" required/>
                </div>
                <div className="flex gap-2 items-center">
                    <label className="max-sm:text-sm" htmlFor="password">Password : </label>
                    <input className="p-2 border-2 hover:border-yellow-500" type="password" name="password" id="password" placeholder="xxxxxxxx" required/>
                </div>
                <div className="flex justify-between text-xs">   
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <Link to="" className="hover:text-yellow-500 underline">
                        <span>Forgot Password</span>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <button style={{fontFamily: 'Dancing Script'}} className="font-extrabold text-2xl px-3 py-2 bg-yellow-500 rounded-full w-full hover:scale-110 transform duration-300" type="submit" name="login">
                        Sign In
                    </button>   
                </div>
                <div className="flex flex-col items-center gap-6">
                    <span>Don&apos;t have a account? <Link to="/register" className="text-yellow-500 hover:text-purple-600 underline">Sign Up</Link></span>
                    <span className="text-xs">
                        created by <Link to="https://instagram.com//andikafiransyah09">@andikafiransyah09</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Form