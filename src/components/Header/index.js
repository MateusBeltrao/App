import { Conatiner } from "./styles"

export const Header = () => {
    return(
        <Conatiner>
            <header className="header"> 
                <div className="toolbar">
                    <div>
                        <samp>Conecta Dev</samp>
                    </div>
                <div>
                    <button>Novo Post</button>
                    <samp>img1</samp>
                    <span>img2</span>
                </div>
                </div>
        </header>
        </Conatiner>
        
    )
}