import React, { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/store-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome }),
    });

    if (response.ok) {
      // Tratar resposta de sucesso
      console.log("Dados enviados com sucesso");
    } else {
      // Tratar erros
      console.log("Erro ao enviar dados");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
