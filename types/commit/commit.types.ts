export interface iCommitRepositories {
  commitsFront: iCommit[];
  commitsBack: iCommit[];
}

export interface iCommitList {
  commits: iCommit[];
}

export interface iCommit {
  sha: string;
  node_id: string;
  url: string;
  commit?: iCommitInfo;
  html_url: string;
  author: iAuthor;
  committer: iCommitter;
  tree: iTree;
  message?: string;
  parents: iParent[];
  verification: iVerification;
}

interface iCommitInfo {
  message: string;
  author: iCommitAuthor;
}

interface iCommitAuthor {
  name: string;
  email: string;
  date: string;
}

interface iAuthor {
  name: string;
  email: string;
  date: string;
}

interface iCommitter {
  name: string;
  email: string;
  date: string;
}

interface iTree {
  sha: string;
  url: string;
}

interface iParent {
  sha: string;
  url: string;
  html_url: string;
}

interface iVerification {
  verified: boolean;
  reason: string;
  signature?: any;
  payload?: any;
}
