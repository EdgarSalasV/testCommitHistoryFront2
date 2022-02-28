import type { NextPage } from "next";
import Layout from "../components/layout";
import CardCommit from "../components/CardCommit";
import { useEffect, useState } from "react";
import { getAllCommitsByRepositoryName } from "./api/commits";

const Home: NextPage = () => {
  const [commits, setCommits] = useState([]);

  const getCommits = async () => {
    const { data } = await getAllCommitsByRepositoryName("testCommitHistoryBack");
    setCommits(data);
  };

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <Layout>
      <div>
        <select className="form-select mb-4" aria-label="Default select example">
          <option selected>Open this select repository of github</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div>
          {commits.map((commit, index) => (
            <CardCommit commit={commit} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
