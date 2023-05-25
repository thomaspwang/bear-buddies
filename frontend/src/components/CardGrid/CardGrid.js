import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import EventCard from "../EventCard/EventCard";

function CardGrid( {cardData} ) {
    return (
        <div>
            <Row xs="auto">
            {cardData.map((i) => {
                return (
                  <Col>
                    <EventCard title={i.title} image={i.image} author={i.author} authorPic={i.authorPic} maxCap={i.maxCap} currCap={i.currCap} location={i.location} time={i.time} description={i.description} joined={i.joined} owner={i.owner}></EventCard>
                  </Col>
                )
            })}
            </Row>
        </div>
    )
}

export default CardGrid;