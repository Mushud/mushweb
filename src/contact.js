import React from 'react';
import './contact.css';

export default class Contact extends React.Component{
    render(){
        return(
                <div>
                    <div className="top-section">
                        <h1> Contact Me </h1>
                        <h3>Get in touch with Mushud </h3>
                    </div>

                    <div className="ui four stackable cards">
                        <div className="ui red card">
                            <div className="content">
                            <i className="google large red icon"></i>
                                <h2 className="ui dividing header">Mushud Kofi Abuu</h2>
                                <div className="meta">
                                    <a href="mailto:mushudkofiabuu@gmail.com">mushudkofiabuu@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="ui blue card">
                            <div className="content">
                            <i className="twitter large blue icon"></i>
                                <h2 className="ui dividing header">Mushd Kofi</h2>
                                <div className="meta">
                                   <a href="https://twitter.com/Mush_ud/">@mush_ud</a>
                                </div>
                            </div>
                        </div>
                        <div className="ui green card">
                            <div className="content">
                            <i className="whatsapp large green icon"></i>
                                <h2 className="ui dividing header">WhatsApp</h2>
                                <div className="meta">
                                    <a href="https://api.whatsapp.com/send?phone=233548215801">Chat With Me</a>
                                </div>
                            </div>
                        </div>
                        <div className="ui blue card">
                            <div className="content">
                            <i className="linkedin  large blue icon"></i>
                                <h2 className="ui dividing header">Linked In</h2>
                                <div className="meta">
                                    <a href="https://gh.linkedin.com/in/mushud-kofi-abu-997b77a0">Mushud Kofi Abu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}