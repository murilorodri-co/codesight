import { useState } from "react";
import { Icon } from "@iconify/react";
import UserModal from "./UserModal"; // importa o modal
import "../index.css";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);

  const icons = [
    "bxs:dashboard",
    "mingcute:stock-fill",
    "mingcute:user-2-fill",
    "solar:exit-bold"
  ];

  const handleIconClick = (index, iconName) => {
    if (iconName === "mingcute:user-2-fill") {
      setShowUserModal(true);
      setActiveIndex(index);
    } else {
      setActiveIndex(index);
    }
  };

  const handleCloseUserModal = () => {
    setShowUserModal(false);
    setActiveIndex(null); // reseta o ícone ativo
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          {icons.map((iconName, index) => (
            <Icon
              key={index}
              icon={iconName}
              width="34"
              height="34"
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleIconClick(index, iconName)}
            />
          ))}
        </div>
      </div>

      {/* Modal do usuário */}
      <UserModal isOpen={showUserModal} onClose={handleCloseUserModal} />
    </>
  );
}