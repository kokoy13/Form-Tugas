import Container from "../components/Container"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import bghome from "../assets/img/bghome.jpg"

function Home(){
    return(
        <>
            <Container>
                <Navbar/>
                <Main background={bghome}/>
                    <div className="bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 "></div>
                <Main/>
            </Container>
        </>
    )
}

export default Home