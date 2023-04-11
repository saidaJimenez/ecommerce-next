import { useState, useEffect } from "react";
import { Contenido } from "@/api";
import {GridContenidos } from "@/components/Shared"

const contenidoCtrl = new Contenido();


export  function LatestContenidos( props) {

    const {title, limit = 9, platformId = null } = props;
     
    const [contenidos,setContenidos]= useState(null);
   

    useEffect (()=> {
        (async () =>{
        try {
            const response = await contenidoCtrl.getLatestPublished( {limit, platformId});
            setContenidos(response.data);
        } catch (error) {
            console.error(error);
        }  
        })();
    }, []);
    if(!contenidos) return null;
  return (
    <div>
      <h2>{title}</h2>
      <GridContenidos contenidos={contenidos}/>
    </div>
  )
}
