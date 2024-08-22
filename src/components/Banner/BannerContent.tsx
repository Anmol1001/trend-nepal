import { ImageType } from "../lib/defination"
import MyButton from "../Button/MyButton"

const BannerContent = (props: ImageType) => {
  return (
    <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full">
            <img src={props.source} alt={props.alt} className="w-full h-full object-cover object-center"/>
        </div>
        <div className={`absolute inset-0 w-1/4 text-left ${props.color ? `text-white` : `text-black`} tracking-wide flex flex-col gap-2 pl-4 pt-4`}>
            <div>
                <h1 className="text-4xl font-[500]">{props.title}</h1>
            </div>
            <div>
                <p className="text-xl">{props.description}</p>
            </div>
            <div>
                <MyButton text={props.button_title}/>
            </div>
        </div>
    </div>
  )
}

export default BannerContent