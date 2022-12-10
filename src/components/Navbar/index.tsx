import { SyntheticEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import iconSearch from "../../assets/ic_Search.png";
import logo from "../../assets/Logo_ML.png";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    
    if (searchValue.trim().length > 0) {
      navigate(`/items?search=${searchValue}`);
    }
  }, [navigate, searchValue]);

  return (
    <div className="navbar">
      <span className="nav-search">
        <img src={logo} alt="logo" onClick={() => navigate('/')}/>
        <form onSubmit={onSubmit}>
          <input
            className="nav-search-input"
            type="search"
            placeholder="Nunca dejes de buscar"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="nav-search-btn">
            <img src={iconSearch} alt="search" />
          </button>
        </form>
      </span>
    </div>
  );
};

export default Navbar;
