
import HomePage from "./product/page"
import Header from "@/components/Header"
import Reviews from "./reviews/page"
import MissRoseSection from "@/components/MissroseSection"


const home = () => {
  return (
    <div>
    
   <Header/>
    <HomePage/>
    <Reviews/>
    <MissRoseSection/>
      
      </div>
  )
}

export default home