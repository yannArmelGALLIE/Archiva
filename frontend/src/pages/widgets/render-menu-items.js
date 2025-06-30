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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActivePage(item.id);
            }}
            className={activePage === item.id ? "active-link" : ""}
          >
            <span className="material-icons">{item.icon}</span>
            {item.label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default renderMenuItems;
