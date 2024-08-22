
import Banner from "./Banner/Banner";
import { BannerData } from "./lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Slider = () => {
  return (
    <div className="container">
      <Carousel>
        <CarouselContent>
          {
            BannerData.map((data)=>(
              <>
                <CarouselItem  key={data.id} >
                  <Banner id={data.id} source={data.source} alt={data.alt} title={data.title} description={data.description} button_title={data.button_title} color={data.color}/>
                </CarouselItem> 
              </>
            ))
          }  
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
