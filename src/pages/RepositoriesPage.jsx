import React, { useEffect } from "react";
import { Repositorie } from "../components/index";
import useProfile from "../Hooks/useProfile";

function RepositoriesPage() {
  const repos = useProfile("/repos");
  // const length=repos.length
  //   console.log(typeof repos.name);
//   console.log(repos[2]?.owner.repos_url);

  if (!Array.isArray(repos)) {
    return <p>Loading or no data available...</p>;
  }

  return (
    <div>
      {repos.map((item) => (
        <Repositorie
          key={item.id}
          name={item.name}
          repoUrl={item.html_url}
          forks_count={item.forks_count}
          open_issues_count={item.open_issues_count}
          watchers={item.watchers}
        />
      ))}
    </div>
  );
}

export default RepositoriesPage;
