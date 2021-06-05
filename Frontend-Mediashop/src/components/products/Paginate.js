import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, prev, next, query = "" }) => {
  return (
    pages > 1 && (
      <nav className="align-center">
        <ul className="pagination">
          <li>
            <Link
                to={query ? `/search/${query}/page/${prev}` : `/page/${pages.prev}`}
                className="waves-effect"
              style={{ height: 33, width: 50 }}
            >
              <i className="material-icons">chevron_left</i>
            </Link>
          </li>
          {[...Array(pages).keys()].map((x) => (
            <li>
              <Link
                className="waves-effect align-center"
                style={{ height: 33, width: 50 }}
                key={x + 1}
                to={query ? `/search/${query}/page/${x + 1}` : `/page/${x + 1}`}
              >
                <span active={x + 1 === page}>{x + 1}</span>
              </Link>
            </li>
          ))}
          <li>
          <Link
              to={query ? `/search/${query}/page/${next}` : `/page/${next}`}
              className="waves-effect"
              style={{ height: 33, width: 50 }}
            >
              <i className="material-icons">chevron_right</i>
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Paginate;
