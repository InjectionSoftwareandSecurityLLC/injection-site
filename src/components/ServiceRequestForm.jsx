import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const GOOGLE_FORM_EMAIL_ID = 'emailAddress'
const GOOGLE_FORM_ORG_NAME_ID = 'entry.1657328628'
const GOOGLE_FORM_FIRST_NAME_ID = 'entry.897676712'
const GOOGLE_FORM_LAST_NAME_ID = 'entry.1955413135'
const GOOGLE_FORM_POSITION_ID = 'entry.700426570'
const GOOGLE_FORM_PHONE_ID = 'entry.1488451916'
const GOOGLE_FORM_SERVICE_CHECKLIST_ID = 'entry.1413509113'
const GOOGLE_FORM_COMMENT_ID = 'entry.2123088146'
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSelw5JEsrURaXG0E0Ql2pfrZd5vgAVu9qPYjsTDMeTA8cV1JQ/formResponse'
const net_pentest = 'Network Penetration Testing'
const app_pentest = 'Application Penetration Testing'
const wireless_audit = 'Wireless Security Audit'
const sec_awareness = 'Security Awareness'
const physical_pentest = 'Physical Penetration Testing'
const adv_emulation = 'Adversarial Emulation'


export default class ServiceRequestForm extends Component {

    constructor(props){
        super(props)
        this.state = { 
          email: '', 
          org_name: '',
          first_name: '',
          last_name: '',
          position: '',
          phone: '',
          net_pentest: '',
          app_pentest: '',
          wireless_audit: '',
          sec_awareness: '',
          physical_pentest: '',
          adv_emulation: '',
          comment: '',
          showForm: false,
          sendingMessage: false,
          messageSent: false,
          messageError: false,
          formIsValid: true,
          formWasSubmitted: false
        }
      }

      handleChange = (event) => {
        const target = event.target
        if (target.type === 'checkbox') {
            if (target.checked) {
                this.setState({[target.name]: target.value})
            }else{
                this.setState({[target.name]: ''})
            }
            
        } else{
            this.setState({[target.name]: target.value})
        }

      }
    handleSubmit = (event) => {  
         
        event.preventDefault() 
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
          this.setState({formIsValid: false})
        }else{
            this.setState({formIsValid: true})
            this.sendMessage()
        }

        
    }

    sendMessage = () => {  
        const formData = new FormData()  
        formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)  
        formData.append(GOOGLE_FORM_ORG_NAME_ID, this.state.org_name)
        formData.append(GOOGLE_FORM_FIRST_NAME_ID, this.state.first_name)
        formData.append(GOOGLE_FORM_LAST_NAME_ID, this.state.last_name)
        formData.append(GOOGLE_FORM_POSITION_ID, this.state.position)
        formData.append(GOOGLE_FORM_PHONE_ID, this.state.phone)
        formData.append(GOOGLE_FORM_SERVICE_CHECKLIST_ID, this.state.net_pentest)
        formData.append(GOOGLE_FORM_SERVICE_CHECKLIST_ID, this.state.app_pentest)
        formData.append(GOOGLE_FORM_SERVICE_CHECKLIST_ID, this.state.wireless_audit)
        formData.append(GOOGLE_FORM_SERVICE_CHECKLIST_ID, this.state.sec_awareness)
        formData.append(GOOGLE_FORM_SERVICE_CHECKLIST_ID, this.state.physical_pentest)
        formData.append(GOOGLE_FORM_SERVICE_CHECKLIST_ID, this.state.adv_emulation)
        formData.append(GOOGLE_FORM_COMMENT_ID, this.state.comment)

        axios.post(GOOGLE_FORM_ACTION_URL, formData)
        .catch(() => {      
            this.setState({        
                messageError: true     
            })  
        })
        if (!this.state.messageError) {
            this.setState({formWasSubmitted: true})
        }else{
            this.setState({formIsValid: false})
        }
    }

    renderForm = () =>{

        return(
        <Form noValidate  onSubmit={this.handleSubmit}>  
            <Form.Group >
                <Form.Label>Email Address*</Form.Label>
                <Form.Control type='email' name='email' placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />  
            </Form.Group>
            <Form.Group >
                <Form.Label>Organization/Company Name*</Form.Label>
                <Form.Control required type='text' name='org_name' placeholder="My Company" value={this.state.org_name} onChange={this.handleChange} />  
            </Form.Group>
            <Form.Group>
                <Form.Label>First Name*</Form.Label>
                <Form.Control required type='text' name='first_name' placeholder="First Name" value={this.state.first_name} onChange={this.handleChange} />  
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name*</Form.Label>
                <Form.Control required type='text' name='last_name' placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange} />  
            </Form.Group>
            <Form.Group>
                <Form.Label>Position/Title*</Form.Label>
                <Form.Control required type='text' name='position' placeholder="CISO/CTO/Manager of IT/etc..." value={this.state.position} onChange={this.handleChange} />  
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control required type='tel' name='phone' placeholder="555-867-5309" value={this.state.phone} onChange={this.handleChange} />  
            </Form.Group>
            <Form.Group>
                <Form.Label>What service(s) would you like to inquire about?*</Form.Label>
                <Form.Check label={net_pentest} name='net_pentest' value={net_pentest} onChange={this.handleChange} />  
                <Form.Check label={app_pentest} name='app_pentest' value={app_pentest} onChange={this.handleChange} />  
                <Form.Check label={wireless_audit} name='wireless_audit' value={wireless_audit} onChange={this.handleChange} />  
                <Form.Check label={sec_awareness} name='sec_awareness' value={sec_awareness} onChange={this.handleChange} />  
                <Form.Check label={physical_pentest} name='physical_pentest' value={physical_pentest} onChange={this.handleChange} />  
                <Form.Check label={adv_emulation} name='adv_emulation' value={adv_emulation} onChange={this.handleChange} />  
            </Form.Group>
            <Form.Group>
                <Form.Label>Feel free to leave any additional comments/questions below!</Form.Label>
                <Form.Control as="textarea" name='comment' placeholder="Could I learn more about the...?" value={this.state.comment} onChange={this.handleChange} />  
            </Form.Group>
            <br/>
            <br/>
            <Button variant="outline-dark" size="lg" className="dark-btn-outline-green" type='submit' block>Submit</Button>
            <br/>
            <br/>
            { this.state.formIsValid ? <div></div> : 
            <Alert variant="danger">
                Please insure you have submitted a valid email/phone number and double check that all fields have been filled out.
                <br/>
                Note: The additional comments box is NOT required.
            </Alert>
            }
            </Form>
            )

    }

    renderSubmitted = () =>{
        console.log(this.state.formWasSubmitted)
        return(
            <div>
                Thanks for reaching out to Injection Software and Security LLC about our Offensive Security Services!
                <br/>
                <br/>
                We will review your inquiry and reach out to you for an initial consultation within 1-2 business days.
            </div>
        )
    }

    render(){
        return(
            <div>
               {this.state.formWasSubmitted ? this.renderSubmitted() : this.renderForm()}
            </div>
        );
    }

}