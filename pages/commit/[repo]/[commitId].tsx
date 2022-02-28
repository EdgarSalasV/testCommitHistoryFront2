import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { iCommit } from "../../../types/commit/commit.types";
import url from "../../../constants/url";

interface iErrorState {
  status: number;
  message: string;
}

const CommitProps: FC = () => {
  const router = useRouter();
  const [commit, setCommit] = useState<iCommit>();
  const [error, setError] = useState<iErrorState>({
    status: 0,
    message: "",
  });

  useEffect(() => {
    getCommitInfo();
  }, [router]);

  const getCommitInfo = async () => {
    const { commitId, repo } = router.query;

    if (!commitId && !repo) return;

    try {
      const { data } = await axios.get(`${url.getCommitById}EdgarSalasV/${repo}/${commitId}`)

      setCommit(data.data);
    } catch (err: any) {
      setError({ status: 401, message: err.message });
    }
  };

  const CommitDetails = () => {
    return (
      <ul>
        <li>
          <strong>Name:</strong> {commit?.author.name}
        </li>
        <li>
          <strong>Url:</strong> <a href={commit?.html_url}>Click to redirect</a>
        </li>
        <li>
          <strong>Message:</strong> {commit?.message}
        </li>
      </ul>
    );
  };

  return (
    <Layout>
      <div>
        {!error.message ? (
          CommitDetails()
        ) : (
          <p className="text-center">{error.message}</p>
        )}
      </div>
    </Layout>
  );
};

export default CommitProps;
