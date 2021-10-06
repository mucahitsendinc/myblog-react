import React,{useState,useEffect,useRef} from 'react'

import {AdminContent,Settings} from '../../../components/Styles/Admin/Content'

import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faImages } from '@fortawesome/free-solid-svg-icons';

import ImagesPopUp from '../../../components/Admin/Popup/ImagesPopUp'

import axios from 'axios'

import ActivityIndicator from 'react-activity-indicator';

const CreatePost=()=>{

  const history=useHistory();

  const smallImage=useRef()

  const [post,setPost]=useState(false);

  const [error,setError]=useState(null);

  const [success,setSuccess]=useState(null);

  const [tags,setTags]=useState(null);

  const [title,setTitle]=useState(null);

  const [pImage,setPImage]=useState(null);

  const [content,setContent]=useState(null);

  const [desc,setDesc]=useState(null);

  const [popup,setPopup]=useState(false);

  const [selectedImage,setSelectedImage]=useState(null);


  useEffect(() => {

    if(selectedImage!=null){

      setPopup(false)

      smallImage.current.value=selectedImage
      setPImage(selectedImage)

    }

  }, [selectedImage])

  const createPost=async(e)=>{

    e.preventDefault()

    if(post==false){

      setPost(true)

      let tag=[]

      if(tags!=null){

        tags.split(',').forEach(element => {

          tag.push(element);

        });
      }

      axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_CREATE_POST,{ image:pImage==null ? selectedImage : pImage,title:title,content:content,description:desc,tags:tag},{headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*','Authorization':'Bearer '+localStorage.getItem('token')}})
      .then(function (results) {
        
        setError(null)

        setSuccess(results.data.message)

        setTitle('')

        setTags('')

        setPImage('')

        setContent('')

        setDesc('')

        setSelectedImage('')

        setTags('')

        setPost(false)

      }).catch(function(results){

        setSuccess(null)

        setError(results.response.data.message)

        setPost(false)

      })

    }

  }

  return (
      
      <React.Fragment>

      {

        popup==true  ? 

        <ImagesPopUp closer={setPopup} selector={setSelectedImage} />

        :

        <React.Fragment/>

      }

        <AdminContent>


          <div className="adminHr">

            <div className="hrText">

              Yeni Paylaşım

            </div>

            <div  className="goBack">

              <div onClick={()=>history.goBack()} className="goBackButton">

                Geri DÖn

              </div>

            </div>

          </div>

          <Settings>

          <form method="POST" onSubmit={createPost}>

            <div className="SettingsFormGroup">

              <label>

              Başlık

              </label>

              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Test başlık" />

            </div>

            <div className="SettingsFormGroup">

              <label>

                Açıklama

              </label>

              <input type="text" placeholder="Zorunlu değil" value={desc} onChange={(e)=>setDesc(e.target.value)} />

            </div>

            <div className="SettingsFormGroup">

              <label>

                Küçük Fotoğraf

              </label>

              <input type="text" ref={smallImage} value={pImage} onChange={(e)=>setPImage(e.target.value)} placeholder="Fotoğraf url" />

              <div className="Images" onClick={()=>setPopup(!popup)}>

                <FontAwesomeIcon icon={faImages}/>

              </div>

            </div>

            <div className="SettingsFormGroup">

              <label>
                
                Etiketler

              </label>

              <input type="text" value={tags} onChange={(e)=>setTags(e.target.value)} placeholder="Etiket 1,Etiket 2" />

            </div>

            <div className="SettingsFormGroup">

              <label>

                İçerik

              </label>

              <textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder="İçerik"></textarea>

            </div>
            
            <div className="SettingsFormButton">
              
              {
                error!=null ?

                <div className="errorArea">

                    {error}

                </div>

                :

                (

                  success!=null ?

                  <div className="successArea">

                    {success}

                  </div>

                  :

                  <React.Fragment/>
                )
              }
              {
                (
                    post==true ? 
                    <center>
                      <ActivityIndicator 
                        number={3}
                        diameter={28}
                        borderWidth={3}
                        duration={60}
                        activeColor="#ccc"
                        borderColor="#ccc"
                        borderRadius="100%" 
                        />
                      </center>
                    :
                    <input type="submit"  value="Paylaş" />
                  )
              }
            </div>

          </form>

        </Settings>

        </AdminContent>

      </React.Fragment>

  )

}

export default CreatePost