import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, query = '' }) => {
    return (
        pages > 1 && (
            <Pagination class="d-flex flex-row  -contenjustifyt-end">
                <li className="page_nav m-1">
                    <a class="page-link" href="#," aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {[...Array(pages).keys()].map((x) => (
                    <li className="page-item">
                        <LinkContainer className="m-1 page_nav"
                            key={x + 1}
                            to={query ? `/search/${query}/page/${x + 1}` : `/page/${x + 1}`}

                        >
                            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                        </LinkContainer>

                    </li>
                ))}
                <li className="page_nav m-1">
                    <a className="page-link" href="#," aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </Pagination>
        )
    )
}

export default Paginate
