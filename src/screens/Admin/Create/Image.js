import React,{useState} from 'react'

import axios from 'axios'

const CreateImage=(props)=>{

  const [file,setFile]=useState(null)

  const onFileChange=(e)=>{
    setFile(e.target.result)
    let files=e.target.files || e.dataTransfer.files
    createImage(files[0])
  }
  const createImage=(file)=>{
    let reader = new FileReader();
    reader.onload = (e) => {
      setFile(e.target.result)
    };
    reader.readAsDataURL(file);
  }
  const onFileUpload=(e)=>{
    e.preventDefault()
    const formData = {file: file}

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_SEND_IMAGE,
     {formData},
     {headers:{'Content-Type':'application/json','Authorization':"Bearer "+localStorage.getItem('token')}})
     .then(function (results) { 
      console.log(results)
    })
    
  }
  


  return (
      
      <>

        <form method="POST" onSubmit={onFileUpload} enctype="multipart/form-data">

          <input type="file" onChange={onFileChange} />
          <input type="submit" name="" value="gönder"/>
        </form>

      </>

  )

}

export default CreateImage