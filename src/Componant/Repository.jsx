import React, { useEffect, useState } from "react";

const Repository = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.log("Error:", error));
  }, [username]);

  const handleDownload = (repo) => {
    const downloadLink = `https://github.com/${username}/${repo.name}/archive/refs/heads/main.zip`;
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = `${repo.name}.zip`; // Set the desired filename for the downloaded file
    link.click();
  };

  return (
    <div className="gap-3 flex flex-wrap mt-6 justify-center mb-10">
      {repos.map((repo) => (
        <div className="bg-pureBlack relative flex flex-col justify-center items-center w-72 h-40 py-4 px-6 gap-6 mt-8
        border border-b-green shadow-sm shadow-black rounded-md ">
          <h1 className="py-2 px-4 text-grayGreen bg-pureBlack absolute -top-6
           border border-black rounded-lg ">GitHub Repository</h1>
          <p className="text-white text-lg text-center mt-4 h-10">{repo.name}</p>
          <button
            className="py-2 px-10 text-sm text-white 
            shadow-sm shadow-black bg-green rounded-md hover:bg-pureBlack font-bold"
            key={repo.id}
            onClick={() => handleDownload(repo)}
          >
            Download Zip File
          </button>
        </div>
      ))}
    </div>
  );
};

export default Repository;
