import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                src={"https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-128.png"}
                alt="Tailwind CSS chat bubble component" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is UPP?</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:43</div>
    </div>
  )
}

export default Message

//Start Code Snippet

// import React from 'react'

// function Message() {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img 
//                 src={"https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-128.png"}
//                 alt="Tailwind CSS chat bubble component" />
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is UPP?</div>
//         <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:43</div>
//     </div>
//   )
// }

// export default Message