/* eslint-disable react/prop-types */
function Button(props){
    const {fFamily, font = 'normal', text = 'base', bg, rounded = 'none', classname, hoverScale = '100', type = 'submit', name = 'login', children} = props
    
    return(
        <button style={{ fontFamily: fFamily }} className={`font-${font} text-${text} px-3 py-2 bg-${bg} rounded-${rounded} hover:scale-${hoverScale} ${classname}`} type={type} name={name}>
            {children}
        </button>  
    )
}

export default Button