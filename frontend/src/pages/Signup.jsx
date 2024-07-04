import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


export const Signup = () => {

    const navigate = useNavigate();

    return (

        <div>

                  <Navbar></Navbar>

               
            <div className="flex justify-center items-center">

                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-28 w-96">

                    <div >
                        <h1 className="text-2xl font-bold mb-2 text-center ">Sign Up</h1>
                        <p className="text-gray-600 mb-6 text-center">Enter your information to create an account</p>
                    </div>



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name:</label>
                        <input className="border rounded shadow-md bg-gray-200  w-full py-2 px-3" type="text" id="firstName" placeholder="John" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name:</label>
                        <input className=" border rounded shadow-md bg-gray-200  w-full py-2 px-3 " type="text" id="lastName" placeholder="Doe" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                        <input className="border rounded shadow-md bg-gray-200  w-full py-2 px-3" type="text" id="email" placeholder="johnDoe@gmail.com" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                        <input className="border rounded shadow-md bg-gray-200  rounded w-full py-2 px-3" type="password" id="password" placeholder="********" />
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="bg-blue-500 hover:bg-blue-700 border shadow-md text-white font-bold py-2 px-4 rounded" type="button">
                            Sign Up
                        </button>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="mt-4 text-gray-600">Already have an account? <button onClick={(e) => {
                            navigate("/");
                        }} className="text-blue-500 cursor-pointer">Sign in</button></p>
                    </div>


                </div>

            </div>

              <Footer></Footer>

        </div>


    )

}