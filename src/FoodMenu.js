import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function FoodMenu({ snacks, drinks, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          {window.location.href.includes("snacks") ||
          window.location.href.includes("drinks") ? (
            <ListGroup>
              {window.location.href.includes("snacks")
                ? snacks.map((snack) => (
                    <Link to={`/snacks/${snack.id}`} key={snack.id}>
                      <ListGroupItem>{snack.name}</ListGroupItem>
                    </Link>
                  ))
                : drinks.map((drink) => (
                    <Link to={`/drinks/${drink.id}`} key={drink.id}>
                      <ListGroupItem>{drink.name}</ListGroupItem>
                    </Link>
                  ))}
            </ListGroup>
          ) : null}
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
