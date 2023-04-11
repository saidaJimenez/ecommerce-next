import { Image } from "semantic-ui-react"
import Link from "next/link";
import { Account } from "../Account"
import { Menu } from "../Menu";
import styles from "./TopBar.module.scss";

export  function TopBar(props) {
    const { isOpenSearch } = props;
  return (
    <div className ={styles.topBar}>
      <div className={styles.left}>
        <Link href ="/">
          <Image src="/images/Logo.png" alt="Smell"/>
        </Link>
         
      </div>
      <div className={styles.center}>
      <Menu isOpenSearch={isOpenSearch}/>
      </div>
      <div className={styles.right}>
      <Account/>
      </div>
    </div>
  )
}
