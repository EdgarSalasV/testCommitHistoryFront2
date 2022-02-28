import axios from 'axios';
import url from './url';

const USER_ACCOUNT = 'EdgarSalasV'

export const getAllCommitsByRepositoryName = async (repositoryName: string) => {
  try {
    const { data } = await axios.get(`${url.getAllCommitsUrl}${USER_ACCOUNT}/${repositoryName}`);
    return data;
  } catch(error: any) {
    console.log('Error GetAllCommits', error.message);
    return {};
  }
}

export const getAllRepositories = async () => {
  const urlGetAllRepositories = url.getAllReposiriesUrl.replace('{{User}}', USER_ACCOUNT);

  try {
    const { data } = await axios.get(urlGetAllRepositories);
    return data;
  } catch(error: any) {
    console.log('Error GetAllCommits', error.message);
    return {};
  }
}