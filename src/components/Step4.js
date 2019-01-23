import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin:auto;
    max-width:1200px;
    width:100%;
    display:block;

h2{
    font-size:1.5rem;
    color:black;
}

p{
    color:black;
}
button {
    background-color: #3ABA74;
    padding:10px 40px;
    border:none;
    font-weight:bold;
    color: white;
    border-left:1px solid #3ABA74;
    margin-bottom:20px;
  }
`

// Object with corresponding select options used for displaying 
// which option was selected.
const emoji = {
    'eye': '👁‍🗨',
    'statue': '🗿',
    'vampire': '🧛‍',
    'family': '👩‍👩‍👧‍👧'
}

const Page4 = (props) => (
    <Container>
        {/* Display of option selected and input field values submitted */}
        <h2>Option Selected: {emoji[props.data.optionSelected]}</h2>
        <p><strong>Name:</strong> {props.data.name}</p>
        <p><strong>Email:</strong> {props.data.email}</p>
        <p><strong>Address:</strong> {props.data.address}</p>
        <p><strong>Phone:</strong> {props.data.phone}</p>
        {props.children}

    </Container>
)

export default Page4;