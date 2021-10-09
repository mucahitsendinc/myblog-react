import React,{useState} from 'react'

import Home from './Home'

import About from './About'

import BlogDetail from './BlogDetail'

import Blogs from './Blogs'

import Contact from './Contact'

import {Container,Content} from '../../Styles/User/Main'

import Header from '../../components/User/Menu/Header'

import Footer from '../../components/User/Footer'

import { MainContext,useContext } from '../../Context'

import useWindowDimensions from './../../components/useWindow';

const UserIndex=(props)=>{
  
  const { height, width } = useWindowDimensions();

  const [open,setOpen]=useState(width<=750 ? false : true)

  const {maindata} = useContext(MainContext)
  
  const getPage=()=>{
    
    switch (props.page) {
      
      case 'Home':

        return(
          
          <Home /> 

        )

      case 'About':
        
        return(
        
          <About />
        
        )

      case 'BlogDetail':
        
        return(
        
          <BlogDetail open={open} />
        
        ) 

      case 'Blogs':
        
        return(
        
          <Blogs />
        
        ) 

      case 'Contact':
        
        return(
        
          <Contact />
        
        ) 

      default:
    }  

  }

  return (

      <Container>

          <Header {...props} 
                  user={maindata[0].info}
                  profile_image={maindata[1].info}
                  instagram={maindata[10].info}
                  github={maindata[8].info}
                  linkedin={maindata[9].info}
                  open={open}
                  setopen={setOpen} /> 

          <Content open={open} > 
      
            {
              getPage()
            }

          <Footer copyright={maindata[7].info} /> 

        </Content>

      </Container>
      
  )

}

export default UserIndex