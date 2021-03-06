import React,{useState,useEffect,useRef} from 'react'

import {AdminContent,Settings} from '../../../Styles/Admin/Content'

import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faImages } from '@fortawesome/free-solid-svg-icons';

import ImagesPopUp from '../../../components/Admin/Popup/ImagesPopUp'

import axios from 'axios'

import ActivityIndicator from 'react-activity-indicator';

import { AdminContext,useContext} from '../AdminContext'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import QuillToolbar,{ modules,formats } from '../../../components/Admin/EditorToolbar';
const CreatePost=()=>{

  const {setNotify}=useContext(AdminContext)

  const history=useHistory();

  const smallImage=useRef()

  const [post,setPost]=useState(false);

  const [tags,setTags]=useState('');

  const [title,setTitle]=useState('');

  const [pImage,setPImage]=useState('');

  const [content,setContent]=useState('');

  const [desc,setDesc]=useState('');

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
        
        setNotify(null)
        setNotify({status:'success',message:results.data.message})

        setTitle('')

        setTags('')

        setPImage('')

        setContent('')

        setDesc('')

        setSelectedImage('')

        setTags('')

        setPost(false)

      }).catch(function(results){

        setNotify(null)
        setNotify({status:'error',message:results.response.data.message})

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

              Yeni Payla????m

            </div>

            <div  className="goBack">

              <div onClick={()=>history.goBack()} className="goBackButton">

                Geri D??n

              </div>

            </div>

          </div>

          <Settings>

          <form method="POST" onSubmit={createPost}>

            <div className="SettingsFormGroup">

              <label>

              Ba??l??k

              </label>

              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Test ba??l??k" />

            </div>

            <div className="SettingsFormGroup">

              <label>

                A????klama

              </label>

              <input type="text" placeholder="Zorunlu de??il" value={desc} onChange={(e)=>setDesc(e.target.value)} />

            </div>

            <div className="SettingsFormGroup">

              <label>

                K??????k Foto??raf

              </label>

              <input type="text" ref={smallImage} value={pImage} onChange={(e)=>setPImage(e.target.value)} placeholder="Foto??raf url" />

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

          
            <QuillToolbar />
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder={"????erik"}
              modules={modules}
              formats={formats}
            />
            
            <div className="SettingsFormButton">
              
              
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
                    <input type="submit"  value="Payla??" />
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