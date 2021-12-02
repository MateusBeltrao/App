import { Nb } from "./styles"
import { Button } from "../Button"
export const Navbar = () => {

    const tags = [
        {id:"1", nama:"react"},
        {id:"2", nama:"javascript"},
        {id:"3", nama:"dotnet"},
        {id:"4", nama:"php"},
        {id:"5", nama:"materialdesing"},
        {id:"6", nama:"webdev"}
    ]

    const listTags = tags.map((t) => 
        <li className="lu">#{t.nama}</li>
    )
       
    return(
        <Nb>
            <div className="navbar">
                <Button  
                backroundColor="#fff"
                color="#FF4500"
                width="180px"
                margin="10px 0px 0px 35px"
                boderWidth="1px"
                >REGISTRAR GRATIS</Button>
                    <ul className="ul">
                        <p className="pp">Tagns em alta</p>
                        {listTags}
                        <Button
                            backroundColor="#fff"
                            color=" #696969"
                            width="180px"
                            margin="0px 0px 10px 0x"
                            boderWidth="0"
                        >Exibir mais Tags</Button>
                    </ul>
            </div>
        </Nb>
    )
}