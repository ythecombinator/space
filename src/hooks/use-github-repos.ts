import {useEffect, useState} from 'react';

import useSwr from 'swr';

import {fetchAllGithubRepos, filterGithubReposResponse} from 'utils/github';

import {Repository, SortingCriteria} from 'model/Github';

const fetchData = async (criteria: SortingCriteria) => {
  const allRepos = await fetchAllGithubRepos();
  const selectedRepos = await filterGithubReposResponse(allRepos, criteria);
  return selectedRepos;
};

const useGithubRepos = (criteria: SortingCriteria) => {
  const [repos, setRepos] = useState([] as Repository[]);
  const [loadedRepos, setLoadedRepos] = useState(false);

  const { data } = useSwr(criteria, fetchData);

  useEffect(() => {
    if (data) {
      setRepos(data);
      setLoadedRepos(true);
    }
  }, [data]);

  return { data: repos, looaded: loadedRepos };
};

export default useGithubRepos;
