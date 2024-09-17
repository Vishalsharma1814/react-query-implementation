import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const params = useParams();
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(`https://dummyjson.com/products/${params.productId}`, newProduct);
    },
  });
  const fetchProduct = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: fetchProduct,
    //  staleTime:10000
  });
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }
  if (mutation.isLoading) {
    return <h3>Updating...</h3>;
  }
  if (mutation.isError) {
    return <h3>{mutation.error.message}</h3>;
  }
  return (
    <>
      <div>Product: {product?.title}</div>
      <button className="btn btn-primary" onClick={() => mutation.mutate({ title: "Updated product" })}>
        Update
      </button>
    </>
  );
};

export default Product;
