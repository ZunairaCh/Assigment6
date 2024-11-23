import Image from "next/image";

import Header from "../components/Header.js";
import Hero from"../components/Hero.js";
import Nav from"../components/Nav.js";
import Footer from "../components/footer.js"

export default function Home(){
    return(
        <div> <Header/> <Nav/> <Hero/> <Footer/>
        <div>
            <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        /> <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
        </div>

            <title>Vaniza CH</title>
        </div>
    )
}

