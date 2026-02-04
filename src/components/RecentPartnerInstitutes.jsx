import productiveLogo from "../assets/PD-Logo_Stack-removebg-preview 1.png";
import semicolonLogo from "../assets/Mask group (1).png";

const institutes = [
  {
    name: "Productive",
    location: "Lagos, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Active",
    pathways: 34,
    learners: 34,
    logo: productiveLogo,
  },
  {
    name: "Semicolon Africa",
    location: "Nasarawa, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Suspended",
    pathways: 5,
    learners: 5,
    logo: semicolonLogo,
  },
  {
    name: "Productive",
    location: "Maiduguri, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Pending",
    pathways: 3,
    learners: 3,
    logo: productiveLogo,
  },
];

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function RecentPartnerInstitutes() {
  return (
    <div className="bg-white w-[778px] rounded-[12px] p-6">
      <h2 className="text-gray-900 mb-4 text-[16px] font-medium">
        Recent partner institute
      </h2>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-6">
          {["All", "Active", "Suspended"].map((tab) => (
            <button
              key={tab}
              className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="text-sm text-blue-600 hover:underline">
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 font-medium text-gray-700">
                Institutes
              </th>
              <th className="py-3 px-4 font-medium text-gray-600">
                Date joined
              </th>
              <th className="py-3 px-4 font-medium text-gray-600">
                Status
              </th>
              <th className="py-3 px-4 font-medium text-gray-600">
                No of pathways
              </th>
              <th className="py-3 px-4 font-medium text-gray-600">
                No of learners
              </th>
            </tr>
          </thead>

          <tbody>
            {institutes.map((inst, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                    <img
                      src={inst.logo}
                      alt={inst.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{inst.name}</p>
                    <p className="text-xs text-gray-500">{inst.location}</p>
                  </div>
                </td>

                <td className="py-3 px-4 text-gray-700">
                  {inst.dateJoined}
                </td>

                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[inst.status]}`}
                  >
                    {inst.status}
                  </span>
                </td>

                <td className="py-3 px-4 text-gray-700">
                  {inst.pathways}
                </td>

                <td className="py-3 px-4 text-gray-700">
                  {inst.learners}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
