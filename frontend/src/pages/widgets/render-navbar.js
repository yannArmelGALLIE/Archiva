const renderNavbar = (title) => {
  return (
    <div class="navbar">
      <div>{title}</div>
      <div>
        <span className="material-icons">search</span>
        <input type="text" placeholder="Rechercher..."></input>
      </div>
      <div>
        <div>
          <span className="material-icons">mail</span>
        </div>
        <div>
          <span className="material-icons">notifications</span>
        </div>
      </div>
    </div>
  );
};

export default renderNavbar;
