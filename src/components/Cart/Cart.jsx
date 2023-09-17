const Cart = ({selectedCourses, courseFee, courseCredit, remainingCredit}) => {
 
    return (
        <div>
            <div className="bg-white p-5 md:p-3 lg:p-3 xl:p-7 rounded-lg">
                <h3 className="text-[#2fc7edad] text-lg md:text-sm lg:text-base font-semibold mb-5">Credit Hour Remaining {remainingCredit} hr</h3>
                <hr />
                <h2 className="text-xl font-bold my-4">Course Name</h2>
    
            
                <div className="mb-4">
                    {
                        selectedCourses.map((courseBuy, index) => (
                            <div key={index} id="course_names">
                                <ol key={index} className="text-[#1C1B1BCA] text-base font-normal my-1">
                                <li key={index}>{index + 1}. {courseBuy.name}</li>
                                </ol>

                            </div>
                        ))
                    }
                </div>
                <hr />
                <p className="text-[#1C1B1BCA] text-base font-medium my-3">Total Credit : {courseCredit} hrs</p>
                <hr />
                <p className="text-[#1C1B1BCA] text-base font-semibold my-3">Total Price : {courseFee} USD</p>
            </div>
        </div>
    );
};

export default Cart;