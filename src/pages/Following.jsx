import React from 'react'
import {Profile} from '../components/index'
import useProfile from '../Hooks/useProfile'

function Following() {

    const followers = useProfile('/following')
    
    if (!Array.isArray(followers)) {
        return <p>Loading or no data available...</p>;
  }
  
  if (followers.length === 0) {
    return <p>No following</p>
  }


    return (
        <div className="w-full flex flex-wrap justify-center items-center">
      {followers.map((follower) => (
        <Profile
          key={follower.id} // Use a unique key for each Profile component
          // Name={follower.name}
          UserId={follower.login}
          PublicRepos={follower.public_repos}
          Followers={follower.followers}
          Followings={follower.following}
          ImageUrl={follower.avatar_url}
        />
      )
      )}
    </div>
    )
}

export default Following
