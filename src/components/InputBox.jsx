/* eslint-disable react/prop-types */
function InputBox(props){
    const{classname, type, name, placeholder} = props
    return(
        <input className={`p-2 border-2 ${classname}`} type={type} name={name} id={name} placeholder={placeholder} required/>
    )
}

export default InputBox