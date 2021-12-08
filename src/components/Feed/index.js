import Imagem from "../image/mc.jpg"
import Einst from "../image/alberteinstein.webp"
import Coracao from "../image/coracao.png"
import Msg from "../image/msg.png"
import { Fed } from "./styles"


const posts = [
    {
        id:1,
        author:{
            id:1,
            name: "Albert Einstein",
            username: 'alberteinstein',
            avatar: <img src={Einst} width="50px"></img>,
        },
        title: "Criando um App do zero utilizando React.js",
        date:"Março 14, 1879",
        description: "Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta.",
        hashtags: "#fisica, #javascript, react, developer",
        image: <img src={Imagem} width="100%" height="320px" />
    }
]


const avatar = posts.map((p) => 
    <div>{p.author.avatar}</div>
)

const title = posts.map((p) =>(
    <div>{p.title}</div>
))

const name = posts.map((p)=> (
    <div>{p.author.name}</div>
))

const imagem = posts.map((p)=>(
    <div>{p.image}</div>
))




export const Feed = () => {

    return(
        <Fed>
            <div className="feed">
                <div className="header">
                    {avatar}
                    <div className="title">
                        {title}
                    <div className="escrito">
                        escrito por {name}
                    </div>
                    </div>
                </div>
                <div className="imagem">
                    {imagem}
                </div>
                <div className="icon">
                    <img src={Coracao} className="m1"></img>
                    <img src={Msg} className="m2"/>
                </div>
            </div>
        </Fed>
    )
}