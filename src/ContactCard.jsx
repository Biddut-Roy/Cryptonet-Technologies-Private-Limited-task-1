

const ContactCard = () => {
    return (
         <div className=" h-full my-auto">
               <div className="bg-white shadow-md rounded-lg p-6 md:flex">
                {/* Image placeholder */}
                <div className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-4">
                    <img src="image_source" alt="Contact" />
                </div>

                <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-2">firstName lastName</h2>
                    <p className="text-gray-600 mb-2">Gender: </p>
                    <p className="text-gray-600">Phone Number: </p>
                </div>
            </div>
         </div>
    );
};

export default ContactCard;