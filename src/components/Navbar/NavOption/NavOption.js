import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import "./NavOption.css";

const NavOption = (props) => {
  const { icon, page, action, linkTo } = props;
  return (
    <Link to={!linkTo ? "" : `${linkTo}`}>
      <Button
        color="secondary"
        outline
        block
        type="button"
        className="nav-button-item"
        onClick={!action ? "" : action}
      >
        <div className="flex-center nav-logo">
          <div className="logo-divider pl-5 mx-2">
            <img
              alt="home-icon"
              src={require(`../../../assets/img/icons/${icon}`)}
            />
          </div>{" "}
          <div className="text-divider">
            <span className="hello-user">{`${page}`}</span>
          </div>
        </div>
      </Button>
    </Link>
  );
};

export default NavOption;
