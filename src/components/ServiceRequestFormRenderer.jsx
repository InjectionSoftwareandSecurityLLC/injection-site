import React, { Component } from "react";
import ServiceRequestForm from "./ServiceRequestForm"
import SpinnerDark from "./SpinnerDark"

export default class ServiceRequestFormRenderer extends Component{

    // Downloads API Fetch
    constructor(props) {
        super(props);
    
        this.state = {
          formEnabled: false,
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
             this.setState({formEnabled: data.formEnabled});
            })
          .catch(error => console.log("Could not locate status.json..."));
          this.setState({isLoading: false})
    }

    displayForm(){
        if(this.state.formEnabled){
            return(
                <ServiceRequestForm />
            )
        }else{
            return(
                <div>
                    Do you like the look of our services? 
                    <br/>
                    <br/>
                    If so, that is great! Thank you for considering Injection Software and Security LLC for your offensive security testing needs.
                    <br/>
                    <br/>
                    Unfortunately we are unable to take requests for services at this time. We apologize for the inconvenience and ask that you keep an eye on this page, our blog, and our twitter @InjectionSec for when our services become open to requests.
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.state.isLoading ? <div class="text-center"><SpinnerDark /></div> : this.displayForm()}
            </div>
        );
    }


}