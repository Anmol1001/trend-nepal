
import BannerLayout from './BannerLayout'
import BannerContent from './BannerContent'
import { ImageType } from '../lib/defination'


const Banner = (props: ImageType) => {
  return <div>
            <>
            <BannerLayout>
                <BannerContent id={props.id} source={props.source} alt={props.alt} title={props.title} description={props.description} button_title={props.button_title} color={props.color} />
            </BannerLayout>
            </>
    </div>
  
}

export default Banner