import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Tab1.css";
import { pencilOutline, trashOutline } from "ionicons/icons";
import RepoItem from "../components/RepoItem";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lista de Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <RepoItem
            name="Repositorio 1"
            description="Descripcion del repositorio"
            language="JavaScript"
            avatarUrl="https://img.icons8.com/color/1200/the-flash-head.jpg"
          />
          <RepoItem
            name="Repositorio 2"
            description="Descripcion del repositorio"
            language="JavaScript"
            avatarUrl="https://www.shutterstock.com/image-vector/jakarta-indonesia-april-30-2022-600nw-2151111897.jpg"
          />
          <RepoItem
            name="Repositorio 3"
            description="Descripcion del repositorio"
            language="JavaScript"
            avatarUrl="https://static.vecteezy.com/system/resources/thumbnails/047/915/763/small/superhero-style-illustration-isolated-on-white-background-vector.jpg"
          />
          <RepoItem
            name="Repositorio 4"
            description="Descripcion del repositorio"
            language="JavaScript"
            avatarUrl="https://i.pinimg.com/736x/a7/15/c5/a715c5cdb21803ad46c06215e1ecd660.jpg"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
