import DetailedTabel from "../../../Reuse/DetailedTabel";

const data = [
  {
    id: 1,
    name: "Ahmed Sowan",
    status: "Active",
    joinDate: "12/12/2025",
    leads: 3,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Mohamed Hendi",
    status: "Inactive",
    joinDate: "12/12/2025",
    leads: 4,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Emad Al Khalidi",
    status: "Active",
    joinDate: "12/12/2025",
    leads: 2,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 1,
    name: "Ahmed Sowan",
    status: "Active",
    joinDate: "12/12/2025",
    leads: 3,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Mohamed Hendi",
    status: "Inactive",
    joinDate: "12/12/2025",
    leads: 4,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Emad Al Khalidi",
    status: "Active",
    joinDate: "12/12/2025",
    leads: 2,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 1,
    name: "Ahmed Sowan",
    status: "Active",
    joinDate: "12/12/2025",
    leads: 3,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Mohamed Hendi",
    status: "Inactive",
    joinDate: "12/12/2025",
    leads: 4,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Emad Al Khalidi",
    status: "Active",
    joinDate: "12/12/2025",
    leads: 2,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 1,
    name: "Ahmed Sowan",
    status: "Active",
    joinDate: "12/12/2025",
    leads: 3,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Mohamed Hendi",
    status: "Inactive",
    joinDate: "12/12/2025",
    leads: 4,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Emad Al Khalidi",
    status: "Active",
    joinDate: "12/12/2025",
    leads: 2,
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  // ... repeat as needed
];

const membersColumns = [
  {
    header: "ID",
    accessorKey: "id",
    cell: info => String(info.getValue()).padStart(2, "0"),
  },
  {
    header: "Members",
    accessorKey: "name",
    cell: info => {
      const row = info.row.original;
      return (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt={row.name} className="w-12 rounded-full object-cover" />
          <div>
            <div className="font-medium text-[#1C2C5B]">{row.name}</div>
            <span className={`text-xs ${row.status === "Active" ? "text-green-600" : "text-red-600"}`}>
              {row.status}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    header: "Join Date",
    accessorKey: "joinDate",
  },
  {
    header: "Total Leads",
    accessorKey: "leads",
    cell: info => `${info.getValue()} Lead`,
  },
  {
    header: "Nationality",
    accessorKey: "nationality",
  },
  {
    header: "",
    id: "actions",
    cell: () => (
      <button className="bg-gray-100 border px-4 py-1 rounded-md text-sm text-[#1C2C5B] hover:bg-gray-200">
        View
      </button>
    ),
  },
];

const MembersTable = () => {
  return <DetailedTabel data={data} columns={membersColumns} />;
};

export default MembersTable;