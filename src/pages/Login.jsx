import Container from "../components/Container"
import Main from "../components/Main"
import Form from "../components/Form"
import bglogin from "../assets/img/bglogin.jpg"

function Login(){
    return(
        <Container>
            <Main background={bglogin} classname='flex justify-center items-center h-full'>
                <Form/>
            </Main>
        </Container>
    )
}

export default Login