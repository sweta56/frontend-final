import Card from '../Reuseable/Card';
import DoctorData from '../../DoctorInfo/Doctor.json';


const DoctorCard = () => {

    return (
        <div className='Container m-6'>
             <div class="grid grid-cols-4 gap-4">
                 {
                    DoctorData.map((ele) => {
                           return (
                              <Card name={ele.Name} specialist={ele.Specialist}/>
                           )
                    })
                 }
            </div> 
        </div>
    )
}
export default DoctorCard;