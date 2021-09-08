import React, { createContext, useState } from "react";

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [githubState, setGithubState] = useState({
    user: {
      login: undefined,
      name: "Elisio Xavier Pedro",
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });  

  const contextValue = {
      githubState,
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
