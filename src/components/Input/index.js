
import {Inp, Lab, Container} from './styles'

export const Input = ({type, name, label}) => {
    return(
        <Container>
            <Lab>{label}</Lab>
            <Inp type={type} name={name}></Inp>
        </Container>
    )
}
