import React from "react"
import { Card } from "semantic-ui-react";

function TutorCard({tutor}){
    console.log(tutor)
    return(
        <Card>
            <div className="image">
                <img src={tutor.image} />
            </div>
            <div>
                <div>{tutor.name}</div>
            </div>
        </Card>
    )
}

export default TutorCard;