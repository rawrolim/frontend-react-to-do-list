import {  IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import './HeaderComponent.css';
import { logOutOutline,arrowBackOutline } from "ionicons/icons";

const HeaderComponent = (props: any) => {
    function logout(){
        localStorage.clear();
        window.location.href="/"
    }

    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    <div className="ion-float-left ">   
                        {props.locale ? 
                            <IonButton onClick={()=>{window.location.href=props.locale}} fill='clear'>
                                <IonIcon icon={arrowBackOutline}></IonIcon>
                            </IonButton>
                        :
                            <div></div>
                        }
                    
                    </div>

                    <div className="ion-float-left margin-header ">    
                        {localStorage.getItem("name")}
                    </div>
                
                    <div className="ion-float-right">
                        <IonButton fill='clear' onClick={logout}>
                            <IonIcon  size='large' icon={logOutOutline}></IonIcon>
                        </IonButton>
                    </div>
                </IonTitle>
                
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderComponent;
