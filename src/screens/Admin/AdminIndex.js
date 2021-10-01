import React,{useState} from 'react'

import {Container,Content} from '../../components/Styles/Admin/Main'

import Header from '../../components/Admin/Menu'

import Footer from '../../components/User/Footer/'

import Admin from './Home'

import ArchivePosts from './Posts/ArchivePosts'

import ActivePosts from './Posts/ActivePosts'

import Posts from './Posts/Posts'

import ArchiveComments from './Comments/ArchiveComments'

import ActiveComments from './Comments/ActiveComments'

import Comments from './Comments/Comments'

import Recommends from './Recommends/Recommends';

import ActiveRecommends from './Recommends/ActiveRecommends';

import ArchiveRecommends from './Recommends/ArchiveRecommends';

import CreateComment from './Create/Comment'

import CreatePost from './Create/Post'

import CreateRecommended from './Create/Recommended'

import CreateImage from './Create/Image'

import Analys from './Analys/Analys'

import BasicAnalys from './Analys/BasicAnalys'

import DailyReport from './Analys/DailyReport'

import MonthlyReport from './Analys/MonthlyReport'

import WeeklyReport from './Analys/WeeklyReport'

import AnnualReport from './Analys/AnnualReport'

const AdminIndex=(props)=>{
  
  const [open,setOpen]=useState(true)

  const getPage=()=>{
    
    switch (props.page) {
      
      case 'Home':

        return(
          
          <Admin />

        )
      case 'ArchivePosts':

        return(
          
          <ArchivePosts />

        )
      case 'ActivePosts':

        return(
          
          <ActivePosts />

        )
      case 'Posts':

        return(
          
          <Posts />

        )
      case 'ArchiveComments':

        return(
          
          <ArchiveComments />

        )
      case 'ActiveComments':

        return(
          
          <ActiveComments />

        )
      case 'Comments':

        return(
          
          <Comments />

        )
      case 'Recommends':

        return(
          
          <Recommends />

        )
      case 'ActiveRecommends':

        return(
          
          <ActiveRecommends />

        )
      case 'ArchiveRecommends':

        return(
          
          <ArchiveRecommends />

        )
      case 'CreateComment':

        return(
          
          <CreateComment />

        )
      case 'CreatePost':

        return(
          
          <CreatePost />

        )
      case 'CreateRecommended':

        return(
          
          <CreateRecommended />

        )
      case 'CreateImage':

        return(
          
          <CreateImage />

        )
      case 'Analys':

        return(
          
          <Analys />

        )
      case 'BasicAnalys':

        return(
          
          <BasicAnalys />

        )
      case 'DailyReport':

        return(
          
          <DailyReport />

        )
      case 'MonthlyReport':

        return(
          
          <MonthlyReport />

        )
      case 'WeeklyReport':

        return(
          
          <WeeklyReport />

        )
      case 'AnnualReport':

        return(
          
          <AnnualReport />

        )

      default:
    }  

  }
  
  return (

      <Container>
  
      <Header open={open} setopen={setOpen} />
      
      <Content open={open}>
        
        {

          getPage()

        }

      <Footer copyright="Development By Mücahit Sendinç" />

      </Content>

    </Container>
      
  )

}

export default AdminIndex