import React from "react";

const ConnectionsDetails = () => {
  const connection = {
    name: "Feras Abu Laila",
    title: "CEO Abu Dhabi, Addax",
    image: "https://i.pravatar.cc/100?img=1",
    joinDate: "12/12/2025",
  };

  return (
    <div className="bg-[#F8F8F8] p-8 rounded-lg w-full">
      <h2 className="text-[#E35F27] font-semibold text-2xl mb-6">
        Connections Info
      </h2>

      <div className="grid grid-cols-2 gap-y-6">
        {/* Connection Info */}
        <p className="text-gray-600">Connections Info</p>
        <div className="flex items-center gap-3">
          <img
            src={connection.image}
            alt={connection.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-[#272963] font-medium">{connection.name}</p>
            <p className="text-sm text-gray-500">{connection.title}</p>
          </div>
        </div>

        {/* Join Date */}
        <p className="text-gray-600">Joined Date</p>
        <p className="text-[#272963] font-semibold">{connection.joinDate}</p>
      </div>
    </div>
  );
};

export default ConnectionsDetails;
