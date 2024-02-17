
import { BrowserRouter,Routes,Route } from "react-router-dom"

import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/Sendmoney"



function App() {

  return (
    <BrowserRouter>
         <Routes>
         <Route path="/signup" element={ <Signup/> } ></Route>
         <Route path="/signin" element={ <Signin/> } ></Route>
         <Route path="/Dashboard" element={ <Dashboard/> } ></Route>
         <Route path="/send" element={ <SendMoney/> } ></Route>
         </Routes>
    </BrowserRouter>
  )
}

export default App
