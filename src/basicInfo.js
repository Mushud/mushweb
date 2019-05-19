import React from 'react';
import './basicinfo.css';

class BasicInfo extends React.Component{
    render(){
        return(
            <section className="basicInfo" id="basic">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6" id="bsInfo">
                            <div className="header">
                            <h1 className="ui dividing header">Basic Info</h1>
                            </div>
                                          
                            <div className="content">   
                                    <h2 className="ui header">Full Name</h2>
                                    <p>Mushud Kofi Abu</p>
                                    <h2>Date of Birth</h2>
                                    <p>30, July, 1999</p>
                                    <h2>Phone</h2>
                                    <a href="callto:+233458215801"><p>+233 54 821 5801</p></a>
                                    <a href="callto:+233207357633"><p>+233 20 735 7633</p></a>
                                    <p><a href="mailto:mushudkofiabuu@gmail.com">mushudkofiabuu@gmail.com</a></p>
                            </div>
                           
                        </div>

                        <div className="col-12 col-lg-5" id="edu">
                            <div className="header">
                                    <h1 className="ui dividing header">Currently</h1>    
                            </div>

                            <div className="content">
                                <h2>Student at <b>University of Ghana</b></h2>
                                <h3>Majoring in Bsc. Computer Science</h3>
                                <h2>Founder of <a href="https://elliinc.com"> Elli Incorporation</a></h2>    
                            </div>
                        </div>

                
                    </div>
                </div>
                    
            </section>
        );
    }

}

export default BasicInfo;