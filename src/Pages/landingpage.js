import React from 'react'
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
function landingpage() {
  return (
    <Container>
    <Wrapper>
         <h1>
            Creative Developer & Designer Crafting Unique Web Experience
       </h1>
    </Wrapper>
    
    <Projects>
        <Main>
        
        
        <Grid container spacing={2} style={{ width:'100%',height:'200px', backgroundColor:'red'}}>
           <Grid items  xs={12} md={6} >
              <BigCard>
                hello 
              </BigCard>
           </Grid>
           
           <Grid items xs={12} md={4}  >
                Worldjkhohhio
           </Grid>
        </Grid>
           
        
        </Main>
    
    </Projects>
       
    </Container>
  )
}

export default landingpage

const Container = styled.div`   

display:flex;
flex-direction:column;


`

const Wrapper = styled.div`   
font-family: 'Dancing Script', cursive;
display:flex;
align-contents: center;
justify-content:centre;
margin:auto;
width:600px;

h1{
    font-size:4em;
    padding:5px ;
    
}



`
const Projects=styled.div`  
    display:flex;
    

`

const Main = styled.div`  
    display:flex;
    width:100%;
    height:100%;
`
const BigCard=styled.div`  
    display:flex;
    border:1px solid green;
    
    margin:auto;
    

`