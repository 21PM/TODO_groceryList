import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { v4 as RandomID }  from "uuid"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Listjsx from './list';
import './App.css'

function App() {

  const [item , Setitem] =  useState("");
  const [itemlist,Setitemlist] = useState([]);
  // const [editItemstatus,SetEditItem] = useState(false);
  const [ischecked,SetisChecked] =  useState(true)
  // const [ischecked,SetisChecked] =  useState(false)


  function Setischange(id){
    let ans = itemlist.map((ele)=>{
        if(id === ele.id){
           ele.ischeck = !ele.ischeck;
        }
        return ele
    })

    Setitemlist(ans)

    SetisChecked(!ischecked)
    // toast.success("item checked")
     
  }



  useEffect(()=>{

    if(ischecked === false ){
      toast.success("item checked")
    }
  
  },[ischecked])



  function SaveItems(e){
    Setitem(e.target.value)
  }

  function addItems(){

    let obj = [...itemlist,
      {
      
      id:RandomID(),
      item:item,
      ischeck:ischecked,
    }]
    
    toast("Added Item successfully")
    Setitemlist(obj);
    

  }

  function DeleteItem(i){

    console.log(i);
        
    let ans =  itemlist.filter((fd)=>{
         if(i !== fd.id){
          return fd
         }
    })

    Setitemlist(ans);
    toast.error("item deleted")
    
  }

  function editItem(){
    SetEditItem(!editItemstatus)
  } 

  console.log(ischecked);


  return (
    <>
    <ToastContainer/>
    <div className='outerDiv'>

      <h2 style={{textAlign:"center"}}>Grocery Bud</h2><br></br>

        <div style={{height:"27px",width:"100%",display:"flex",}}>
          <input type='text' style={{height:"100%",width:"75%"}} onChange={SaveItems} value={item}></input>
          <button style={{height:"100%",width:"25%",backgroundColor:"#06b6d4",color:'white',borderStyle:"none",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}} onClick={addItems}>Add Item</button><br></br>
          </div>
          <div className='bottomDIV'>
          {itemlist.map((ele) => {
            // console.log(ele.id);
            // console.log(ele.item);
            return <div className='itemDIv'>
             <div className='pdiv'>
              <input type='checkbox' onChange={()=>Setischange(ele.id)} key={ele.id}></input>
              {/* <p key={ele.id}>{ele.item}</p> */}

              {
                ele.ischeck?<p>{ele.item}</p>:<s>{ele.item}</s>
              }
  
             </div>

             <div className='SpanDIv'>
              
                <span key={ele.id} title='Delete'  onClick={() => DeleteItem(ele.id)}>🗑️</span>
    
             </div>
            </div>
          })}
          </div> 

        
    </div>

    </>
  )
}

export default App
