import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import React from "react";

export default function EventCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <h1 className="head">Test</h1>
                    <Card.Text className="primary">
                        Description: testing stuff
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src='/src/assets/boba.png' alt="Image Broke" />
            </Card>
        </div>
        
    )
}