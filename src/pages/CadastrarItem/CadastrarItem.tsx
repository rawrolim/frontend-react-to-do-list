import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './CadastrarItem.css';

const CadastrarItem: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default CadastrarItem;
