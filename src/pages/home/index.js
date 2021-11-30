import { Conatiner } from "./steles"
import { Header } from "../../components/Header"

export const Home = () => {
    return(
        <Conatiner>
        <Header/>
        <div>
            <main className="main">
                <div className="navbar">
                    navbar
                </div>
                <div className="feed">
                    feed
                </div>
            </main>
        </div>
        </Conatiner>
    )
}
