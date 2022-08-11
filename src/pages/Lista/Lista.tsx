import { IonContent, IonFab, IonFabButton, IonIcon, IonPage } from '@ionic/react';
import { add } from "ionicons/icons";
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './Lista.css';

const Lista: React.FC = () => {
    return (
        <IonPage>
            <HeaderComponent/>
            <IonContent fullscreen>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={()=>{window.location.href="/cadastrar_item"}}>
                        <IonIcon icon={add} size={"large"}></IonIcon>
                    </IonFabButton>
                </IonFab>
                
            </IonContent>
        </IonPage>
    );
};

export default Lista;
