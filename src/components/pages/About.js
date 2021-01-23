import React from 'react'
import Vmc from './inc/Vmc'

function About() {
    return (
    <>
    <section className="py-4 bg-info">
        <div className="container">
            <div className='row'>
                <div className='col-md-4 my-auto'>
                    <h4>About Us</h4>
                </div>
                <div className='col-md-8 my-auto'>
                    <h6 className="float-end">Home / About us</h6>
                </div>
            </div>
        </div>
    </section>

    <section className="section bg-light border-bottom">
        <div className="container">
            <h5 className="main_heading">Our Company</h5>
            <div className="underline"></div>
            <p>
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
        </div>
    </section>    

        <Vmc/>

    </>
    )
}

export default About
