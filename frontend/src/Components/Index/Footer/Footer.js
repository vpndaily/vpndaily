import React, { Component } from 'react'
import './Footer.css'



export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onChatClick = () => {
        const chat__showHelp = document.getElementById("chat__showHelp")
        const chat__Chat = document.getElementById("chat__Chat")

        chat__showHelp.classList.toggle('chat__showHelp__after')
        chat__Chat.classList.toggle("chat__Chat__after")
    }


    render() {
        return ( 
            <div>
               
               <footer className="bg-dark text-center text-white">
                <div className="container p-4  pb-0">
                
                <section className="mb-5">
                    {/* facebook */}
                        <a class="btn btn-link btn-floating btn-lg  text-light s-1 facebook" href="#!" type="button">
                        <i class="fab fa-facebook-f"></i></a>
                    {/* twitter */}
                        <a class="btn btn-link btn-floating btn-lg text-light s-1 twitter" href="#!" role="button">
                        <i class="fab fa-twitter"></i></a>
                    {/* Instagram  */}
                        <a class="btn btn-link btn-floating btn-lg text-light s-1 instagram" href="#!" role="button">
                        <i class="fab fa-instagram"></i></a>
                    {/* Google */}
                        <a class="btn btn-link btn-floating btn-lg text-light s-1 google" href="#!" role="button">
                        <i class="fab fa-google"></i></a>
                    {/* Linkedin */}
                        <a className="btn btn-link btn-floating btn-lg text-light s-1 linkedin" href="#!" role="button">
                        <i class="fab fa-linkedin"></i></a>
                    {/* Github */}
                        <a class="btn btn-link btn-floating btn-lg text-light s-1 github" href="#!" role="button">
                        <i class="fab fa-github"></i></a>
                </section>
                
                <div className="row">
                    <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <dl className="Contact-list"></dl>
                    <dt>Email:</dt>
                    <dd className="info-email">info@vpndaily.eu</dd>
                    <dt>Tech Support:</dt>
                    <dd className="support-email">support@vpndaily.eu</dd>
                </div>

                <div className="col-md-4">
                    <dt>Live Chat</dt>
                <dd>
                    <a class="btn btn-outline-light btn-floating m-1" onClick={this.onChatClick} role="button">
                    <i class='far fa-comments'></i></a>
                </dd>
                </div>
                
                <div className="col-md-4">
                    <h5>Help</h5>
                    <dl className="Help-list"></dl>
                    <dd><a href="/faq">FAQ</a></dd>
                    <dd><a href="/privacypolicy">Privacy Policy</a></dd>
                    <dd><a href="/generalterms">Terms Of service</a></dd>    
                </div>
                </div>

                <div className="text-center p-3 copy">
                    <a>2021 Copyright DailyVPN©.All rights reserved </a>
                </div>
                
                
                </div>
               
               </footer>
            </div>
        )
    }
}