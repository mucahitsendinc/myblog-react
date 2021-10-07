import React,{useState,useRef,useEffect} from 'react'

import ActivityIndicator from 'react-activity-indicator'

import axios from 'axios'

import { ImageUpload } from '../../Styles/Admin/Content'

import { AdminContext,useContext } from '../../screens/Admin/AdminContext'

const ImageUploader=(props)=>{

  const {setNotify}=useContext(AdminContext)

  const [success,setSuccess]=useState(0)

  const [error,setError]=useState(0)

  const [post,setPost]=useState(false)

  const [file,setFile]=useState(null)

  const uploadInput=useRef()

  const uploadForm=useRef()

  const onFileChange=(e)=>{

    setFile(e.target.result)

    let files=e.target.files || e.dataTransfer.files

    createImage(files[0])

  }

  useEffect(() => {

    setTimeout(() => {

      setError(0) 

      setSuccess(0)

    }, 2500);

  }, [success,error])

  const createImage=(file)=>{

    try {

      let reader = new FileReader();

      reader.onload = (e) => {

        setFile(e.target.result)

      };

      reader.readAsDataURL(file);

    } catch (er) {

      console.log(er)

    }

  }
  const onFileUpload=()=>{

    setPost(true)

    setSuccess(0)

    const formData = {file: file}

    let err=false

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_SEND_IMAGE,{formData},{headers:{'Content-Type':'application/json','Authorization':"Bearer "+localStorage.getItem('token')}})
    .then(function (results) { 
      setPost(false)
      setSuccess(59)
      setNotify(null)
      setTimeout(() => {
        setNotify({status:'success',message:results.data.message})
      }, 300);
      if(props.selector!=undefined){
        props.selector(results.data.image)
      }
    }).catch((e)=>{
      setPost(false)
      setError(59)
      setNotify(null)
      setTimeout(() => {
        setNotify({status:'error',message:e.response.data.message})
      }, 300);
    })
  }
  
  useEffect(() => {
    if(file!=null){
      onFileUpload()
    }
  }, [file])

  const showFileManager=()=>{
    if(post==false){
      uploadInput.current.click()
    }

  }
  
  return(
    <ImageUpload success={success} error={error}>
          <form ref={uploadForm}  method="POST" onSubmit={(e)=> e.preventDefault()} encType="multipart/form-data">
            <input ref={uploadInput} type="file" hidden onChange={onFileChange} />
            <label className="fileManager" onClick={showFileManager}>

              {
                post==true? 
                <ActivityIndicator
                    number={3}
                    diameter={28}
                    borderWidth={3}
                    duration={60}
                    activeColor="#fff"
                    borderColor="#ccc"
                    borderRadius="100%" 
                />
                :
                <>
                {error!=0 ? 
                <>
                  <span className="eText">Geçerli bir fotoğraf seçin!</span>
                </>
                :
                (
                  success!=0 ? 
                  <>
                  <span className="sText">Fotoğraf başarı ile yüklendi!</span>
                  </>
                  :
                  <>
                  Fotoğraf yüklemek için tıkla!
                  </>
                )
                }
                </>
              }
              
            </label>
          </form>
        </ImageUpload>
  )
}

export default ImageUploader