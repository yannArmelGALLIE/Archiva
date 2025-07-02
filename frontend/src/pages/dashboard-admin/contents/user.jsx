import renderNavbar from "../../widgets/render-navbar";
import { useState } from "react";

const User = () => {
  const [activeButton, setActiveButton] = useState("tous");

  const buttons = [
    { id: "tous", label: "Tous" },
    { id: "admin", label: "Administrateurs" },
    { id: "archiviste", label: "Archivistes" },
    { id: "agent", label: "Agent" },
  ];
  return (
    <div>
      {renderNavbar("Utilisateurs")}
      <div className="user-main-content">
        <div>
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveButton(btn.id)}
              className={activeButton === btn.id ? "btn-active" : ""}
            >
              <p>{btn.label}</p>
              <div>
                <p>38</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
