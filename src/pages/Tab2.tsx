import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { useHistory } from 'react-router-dom';
import { RepositoryPayload } from '../interfaces/RepositoryPayload';
import { createRepository } from '../services/GithubServices';
import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner';


const Tab2: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  
  const RepoFormData: RepositoryPayload = {
    name: '',
    description: '',
  };

  const setFormName = (value: string) => {
    RepoFormData.name = value;
  };

  const setFormDescription = (value: string) => {
    RepoFormData.description = value;
  };

  const saveRepository = () => {
    if (RepoFormData.name.trim() === '') {
      alert('El nombre del repositorio es obligatorio.');
      return;
    }
    setLoading(true);

    createRepository(RepoFormData).then((newRepo) => {
      if (newRepo) {
        history.push(`/tab1`);
      }
    }).catch((error) => {
      console.error('Error al crear el repositorio:', error);
      alert('Ocurrió un error al crear el repositorio. Por favor, inténtelo de nuevo.');
    }).finally(() => {
      setLoading(false);
    });
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de Repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de Repositorio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">
          <IonInput
            className="form-field"
            label="Nombre del repositorio"
            labelPlacement="floating"
            placeholder="Ingrese el nombre del repositorio"
            value={RepoFormData.name}
            onIonChange={(e) => setFormName(e.detail.value!)}
          />
          <IonTextarea
            className="form-field"
            label="Descripcion"
            labelPlacement="floating"
            placeholder="Ingrese la descripcion del repositorio"
            rows={6}
            value={RepoFormData.description}
            onIonChange={(e) => setFormDescription(e.detail.value!)}
          />

          <IonButton
            className="form-field"
            expand="block"
            fill="solid"
            onClick={saveRepository}
          >
            Guardar
          </IonButton>
        </div>
        <LoadingSpinner isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
