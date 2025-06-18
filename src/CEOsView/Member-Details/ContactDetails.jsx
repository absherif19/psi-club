import React from "react";

const ContactDetails = () => {
  const contact = {
    email: "Ahmedmostafa20@gmail.com",
    mobile: "+971098765",
    nationality: "United Arab Emirates",
  };

  return (
    <div className="bg-[#F8F8F8] p-8 rounded-lg w-full">
      <h2 className="text-[#E35F27] font-semibold text-2xl mb-6">
        Contact Details
      </h2>

      <div className="grid grid-cols-2 gap-y-6">
        {/* Email */}
        <p className="text-gray-600">Email</p>
        <p className="text-[#272963] font-medium">{contact.email}</p>

        {/* Mobile */}
        <p className="text-gray-600">Mobile number</p>
        <p className="text-[#272963] font-medium">{contact.mobile}</p>

        {/* Nationality */}
        <p className="text-gray-600">Nationally</p>
        <div className="flex items-center gap-2">
          <p className="text-[#7C7C7C]">{contact.nationality}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
