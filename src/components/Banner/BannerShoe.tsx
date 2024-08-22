import { BannerData_1 as data } from "../lib/data"
import Banner from "./Banner"

const BannerShoe = () => {
  return <div className="container h-32">
             <Banner id={data.id} source={data.source} alt={data.alt} description={data.description} button_title={data.button_title} title={data.title} color={data.color} />   
        </div>
}

export default BannerShoe