import React from "react";
 
const AccCard = ()=>{
    return(
        <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
          <h1 className=' font-bold px-9'>VERIFY YOUR ACCOUNT</h1>
      <form onSubmit={onSubmit}>
          <div className=" flex justify-center form-group p-8">
              <label forhtml="example">Verification Code:</label>
              <input type="text"  value={verificationCode} onChange={(event)=>setVerificationCode(event.target.value)} className="form-control" placeholder="Enter verification code" required="required"/>
          </div>
          <div className="flex justify-center">
        <button
          type="submit"
          className="group relative w-[200px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
        >
         Verify 
        </button>
      </div>
      
      </form>
      </div>
      </div>
    )
}