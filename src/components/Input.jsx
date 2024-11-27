/* eslint-disable react/prop-types */
import InputBox from "./InputBox"
import Label from "./Label"

function Input(props){
    const{classname, type = 'text', name, placeholder, children} = props
    return(
        <div className="flex gap-2 items-center">
            <Label htmlFor={name}>{children}</Label>
            <InputBox classname={classname} type={type} name={name} id={name} placeholder={placeholder}/>
        </div>
    )
}

export default Input