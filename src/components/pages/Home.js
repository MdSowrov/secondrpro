import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../inc/Slider'
import Vmc from './inc/Vmc'
import Service1 from '../images/5.jpg'
import Service2 from '../images/6.jpg'
import Service3 from '../images/7.jpg'


function Home() {
    return (
        <>
        <Slider/>

        <div className="section">
            <div className="container">
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2 className="main_heading">Our Company</h2>
                        <div className="underline mx-auto"></div>
                        <p>
                        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                        </p>
                        <Link to="/about" className="btn btn-warning shadow" >Read More</Link>
                    </div>
                </div>
            </div>
        </div>


        {/* Vision, mission and values */}

        <Vmc/>



        {/* Service Section */}

        <section className="section bg-light border-top">
            <div className="container">
                <div className='row'>
                    <div className='col-md-12 md-5 pb-5 text-center'>
                        <h2 className="main_heading">Our Services</h2>
                        <div className="underline mx-auto"></div>
                    </div>

                    <div className="col-md-4">
                       <div className="card shadow">
                           <img src={Service1} className="w-100 border-bottom" height="350px" alt="service"/>
                           <div className="card-body">
                                <h5>Service 1</h5>
                                <div className="underline"></div>
                                <p>
                                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.
                                </p>
                                <Link to='/services' className="btn btn-link">Read More</Link>
                           </div>
                       </div> 
                    </div>
                    <div className="col-md-4">
                       <div className="card shadow">
                           <img src={Service2} className="w-100 border-bottom" height="350px" alt="service"/>
                           <div className="card-body">
                                <h5>Service 2</h5>
                                <div className="underline"></div>
                                <p>
                                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.
                                </p>
                                <Link to='/services' className="btn btn-link">Read More</Link>
                           </div>
                       </div> 
                    </div>
                    <div className="col-md-4">
                       <div className="card shadow">
                           <img src={Service3} className="w-100 border-bottom" height="350px" alt="service"/>
                           <div className="card-body">
                                <h5>Service 3</h5>
                                <div className="underline"></div>
                                <p>
                                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting.
                                </p>
                                <Link to='/services' className="btn btn-link">Read More</Link>
                           </div>
                       </div> 
                    </div>

                </div>
            </div>
        </section>   


        </>
    )
}

export default Home
