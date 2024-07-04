import { useEffect, useState } from "react"
 import axios from "axios"
 import {useNavigate} from "react-router-dom"



export const Dashboard=()=>{

   const navigate=useNavigate();

       const [users,setUser]=useState([]);
       const [filter,setFilter]=useState("");   
       const [balance,setBalance]=useState(0); 
      
       
                const token=localStorage.getItem("token");
                const id=localStorage.getItem("id");
                const name=localStorage.getItem("name");

                  //  useEffect(()=>{

                  //        axios.post("http://localhost:3000/api/v1/auth",{},{
                  //             headers:"Bearer "+token,
                  //        })
                  //        .then((res)=>{

                  //              console.log(res);
 
                  //             if(res.data.msg=="false"){
                  //                 navigate("/");
                  //                    return;
                  //             }

                  //        })


                  //  },[])

              
                   useEffect(()=>{

                        axios.get("http://localhost:3000/api/v1/account/balance",{
                                headers:{
                                    Authorization:"Bearer "+token,
                                }
                            })
                           .then((res)=>{
                                setBalance(res.data.balance);
                           })
                             

                   },[])



           useEffect(()=>{

                 axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
                    .then((response)=>{
                       setUser(response.data.user);
                    })

           },[filter])

        
return(
 <>

<div className="flex justify-between shadow-md bg-gray-300">

<div className="flex items-center cursor-pointer">
      PayTM APP
</div>

<div className="flex gap-4">

       <div className="flex items-center">
          Hello {name.toUpperCase()}
       </div>

       <div className="flex justify-center rounded-full bg-slate-400 h-12 w-12 mt-1 mr-2" >

              <div className="flex justify-center items-center cursor-pointer">{name[0].toUpperCase()}</div>

             
       </div>
      

</div>

</div>

<div className="flex">
    <div className="font-bold text-lg">
       My Balance:
    </div>
    
      <div className="font-semibold ml-4 text-lg" >
         Rs. {balance}
      </div>
</div>

<div className="font-bold mt-6 text-lg">
        Users
 </div>

<div className="my-2">
      <input onChange={(e)=>{
            setFilter(e.target.value)
      }}  type="text" placeholder="...search user" className="border p-2 w-full rounded-md shadow-md bg-slate-200 " />
 </div>

<div>
         {users.map((user)=> <User user={user}></User>)}
</div>

</>
)


function User({user}){

        const navigate=useNavigate();

           if(user._id!=id){

            return(
                  <div className="h-14 bg-slate-300 w-full mt-2 flex justify-between items-center " >
        
                        <div className=" flex items-center gap-4 " >
                                 <div className=" rounded-full bg-yellow-100  w-10 h-10 flex justify-center items-center " >{ user.firstname[0].toUpperCase() }</div>
                                  <div> {user.firstname} {user.lastname} </div>
                        </div>
        
                       <div className=" flex justify-center items-center " >
        
                            <div className=" h-10 w-32 border rounded-md shadow-md bg-blue-500 flex justify-center items-center " >
                                       <button onClick={(e)=>{
                                            navigate("/send?id="+user._id+"&name="+user.firstname +" "+ user.lastname);
                                       }} >Send Money</button>
                            </div>
        
                      </div>
        
                       
                  
                 </div>
              )

           }

  }      
}






