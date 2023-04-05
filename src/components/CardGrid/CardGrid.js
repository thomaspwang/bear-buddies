import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import EventCard from "../EventCard/EventCard";

function CardGrid( {cardData} ) {
    return (
        <div>
            <Row xs={3}>
            {cardData.map((i) => {
                return (
                  <Col>
                    <EventCard title={i.title} image={i.image} author={i.author} authorPic={i.authorPic}></EventCard>
                  </Col>
                )
            })}
            </Row>
        </div>
    )
}

export default CardGrid;