import { Conatiner } from "./steles"
import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { Feed } from "../../components/Feed"


export const Home = () => {

    return(
        <>
        <Header/>
            <Conatiner>
            <div className="cont">
                <main className="main">
                        <div className="nf">
                            <Navbar/>
                            <Feed/>
                        </div>             
                </main>
            </div>
        </Conatiner>
        </>
    )
}
