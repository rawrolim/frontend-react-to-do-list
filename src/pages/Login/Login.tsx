import {  IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonTitle } from '@ionic/react';
import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { ENV } from '../env';

const Login: React.FC = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    if(localStorage.getItem('user_id')){
        window.location.href="/lista";
    }

    function logar(){
        let data = {
            email: email,
            password: password
        }

        axios.post(ENV.URL+"login",data)
            .then(res =>res.data)
            .then(user=>{
                localStorage.setItem("email",user.email);
                localStorage.setItem("user_id",user.id);
                localStorage.setItem("name",user.name);
                window.location.href="/lista";
            })
            .catch(e=>{console.error(e)});
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div id="centralizar">
                    <IonTitle class="ion-text-center">Login</IonTitle>
                    <IonItem>
                        <IonLabel position="floating">E-mail</IonLabel>
                        <IonInput type="email" value={email} onIonChange={e=>setEmail(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Senha</IonLabel>
                        <IonInput type="password" value={password} onIonChange={e=>setPassword(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonButton expand='block' className='margin-top' onClick={logar}>
                        Logar
                    </IonButton>
                    <IonButton expand='block' color="medium" onClick={()=>{window.location.href="/cadastrar_usuario"}}>
                        Cadstre-se
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
