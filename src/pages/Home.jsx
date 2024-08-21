import React, { useEffect } from "react";

import { Profile } from "../components";
import useProfile from "../Hooks/useProfile";

function Home() {
  const data = useProfile();

  return (
    <>
      <div className="flex justify-center items-center bg-gray-500 h-screen">
        <Profile
          key={data.name}
          Name={data.name}
          UserId={data.login}
          PublicRepos={data.public_repos}
          Followers={data.followers}
          Followings={data.following}
          ImageUrl={data.avatar_url}
        />
      </div>
    </>
  );
}

export default Home;
