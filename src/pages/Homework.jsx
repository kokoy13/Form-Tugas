import Container from "../components/Container"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import bghomework from "../assets/img/bghomework.jpg"

function Homework(){
    return(
        <>
            <Container>
                <Navbar bghw='bg-white'/>
                <Main background={bghomework}>

                </Main>
            </Container>
        </>
    )
}

export default Homework