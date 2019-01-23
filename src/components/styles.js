import styled from "styled-components";


const ButtonWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
  
  button {
    padding:10px 40px;
    border:none;
    font-weight:bold;
    color: white;
    border-left:1px solid #3ABA74;
    margin-bottom:20px;
  }
  #nextButton{
    background-color: #3ABA74;
    margin-left:10px;
  }
  #backButton{
    border:none;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Body = styled.div`
  margin:0 auto;
  padding:1rem;
  max-width:1200px;
`;

const Step2Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px 150px;
  grid-gap: 20px;

  h2 {
      margin: 0;
    }

  .box {
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
    color: #404040;
    padding: 1rem;

    button {
      outline: none;
      background-color: #e0e1e0;
      border-radius: 3px;
      padding: 0px 13px;
      border: none;
      height: 30px;
      cursor: pointer;
      transition: all 0.2s;
      user-select: none;

      &:hover {
        transform: scale(1.02) translateY(-1px);
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
      }
      &:active {
        transform: scale(1) translateY(1px);
      }
    }

    &--highlighted {
      background-color: grey;
    }
  }
`;


const Step3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  input {
    width: 50%;
    margin-bottom: 1rem;
    height: 30px;
    padding: 0.8rem;
    border-radius: 3px;
    border: none;
  }
  button {
    outline: none;
    background-color: lightgrey;
    color: #404040;
    border-radius: 3px;
    border: none;
    height: 30px;
    cursor: pointer;
    width: 50%;
    transition: all 0.2s;
    user-select: none;

    &:hover {
      transform: scale(1.02) translateY(-1px);
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
    }
    &:active {
      transform: scale(1) translateY(1px);
    }
  }

  h2{
    color:black;
  }

  h3 {
    padding: .5rem;
    margin-top: 0;
    color:red;
  }

  p{
    color:red;
    font-size:.8rem;
    font-weight:bold;
    margin: 5px 10px;
    padding:0px;
  }
`;


const Step3Info = styled.div`
  display:flex;
  justify-content:center;

  h2{
    color:black;
  }
  
`;

const TopBar = styled.div`
  margin: 0;
  padding:1rem;
  background-color: #3ABA74;
  

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    height: 100%;
    margin: 0;
    background-color: #3ABA74;
  }


  
  .logo{
  max-width:250px;
  width:100%;
  display:flex;
}
`;

const TopBarInner = styled.div`
  margin:0 auto;
  padding:1rem;
  max-width:1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Step5 = styled.div`
margin:0 auto;
max-width:1200px;
text-align: center;
display:flex;
flex-direction:column;

button {
    background-color: #3ABA74;
    padding:10px 26px;
    border:none;
    font-weight:bold;
    color: white;
    border-left:1px solid #3ABA74;
    margin-bottom:20px;
    max-width:200px;
    margin:auto;
    margin-top:22px !important;
  }

h2{
  color:black;
  margin-top:30px;
}

img{
  width:100px;
  margin-top:20px;
  margin:auto;
}
`;




const Step3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  input {    
    width: 50%;
    margin-bottom: 1rem;
    height: 30px;
    padding: 0.8rem;
    border-radius: 3px;
    border: none;
  }
  button {
    outline: none;
    background-color: lightgrey;
    color: #404040;
    border-radius: 3px;
    border: none;
    height: 30px;
    cursor: pointer;
    width: 50%;
    transition: all 0.2s;
    user-select: none;
  }
  h3 {
    border: 1px solid red;
    padding: 1rem;
    margin-top: 0;
  }
`


export { Body, TopBar,  Step2Wrapper , Container, TopBarInner, ButtonWrapper, Step3Info, Step5, Step3 };