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
  measurementId: "G-BCXQGHH8CD"
};

// Initialize Firebase and DataBase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//----------------------------
export async function getInitialData() {
  const querySnapshot = await getDocs(collection(db, "Recomendados"));
  let arreglos = [];
  await querySnapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;
    arreglos.push({ id, ...data });
  });
  if (arreglos.length) {
    return arreglos;
  } else {
    return PromiseRejectionEvent();
  }
}

export async function getTotalData() {
  const querySnapshot1 = await getDocs(collection(db, "Arreglos"));

  let arreglos = {};
  await querySnapshot1.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;
    arreglos[id] = data;
  });
  //------------------------------------
  const querySnapshot2 = await getDocs(collection(db, "Complementos"));
  let complementos = {};

  await querySnapshot2.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;
    complementos[id] = data;
  });
  //---------------------------------
  const querySnapshot3 = await getDocs(collection(db, "Reseñas"));
  let reseñas = [];
  await querySnapshot3.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;
    reseñas.push({ id, ...data });
  });

  return { arreglos, complementos, reseñas };
}
