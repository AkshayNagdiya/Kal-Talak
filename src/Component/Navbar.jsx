import React, { useContext, useState } from "react";
import NewsContext from "../Context/Context";
import { FetchNews } from "../Context/Action";

const Navbar = () => {
  const { dispatch } = useContext(NewsContext);

  const [text, settext] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = await FetchNews(text);
    dispatch({
      type: "GET_NEWS",
      payload: { news: data, topic: text },
    });
    settext("");
  };

  const handleCategory = async (category) => {
    const data = await FetchNews(category);
    dispatch({
      type: "GET_NEWS",
      payload: { news: data, topic: category },
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{ color: "red", fontWeight: "900", fontSize: "30px" }}
        >
          Kal Tak
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("Breaking News")}
              >
                Breaking News
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("Computer Science")}
              >
                Computer Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("Education")}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("Health")}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("Politics")}
              >
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("Sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("Bollywood")}
              >
                Bollywood
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("Hollywood")}
              >
                Hollywood
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleCategory("International")}
              >
                International
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handlesubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
