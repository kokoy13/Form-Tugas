/* eslint-disable react/prop-types */
function Label(props){
    const {htmlFor, children} = props
    return(
        <label className="max-sm:text-sm" htmlFor={htmlFor}>{children}</label>
    )
}

export default Label