import { Link } from "react-router-dom";

const Card = ({data }) => {
    const link = `/doctorInfo/${data.Name}`
    return (
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-12 pt-5">
                <img class="mb-3 w-24 h-30 rounded-full shadow-lg" src="https://www.nicepng.com/png/detail/867-8678512_doctor-icon-physician.png" alt="doctor" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.Name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{data.Specialist}</span>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                    <Link to={link}  state={data} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg hover:bg-pink-200 focus:ring-4 focus:outline-none focus:ring-pink-300 bg-pink-400 dark:hover:bg-pink-400 dark:focus:ring-pink-400">Book appointment</Link>
                </div>
            </div>
        </div>
    )
}
 
export default Card;