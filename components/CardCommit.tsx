import { FC } from "react";
import Link from "next/link";
import { iCommit } from "../types/commit/commit.types";

interface CardCommitProps {
  commit: iCommit;
  repo?: string;
}

const CardCommit: FC<CardCommitProps> = ({ commit, repo }) => {
  return (
    <Link href={`/commit/${repo}/${commit.sha}`}>
      <div className="card p-4 w-100">
        <div className="col-sm-9">
          <strong>Author:</strong> {commit.commit.author.name}
          <div className="row">
            <div className="col-8 col-sm-6">
              <strong>Message:</strong> {commit.commit.message}
            </div>
            <div className="col-4 col-sm-6">
              <strong>Fecha:</strong> {commit.commit.author.date}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCommit;
