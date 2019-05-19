import React from 'react';


class Landing extends React.Component{
    render(){
        return(
            <div className="App-header" id="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-2 order-lg-1 header-text">
                                <div className="jumbotron">
                                    <div className="intro">
                                     <h1>Mushud Kofi</h1>
                                     <h5>I'm Mushud Kofi Abu. I'm a student and Software Developer. I've worked with start-ups. I'm passionate about my work.</h5>
                                     <br />
                                     <h2> Student <br /> Develover <br /> Designer <br /> Problem Solver</h2>
                                    </div>
                                </div>
                        </div>
                        <div className = "col-12 col-lg-6 order-1 order-lg-2">
                          
                        </div>
                    </div>
                    </div>
            </div>
            
        );
    }
}

export default Landing;