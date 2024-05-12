import { useEffect } from "react";
import { useState } from "react";


const ContactCard = () => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        setContact(data.results[0]);
      };
  
      fetchData();
    }, []);


    return (
         <div className=" h-full my-auto">
               <div className="bg-white shadow-md rounded-lg p-6 md:flex">
                {/* Image placeholder */}
                <div className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-4">
                    <img src={contact?.picture?.large} alt="Contact" />
                </div>

                <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-2">{contact.name?.first} {contact.name?.last}</h2>
                    <p className="text-gray-600 mb-2">Gender: {contact?.gender} </p>
                    <p className="text-gray-600">Phone Number: {contact?.phone} </p>
                </div>
            </div>
         </div>
    );
};

export default ContactCard;