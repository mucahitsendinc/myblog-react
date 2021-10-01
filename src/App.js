import './App.css';

import React, {useState,useLayoutEffect,useEffect} from 'react'

import { BrowserRouter  as Router,Route,Switch} from "react-router-dom";

import Error from './components/Error/Error'

import Admin from './screens/Admin/Home'

import ArchivePosts from './screens/Admin/Posts/ArchivePosts'

import ActivePosts from './screens/Admin/Posts/ActivePosts'

import Posts from './screens/Admin/Posts/Posts'

import ArchiveComments from './screens/Admin/Comments/ArchiveComments'

import ActiveComments from './screens/Admin/Comments/ActiveComments'

import Comments from './screens/Admin/Comments/Comments'

import Recommends from './screens/Admin/Recommends/Recommends';

import ActiveRecommends from './screens/Admin/Recommends/ActiveRecommends';

import ArchiveRecommends from './screens/Admin/Recommends/ArchiveRecommends';

import Analys from './screens/Admin/Analys/Analys'

import BasicAnalys from './screens/Admin/Analys/BasicAnalys'

import DailyReport from './screens/Admin/Analys/DailyReport'

import MonthlyReport from './screens/Admin/Analys/MonthlyReport'

import WeeklyReport from './screens/Admin/Analys/WeeklyReport'

import AnnualReport from './screens/Admin/Analys/AnnualReport'

import AdminLogin from './screens/Admin/Login'

import LogOut from './screens/Admin/LogOut';

import UserIndex from './screens/User/UserIndex'

import { DarkTheme,LightTheme } from "./components/Styles/Theme";

import { ThemeProvider } from "styled-components";

import GlobalStyle from './components/Styles/Global';

import {MainContext} from './Context'

import axios from 'axios'

const App=()=>{

  const [theme,setTheme]=useState(localStorage.getItem('theme')!='dark' ? 'light' : 'dark')

  const [maindata,setMainData]=useState(null)

  const [aboutData,setAboutData]=useState(null)

  const [data,setData]=useState(null)

  const [login,setLogin]=useState(localStorage.getItem('login')=="true" ? true : false)

  useEffect(() => {

    localStorage.setItem('theme',theme)

  }, [theme])

  useLayoutEffect(() => {

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_MAIN_INFO, {},{headers:{'Content-Type':'application/json'}}).then(function (results) { setMainData(results.data.data) })
    
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_ABOUT_INFO, {},{headers:{'Content-Type':'application/json'}}).then(function (results) { setAboutData(results.data.data) })
      
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_BLOGS, {},{headers:{'Content-Type':'application/json'}}).then(function (results) { setData(results.data.data) })

  }, [])

  return (
    <>

    {
      maindata!=null && aboutData!=null && data!=null ? 

      <MainContext.Provider value={{theme,setTheme,maindata,aboutData,data,login,setLogin}}>
      
        <ThemeProvider theme={theme==='light' ? LightTheme : DarkTheme}>

          <Router>

                <GlobalStyle />

                <Switch>

                  <Route exact  path="/"  component={()=> <UserIndex page="Home" /> }  />
                
                  <Route path="/yonetici/giris"  component={()=> <AdminLogin  /> }  />

                  <Route path="/hakkimda"  component={()=> <UserIndex page="About"  /> }  />

                  <Route exact path="/blogum"  component={()=> <UserIndex page="Blogs"  /> }  />

                  <Route path="/blogum/:blog"  component={()=>  <UserIndex page="BlogDetail" /> }  />
                  
                  <Route path="/iletisim"  component={()=> <UserIndex  page="Contact" /> }  />
                  
                  <Route path="/404" component={()=> <Error code="404" message="Böyle bir sayfa bulunamadı" />} />
          
                  <Route exact path="/yonetici"  component={()=> login==true ? <Admin/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/tum-paylasimlar"  component={()=> login==true ? <Posts/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/aktif-paylasimlar"  component={()=> login==true ? <ActivePosts/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/arsiv-paylasimlar"  component={()=> login==true ? <ArchivePosts/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/tum-yorumlar"  component={()=> login==true ? <Comments/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/aktif-yorumlar"  component={()=> login==true ? <ActiveComments/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/arsiv-yorumlar"  component={()=> login==true ? <ArchiveComments/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/tum-onerilenler"  component={()=> login==true ? <Recommends/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/aktif-onerilenler"  component={()=> login==true ? <ActiveRecommends/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/arsiv-onerilenler"  component={()=> login==true ? <ArchiveRecommends/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/basit-analiz"  component={()=> login==true ? <BasicAnalys/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/gelismis-analiz"  component={()=> login==true ? <Analys/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/gunluk-rapor"  component={()=> login==true ? <DailyReport/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/haftalik-rapor"  component={()=> login==true ? <WeeklyReport/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/aylik-rapor"  component={()=> login==true ? <MonthlyReport/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />
                  
                  <Route path="/yonetici/istatistik/yillik-rapor"  component={()=> login==true ? <AnnualReport/>  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />
                  
                  <Route path="/cikis-yap" component={()=> <LogOut/> } />

                  <Route path="*" component={()=> <Error code="404" message="Böyle bir sayfa bulunamadı" />} />
                
                </Switch>

          </Router>

        </ThemeProvider>

      </MainContext.Provider>
      
      :

      <React.Fragment/>
    
    }
    
    </>
  
  )

}

export default App;
