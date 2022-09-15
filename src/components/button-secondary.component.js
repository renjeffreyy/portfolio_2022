import * as React from "react";
import { Link } from "gatsby";

export const ButtonSecondary = ({ url, children, target }) => {
  return (
    <>
      <Link target={ target } to={url} className="rounded border border-secondary text-secondary hover:bg-secondary_hover px-4 py-3 inline-block">
        {children}
      </Link>
    </>
  );
};
