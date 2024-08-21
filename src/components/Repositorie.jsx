import React from "react";
import { Link } from "react-router-dom";

function Repositorie({
  name = "pol adhikary",
  repoUrl = " /CODSOFT",
  forks_count = " 10",
  open_issues_count = " 10",
  watchers = "0",
}) {

  console.log(repoUrl);

  // repoUrl = repoUrl.split('/');
  // repoUrl = repoUrl[repoUrl.length - 1];
  // console.log(typeof repoUrl);
  return (
    <>
      <div className="w-full bg  my-2 flex pl-2 border-red-600 border-2 flex-col">
        <div className="  w-full flex justify-between py-2">
          <p className=" ">{name}</p>
          <Link
            to={`${repoUrl}`}
            className="mr-2 border-black border-2 bg-sky-400 rounded-3xl w-[50px] flex items-center justify-center"
          >
            Visit
          </Link>
        </div>
        <div>
          <p className="inline mr-5">
            Forks Count :<span>{forks_count}</span>
          </p>
          <p className="inline mr-5">
            Open issues Count :<span>{open_issues_count}</span>
          </p>
          <p className="inline mr-5">
            watchers :<span>{watchers}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Repositorie;
