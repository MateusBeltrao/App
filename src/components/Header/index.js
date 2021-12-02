import { Conatiner } from "./styles"
import { Button } from "../Button"
import logo1 from "../image/logo.png"

export const Header = () => {
    return(
        <Conatiner>
            <header className="header"> 
                <div className="toolbar">
                    <div>
                        <img src={logo1} height="65px"></img>
                    </div>
                    <div>

                    </div>
                <div>
                    <Button boder="none" margin="0px 100px 0px 0px">NOVO POST</Button>
                    <samp className="bell">🔔</samp>
                    <samp>🧑‍💻</samp>
                </div>
                </div>
        </header>
        </Conatiner>
        
    )
}