
interface ButtonProps {
    text:string; 
    bgColor:string;     
    height:string;
    width:string;
}

const Button  = (props: ButtonProps)  => {
  return <div>
    <button className={`bg-button w-40 h-${props.height} rounded-br-full rounded-tr-full rounded-bl-full rounded-tl-full`}>{props.text}</button>
    </div>
}

export default Button