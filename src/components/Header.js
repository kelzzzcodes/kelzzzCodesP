import React,{useState} from 'react' ;
import Shake from 'react-reveal/Shake';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

import { AiOutlineLinkedin,AiOutlineInstagram } from "react-icons/ai";
function Header() {
  
  return (
    <Container>
    <Fade top>
        <Logo>
          <a href='#'>
            <img src="/images/mylogo.jpeg"/>
          </a>
        </Logo>
        
        <RightMenu>
          <Nav>
          <ul>
            <li ><a style={{borderBottom:'1px solid #2d452f'}}>Work</a></li>
            <li><a>About</a></li>
          </ul>
            </Nav>
          
          <Shake>
          <VerticalLine />

          <SocialMenu>
          <ul>
          <li><a href='https://www.linkedin.com/feed/'><span className="linkedin"><AiOutlineLinkedin /></span></a></li>
            <li><a href='https://www.linkedin.com/feed/'><span className="instagram"><AiOutlineInstagram /></span></a></li>
          </ul>
          
          
        
        </SocialMenu>
        </Shake>
        <CustomMenu/>
        </RightMenu>
      
        
        
        
        </Fade>
    </Container>
  )
}

export default Header

const Container = styled.div`
  
  display:flex;
  justify-content:space-between ;
  background-color:white;
  height: 6em;
  /* border-bottom: 2px solid #85dd74 ; */
  box-shadow: 0px 7px 4px -1px rgba(133,221,116,0.74);
-webkit-box-shadow: 0px 7px 4px -1px rgba(133,221,116,0.74);
-moz-box-shadow: 0px 7px 4px -1px rgba(133,221,116,0.74);
font-family: "Sora","sans-serif";
position:fixed;
left:0;
right:0;

`

const Logo= styled.div`
  height:100% ;
  width: 200px ;
  display:flex ;
  
  a{
    text-decoration:none ;
 
    
  }
  
  img{
      height:4em ;
      object-fit:cover;
      width:150px;
      padding:15px 0 0 10px ;
      @media only screen and (max-width: 500px) {
        padding-left:0;
       
  }
      
  }
  @media only screen and (max-width: 768px) {
      width:150px
}

`


const RightMenu = styled.div`
  
  color:#2d452f;
  display:flex ;
  
  
 
`
const Nav =styled.div`
  display:flex ;
  justify-content:center ;
  align-items: center ;
  
  ul{
    display:inline-flex ;
    list-style-type:none ;
    
    li{
    padding:15px 25px ;
    cursor:pointer;
    font-size:24px ;
    position: relative;
    &:hover{
      color:red
    }
   
    @media only screen and (max-width: 768px) {
      padding:15px 10px ;
}
  
  }
    
   
  }
  
   
  @media only screen and (max-width: 600px) {
      display:none;

}
  
`

const VerticalLine=styled.div`

  display:flex ;
  height:4em;
  background-color:#2d452f;
  width:2px ;
  margin-top:15px ;
  
`


const SocialMenu =styled(Nav)`
display:flex ;
  justify-content:center;
  align-items: center;
  margin-right:20px;
  span{
    display:flex;
    align-items:center ;
    font-size:34px;
    color:#2d452f;
    
  }
  .linkedin:hover{
    color:red
  }
  .instagram:hover{
    color:blue;
  }
  
  
`


const CustomMenu= styled(MenuIcon)`
 display:flex ;
  justify-content:center ;
  align-items: center ;
  padding-top:35px;
  padding-right:35px;
    cursor:pointer;
    font-size:44px;  
  
 

`