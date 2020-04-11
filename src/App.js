import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  // IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './hooks';

function App() {
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        { birthDate &&
          <BiorhythmCard 
            birthDate={birthDate} 
            targetDate={targetDate}
          />
        }
        <IonItem>
          <IonLabel position="fixed">Date of birth:</IonLabel>
          <IonDatetime 
            value={birthDate} 
            displayFormat="DD-MMM-YYYY" 
            onIonChange={e => setBirthDate(e.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target date:</IonLabel>
          <IonDatetime 
            value={targetDate} 
            displayFormat="DD-MMM-YYYY" 
            onIonChange={e => setTargetDate(e.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
