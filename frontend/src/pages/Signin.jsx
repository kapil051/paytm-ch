

export const Signin =()=>{

        return (
            
              <div className="flex justify-center items-center h-screen">

                   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">

                              <div>
                                    <h1 className="text-2xl font-bold mb-1 text-center ">Sign In</h1>
                                   <p className="font-medium text-center text-gray-400 mb-6" >Enter your credential to sign in</p>
                              </div>

                         <div>
                              <label htmlFor="" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="text" className="border rounded shadow-md bg-gray-200 w-full py-2 px-3  mb-6" placeholder="...johndoe@gmail.com"/>
                         </div>

                         <div>
                              <label htmlFor="" className="mb-2 block  text-gray-700 font-bold mb-2" >password</label>
                               <input type="text" className="border rounded shadow-md bg-gray-200 rounded w-full py-2 px-3 mb-6" placeholder="******"/>
                         </div>

                              <div className="flex justify-center items-center">
                                 <button className="border rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-md mb-4">Sign In</button>
                              </div>

                               <div className="flex justify-center items-center">
                                 <p className="text-gray-600">Does not have an account? <span className="cursor-pointer text-blue-500">Sign Up</span>  </p> 
                               </div>

                   </div>

                         
              </div>
        )

}