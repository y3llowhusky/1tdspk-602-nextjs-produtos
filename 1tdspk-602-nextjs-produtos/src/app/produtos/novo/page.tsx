"use client";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NovoProdutoPage = () => {
  const navigate = useRouter();
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    quantity: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/produtos",
        options
      );

      if (response.status === 201) {
        navigate.push("/produtos");
      } else {
        console.log("nao deu erro");
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Preço</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="quantity">Estoque</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};
export default NovoProdutoPage;
