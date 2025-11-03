"use client";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

const ProdutosPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:3000/api/produtos");
      const data = await response.json();
      setProductList(data);
    };

    loadData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Estoque</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>R$ {item.price.toFixed(2)}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>Total de produtos: {productList.length}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProdutosPage;
