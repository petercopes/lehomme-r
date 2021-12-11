import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getDocs,
  writeBatch,
  query,
  doc,
  getDoc,
  getFirestore,
  where,
  documentId,
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
  const productList = productSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return productList;
}
export async function fetchProduct(id) {
  const productsCollection = collection(db, "products");
  const productRef = doc(productsCollection, id);
  const productSnapshot = await getDoc(productRef);
  const product = {
    ...productSnapshot.data(),
    id: productSnapshot.id,
  };
  return product;
}
export async function postOrder(order, cart) {
  const batch = writeBatch(db);
  const ordersRef = collection(db, "orders");
  const productosRef = collection(db, "productos");
  const q = query(
    productosRef,
    where(
      documentId(),
      "in",
      cart.map((el) => el.id)
    )
  );

  const outOfStock = [];

  const res = await getDocs(q);
  res.docs.forEach((doc) => {
    const itemToUpdate = cart.find((prod) => prod.id === doc.id);

    if (doc.data().stock >= itemToUpdate.amount) {
      batch.update(doc.ref, {
        stock: doc.data().stock - itemToUpdate.amount,
      });
    } else {
      outOfStock.push(itemToUpdate);
      batch.remove(doc.ref, doc);
    }
  });
  if (outOfStock.length === 0) {
    batch.commit();
    const response = await addDoc(ordersRef, order);
    return response.id;
  } else {
    alert("Hay items sin stock");
  }
}
