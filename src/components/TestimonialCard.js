import React from "react"

function TestimonialCard({testimonial}){
    return(
        <div>
            <h2>Testimonial from {testimonial.first_name} {testimonial.last_initial}:</h2>
            <p>{testimonial.testimonial}</p>
        </div>
    )
}

export default TestimonialCard;