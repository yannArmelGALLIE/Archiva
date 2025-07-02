import renderNavbar from "../../widgets/render-navbar";
import FilterBar from "../../widgets/filter-bar";
import profil from "../../../styles/img/profil.jpg";
import { useState } from "react";

const User = () => {
  const users = [
    {
      id: 1,
      name: "Yann",
      role: "Administrateur",
      status: "online",
      date: "2024-05-14",
    },
    {
      id: 2,
      name: "Fatou",
      role: "Agent",
      status: "offline",
      date: "2023-10-09",
    },
    // ...
  ];

  const [activeButton, setActiveButton] = useState("tous");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFilter = (filters) => {
    let newUsers = [...users];

    if (!filters || filters.length === 0) {
      setFilteredUsers(users);
      return;
    }

    // Appliquer les filtres en chaîne
    filters.forEach((filter) => {
      switch (filter.value) {
        case "connecte":
          newUsers = newUsers.filter((u) => u.status === "online");
          break;
        case "non-connecte":
          newUsers = newUsers.filter((u) => u.status !== "online");
          break;
        case "alpha-asc":
          newUsers.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "alpha-desc":
          newUsers.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "recent":
          newUsers.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case "oldest":
          newUsers.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        default:
          break;
      }
    });

    setFilteredUsers(newUsers);
  };

  const buttons = [
    { id: "tous", label: "Tous" },
    { id: "admin", label: "Administrateurs" },
    { id: "archiviste", label: "Archivistes" },
    { id: "agent", label: "Agent" },
  ];

  const [fileName, setFileName] = useState(null);

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleExport = () => {
    const data = "Nom,Role\nYann,Admin\nFatou,Agent";
    const blob = new Blob([data], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "utilisateurs.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

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
        <div>
          <div>
            <FilterBar onFilterChange={handleFilter} />
          </div>
          <div>
            <button
              onClick={() => document.getElementById("importFile").click()}
            >
              Importer <span className="material-icons">download</span>
            </button>
            <input
              type="file"
              id="importFile"
              onChange={handleImport}
              style={{ display: "none" }}
            />
            <button onClick={handleExport}>
              Exporter <span className="material-icons">upload</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
