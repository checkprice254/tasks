import EditTeam from "./EditTeam";
import DeleteTeam from "./DeleteTeam";

export default function TeamDash(team) {
  return (
    <div className=" min-w-72 max-w-72 m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 overflow-hidden">
      <div className="text-left space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-base text-black font-normal">
            team Name: {team.name}
          </p>
          <p className="text-base text-black font-normal text-overflow-ellipsis whitespace-nowrap overflow-hidden">
            Notes: {team.note}
          </p>
          <p className="text-lg text-gray-700">members id: {team.members}</p>
          {/* Display other team details as needed */}
          <div className="flex justify-between space-x-1">
            <EditTeam {...team} />
            <DeleteTeam {...team} />
          </div>
        </div>
      </div>
    </div>
  );
}
