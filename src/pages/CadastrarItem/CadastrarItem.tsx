import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage} from '@ionic/react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './CadastrarItem.css';
import { calendarOutline } from "ionicons/icons";
import { useState } from 'react';
import axios from 'axios';
import { ENV } from '../env';

const CadastrarItem: React.FC = () => {
  const [descricao, setDescricao] = useState('');
  const [date, setDate] = useState('');

  function cadastrarItem(){
    let data = {
      descricao:descricao,
      data: date,
      status: false,
      user_id: localStorage.getItem("user_id")
    }
    axios.post(ENV.URL+'lista',data)
      .then(r=>{
        window.location.href='/lista'
      })
      .catch(e=>console.error(e));
  }

  return (
    <IonPage>
      <HeaderComponent locale="/user" />
      <IonContent fullscreen>
        <div className='ion-padding'>
          <IonItem>
            <IonLabel position='floating'>Descrição</IonLabel>
            <IonInput onIonChange={e=>setDescricao(e.detail.value!)} type="text" ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating"><IonIcon icon={calendarOutline}></IonIcon>Prazo</IonLabel>
            <IonInput onIonChange={e=>setDate(e.detail.value!)} type="text" ></IonInput>
          </IonItem>
          <div className='bottom'>
            <IonButton onClick={cadastrarItem} expand='block'>Cadastrar</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CadastrarItem;
