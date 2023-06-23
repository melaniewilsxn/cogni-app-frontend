import React, { useState, useEffect } from "react"
import { Container, Card } from "semantic-ui-react";
import TutorCard from "./TutorCard"

function TutorList(){

    const [tutorList, setTutorList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/tutors")
        .then(res => res.json())
        .then(data => setTutorList(data))
    }, [])

    const displayTutor = tutorList.map((tutor) => {
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