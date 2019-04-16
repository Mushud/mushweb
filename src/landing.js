import React from 'react';


class Landing extends React.Component{
    render(){
        return(
            <div>
                <header className="App-header home" id="home-page" style={{backgroundPosition :"50% 0px"}}>

                <div className="container">
              
                    <div className="row">
                        <div className="col-12 col-lg-7 order-2 order-lg-1 header-text">
                                <div className="row center">
                                    <div className="intro">
                                     <h1>Hi, I'm Mushud Kofi Abu</h1>
                                     <br />
                                     <h2> Student <br /> Develover <br /> Designer <br /> Problem Solver</h2>
                                    </div>
                                </div>
                        </div>
                        <div className = "col-12 col-lg-5 order-1 order-lg-2">
                            <img alt="" src="/static/media/coco.28ff7c85.jpg" width="100%"></img>
                        </div>
                    </div>
                    </div>
                </header>
            </div>
            
        );
    }
}

export default Landing;