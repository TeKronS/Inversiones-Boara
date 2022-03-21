import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
//-----------------------------
const firebaseConfig = {
  apiKey: "AIzaSyBBOXriV7jlrl6HL_-W6ScnkSTNU_EHsmU",
  authDomain: "inversiones-boara.firebaseapp.com",
  projectId: "inversiones-boara",
  storageBucket: "inversiones-boara.appspot.com",
  messagingSenderId: "885001067785",
  appId: "1:885001067785:web:ce31f136c8ffef0304c7d8",
  measurementId: "G-BCXQGHH8CD",
};

// Initialize Firebase and DataBase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//----------------------------
export async function getInitialData() {
  const querySnapshot = await getDocs(collection(db, "Recomendados"));
  let arreglos = [];
  let triedInitialData = 0;

  async function getRecommended() {
    await querySnapshot.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      arreglos.push({ id, ...data });
    });
  }

  while (!arreglos.length && triedInitialData < 3) {
    triedInitialData += 1;
    await getRecommended();
  }

  if (arreglos.length) {
    localStorage.setItem("Recomendados", JSON.stringify(arreglos));
    return arreglos;
  } else {
    return PromiseRejectionEvent();
  }
}

export async function getTotalData() {
  let triedArreglos = 0;
  let triedComplementos = 0;
  let triedReseñas = 0;
  let arreglos = {};
  let complementos = {};
  let reseñas = [];
  //------------------------------------

  async function getArreglos() {
    const querySnapshot1 = await getDocs(collection(db, "Arreglos"));
    await querySnapshot1.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      arreglos[id] = data;
    });
  }

  //------------------------------------
  async function getComplementos() {
    const querySnapshot2 = await getDocs(collection(db, "Complementos"));
    await querySnapshot2.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      complementos[id] = data;
    });
  }

  //---------------------------------
  async function getReseñas() {
    const querySnapshot3 = await getDocs(collection(db, "Reseñas"));
    await querySnapshot3.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      reseñas.push({ id, ...data });
    });
  }
  //-----try again if you fail up to a maximum of 3 times------
  while (Object.keys(arreglos).length <= 0 && triedArreglos < 3) {
    triedArreglos += 1;
    await getArreglos();
  }
  while (Object.keys(complementos).length <= 0 && triedComplementos < 3) {
    triedComplementos += 1;
    await getComplementos();
  }
  while (!reseñas.length && triedReseñas < 3) {
    triedReseñas += 1;
    await getReseñas();
  }
  //----------

  return { arreglos, complementos, reseñas };
}
