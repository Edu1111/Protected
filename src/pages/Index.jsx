import Homee from "./Homee"
import { Navigate } from "react-router-dom" 
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"


export const Landing = () => <h2>Please login</h2>
export const Home = ({user}) => {
  console.log(user)

  if (!user) {
    return <Navigate to="/landing"/>
  }
return <Homee/>
}

export const Dashboard = ({user}) => 
{
  console.log(user)
  if (!user) {
    return <Navigate to="/landing"/>
  }
return <About/>
}
export const Analitycs = ({user}) => 
{
  console.log(user)
  if (!user) {
    return <Navigate to="/landing"/>
  }
return <Skills/>
}
export const Admin = ({user}) => {
  console.log(user)
  if (!user) {
    return <Navigate to="/landing"/>
  }
return <Contact/>
}