import React, { Component } from "react";


export default class MerchFeedbackComponent extends Component {

    render(){
        return(
            <div> 
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="intro-message">
                                    <h1>Injection Merchandise Feedback</h1>
                                    <hr class="intro-divider"/>
                                    
                                    <div align="center">
                                        <p class="lead">All of our Merchandise Items and Orders for our Merchandise are processed, printed, shipped, handled, and supported by <a href="https://www.redbubble.com/">Red Bubble</a>. Injection does NOT provide ANY form of customer support, nor do we handle returns, refunds, or any other related service for our merchandise. Injection only designs, and selects the products we desire to sell through Red Bubble. As a result we are not responsible for any issues you have ordering our merchandise. If you have an issue with your order, or a problem with the product you received please click <a href="https://help.redbubble.com/hc/en-us">here</a> to learn how to resolve the issue with Red Bubble.</p>
                                        <p class="lead">While we don't provide support, nor do we garuantee any product quality, we also do not wish for our customers to be purchasing bad products.</p> <p class="lead"> <b>That's what this form is for!</b></p> <p class="lead">We are unable to order and inspect every product that we offer in our shop. As a result, if you receive something that turns out bad, or if the product is horrible quality <b>WE WANT TO KNOW!</b></p>
                                        
                                        <p class="lead">Likewise, if you receive an awesome product, that you love, from our store feel free to use this form to let us know about that! Any great customer experiences you wish to share, or just a general love and support for Injection is very much welcomed. We love to hear the confirmation that what we provide is good, and makes people happy. Thank you!</p>
                                        
                                        <p class="lead">  Again, we are not responsible, and assume no fault for anything negative our Red Bubble shop may cause, please resolve any refunds, shipping issues, etc...with the customer support at Red Bubble. We want to ensure they are distributing quality products, and it's your job to helps us!</p>
                                        
                                        <p class="lead">Previously our shop was provided via <a href="http://www.cafepress.com/">Cafe Press</a>. You can still buy merch from that shop <a href="http://www.cafepress.com/injectionsoftwaremerch">here!</a> However, please note that this is no longer our official store, and we will not update or support the products on it. Please handle any issues you have regarding refunds, shipping issues, etc...with the customer support at Cafe Press. Thanks for supporting Injection!</p>
                                        
                                    </div>
                                    <div class="margin-bottom-5-perc" align="center">
                                        <a href="#form" class="btn btn-default btn-lg site-icon-theme">Go to Form<br/><i class="fa fa-3x fa-chevron-down site-icon-theme" aria-hidden="true"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="form" align="center">
                <iframe title="Merch Feedback Form" src="https://docs.google.com/forms/d/e/1FAIpQLSeBjzfldBkTvsP1_oqhPCpJ54LdxAPX8mqjPmABdoCan81isw/viewform?embedded=true" width="760" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
        </div>
        );
    }

}