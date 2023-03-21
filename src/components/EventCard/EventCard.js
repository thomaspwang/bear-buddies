import Boba from "@/assets/boba.png";
import { Card } from "react-bootstrap";
import React from "react";

export default function EventCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <h1 className="head">Test</h1>
                <Card.Text className="primary">
                    Description: testing stuff
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={Boba} />
        </Card>
    )
}