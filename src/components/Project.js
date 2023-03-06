import React from "react";
import { Card, Button } from "react-bootstrap";

// add image into the props to add a sampe image if you want to
const Project = (props) => {
    const { title, image, description, githubLink } = props;

    return (
        <Card className="mt-3 mb-5 mx-3 p-1">
            <Card.Img variant="top" src={image} />
            <Card.Body align="middle">
                <Card.Title align="middle">{title}</Card.Title>
                <Card.Text align="middle">{description}</Card.Text>
                <Button
                variant="secondary"
                href={githubLink}
                rel="noreferrer"
                target="_blank"
                > GitHub Link
                </Button> {" "}
            </Card.Body>
        </Card>
    );
}

export default Project;