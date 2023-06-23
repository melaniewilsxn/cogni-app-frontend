import React from "react"
import { Container, Card } from "semantic-ui-react";
import TutorCard from "./TutorCard"
import { tutors } from "../data"

function TutorList(){

    const displayTutor = tutors.map((tutor) => {
        return <TutorCard tutor={tutor} key={tutor.id}/>
    })

    return(
        <Container>
            <Card.Group itemsPerRow={4}>
                {displayTutor}
            </Card.Group>
        </Container>
    )
}

export default TutorList;