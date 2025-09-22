import { useState } from "react";
import "../index.css";

export default function UserModal({ isOpen, onClose }) {
  const [user, setUser] = useState({
    nome: "Murilo Rodrigues",
    email: "murilo@email.com",
    cargo: "Desenvolvedor",
    matricula: "123456",
    senha: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    console.log("Usuário salvo:", user);
    onClose(); // Fecha o modal depois de salvar
  };

  return (
    <div className="user-modal-overlay">
      <div className="user-modal">
        <h2>Editar Usuário</h2>

        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={user.nome}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label>Cargo</label>
        <input
          type="text"
          name="cargo"
          value={user.cargo}
          onChange={handleChange}
        />

        <label>Matrícula</label>
        <input
          type="text"
          name="matricula"
          value={user.matricula}
          onChange={handleChange}
        />

        <label>Senha</label>
        <input
          type="password"
          name="senha"
          value={user.senha}
          onChange={handleChange}
        />

        <div className="user-modal-actions">
          <button className="user-modal-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="user-modal-save" onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}