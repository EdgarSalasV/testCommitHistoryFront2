import { FC } from "react";

const CardCommit: FC<{commit: any}> = ({ commit }) => {
  return (
    <li className="card mb-2 p-4 w-100">
      <p><strong>Author:</strong> {commit.author.login}</p>
      <p><strong>Message:</strong> {commit.commit.message}</p>
      <p><strong>Fecha:</strong> {commit.commit.author.date}</p>
    </li>
  );
};

export default CardCommit;
