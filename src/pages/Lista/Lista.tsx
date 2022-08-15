import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonItemGroup, IonPage, IonTitle } from '@ionic/react';
import axios from 'axios';
import { add, checkmark, close, trash } from "ionicons/icons";
import { useState, useEffect } from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { ENV } from '../env';
import './Lista.css';

interface Item{
    id: Number,
    descricao: string,
    status: boolean,
    data: string
}

const Lista: React.FC = () => {
    const [listaActive, setListaActive] = useState<Item[]>([]);
    const [listaInactive, setListaInactive] = useState<Item[]>([]);

    useEffect(() => {
        getListaInactive();
        getListaActive();
    }, [])

    function getListaInactive(){
        axios.post(ENV.URL+'listaUserInactive',{user_id: localStorage.getItem('user_id')})
            .then(r=>r.data)
            .then(list=>setListaInactive(list));
    }

    function getListaActive(){
        axios.post(ENV.URL+'listaUserActive',{user_id: localStorage.getItem('user_id')})
            .then(r=>r.data)
            .then(list=>setListaActive(list));
    }

    function Check(item: Item){
        item.status=!item.status;
        axios.put(ENV.URL+'lista/'+item.id,item)
            .then(r=>getListaInactive())
            .then(r=>getListaActive());
    }

    function Deletar(id: Number){
        axios.delete(ENV.URL+'lista/'+id)
            .then(r=>getListaActive());
    }

    return (
        <IonPage>
            <HeaderComponent/>
            <IonContent fullscreen>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={()=>{window.location.href="/cadastrar_item"}}>
                        <IonIcon icon={add} size={"large"}></IonIcon>
                    </IonFabButton>
                </IonFab>
                
                <div className='ion-padding-top'>
                    <IonTitle>Lista de pendências</IonTitle>
                    <div>
                        {listaActive.map(r => {
                            return (
                                <IonItem key={r.id.toString()}>
                                    <div className='ion-float-left w-100'>
                                        <div>{r.descricao}</div>
                                        <div>{r.data}</div>
                                    </div>
                                    <IonItemGroup>
                                        <IonButton onClick={()=>Deletar(r.id)}>
                                            <IonIcon icon={trash}></IonIcon>
                                        </IonButton>
                                        <IonButton onClick={()=>Check(r)}>
                                            <IonIcon icon={checkmark}></IonIcon>
                                        </IonButton>
                                    </IonItemGroup>
                                </IonItem>
                            )})
                        }
                    </div>
                </div>

                <div className='ion-padding-top'>
                    <IonTitle>Lista de Concluidos</IonTitle>
                    <div>
                        {listaInactive.map(r => {
                            return (
                                <IonItem key={r.id.toString()}>
                                    <div className='ion-float-left w-100'>
                                        <div>{r.descricao}</div>
                                        <div>{r.data}</div>
                                    </div>
                                    <IonItemGroup>
                                        <IonButton onClick={()=>Check(r)}>
                                            <IonIcon icon={close}></IonIcon>
                                        </IonButton>
                                    </IonItemGroup>
                                </IonItem>
                            )})
                        }
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Lista;
