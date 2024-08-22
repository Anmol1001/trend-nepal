import { BannerData_2 as data } from "../lib/data"
import Banner from "./Banner"

const BannerTech = () => {
  return <div className="container h-32 my-40">
             <Banner id={data.id} source={data.source} alt={data.alt} description={data.description} button_title={data.button_title} title={data.title} color={data.color} />   
        </div>
}

export default BannerTech