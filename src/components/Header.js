import React,{useState} from 'react' ;
import Shake from 'react-reveal/Shake';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { AiOutlineLinkedin,AiOutlineInstagram } from "react-icons/ai";
function Header() {
  const [burgerStatus,  setBurgerStatus] =useState(false);
  return (
    <Container>
    <Fade top>
        <Logo>
          <a href='#'>
            <img src="/images/mylogo.jpeg"/>
          </a>
        </Logo>
        <MobileVerticalLine />
        <RightMenu>
          <Nav>
          <ul>
            <li><a href="#" className="work">Work</a></li>
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
        <MenuWrapper>
          <CustomMenu className='menu' onClick={()=>setBurgerStatus(true)}/>
        </MenuWrapper>
        
        </RightMenu>
      
        
        
        
        </Fade>
        <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose  onClick={()=>setBurgerStatus(false)} />
        </CloseWrapper>
        
        <li><a href=""><span>Work</span></a></li>
          <li><a href=""><span>About</span></a></li>
          <li><a href='https://www.linkedin.com/feed/'><span className="linkedin"><AiOutlineLinkedin /></span></a></li>
          <li><a href='https://www.linkedin.com/feed/'><span className="instagram"><AiOutlineInstagram /></span></a></li>
         
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  z-index:1;
  display:flex;
  justify-content:space-between ;
  background-color:white;
  height: 5em;
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
  justify-content: center ;
  align-items:center ;
  
  a{
    text-decoration:none ;
    
  }
  
  img{
      height:4em ;
      object-fit:cover;
      width:130px;
    margin:auto auto ;
    padding-top:10px;
      cursor:pointer;
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
  margin-right:15px;
  
  
  ul{
    display:inline-flex ;
    list-style-type:none ;
  
    
    li{
    padding:15px 25px ;
    
    font-size:24px ;
    position: relative;
    
    span,a{
    cursor:pointer;
    text-decoration:none;
    color:#2d452f;
    &:hover{
      color:rgba(133,221,116,0.84);
    }
    
   
  }
  .work::after{
      content:" "
      padding-top:2px;
      border-bottom:1px solid #2d452f;
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
  background-color:rgba(133,221,116,0.84);
  width:2px ;
  margin-top:15px ;
  @media only screen and (max-width: 600px) {
    display:none;

}
  
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
  @media only screen and (max-width: 600px) {
display:none;
}
  
`

const MenuWrapper=styled.div` 
  display:none;
  @media only screen and (max-width: 600px) {
    display:flex;

}
`
const CustomMenu= styled(MenuIcon)`
  display:flex;
  justify-content:center ;
  align-items: center ;
  margin-top:35px;
  margin-right:35px;
  cursor:pointer;
 
  &:hover{
    color:rgba(133,221,116,0.74);
  }

`
const BurgerNav=styled.div` 
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  background:grey;
  width:250px ;
  z-index:10px;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform: ${props =>props.show ? 'translateX(0)': 'translateX(100%)'};
 transition: transform 0.2s;
 
  li{
    padding:15px 0;
    border-bottom:1px solid white;
    
    
  
  a{
    font-weight:600px;
    cursor:pointer;
    text-decoration:none;
    color:white;
     
  }
  
  span{
    font-size:30px;
    &:hover{
      color:rgba(133,221,116,0.84);
    }
    
  }
  }
  .linkedin,.instagram{
    font-size:40px;
  }
  .linkedin:hover{
    color:red;
  }
  .instagram:hover{
    color:blue;
  }
  
  @media only screen and (max-width: 280px) {
    width:200px ;

}

  `
 const CloseWrapper =styled.div`  
  display:flex;
  justify-content:flex-end ;
  padding-bottom:35px;
 
 ` 
const CustomClose =styled(CloseIcon)`
cursor: pointer;
color:white;
&:hover{
  color:rgba(133,221,116,0.74);
}

 `
 const MobileVerticalLine=styled(VerticalLine)` 
  display:none;
  @media only screen and (max-width: 600px) {
    display:flex;

}
 
 `