import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-ecommerce-a469b.firebaseapp.com",
  projectId: "react-ecommerce-a469b",
  storageBucket: "react-ecommerce-a469b.appspot.com",
  messagingSenderId: "217827742037",
  appId: "1:217827742037:web:c11d80c2b4a59831361fdc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const cargarBDD = async () => {
  const promise = await fetch('./json/catalogo.json');
  const catalogo = await promise.json();

  catalogo.forEach(async (prod) => {
    await addDoc(collection(db,"catalogo"), 
      { 
        idCategoria: prod.idCategoria,
        nombre: prod.nombre,
        precio: prod.precio,
        stock: prod.stock,
        img: prod.img
      })
  })
}

const getProductos = async() => {
  const productos = await getDocs(collection(db, "catalogo"))
  const items = productos.docs.map((prod) => {
    return {...prod.data(), id: prod.id}
  })
  return items
}

const getProducto = async(id) => {
  const producto = await getDoc(doc(db, "catalogo", id))
  const item = {...producto.data(), id: producto.id}
  return item 
}

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db,"catalogo", id), info)
  return estado
}

const deleteProducto = async(id) =>{
  const estado = await deleteDoc(doc(db, "catalogo", id))
  return estado
}

const createOrdenCompra = async(cliente, preTot, fecha) => {
  const ordenDeCompra = await addDoc(collection(db, "ordenesDeCompra"),
    {
      nombreCompleto: cliente.nombre,
      email: cliente.email,
      dni: cliente.dni,
      direccion: cliente.direccion,
      celular: cliente.celular,
      fecha: fecha,
      precioTotal: preTot
    })
  return ordenDeCompra
}

const getOrdenCompra =  async (id) => {
  const ordenDeCompra = await getDoc(doc(db, "ordenesDeCompra", id))
  const item = {...ordenDeCompra.data(), id: ordenDeCompra.id}
  return item
}

export {getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}
