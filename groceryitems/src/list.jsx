

// function Listjsx({itemlist,editItemstatus,SaveItems,addItems,DeleteItem,editItem}){

    

//     return(
//         <div>
//             {itemlist.map((ele) => {
//             console.log(ele.id);
//             console.log(ele.item);
//             return <div className='itemDIv' key={ele.id}>
//              <div className='pdiv'>
//               <input type='checkbox' key={ele.id}></input>
//               { editItemstatus?<input type='textbox' key={ele.id}></input>:<p key={ele.id}>{ele.item}</p>}
  
//              </div>

//              <div className='SpanDIv'>

//               {
//                 editItemstatus?<span key={ele.id} onClick={() => editItem(ele.id)}>✅</span>:<span key={ele.id} title='Edit' onClick={() => editItem(ele.id)    }>🖋️</span>
//               }
//                 <span key={ele.id} title='Delete'  onClick={() => DeleteItem(ele.id)}>🗑️</span>
    
//              </div>
//             </div>
//           })}
//         </div>
//     )
// }

// export default Listjsx;