import React from 'react';


const UpdateProfile = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    
  }
    return (<>
        <div className="relative ">
            <div className='min-h-screen bg-pink-100 flex flex-col'>
                <div className='max-w-md w-full mx-auto'>
                    <div className='text-3xl font-bold text-gray-900 mt-2 text-center'>Update Profile</div>
                    <div className='max-m-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
                        <form action="" className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="" className='text-sm font-bold text-black block'>Education</label>
                                <textarea rows="2" cols="25" placeholder="Education" className='w-full p-2 border border-gray-300 rounded mt-1'></textarea>
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm font-bold text-black block'>Hospitals you are affiliated to</label>
                                <textarea rows="2" cols="25" placeholder="Hospitals you are affiliated to" className='w-full p-2 border border-gray-300 rounded mt-1'></textarea>
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm font-bold text-black block'>Information About You </label>
                                <textarea rows="2" cols="25" placeholder="Write info about you" className='w-full p-2 border border-gray-300 rounded mt-1'></textarea>
                            </div>
                            
                                <div className='mt-2' >
                                    <button  className="w-[50%] py-2 rounded-md text-white  bg-pink-400">Update</button>
                                </div>
                            
                        </form>
                    </div>
                </div>
         

            </div>
            
        </div>
    
        </>
    )
}
export default UpdateProfile;