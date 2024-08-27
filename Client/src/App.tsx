import { useState } from 'react'
import axios from 'axios'
import FileDownload from 'js-file-download'
import './App.css'




export default function(){

  const [file, setFile] = useState()
  
  
  const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:3001/upload', formData)
    .then(res => {})
    .catch(er => console.log(er))
    console.log(file.name) ;
  }

  const download = (e) => {
    
    e.preventDefault()
    axios({
      url:"http://localhost:3001/download",
      method:"GET",
      responseType:"blob",
    }).then( (res) =>{
      
      FileDownload(res.data,`output.xlsx`)
    }).catch(er => console.log(er))
  }

  return (
    
    
    <div className='form'>
      
      <span className=' text-7xl bg-transparent'>
        <ion-icon name="cloud-upload-outline"></ion-icon>
      </span>
      <label className='bg-white relative flex gap-2 flex-col justify-center align-middle mt-4 mb-2 rounded-md 
       border-2  cursor-pointer label' htmlFor='file-input'>
        <span className='text-xl text-center span'>Drag file here to upload</span>
        or 
        <input  type="file" id='file-input' onChange={(e)=> setFile(e.target.files[0])} required />
      </label>
        <div className='flex gap-2 justify-center'>
      

          <button className='bg-slate-300 p-3 rounded-md mt-1' onClick={(e)=>{download(e)}} >Download</button>
          <button className='bg-slate-300 p-3 rounded-md mt-1'  onClick={upload}>Upload</button>
      </div>
      </div>
  )
}
/*
    
    */