import { useLocation  } from "react-router-dom";

const DoctorInfo = () => {

    const location = useLocation();

    return (
        <>
    <div className='Container relative top-[80px]'>
            <div class="w-fit md:w-full xs:w-full h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-7">
                <div className="flex">
                    <div class="flex-initial w-24 h-fit">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://www.nicepng.com/png/detail/867-8678512_doctor-icon-physician.png" alt="doctor" />
                    </div>
                    <div class="flex-initial pl-5 w-64 h-fit">
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{location.state.Name}</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{location.state.Specialist}</span>
                        <h6 class="text-sm mt-1 text-gray-500 dark:text-gray-400">NMC Number:{location.state.NMCnumber}</h6>
                        <div class="flex mt-4 space-x-3 lg:mt-6">
                            <a href="/form" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-pink-300 rounded-lg hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-300 dark:hover:bg-pink-400 dark:focus:ring-pink-500">Book an appointment</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full mt-6 h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-7">
                <div class="flex-initial pl-5 w-fit h-fit">
                    <h5 class=" text-xl font-medium text-gray-900 dark:text-white mb-[15px]">Profile</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {location.state.Profile}
                    </p>
                    {/* <p className=" font-normal text-gray-700 dark:text-gray-400">
                    {location.state.AvailableLocation}
                    </p> */}
                </div>
            </div>
            </div>
        </>
    )
}

export default DoctorInfo;