import './App.css';

import React, {useState,useLayoutEffect,useEffect} from 'react'

import { BrowserRouter  as Router,Route,Switch} from "react-router-dom";

import Error from './components/Error/Error'

import AdminIndex from './screens/Admin/AdminIndex'

import AdminLogin from './screens/Admin/Login'

import LogOut from './screens/Admin/LogOut';

import UserIndex from './screens/User/UserIndex'

import { DarkTheme,LightTheme } from "./Styles/Theme";

import { ThemeProvider } from "styled-components";

import GlobalStyle from './Styles/Global';

import {MainContext} from './Context'

import axios from 'axios'

import ActivityIndicator from 'react-activity-indicator'

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

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_MAIN_INFO, {},{headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*'}}).then(function (results) { setMainData(results.data.data) })
    
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_ABOUT_INFO, {},{headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*'}}).then(function (results) { setAboutData(results.data.data) })
      
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_BLOGS, {},{headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*'}}).then(function (results) { setData(results.data.data) })


  }, [])

  return ( 
    <>

    {
      maindata!=null && aboutData!=null && data!=null  ? 

      <MainContext.Provider value={{theme,setTheme,maindata,setMainData,aboutData,data,login,setLogin}}>
      
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
          
                  <Route exact path="/yonetici"  component={()=> login==true ? <AdminIndex page="Home" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/genel-ayarlar"  component={()=> login==true ? <AdminIndex page="MainSettings" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />
                  <Route path="/yonetici/yonetici-ayarlari"  component={()=> login==true ? <AdminIndex page="AdminSettings" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/tum-paylasimlar"  component={()=> login==true ? <AdminIndex page="Posts" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/aktif-paylasimlar"  component={()=> login==true ? <AdminIndex page="ActivePosts" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/arsiv-paylasimlar"  component={()=> login==true ? <AdminIndex page="ArchivePosts" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/yeni-paylasim"  component={()=> login==true ? <AdminIndex page="CreatePost" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/yeni-yorum"  component={()=> login==true ? <AdminIndex page="CreateComment" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/yeni-oneri"  component={()=> login==true ? <AdminIndex page="CreateRecommended" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />
                  
                  <Route path="/yonetici/yeni-fotograf"  component={()=> login==true ? <AdminIndex page="CreateImage" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/tum-yorumlar"  component={()=> login==true ? <AdminIndex page="Comments" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/aktif-yorumlar"  component={()=> login==true ? <AdminIndex page="ActiveComments" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/arsiv-yorumlar"  component={()=> login==true ? <AdminIndex page="ArchiveComments" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/tum-onerilenler"  component={()=> login==true ? <AdminIndex page="Recommends" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/aktif-onerilenler"  component={()=> login==true ? <AdminIndex page="ActiveRecommends" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/arsiv-onerilenler"  component={()=> login==true ? <AdminIndex page="ArchiveRecommends" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/basit-analiz"  component={()=> login==true ? <AdminIndex page="BasicAnalys" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/gelismis-analiz"  component={()=> login==true ? <AdminIndex page="Analys" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/gunluk-rapor"  component={()=> login==true ? <AdminIndex page="DailyReport" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/haftalik-rapor"  component={()=> login==true ? <AdminIndex page="WeeklyReport" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />

                  <Route path="/yonetici/istatistik/aylik-rapor"  component={()=> login==true ? <AdminIndex page="MonthlyReport" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />
                  
                  <Route path="/yonetici/istatistik/yillik-rapor"  component={()=> login==true ? <AdminIndex page="AnnualReport" />  : <Error code="404" message="Böyle bir sayfa bulunamadı" /> }  />
                  
                  <Route path="/cikis-yap" component={()=> <LogOut/> } />

                  <Route path="*" component={()=> <Error code="404" message="Böyle bir sayfa bulunamadı" />} />
                
                </Switch>

          </Router>

        </ThemeProvider>

      </MainContext.Provider>
      
      :

      <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        
        <ActivityIndicator
            number={3}
            diameter={28}
            borderWidth={4}
            duration={30}
            activeColor="#000"
            borderColor="#ccc"
            borderRadius="100%" 
        />

      </div>
    
    }
    
    </>
  
  )

}

export default App;
