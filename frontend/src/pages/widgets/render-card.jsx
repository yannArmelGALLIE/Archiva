import { Link } from "react-router-dom";

const renderCard = (items) => {
  return (
      <div className="card-content">
        {items.map((item) => {
          return (
            <div>
              <Link to={`/dashboard-admin/${item.link}`}>
                <div>
                  <p>{item.id}</p>
                </div>
                <div>{item.label}</div>
              </Link>
            </div>
          );
        })}
      </div>
  );
};

export default renderCard;
