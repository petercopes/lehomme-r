import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore/lite";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_8GSJunZUjDbhyJ8YGBkujy9tKsLgssw",
  authDomain: "lehomme-react.firebaseapp.com",
  projectId: "lehomme-react",
  storageBucket: "lehomme-react.appspot.com",
  messagingSenderId: "142771807274",
  appId: "1:142771807274:web:1410a52b3f504ec35ecf53",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Get a list of cities from your database
export async function fetchProducts() {
  const productsCollection = collection(db, "products");
  const productSnapshot = await getDocs(productsCollection);
  console.log(productSnapshot);
  const productList = productSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(productList);
  return productList;
}
export async function fetchProduct(id) {
  const productsCollection = collection(db, "products");
  const productRef = doc(productsCollection, id);
  const productSnapshot = await getDoc(productRef);
  console.log(productSnapshot);
  const product = {
    ...productSnapshot.data(),
    id: productSnapshot.id,
  };
  console.log(product);
  return product;
}
