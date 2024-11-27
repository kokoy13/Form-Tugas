import Container from "../components/Container"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import bginput from "../assets/img/bginput.jpg"

function InputHomework(){
    return(
        <>
            <Container>
                <Navbar bghw='bg-white'/>
                <Main background={bginput}>

                </Main>
            </Container>
        </>
    )
}

export default InputHomework