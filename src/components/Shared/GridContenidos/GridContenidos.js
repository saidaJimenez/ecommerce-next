import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridContenidos.module.scss";


export  function GridContenidos(props) {
  const { contenidos } = props;


   
  return (
    <div className={styles.gridContenidos} >
    
    {map (contenidos, (contenido) =>(
      <Link key ={contenido.id} href={`/${contenido.attributes.slug}`}className={styles.contenido}>
        <div>
          <img src={contenido.attributes.cover.data.attributes.url} />
          {contenido.attributes.discount > 0 && (
            <Label.Discount className ={styles.discount}>
              {`-${contenido.attributes.discount}%`}
            </Label.Discount>
          )}
        </div>
        <div>
          <span>{contenido.attributes.title}</span>
          <span className={styles.price}>
            {fn.calCDiscountedPrice(contenido.attributes.price, contenido.attributes.discount)}€
          </span>
        </div>
      </Link>
    ))}
    </div>
  )
}
