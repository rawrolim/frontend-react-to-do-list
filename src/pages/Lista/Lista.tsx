import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Lista.css';

const Lista: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{localStorage.getItem("name")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                
            </IonContent>
        </IonPage>
    );
};

export default Lista;
