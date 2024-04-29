import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Banner, Card1, Card2, Card3, Cards, ContainerCards, ContainerSV, Sinopse, Video } from "./styles";

function Home () {



    return (
     <>
        <Header/>
        <Banner/>
        <ContainerSV>
            <Sinopse>   
                <p>Sinopse</p>
                The Walking Dead conta a história de um pequeno grupo de sobreviventes em um mundo
                pós-apocalíptico cheio de mortos-vivos. A série apresenta a excessiva jornada do grupo liderado
                por Rick Grimes, em busca de suprimentos e refúgios seguros. Além disso, os sobreviventes
                têm que lidar com dilemas morais, sentimentos confusos e desafios do dia a dia em um mundo
                hostil e praticamente dominado por mortos-vivos.
            </Sinopse>
            <Video >
                
                Vídeo indísponivel
            </Video>
        </ContainerSV>
        <ContainerCards>
            <Cards><Card1/>Andrew Lincoln-Rick</Cards>

            <Cards><Card2/>Norman Reedus-Daryl</Cards>

            <Cards><Card3/>Danai Gurira-Michonne</Cards>
        </ContainerCards>
        <Footer/>
     </>
    )
}
export default Home;