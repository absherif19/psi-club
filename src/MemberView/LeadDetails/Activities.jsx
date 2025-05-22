import React from "react";

const dummyActivities = [
  {
    type: "New Lead Added CRM",
    stage: "New",
    subject: "New Lead Added CRM",
    category: "Lead Update",
    comments: "Client Name: Test NA Client test",
    date: "12/12/2025",
    status: "Open",
  },
  {
    type: "New Lead Added CRM",
    stage: "New",
    subject: "New Lead Added CRM",
    category: "Lead Update",
    comments: "Client Name: Test NA Client test",
    date: "12/12/2025",
    status: "Closed",
  },
  {
    type: "New Lead Added CRM",
    stage: "New",
    subject: "New Lead Added CRM",
    category: "Lead Update",
    comments: "Client Name: Test NA Client test",
    date: "12/12/2025",
    status: "Closed",
  },
  {
    type: "New Lead Added CRM",
    stage: "New",
    subject: "New Lead Added CRM",
    category: "Lead Update",
    comments: "Client Name: Test NA Client test",
    date: "12/12/2025",
    status: "Closed",
  },
  {
    type: "New Lead Added CRM",
    stage: "New",
    subject: "New Lead Added CRM",
    category: "Lead Update",
    comments: "Client Name: Test NA Client test",
    date: "12/12/2025",
    status: "Closed",
  },
  {
    type: "New Lead Added CRM",
    stage: "New",
    subject: "New Lead Added CRM",
    category: "Lead Update",
    comments: "Client Name: Test NA Client test",
    date: "12/12/2025",
    status: "Closed",
  },
  // ... more data
];

const Activities = () => {
  return (
    <div className="w-full">
      <h2 className="text-[#E35F27] text-md font-semibold mb-4">Activities</h2>

      <div className="overflow-x-auto rounded-lg bg-white">
        <table className="min-w-full text-sm text-left text-[#1E222E] border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-[#F9F9F9] text-[#718096]">
              <th className="px-5 py-3 rounded-tl-md font-medium">Type ↓</th>
              <th className="px-5 py-3 font-medium">Stage</th>
              <th className="px-5 py-3 font-medium">Subject</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Comments</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 rounded-tr-md font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {dummyActivities.map((activity, idx) => (
              <tr key={idx} className="bg-white hover:bg-[#FAFAFA] rounded-md">
                <td className="px-5 py-3">{activity.type}</td>
                <td className="px-5 py-3">{activity.stage}</td>
                <td className="px-5 py-3">{activity.subject}</td>
                <td className="px-5 py-3">{activity.category}</td>
                <td className="px-5 py-3">{activity.comments}</td>
                <td className="px-5 py-3">{activity.date}</td>
                <td className="px-5 py-3 font-semibold">
                  <span
                    className={`${
                      activity.status === "Open"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
