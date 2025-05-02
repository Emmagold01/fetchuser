import { useEffect, useState } from 'react';

const URL = 'https://randomuser.me/api/';

export default function User() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUser() {
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(data.results[0]);
    setUser(data.results[0]);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  function changeUser() {
    fetchUser();
  }

  return (
    <div className="max-w-2xl mx-auto pt-25 px-26 ">
      {isLoading ? (
        <p className="text-center">loading...</p>
      ) : (
        <div>
          <div className="grid place-items-center">
            <img
              className="w-50 "
              src={user.picture.large}
              alt={user.name.first}
            />
            <h1 className="pt-2 font-medium text-neutral-800 text-xl">
              {user.name.first} {user.name.last}
            </h1>
          </div>

          {/* Text div */}
          <div className="mt-3 grid grid-cols-2 gap-y-2">
            <h3 className="text-neutral-500 text-md">Name</h3>
            <span className="text-end">
              {user.name.first} {user.name.last}
            </span>

            <h3 className="text-neutral-500 text-md">Email</h3>
            <span className="text-end">{user.email}</span>

            <h3 className="text-neutral-500 text-md">Phone</h3>
            <span className="text-end">+{user.phone}</span>

            <h3 className="text-neutral-500 text-md">Country</h3>
            <span className="text-end">{user.location.country}</span>

            <h3 className="text-neutral-500 text-md">City</h3>
            <span className="text-end">{user.location.city}</span>
          </div>

          <div className="flex justify-center">
            <button
              onClick={changeUser}
              className="mt-5 cursor-pointer bg-purple-500 text-white py-2 px-3 rounded-md"
            >
              Get New User
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
