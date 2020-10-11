import React, { Component } from "react";
import ServicePrices from "./ServicePrices"
import { Card } from "react-bootstrap";
import SpinnerDark from "./SpinnerDark"

export default class ServicePricesRenderer extends Component{

    // Downloads API Fetch
    constructor(props) {
        super(props);
    
        this.state = {
          showPricing: false,
          isLoading: false
        };
      }

    
    componentDidMount() {
        this.setState({isLoading: true});
        let url = "https://raw.githubusercontent.com/InjectionSoftwareandSecurityLLC/offsec-request-form-status/master/status.json";
        //console.log("Req URL", url)
        fetch(url)
          .then(this.handleErrors)
          .then(response => response.json())
          .then(data => {
             //console.log("Raw Req Data", data)
             this.setState({showPricing: data.showPricing});
            })
          .catch(error => console.log("Could not locate status.json..."));
          this.setState({isLoading: false})
    }

    displayPricing(){
        if(this.state.showPricing){
            return(
                <ServicePrices />
            )
        }else{
            return(
                <div>
                    <Card className="dark-card-white" text="white">
                        <Card.Header><Card.Title><b>Other Firms We Recommend!</b></Card.Title></Card.Header>
                        <Card.Body>
                        <Card.Text>
                        Currently our doors are closed for providing offensive security services. This happens from time to time since Injection Software and Security LLC is a small business with many focuses.
                        <br/>
                        <br/>
                        Normally this section would detail all of our services, and their respective general pricing, as alluded to in sections below. Since we are not offering services at all right now, we have replaced this section with a list of firms we recommend that can hopefully provide the offensive security services you are seeking!
                        <br/>
                        <br/>
                        It should be noted that Injection Software and Security LLC has no official affiliation with, or agreement to promote, any of these organizations. Injection Software and Security LLC is NOT responsible for any of the services provided by these organizations and they are not affiliated or responsible for any services provided by Injection Software and Security LLC.
                        <br/>
                        <br/>
                        These are purely genuine recommendations to promote our common goal of making your organization more secure. 
                        Since these lovely folks are technically our business competition in some respects, all we ask is that you please continue to consider Injection Software and Security LLC for your testing needs whenever our doors are open! 
                        This list is subject to change at any time by Injection Software and Security LLC. The opinions of these organizations do not reflect those of Injection Software and Security LLC.
                        <br/>
                        <br/>
                        <b>Keep an eye on this section to see if our offerings are on display again, but in the mean time check out these lovely folks:</b>
                        <br/>
                        <br/>
                        <ul>
                            <li>Depth Security: <a href="https://depthsecurity.com/">https://depthsecurity.com/</a></li>
                            <li>Loudmouth Security: <a href="https://loudmouthsecurity.com/">https://loudmouthsecurity.com/</a></li>
                            <li>TrustedSec: <a href="https://www.trustedsec.com/">https://www.trustedsec.com/</a></li>
                            <li>The Phobos Group: <a href="https://phobos.io/">https://phobos.io/</a></li>
                            <li>Bishop Fox: <a href="https://www.bishopfox.com/">https://www.bishopfox.com/</a></li>
                        </ul>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.state.isLoading ? <div class="text-center"><SpinnerDark /></div> : this.displayPricing()}
            </div>
        );
    }


}