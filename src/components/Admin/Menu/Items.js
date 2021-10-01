import {useState,useEffect} from 'react'

import {MenuItemList,MenuItem,SubMenu,LogOut} from '../../Styles/Admin/Header' 

import {Link,useLocation,useHistory} from 'react-router-dom'

import { faArrowDown,faThumbsUp,faComment,faHome,faChartArea,faPlus,faSignOutAlt,faCog } from '@fortawesome/free-solid-svg-icons'

import {faBlogger} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Items=(props)=>{
  
  const Location=useLocation()

  const History=useHistory()

  const [active,setActive]=useState('')

  const [drop,setDrop]=useState(

    Location.pathname.indexOf('paylasim')!=-1 && Location.pathname.indexOf('yeni')==-1 ? 'paylasimlari-yonet' :

    (

      Location.pathname.indexOf('yorumlar')!=-1 ? 'yorumlari-yonet' :

      (

        Location.pathname.indexOf('onerilenler')!=-1 ? 'onerilenleri-yonet' :

        (

          Location.pathname.indexOf('istatistik')!=-1 ? 'istatistikler' :

          (

            Location.pathname.indexOf('yeni')!=-1 ? 'yeni-icerik' :

            (

              Location.pathname.indexOf('genel-ayarlar')!=-1 ? 'genel-ayarlar' :

              (

                'yonetici'

              )

            )

          )

        )

      )

    )

  )

  useEffect(() => {

    if(drop==''){

      setActive(

        Location.pathname.indexOf('paylasim')!=-1 && Location.pathname.indexOf('yeni')==-1 ? 'paylasimlari-yonet' :

        (

          Location.pathname.indexOf('yorumlar')!=-1 ? 'yorumlari-yonet' :

          (

            Location.pathname.indexOf('onerilenler')!=-1 ? 'onerilenleri-yonet' :

            (

              Location.pathname.indexOf('istatistik')!=-1 ? 'istatistikler' :

              (

                Location.pathname.indexOf('yeni')!=-1 ? 'yeni-icerik' :

                (

                  Location.pathname.indexOf('genel-ayarlar')!=-1 ? 'genel-ayarlar' :

                  (

                    'yonetici'

                  )

                )

              )

            )

          )

        )

      )

    }else{

      setActive(

        Location.pathname.indexOf('paylasim')!=-1 && Location.pathname.indexOf('yeni')==-1 ? (

          Location.pathname.indexOf('aktif')!=-1 ? 'aktif-paylasimlar' : (

            Location.pathname.indexOf('arsiv')!=-1 ? 'arsiv-paylasimlar' : 'tum-paylasimlar'

          )

        )

        :

        (

          Location.pathname.indexOf('yorumlar')!=-1 ? (

            Location.pathname.indexOf('aktif')!=-1 ? 'aktif-yorumlar' : (

              Location.pathname.indexOf('arsiv')!=-1 ? 'arsiv-yorumlar' : 'tum-yorumlar'
            )

          )

          :

          (

            Location.pathname.indexOf('onerilenler')!=-1 ? (

              Location.pathname.indexOf('aktif')!=-1 ? 'aktif-onerilenler' : (

                Location.pathname.indexOf('arsiv')!=-1 ? 'arsiv-onerilenler' : 'tum-onerilenler'

              )

            )

            :

            (

              Location.pathname.indexOf('istatistik')!=-1 ? (

                Location.pathname.indexOf('basit')!=-1 ? 'basit-analiz' : (

                  Location.pathname.indexOf('gelismis')!=-1 ? 'gelismis-analiz' : (

                    Location.pathname.indexOf('gunluk')!=-1 ? 'gunluk-rapor' : (

                      Location.pathname.indexOf('haftalik')!=-1 ? 'haftalik-rapor' : (

                        Location.pathname.indexOf('aylik')!=-1 ? 'aylik-rapor' : (

                          Location.pathname.indexOf('yillik')!=-1 ? 'yillik-rapor' : 

                          (
                            Location.pathname.indexOf('genel-ayarlar')!=-1 ? 'genel-ayarlar' : 'yonetici'
                          )

                        )

                      )

                    )

                  )

                )

              )

              :

              (

                Location.pathname.indexOf('yeni')!=-1 ? (

                  Location.pathname.indexOf('yorum')!=-1 ? 'yeni-yorum' : (

                    Location.pathname.indexOf('paylasim')!=-1 ? 'yeni-paylasim' : (

                      Location.pathname.indexOf('resim')!=-1 ? 'yeni-resim' : 'yeni-oneri'

                    )

                  )

                )

                :

                (
                  Location.pathname.indexOf('genel-ayarlar')!=-1 ? 'genel-ayarlar' : 'yonetici'
                )

              )

            )

          )

        )

      )

    }

  }, [drop])

  useEffect(() => {

    if(props.open==false){
      
      setDrop('')

    }

  }, [props.open])

  const getSmallMenuChecker=(string="yok")=>{

    if(string!="yok"){

      History.push(string)

      props.setopen(false)

    }else{

      if(props.open!=true){

        props.setopen(true)

      }

    }
    
  }

  const getLogOut=()=>{
    History.push('/cikis-yap')
  }

  return (

    <MenuItemList>

      <ul>

        <MenuItem onClick={()=>getSmallMenuChecker('/yonetici')} active={ active==('yonetici') && (drop=='' || drop=='yonetici') ? true : false }>

          <FontAwesomeIcon icon={faHome}/>

          <Link to="/yonetici">Ana Sayfa</Link>

        </MenuItem>

        <MenuItem onClick={()=>getSmallMenuChecker('/yonetici/genel-ayarlar')} active={ active==('genel-ayarlar') && (drop=='' || drop=='genel-ayarlar') ? true : false }>

          <FontAwesomeIcon icon={faCog}/>

          <Link to="/yonetici/genel-ayarlar">Genel Ayarlar</Link>

        </MenuItem>

        <MenuItem onClick={()=>getSmallMenuChecker()} drop={drop=='yeni-icerik' ? true : false} active={ Location.pathname.indexOf('/yeni-icerik')!=-1 || active=='yeni-icerik' && (drop=='' || drop=='yeni-icerik') ? true : false }>

          <FontAwesomeIcon icon={faPlus}/>

          <div onClick={()=>setDrop(drop!='yeni-icerik' ? 'yeni-icerik' : '')}>

            Yeni İçerik

            <FontAwesomeIcon icon={faArrowDown}/>

          </div>

          <ul>

            <SubMenu activeSub={active==('yeni-paylasim') ? true : false}>

              <Link  to="/yonetici/yeni-paylasim">Yeni Paylaşım</Link>

            </SubMenu>

            <SubMenu activeSub={active==('yeni-yorum') ? true : false}>

              <Link  to="/yonetici/yeni-yorum">Yeni Yorum</Link>

            </SubMenu>

            <SubMenu activeSub={active==('yeni-oneri') ? true : false}>

              <Link  to="/yonetici/yeni-oneri">Yeni Öneri</Link>

            </SubMenu>

            <SubMenu activeSub={active==('yeni-resim') ? true : false}>

              <Link  to="/yonetici/yeni-resim">Yeni Resim</Link>

            </SubMenu>
          
          </ul>
          
        </MenuItem>

        <MenuItem onClick={()=>getSmallMenuChecker()} drop={drop=='paylasimlari-yonet' ? true : false} active={ Location.pathname.indexOf('/paylasimlari-yonet')!=-1 || active=='paylasimlari-yonet' && (drop=='' || drop=='paylasimlari-yonet') ? true : false }>

          <FontAwesomeIcon icon={faBlogger}/>

          <div onClick={()=>setDrop(drop!='paylasimlari-yonet' ? 'paylasimlari-yonet' : '')}>

            Paylaşımları Yönet

            <FontAwesomeIcon icon={faArrowDown}/>

          </div>

          <ul>

            <SubMenu activeSub={active==('tum-paylasimlar') ? true : false}>

              <Link  to="/yonetici/tum-paylasimlar">Tüm Paylaşımlar</Link>

            </SubMenu>

            <SubMenu activeSub={active==('arsiv-paylasimlar') ? true : false}>

              <Link  to="/yonetici/arsiv-paylasimlar">Arşiv Paylaşımlar</Link>

            </SubMenu>

            <SubMenu activeSub={active==('aktif-paylasimlar') ? true : false}>

              <Link  to="/yonetici/aktif-paylasimlar">Aktif Paylaşımlar</Link>

            </SubMenu>
          
          </ul>
          
        </MenuItem>

        <MenuItem onClick={()=>getSmallMenuChecker()} drop={drop=='yorumlari-yonet' ? true : false} active={ Location.pathname.indexOf('/yorumlari-yonet')!=-1 || active=='yorumlari-yonet' && (drop=='' || drop=='yorumlari-yonet') ? true : false }>

          <FontAwesomeIcon icon={faComment}/>

          <div onClick={()=>setDrop(drop!='yorumlari-yonet' ? 'yorumlari-yonet' : '')}>

            Yorumları Yönet

            <FontAwesomeIcon icon={faArrowDown}/>

          </div>

          <ul>

            <SubMenu activeSub={active==('tum-yorumlar') ? true : false}>

              <Link  to="/yonetici/tum-yorumlar">Tüm Yorumlar</Link>

            </SubMenu>

            <SubMenu activeSub={active==('arsiv-yorumlar') ? true : false}>

              <Link  to="/yonetici/arsiv-yorumlar">Arşiv Yorumlar</Link>

            </SubMenu>

            <SubMenu activeSub={active==('aktif-yorumlar') ? true : false}>

              <Link  to="/yonetici/aktif-yorumlar">Aktif Yorumlar</Link>

            </SubMenu>
          
          </ul>
          
        </MenuItem>

        <MenuItem onClick={()=>getSmallMenuChecker()} drop={drop=='onerilenleri-yonet' ? true : false} active={ Location.pathname.indexOf('/onerilenleri-yonet')!=-1 || active=='onerilenleri-yonet' && (drop=='' || drop=='onerilenleri-yonet') ? true : false }>

          <FontAwesomeIcon icon={faThumbsUp}/>

          <div onClick={()=>setDrop(drop!='onerilenleri-yonet' ? 'onerilenleri-yonet' : '')}>

            Önerilenleri Yönet

            <FontAwesomeIcon icon={faArrowDown}/>

          </div>

          <ul>

            <SubMenu activeSub={active==('tum-onerilenler') ? true : false}>

              <Link  to="/yonetici/tum-onerilenler">Tüm Önerilenler</Link>

            </SubMenu>

            <SubMenu activeSub={active==('arsiv-onerilenler') ? true : false}>

              <Link  to="/yonetici/arsiv-onerilenler">Arşiv Önerilenler</Link>

            </SubMenu>

            <SubMenu activeSub={active==('aktif-onerilenler') ? true : false}>

              <Link  to="/yonetici/aktif-onerilenler">Aktif Önerilenler</Link>

            </SubMenu>

          </ul>
          
        </MenuItem>

        <MenuItem onClick={()=>getSmallMenuChecker()} drop={drop=='istatistikler' ? true : false} active={ Location.pathname.indexOf('/istatistikler')!=-1 || active=='istatistikler' && (drop=='' || drop=='istatistikler') ? true : false }>

          <FontAwesomeIcon icon={faChartArea}/>

          <div onClick={()=>setDrop(drop!='istatistikler' ? 'istatistikler' : '')}>

            İstatistikler

            <FontAwesomeIcon icon={faArrowDown}/>

          </div>

          <ul>

            <SubMenu activeSub={active==('basit-analiz') ? true : false}>

              <Link  to="/yonetici/istatistik/basit-analiz">Basit Analiz</Link>

            </SubMenu>

            <SubMenu activeSub={active==('gelismis-analiz') ? true : false}>

              <Link  to="/yonetici/istatistik/gelismis-analiz">Gelişmiş Analiz</Link>

            </SubMenu>

            <SubMenu activeSub={active==('gunluk-rapor') ? true : false}>

              <Link  to="/yonetici/istatistik/gunluk-rapor">Günlük Rapor</Link>

            </SubMenu>

            <SubMenu activeSub={active==('haftalik-rapor') ? true : false}>

              <Link  to="/yonetici/istatistik/haftalik-rapor">Haftalık Rapor</Link>

            </SubMenu>

            <SubMenu activeSub={active==('aylik-rapor') ? true : false}>

              <Link  to="/yonetici/istatistik/aylik-rapor">Aylık Rapor</Link>

            </SubMenu>

            <SubMenu activeSub={active==('yillik-rapor') ? true : false}>

              <Link  to="/yonetici/istatistik/yillik-rapor">Yıllık Rapor</Link>

            </SubMenu>
          
          </ul>
          
        </MenuItem>

      </ul>

      <LogOut onClick={()=>getLogOut()}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogOut>

    </MenuItemList>
  )

}

export default Items