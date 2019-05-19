import React from 'react';
import './education.css';

export default class Education extends React.Component{
        render(){

            return(
                <div className="eduBackground" id="education">

                    <div className="container">
                        <div className="overallHeader">
                        <h1>Educational Background</h1>
                        </div>  

                        <div className="content">
                            <div className="row">
                                <div className="col-12 col-lg-3">
                                    <div className="year">
                                        <h1>2017 - Present</h1>
                                    </div>
                                    <div className="content">
                                        <h2>University</h2>
                                        <h3>University of Ghana</h3>
                                        <h5>Ghana- Accra</h5>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="year">
                                        <h1>2014 - 2017</h1>
                                    </div>
                                    <div className="content">
                                        <h2>Secondary School</h2>
                                        <h3>Presbyterian Boys Secondary School</h3>
                                        <h5>Ghana- Accra</h5>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="year">
                                        <h1>2011 - 2014</h1>
                                    </div>
                                    <div className="content">
                                        <h2>Junior Secondary School</h2>
                                        <h3>Yesu Mmo Schools Ltd.</h3>
                                        <h5>Ghana- Dormaa Ahenkro</h5>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="year">
                                        <h1>2001-2011</h1>
                                    </div>
                                    <div className="content">
                                        <h2>Primary School</h2>
                                        <h3>Yesu Mmo Schools Ltd</h3>
                                        <h5>Ghana- Dormaa Ahenkro</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            )
        }
}
