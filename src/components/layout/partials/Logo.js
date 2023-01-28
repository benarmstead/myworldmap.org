import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require("./../../../assets/images/favicon.png")}
            alt="Open"
            width={32}
            height={32}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
