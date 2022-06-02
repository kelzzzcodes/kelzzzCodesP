import React from 'react'
import styled from 'styled-components';
function main() {
  return (
    <Container>
    <Wrapper>
      Main 
    </Wrapper>
    
    </Container>
  )
}

export default main

const Container=styled.div`
display:flex;
color:black;
height:100vh;




`
const Wrapper= styled.div`
display:flex ;
padding:50px ;
height:250px;
width:250px;
border: 2px solid rgba(133,221,116,0.74);
margin:auto ;
border-radius:7px ;


`