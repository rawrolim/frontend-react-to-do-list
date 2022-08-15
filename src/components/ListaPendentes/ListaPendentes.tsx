import { IonButton, IonIcon, IonItem, IonItemGroup, IonTitle } from '@ionic/react';
import './ListaPendentes.css';
import { trash,checkmark } from "ionicons/icons";
import axios from 'axios';
import { ENV } from '../../pages/env';
import { useEffect, useState } from 'react';

interface Item{
    id: Number,
    descricao: string,
    status: boolean,
    data: string
}

const ListaPendentes = () => {
    const [lista, setLista] = useState<Item[]>([]);

    useEffect(() => {
        axios.post(ENV.URL+'listaUserActive',{user_id: localStorage.getItem('user_id')})
            .then(r=>r.data)
            .then(list=>setLista(list));
    }, [])

    function Deletar(id: Number){
        axios.delete(ENV.URL+'lista/'+id)
            .then(r=>getLista());
    }

    function getLista(){
        axios.post(ENV.URL+'listaUserActive',{user_id: localStorage.getItem('user_id')})
            .then(r=>r.data)
            .then(list=>setLista(list));
    }

    function Check(item: Item){
        item.status=true;
        axios.put(ENV.URL+'lista/'+item.id,item)
            .then(r=>getLista());
    }

    return (
        <div className='ion-padding-top'>
            <IonTitle>Lista de pendências</IonTitle>
            <div>
                {lista.map(r => {
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
    );
};

export default ListaPendentes;
