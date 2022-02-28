import type { NextPage } from "next";
import axios from "axios";
import url from "./../constants/url";
import Layout from "../components/layout";
import { USER_GIT_ACCOUNT } from "./../constants/git";
import { iCommitList } from "../types/commit/commit.types";
import WrapperFrontEnd from "../components/WrapperFrontEnd";

const Front: NextPage<iCommitList> = ({ commits = [] }) => {
  return (
    <Layout>
      <WrapperFrontEnd commits={commits} type="front" />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const { data } = await axios.get(
      `${url.getAllCommitsUrl}${USER_GIT_ACCOUNT}/testCommitHistoryFront`
    );

    return {
      props: {
        commits: data.data,
      },
    };
  } catch (error: any) {
    console.error("Error:", error.message);
    return {
      props: {
        commits: [],
      },
    };
  }
}

export default Front;
