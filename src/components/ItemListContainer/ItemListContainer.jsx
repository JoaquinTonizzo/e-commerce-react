import "./ItemListContainer.css";
import ItemList from "./../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./../Spinner/Spinner";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "./../../services/firebase/firebaseConfig"; 

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "items"), where("category", "==", categoryId))
      : collection(db, "items");

    getDocs(collectionRef).then((response) => {
      const productsAdapted = response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProducts(productsAdapted);
    })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h2 style={{ color: "white" }}>{error}</h2>;
  }

  return (
    <div className="ItemListContainer">
      {products.length ? (
        <ItemList products={products} />
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ItemListContainer;
