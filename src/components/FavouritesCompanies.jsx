//import Book from "./Book";

import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const FavouritesCompanies = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Your Favourite Company</h1>
          <Link to="/">Home</Link>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.length > 0 ? (
              favourites.map((company, i) => (
                <ListGroup.Item key={i} className="d-flex justify-content-between">
                  {company}
                  <button
                    type="button"
                    className={"btn btn-danger"}
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: company });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </button>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No Bookmark found</ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesCompanies;
