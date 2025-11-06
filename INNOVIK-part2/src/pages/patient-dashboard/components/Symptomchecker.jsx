import react,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Symptomchecker(){
    const [prompt,setPrompt]=useState('')
    const [answer,setAnswer]=useState('loading...')
     
const navigate=useNavigate();

    const imgupload=()=>{
        navigate('/upload')
    }
  
    const enterprompt=async()=>{
     try{
         
 const res=await axios.post('http://localhost:1000/Chatai',{
            prompt:prompt
        })
      
       if(res.status==200){
        //console.log(res.data.answer)
        setAnswer(res.data.answer)
        const utterance = new SpeechSynthesisUtterance(res.data.answer);
    utterance.voice = window.speechSynthesis.getVoices()[0]; // pick a voice
    utterance.lang = "hi-IN";
    utterance.rate = 1; // speed
    utterance.pitch = 1; // pitch
    window.speechSynthesis.speak(utterance);
       }
        console.log(prompt)
          setPrompt('')
       }
     
catch(err){
    console.log(err)
}
//    const speak = () => {
//     const utterance = new SpeechSynthesisUtterance(res.data.answer);
//     utterance.voice = window.speechSynthesis.getVoices()[0]; // pick a voice
//     utterance.rate = 1; // speed
//     utterance.pitch = 1; // pitch
//     window.speechSynthesis.speak(utterance);
//   };
 }
    return(<>
    {/* <Navigation /> */}
   
    <div className="bg-white h-screen w-screen flex justify-center items-center">
        <div className="h-[673px] w-[700px] bg-slate-500 pt-20 overflow-y-scroll">
           
            <p className='text-white font-bold text-3xl justify-self-center'>Ask AI</p>
            
                  <div className='flex ml-20 mt-10  items-center fixed'>
                      <button onClick={imgupload} className='bg-yellow-50'>upload</button>
                    <input type='text'placeholder='ask anything...' className='bg-slate-900 w-[500px]  flex items-center h-[50px] rounded-2xl placeholder:text-lg placeholder:justify-self-center placeholder:flex placeholder:items-self-center text-white' onChange={(e)=>setPrompt(e.target.value)} value={prompt}></input>
                  

                  {/* <IoSendSharp className='h-[50px] w-[30px] text-white ml-2' onClick={enterprompt}/>     */}
                  <button onClick={enterprompt}>enter</button>
                                 
                  </div>
                   <p className='ml-20 mt-24 text-white'>{answer}</p> 
        </div>

    </div>
    </>);
}
export default Symptomchecker;