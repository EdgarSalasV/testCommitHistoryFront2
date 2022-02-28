import { FC, ReactChild, useState } from "react";
import { iCommit } from "../types/commit/commit.types";
import CardCommit from "./CardCommit";
import SelectInput from "./SelectInput.component";

interface propsWrapperFrontEnd {
  type: string;
  commits: iCommit[];
}

const WrapperFrontEnd: FC<propsWrapperFrontEnd> = ({ type, commits }) => {
  const [repoSelected, setRepoSelected] = useState<string>(
    "testCommitHistoryFront"
  );

  const handleChange = (e: any) => {
    const { value } = e.target;
    setRepoSelected(value);
  };

  const Wrapper = (repo: string): JSX.Element[] => {
    return commits.map((commit, index) => (
      <CardCommit repo={repo} commit={commit} key={index} />
    ));
  };
  return (
    <>
      <main>
        <SelectInput
          handleChange={handleChange}
          repoSelected={repoSelected}
          type={type}
        />
        <div>{Wrapper(repoSelected)}</div>
      </main>
    </>
  );
};

export default WrapperFrontEnd;
