import { FC } from "react";

interface iSelectProps {
  handleChange(e: any): void;
  repoSelected: string;
  type: string;
}

interface isRepoType {
  value: string;
  text: string;
}

const SelectInput: FC<iSelectProps> = ({
  handleChange,
  repoSelected,
  type,
}) => {
  const REPOS_NAME: { [key: string]: isRepoType[] } = {
    front: [
      { value: "testCommitHistoryFront2", text: "Next TS (Boostrap 5)" },
      { value: "testCommitHistoryFront", text: "React TS (Weppack, Tailwind)" },
    ],
    back: [{ value: "testCommitHistoryBack", text: "Express TS" }],
  };
  const Options = (): JSX.Element => {
    return (
      <>
        <option selected>Open this select repository of github</option>
        {REPOS_NAME[type].map(({ text, value }, i) => (
          <option key={i} value={value}>
            {text}
          </option>
        ))}
      </>
    );
  };
  return (
    <div className="select-input">
      <h2>Select Repository: </h2>
      <select
        className="form-select mb-4"
        aria-label="Default select example"
        onChange={handleChange}
        value={repoSelected}
      >
        {Options()}
      </select>
    </div>
  );
};

export default SelectInput;
