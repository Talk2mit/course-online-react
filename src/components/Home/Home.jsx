import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
    const [course, setCourse] = useState([]);
    
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [courseFee, setCourseFee] = useState(0);
    const [courseCredit, setCourseCredit] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(0);
    
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, {})

    const handleSelectCourse = (course) => {
        const isCourse = selectedCourses.find(purchase => purchase.id == course.id);
        let courseFee = course.price;
        let courseCredit = course.credit;
        let remainingCredit = 20;

        if (isCourse) {
           return alert('Already purchase this course!!!');
        }else {
            selectedCourses.map(free => {
                courseFee += free.price;
                courseCredit += free.credit;
            });

            if(courseCredit > 20) {
                return alert('Your chosen course has a credit exceeding 20 hours.');
            }else if(courseCredit < 0) {
                return alert('Your chosen course has minimum credit- 0 hours.');
            }else {
                remainingCredit = remainingCredit - courseCredit;
                setRemainingCredit(remainingCredit);
                setCourseCredit(courseCredit);
                setCourseFee(courseFee);
                setSelectedCourses(isCourse);
                setSelectedCourses([...selectedCourses, course]);
            }
        }
    }

    return (
        <div className="body px-4 pt-10 pb-16  lg:px-10 justify-between gap-5 bg-[#F3F3F3] rounded-lg">
            <h1 className='text-4xl text-center font-extrabold'>Course Registration</h1>
            <div className="md:flex mt-7 gap-5">
                <div className="grid grid-cols-1 md:w-2/3 lg:w-3/4 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                    {
                        course.map(courseInfo => (
                        <div key={courseInfo.id} className="bg-white p-4 rounded-xl">
                            <img className="w-full h-40 md:h-36 lg:h-40" src={courseInfo.image} alt="" />
                            <h3 className="text-lg text-[#1C1B1A]  md:text-sm lg:text-base xl:text-lg font-semibold mt-2">{courseInfo.name}</h3>
                            <p className="mt-2"><small className="text-[#1C1B1A99] text-sm md:text-xs lg:text-xs xl:text-sm font-normal">{courseInfo.description}</small></p>
                            <div className="flex justify-between items-center ">
                                <div className="flex justify-between items-center gap-4 md:gap-2 lg:gap-2 mt-5">
                                    <p className="text-[#1C1B1A99] font-medium text-base md:text-xs lg:text-sm ">Price :$ {courseInfo.price}</p>
                                </div>
                                <div className="flex justify-between items-center gap-5 md:gap-2 lg:gap-2 xl:gap-5 mt-5">
                                    <img src="https://i.ibb.co/f2sQXf1/Frame.png" alt="" />
                                    <p className="text-[#1C1B1A99] font-medium text-base md:text-xs lg:text-sm ">Credit : {courseInfo.credit}hr</p>
                                </div>
                            </div>
                            <button onClick={() => handleSelectCourse(courseInfo)} className="bg-[#2fd6cef5] w-full rounded-lg p-3 text-white font-semibold mt-6 text-center text-lg hover:bg-violet-500">Select</button>
                        </div>
                        ))
                    }

                </div>
                <div className="md:w-1/3 lg:w-1/4 mt-5 md:mt-2">
                    <Cart
                    remainingCredit = {remainingCredit}
                    selectedCourses = {selectedCourses}
                    courseFee = {courseFee}
                    courseCredit = {courseCredit}
                    ></Cart>
                    <button onClick={() => handleSelectCourse(courseInfo)} className="bg-[#1e3f9985] w-full rounded-lg p-3 text-white text-center text-lg font-semibold mt-6 hover:bg-gray-500">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;