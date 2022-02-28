import axios from "axios";
import type { NextPage } from "next";
import url from "./../constants/url";
import Layout from "../components/layout";
import CardCommit from "../components/CardCommit";
import { USER_GIT_ACCOUNT } from "./../constants/git";
import { iCommitRepositories } from "../types/commit/commit.types";
import WrapperFrontEnd from "../components/WrapperFrontEnd";

const Home: NextPage<iCommitRepositories> = ({ commitsFront = [], commitsBack = [] }) => {
  return (
    <Layout>
      <div className="d-flex bd-highlight gap-4 mb-5">
        <div className="w-50">
          <h3>Last {commitsFront.length} commits Frontend</h3>
          {
            commitsFront.map((commit, index) => <CardCommit commit={commit} key={index}/>)
          }
        </div>
        <div className="w-50">
          <h3>Last {commitsBack.length} commits Frontend</h3>
          {
            commitsBack.map((commit, index) => <CardCommit commit={commit} key={index}/>)
          }
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const { data: backCommits } = await axios.get(
      `${url.getAllCommitsUrl}${USER_GIT_ACCOUNT}/testCommitHistoryBack?limit=5`
    );

    const { data: frontCommits } = await axios.get(
      `${url.getAllCommitsUrl}${USER_GIT_ACCOUNT}/testCommitHistoryFront2?limit=5`
    );

    return {
      props: {
        commitsFront: frontCommits.data,
        commitsBack: backCommits.data,
      },
    };
  } catch (error: any) {
    console.error("Error:", error.message);
    return {
      props: {
        props: {
          commitsFront: [],
          commitsBack: [],
        },
      },
    };
  }
}

export default Home;
