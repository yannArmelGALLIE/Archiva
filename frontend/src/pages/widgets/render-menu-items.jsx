import { Link } from "react-router-dom";

const renderMenuItems = (title, items, activePage, setActivePage) => {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((item) => (
        <div key={item.id}>
          <div
            className={
              activePage === item.id
                ? "menu-indicator active"
                : "menu-indicator"
            }
          ></div>
          <Link
            to={`/dashboard-admin/${item.id}`}
            onClick={(e) => {
              setActivePage(item.id);
            }}
            className={activePage === item.id ? "active-link" : ""}
          >
            <span className="material-icons">{item.icon}</span>
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default renderMenuItems;
