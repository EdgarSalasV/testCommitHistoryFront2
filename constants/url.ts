const API_URL = 'http://localhost:8080/';

const url = {
  getAllCommitsUrl: API_URL + 'api/v1/commit/all/',
  getAllReposiriesUrl: API_URL + 'api/v1/repository/{{User}}/repos',
  getCommitById: API_URL + 'api/v1/commit/'
}

export default url;
