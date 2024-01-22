import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    image: '',
    price: '',
    colection: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/store-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }

      console.log('Dados enviados com sucesso');
    } catch (error) {
      console.error('Falha ao enviar os dados:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome do Produto" /><br />
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="URL da Imagem" /><br />
      <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Preço" /><br />
      <input type="text" name="colection" value={formData.colection} onChange={handleChange} placeholder="Coleção" /><br />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Descrição do Produto" /><br />
      <button type="submit">Enviar</button>
    </form>
  );
}
