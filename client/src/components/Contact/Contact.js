import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            
            <div className="container-fluid">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112061.09262729759!2d77.208022!3d28.632485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x644e33bc3def0667!2sIndior+Tours+Pvt+Ltd.!5e0!3m2!1sen!2sus!4v1527779731123" width="100%" height="650px" frameBorder={0} style={{border: 0}} allowFullScreen />
            </div>
            
            <div className="contentcontact">
            <h1>CONTACT US</h1>
            <h2 style={{fontSize:"15pt"}} >OUR ADDRESS</h2>
            
            <span>Vietnam</span> <br/>
            <b>Office: Rmit University, 702 Nguyen Van Linh - Highway</b> <br/>
            <i>District 7, HCM</i>

            <p>Please fill this short form to give your requirements. We will get back to you within some hours.</p>
            
            
            

            </div>
            
            
                 


                
            </div>
        );
    }
}

export default Contact;