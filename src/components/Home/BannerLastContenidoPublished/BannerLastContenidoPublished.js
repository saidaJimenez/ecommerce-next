import {useState, useEffect} from "react";
import { Container, Image} from "semantic-ui-react";
import { Contenido } from "@/api";
import { Label } from "@/components/Shared"
import { fn } from "@/utils";
import Link from "next/link";
import styles from "./BannerLastContenidoPublished.module.scss";

const contenidoCtrl = new Contenido()

export  function BannerLastContenidoPublished() {
    const [ contenido, setContenido] = useState(null);

    useEffect (() => {
        (async () =>{
            try {

                const response = await contenidoCtrl.getLastPublished();
                setContenido(response.data[0]);
                
                        } catch (error) {
                console.error(error);
            }
        })()
    },[])

    if(!contenido) return null;

    const wallpaper = contenido.attributes.wallpaper;

    const price = fn.calCDiscountedPrice(contenido.attributes.price,
        contenido.attributes.discount);


   
  return (
    <div className={styles.container}>
     <Image src = {wallpaper.data.attributes.url} className={styles.wallpaper}/>

    <Link className ={styles.infoContainer} href={contenido.attributes.slug}> 
    <Container>
        <h2>{contenido.attributes.title}</h2>
        <p className={styles.price}> 
        <Label.Discount>-{contenido.attributes.discount}%</Label.Discount>
        <span className ={styles.finalPrice}> {price}Euros </span>
        
        </p>

    </Container>
    </Link>
    </div>
  )
}
