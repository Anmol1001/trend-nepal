
import BannerLayout from './BannerLayout'
import BannerContent from './BannerContent'
import { ImageType } from './lib/defination'


const Banner = (props: ImageType) => {
  return <div>
    
            <>
            <BannerLayout>
                <BannerContent source={props.source} alt={props.alt} title={props.title} description={props.description} button_title={props.button_title}/>
            </BannerLayout>
            </>
    </div>
  
}

export default Banner