import { IUser } from "@/api/auth/type";
import CompoboxSearch from "./CompoboxSearch";
import { useRoom } from "./RoomProvider";

export default function AddMember() {
  const { members, addMember, removeMember } = useRoom();

  const handleChange = (person: IUser) => {
    if (members.some((e) => e._id === person._id)) {
      return;
    }
    addMember(person);
  };

  const handleRemove = (person: IUser) => {
    removeMember(person._id);
  };

  return (
    <div>
      <CompoboxSearch onChange={handleChange} />
      <ul className="overflow-y-auto sm: max-w-sm mx-auto mt-8 h-[calc(100vh-100px)]">
        {members.map((person) => {
          return (
            <li key={person._id} className="mb-4 bg-white rounded-md shadow">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex flex-col items-left justify-between">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {person.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {person.email}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500">
                    Trạng thái:
                    <span
                      className={
                        person.isonline ? "text-green-600" : "text-red-600"
                      }
                    >
                      {person.isonline ? "Hoạt động" : "Không hoạt động"}
                    </span>
                  </p>
                  <button
                    className="font-medium text-indigo-600 hover:text-indigo-500 ml-8"
                    onClick={() => handleRemove(person)}
                  >
                    Xoá
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
