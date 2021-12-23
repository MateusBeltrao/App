import axios from "../../utils/axios";
import { Input } from "../../components/Input";
import Cad1 from "../../components/image/cadeado.png"
import { SignIn } from "./style";
import { Button } from "../../components/Button";




export const Sign = () => {

    function handlesignIn() {
        axios.post("/api/home/login").then(response => console.log(response))
    }

    return(
        <SignIn>
            <div className="Counter">
                <div className="Parte1">
                        <h1>Simplificando a forma de conectar desenvolvedores de software!</h1>
                        <p className="text">Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.</p>
                </div>
                <div className="Parte2">
                    <img className="Cad" alt="card" src={Cad1}></img>
                    <p>acesso</p>
                    <Input label="EMAIL" type="email"></Input>
                    <Input label="SENHA" type="password"></Input>  
                    <Button width="400px" margin="20px 0px 0px 0px"  onClick={handlesignIn}>ENTRAR</Button>
                    <grid>
                        <Button backroundColor="#fff" boder="none" color="black" fontSize="10px" width="200px">Esqueceu sua senha?</Button>
                        <Button backroundColor="#fff" boder="none" color="black" fontSize="10px" width="200px">Não tem uma conta? Registre-se</Button>
                    </grid>
                    <p>Feito por: <Button backroundColor="#fff" boder="none" color="black" fontSize="20px">Mateus</Button></p>
                </div>
            </div>
        </SignIn>
    )
}
