import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react"; 


  export const SendMoney=()=>{
     
                       const navigate=useNavigate();

                  const [searchParams]=useSearchParams();
                  const id= searchParams.get("id");
                  const name=searchParams.get("name");
                  const [amount,setAmount]=useState(0);


                  return(
                      
                       <div className=" flex justify-center items-center h-screen ">

                             <div className="  h-96 w-96  bg-white-400 border rounded-md shadow-md" >


                                     <div className="  text-3xl font-medium text-center mt-4 mb-28 " >Send Money</div>


                                       <div className=" m-8 " >
 
                                       <div className=" flex gap-4 mb-2 " >
                                             <div  className=" flex justify-center items-center border rounded-full bg-green-500 h-12 w-12 shadow-md " >
                                                 <div>{name[0].toUpperCase()}</div>
                                            </div>
                                                <div>{name.toUpperCase()}</div>
                                      </div>

                                        <div className=" mb-2 " >Amount (in Rs)</div>    

                                      <div>
                                          <input onChange={(e)=>{
                                                 setAmount(e.target.value)
                                          }} type="number" placeholder="...amount" className="w-full border-black h-10 rounded-md mb-2 p-2 " />
                                      </div>


                                         <div>
                                            <button  onClick={async(e)=>{

                                                 try{
                                                  const res= await axios.post("http://localhost:3000/api/v1/account/transfer",{
                                                    to:id,
                                                    amount
                                                   },{
                                                  headers:{
                                                          Authorization: "Bearer "+ localStorage.getItem("token"),
                                                       }
                                                  })
                                                        alert(res.data.message);
                                                           navigate("/dashboard");
                                        
                                              }catch(error){
                                                 alert("insufficent funds");
                                                       navigate("/dashboard");
                                              }

                                               

                                            }} className=" w-full h-10 bg-green-500 shadow-md border rounded-md mt-2 " >Initiate Transfer</button>
                                         </div>

                                       </div>
                                 

  
                             </div>

                       </div>
                  )
                   
    }


