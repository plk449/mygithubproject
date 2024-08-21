// import { useState } from 'react'
import useProfile from "./Hooks/useProfile";

import "./App.css";

import { Profile } from "./components";

function App() {
  const data = useProfile();
  console.log(data.login);

  return (
    <>
     
      <div className="flex justify-center items-center bg-gray-500 h-screen">
        <Profile
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

export default App;
