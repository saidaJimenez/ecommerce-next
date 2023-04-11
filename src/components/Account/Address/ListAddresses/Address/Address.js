import { useState} from "react";
import { Button, Icon } from "semantic-ui-react";
import { BasicModal, Confirm} from "@/components/Shared";
import { Address as AddressCtrl } from "@/api";
import { AddressForm } from "../../AddressForm";
import styles from "./Address.module.scss";

const addressCtrl = new AddressCtrl()

export  function Address(props) {
    const { adressId, adress, onReload} = props
    const [showEdit, setShowEdit] = useState (false);
    const [showConfirm, setShowConfirm] = useState (false);

    const openCloseEdit = () => setShowEdit((prevState) => !prevState);
    const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

    const onDelete = async () => {
        try {
            await addressCtrl.delete(adressId)
            onReload();
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>
      <div className ={styles.address}>
        <div>
    <p className ={styles.title}>{adress.title}: </p>
    <p className ={styles.addressInfo}>
        {adress.name},{adress.adress},{adress.state},{adress.city},{adress.postal_code}
    </p>
        </div>
        <div className={styles.actions}>
            <Button primary icon onClick={openCloseEdit}>
                <Icon name="pencil"/>
            </Button>
            <Button primary icon onClick={openCloseConfirm}>
                <Icon name="delete"/>
            </Button>
        </div>
       
      </div>

    <Confirm
    open = {showConfirm}
    onCancel = {openCloseConfirm}
    onConfirm ={onDelete}
    content="¿Estas seguro de que quieres elimar la dirección?"
    />

      <BasicModal show={showEdit} onClose={openCloseEdit} title="Editar dirección">
        <AddressForm onClose={openCloseEdit} onReload={onReload} adressId={adressId}  adress={adress}/>

      </BasicModal>
    </>
  )
}
