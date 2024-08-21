function Profile({
  Name = "",
  UserId = "",
  PublicRepos = "",
  Followers = "",
  Followings = "",
  ImageUrl,
}) {
  return (
    <div className="flex flex-col h-{400px} w-[280px]  border-4 border-blue-500 rounded-xl bg-white my-4 mx-2">
      <div>
        <img src={ImageUrl} alt="img" className="p-2 rounded-md border" />
      </div>
      <p className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mx-3">
        Name: <span>{Name}</span>
      </p>
      <p className="mx-3 text-xl">
        UserID: <span>{UserId}</span>
      </p>
      <p className="mx-3 text-xl">
        public_repos: <span>{PublicRepos}</span>
      </p>
      <p className="mx-3 text-xl">
        following: <span>{Followings}</span>
      </p>
      <p className="mx-3 text-xl">
        followers: <span>{Followers}</span>
      </p>
    </div>
  );
}

export default Profile;
