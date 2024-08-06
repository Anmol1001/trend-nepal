import { Button } from "../ui/button";

interface ButtonProps {
    text:string;
}

const MyButton  = (props: ButtonProps)  => {
  return <div>
    <Button variant="default" size={"lg"} className="rounded-br-full rounded-tr-full rounded-bl-full rounded-tl-full">{props.text}</Button>
    </div>
}

export default MyButton