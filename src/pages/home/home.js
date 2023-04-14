import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd} from "@/components/Shared";


const platformsId = {
  perfurme:1,
  cremas:2,
  exfoliante:3,
  aceite:4,

};

export default function HomePage() {
  return (
    <>
    


    <BasicLayout >
      <Home.BannerLastContenidoPublished/>
      <Separator height ={100}/>

    <Container>
      <Home.LatestContenidos title="Ultimos lanzamientos"/>
    </Container>


    <Separator height ={100}/> 

    <BarTrust/>


    <Separator height ={100}/>

    <Container>
      <Home.LatestContenidos title="Perfumes" limit={3} platformId={platformsId.perfurme}/>
    </Container>

    <Separator height ={100}/>
    
    <BannerAd 
    title="Registrate y obten los mejores precios"
    subtitle= "¡Compara todos nuestros productos y elige el tuyo!"
    btnTitle= "Entrar ahora "
    btnLink="/account"
    image="./images/banner.png"/>
    
    <Separator height={50}/>
    <Container>
      <Home.LatestContenidos 
      title="Aceites" 
      limit={3} 
      platformId={platformsId.aceite}/>
    </Container>
    <Separator height={50}/>
    </BasicLayout>
    </>
  )
}
