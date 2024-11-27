/* eslint-disable react/prop-types */
function Container(props){
    const {children} = props
    return(
        <div style={{ fontFamily: "Montserrat" }} className="relative max-h-screen overflow-hidden">
            {children}
        </div>
    )
}

export default Container