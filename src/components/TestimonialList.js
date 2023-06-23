import React, { useState, useEffect } from "react"
import TestimonialCard from "./TestimonialCard"

function TestimonialList(){

    const [testimonialList, setTestimonialList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/testimonials")
        .then(res  => res.json())
        .then(data => setTestimonialList(data))
    }, [])

    const displayTestimonials = testimonialList.map((testimonial) => {
        return <TestimonialCard testimonial={testimonial} key={testimonial.id}/>
    })

    return(
        <div>
            {displayTestimonials}
        </div>
    )
}

export default TestimonialList;