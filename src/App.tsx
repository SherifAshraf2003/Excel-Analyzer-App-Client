import { useState } from 'react'
import axios from 'axios'
import FileDownload from 'js-file-download'
import './App.css'




export default function(){

  const [file,setFile] = useState()
  
  const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:3001/upload', formData)
    .then(res => {})
    .catch(er => console.log(er))
    console.log(file.name) ;
  }
  /*
  const downloadFile = (file) => {
    fetch(`http://localhost:3000/download/${file.name}`, {
      method : 'GET',
    })
    .then(res => res.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.download = file.name 
        document.appendChild(aTag)
        aTag.click()
        aTag.remove() 
        console.log('Hello')
    }).catch(e => console.log(e))
  }

  */

  const download = (e) => {
    
    e.preventDefault()
    axios({
      url:"http://localhost:3001/download",
      method:"GET",
      responseType:"blob"
    }).then( (res) =>{
      
      FileDownload(res.data,`output.xlsx`)
    })
  }

  return (
    <div>
      <input  type="file" onChange={(e)=> setFile(e.target.files[0])} />
      <button className='bg-slate-500 p-3 rounded-md mt-1'  onClick={upload}>Upload</button>
      <button onClick={(e)=>{download(e)}} >Download</button>
    </div>
  )
}