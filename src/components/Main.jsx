/* eslint-disable react/prop-types */
function Main(props){
    const {background, children, classname} = props
    return (
                <div className={`"w-dvw h-dvh ${classname}"`} style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    {children}
                </div>
    )
}

export default Main