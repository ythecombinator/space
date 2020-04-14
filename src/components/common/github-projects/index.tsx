import React, {FunctionComponent, memo, useEffect, useState} from 'react';

import {css, useColorMode} from 'theme-ui';

import Loading from 'components/common/loading';

import {fetchAllGithubRepos, filterGithubReposResponse, getColorForLanguage} from 'utils/github';

import {Repository, SortingCriteria} from 'model/Github';

import * as Styled from './styles';

interface Props {
  criteria: SortingCriteria;
}

const GithubProjects: FunctionComponent<Props> = (props) => {
  const { criteria } = props;
  const [repos, setRepos] = useState([] as Repository[]);
  const [loadedRepos, setLoadedRepos] = useState(false);

  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  useEffect(() => {
    const fetchData = async () => {
      const allRepos = await fetchAllGithubRepos();
      const selectedRepos = await filterGithubReposResponse(allRepos, criteria);
      setRepos(selectedRepos);
      setLoadedRepos(true);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loadedRepos ? (
        <Styled.Container>
          {repos.map((repo: Repository) => {
            const {
              name,
              language,
              html_url,
              stargazers_count,
              description,
            } = repo;

            return (
              <Styled.Card isDark={isDark}>
                <Styled.Top />
                <Styled.Main>
                  <Styled.Content>
                    <Styled.Title href={html_url} isDark={isDark}>
                      {name}
                    </Styled.Title>
                    <Styled.Description>{description}</Styled.Description>
                    <Styled.Tag isDark={isDark}>
                      ⭐ {stargazers_count}
                    </Styled.Tag>
                    {language && (
                      <Styled.Tag isDark={isDark}>
                        <Styled.LanguageTag
                          color={getColorForLanguage(language)}
                        />
                        {language}
                      </Styled.Tag>
                    )}
                  </Styled.Content>
                </Styled.Main>
              </Styled.Card>
            );
          })}
        </Styled.Container>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default memo(GithubProjects);
