import React from 'react'

function Contact() {
    return (
        <>
    <section className="py-4 bg-info">
        <div className="container">
            <div className='row'>
                <div className='col-md-4 my-auto'>
                    <h4>Contact Us</h4>
                </div>
                <div className='col-md-8 my-auto'>
                    <h6 className="float-end">Home / Contact Us</h6>
                </div>
            </div>
        </div>
    </section>



   <section className="section">
        <div className="container">
            <div className='card shadow'>
                <div className='card-body'>
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Contact Form</h6>
                            <hr/>
                            <div className="form-group">
                                <label className="mb-1">Full Name</label>
                                <input  class="form-control" type="text" placeholder="Enter You Name"/>
                            </div>
                            <div className="form-group">
                                <label className="mb-1">Phone Number</label>
                                <input  class="form-control" type="number" placeholder="Enter You Phone Number"/>
                            </div>
                            <div className="form-group">
                                <label className="mb-1">Email Address</label>
                                <input  class="form-control" type="email" placeholder="Enter You Email"/>
                            </div>
                            <div className="form-group">
                                <label className="mb-1">Message</label>
                                <textarea class="form-control" name="" id="" rows="3"></textarea>
                            </div>
                            <div className="form-group py-3">
                                <button type="button" class="btn btn-primary shadow w-100">Send Message</button>
                            </div>
                        </div>
                        <div className="col-md-6 border-start">
                            <h5 className="main_heading">Address Information</h5>
                            <div className="underline"></div>
                            <p>#64, Mohakhali, Dhaka, Bangladesh</p>
                            <p>+888 012xxxxx8</p>
                            <p>email@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>


    </>
    )
}

export default Contact
