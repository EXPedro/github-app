import React from 'react';
import Layout from './components/layout'
import Profile from './components/profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/github-provider';
import useGithub from "./hooks/github-hooks";
import NoSearch from "./components/no-search";

function App() {
  const { githubState } = useGithub();
  return <main>
    <GithubProvider>
     <ResetCSS />
      <Layout>
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
      ) : (
        <NoSearch />
      )}
      </Layout>
    </GithubProvider> 
   </main>
}

export default App;
