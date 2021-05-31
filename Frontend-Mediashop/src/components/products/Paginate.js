import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, query = "" }) => {
  return (
    pages > 1 && (
      <nav className="align-center">
        <ul className="pagination">
          <li>
            <a
              href=";"
              className="waves-effect"
              style={{ height: 33, width: 50 }}
            >
              <i className="material-icons">chevron_left</i>
            </a>
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
            <a
              href=";"
              className="waves-effect"
              style={{ height: 33, width: 50 }}
            >
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Paginate;
