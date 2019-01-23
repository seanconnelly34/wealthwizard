import React, { Component } from "react";
import {TopBar, Container, Body, TopBarInner, ButtonWrapper, Step3Info, Step3, Step5} from "./components/styles";
import validator from "validator";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step4 from './components/Step4';
import logo from './assets/logo_w.png';
import check from './assets/check.png';


// Object of emojies matching corresponding state 'keys' used
// to display a users selection shown on 'page 3.'
const emoji = {
  'eye': '👁‍🗨',
  'statue': '🗿',
  'vampire': '🧛‍',
  'family': '👩‍👩‍👧‍👧'
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      optionSelected: null,
      name: "",
      email: "",
      phone: "",
      address: "",
      submittedInfo: false,
      errorMessage: "",
      done:false
    };

    this.handleOptionSelect = this.handleOptionSelect.bind(this)
  }
  
  

  // Validate user's submission on page 3 form
  submitButton = () => {
    const { name, email, phone, address } = this.state;
    const nameIsValid = name.length > 3;
    const emailIsValid = validator.isEmail(email);
    const phoneIsValid = validator.isMobilePhone(phone);
    const addressIsValid = address.length > 3;
    
       
    // If validation passes, change state that will allow the next page (page 4) to display.
    if (nameIsValid && emailIsValid && phoneIsValid && addressIsValid) {
      console.log("worked")
      return this.setState({
        submittedInfo: true,
        errorMessage: "",
        currentPage: 4
      });
    } else {
      this.setState({ errorMessage: "Invalid Fields! Ensure all are filled." });
    }
  };

  // Option select function used on page 2.
  handleOptionSelect = type => {
    // Unselecte option selected in state
    if (type === this.state.optionSelected) {
      return this.setState({ optionSelected: null });
    }
    // Set option selected to state
    this.setState({ optionSelected: type });
  };

  // Previous page button
  prevPage = () => {
    // Set currentPage state to '-1' unless on page 1.
    this.state.currentPage > 1 &&
      this.setState({ currentPage: this.state.currentPage - 1 });
  };

  // Next page button
  nextPage = () => {
    // If on page 2, make sure an option is selected before setting 
    //currentPage state to '+1'.
    if (this.state.currentPage === 2) {
      return this.state.optionSelected !== null
        ? this.setState({ currentPage: this.state.currentPage + 1 })
        : alert("You must select an option!");
    }

    // If on page 3 and validation passes, change currentPage state to '4'
    // otherwise display alert message that form is not completed. 
    if (this.state.currentPage ===3 ) {
      return this.state.submittedInfo ? this.setState({currentPage: this.state.currentPage + 1}) : alert('All fields must be filled or correct.')
    }

    // Change state to '+1' up until page 4, where is then becomes unnecessary.
    this.state.currentPage < 4 &&
      this.setState({ currentPage: this.state.currentPage + 1 });
  };

  // Grab input values and update corresponding state 'key'
  handleChange = val => e => {
    this.setState({
      [val]: e.target.value
    });
    console.log(e.target.value)
  };

  // Changes state from page 4 to 5, enabling the display of 'page 5'
  saveButton = () => {
    this.setState({currentPage: 5})
  }

  // Button on last page of app, starts app over on page 1. 
  // Sets all state back to default.
  backHome = () => {
    this.setState({currentPage: 1, 
      optionSelected: null,
      name: "",
      email: "",
      phone: "",
      address: "",
      submittedInfo: false,
      errorMessage: "",
      done:false})
  }

  render() {

    return (
      <Container >
        {/*Green styled full width header*/}
        <TopBar>
          {/*wrapper for logo and steps display*/}
          <TopBarInner>
            <img className="logo" src={logo}/>
            {/*Display the steps of each page in the 'header'. If on page 5, replace steps with 'All Done'*/}
            {this.state.currentPage === 5 ? <p>All Done!</p> : <p>Step {this.state.currentPage} of 4</p> }
          </TopBarInner>
        </TopBar>

        <Body>
          <ButtonWrapper>
          {/*Dont show 'back' and 'next' buttons if user is on page 5.
           Do not show 'back' button on first page.*/}
          {this.state.currentPage === 5
            ? null : 
            this.state.currentPage !== 1  && <button id="backButton" onClick={() => this.prevPage()}>Back</button>}

          {/*Dont show 'back' and 'next' buttons if user is on page 5.
           Do not show 'next' button on 4th page.*/}
          {this.state.currentPage === 5
            ? null :  
            this.state.currentPage !== 4 && <button id="nextButton" onClick={() => this.nextPage()}>Next</button>}
          </ButtonWrapper>

        {/*Display 'page 1' component if currentPage state equals 1*/}
        {this.state.currentPage === 1 && <Step1 /> }

        {/*Display 'page 2' component if currentPage state equals 2*/}
        {this.state.currentPage === 2 && (
          <Step2 optionSelected={this.state.optionSelected} action={this.handleOptionSelect.bind(this)}/>
        )}

        {/*Display 'page 3' component if currentPage state equals 3*/}
        {this.state.currentPage === 3 && (
          <div>
          <Step3Info>
            {/*Display current option selected*/}
            <h2>Option Selected: {emoji[this.state.optionSelected]}</h2>
          </Step3Info>
          
          <Step3>
            {/*If errorMessage state is true, display error message*/}
            {this.state.errorMessage && <h3>{this.state.errorMessage}</h3>}

            {/*Name input*/}
            <input
              value={this.state.name}
              onChange={this.handleChange("name")}
              id="name"
              name="name"
              placeholder="name"
              type="text"
            />
          
            {/*Address input*/}
            <input
              value={this.state.address}
              onChange={this.handleChange("address")}
              name="address"
              placeholder="address"
              type="text"
            />

            {/*Email input*/}
            <input
              value={this.state.email}
              onChange={this.handleChange("email")}
              name="email"
              placeholder="email"
              type="email"
            />

            {/*Phone input*/}
            <input
              value={this.state.phone}
              onChange={this.handleChange("phone")}
              name="phone"
              placeholder="phone"
              type="phone"
            />

            {/*Submit button*/}
            <button onClick={e => this.submitButton()}>Submit</button>
          </Step3>
          </div>
        )}

        {/*Display 'page 4' component if currentPage state equals 4*/}
        {this.state.currentPage === 4 && (
        <Step4 data={this.state}>
         <button onClick={this.saveButton}>Save</button>
        </Step4>
        )}

        {/*Display 'page 5' component if currentPage state equals 5*/}
         {this.state.currentPage === 5 && (
         <Step5> <h2>Saved!</h2><img src={check}/>

         {/*Brings user back to page 1, setting state to default through 'backHome()'*/}
         <button onClick={this.backHome}>start again</button></Step5>
        ) }
        </Body>
      </Container>

    );
  }
}

export default App;
