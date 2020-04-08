import React, {FunctionComponent, useEffect, useState} from 'react';

import Layout from 'layouts/Blog';

import Link from 'gatsby-link';
import {Markdown} from 'react-showdown';

import Loading from 'components/Loading';

import {Repository} from 'model/Github';
import {PageProps} from 'model/PageProps';

import {fetchAllGithubRepos, filterGithubReposResponse, getColorForLanguage} from 'utils/github';

import {ProjectThumbnails, projectThumbnails, sections} from 'data/about';

import * as Styled from './styles';

const {
  clients: clientsDescription,
  openSource: openSourceDescription
} = sections;

interface Props extends PageProps {}

const PageWrapper: FunctionComponent<Props> = props => {
  const { data, location } = props;

  const clients = data.allMarkdownRemark.edges;

  const [repos, setRepos] = useState([] as Repository[]);
  const [loadedRepos, setLoadedRepos] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const allRepos = await fetchAllGithubRepos();
      const selectedRepos = await filterGithubReposResponse(allRepos);
      setRepos(selectedRepos);
      setLoadedRepos(true);
    };

    fetchData();
  }, []);

  return (
    <Layout location={location}>
      <Styled.Text>
        <Markdown markup={clientsDescription} />
      </Styled.Text>

      <Styled.Container>
        {clients.map(({ node: project }) => {
          const { title, path, description, thumbnail } = project.frontmatter;

          return (
            <Styled.Card>
              <Styled.Top />
              <Styled.Main>
                <Styled.IconContainer>
                  <Styled.Icon
                    src={projectThumbnails[thumbnail as ProjectThumbnails]}
                  ></Styled.Icon>
                </Styled.IconContainer>
                <Styled.Content>
                  <Link to={path}>
                    <Styled.Title>{title}</Styled.Title>
                  </Link>
                  <Styled.Description>{description}</Styled.Description>
                </Styled.Content>
              </Styled.Main>
            </Styled.Card>
          );
        })}
      </Styled.Container>

      <Styled.Text>
        <Markdown markup={openSourceDescription} />
      </Styled.Text>

      {loadedRepos ? (
        <Styled.Container>
          {repos.map((repo: Repository) => {
            const {
              name,
              language,
              html_url,
              stargazers_count,
              description
            } = repo;

            return (
              <Styled.Card>
                <Styled.Top />
                <Styled.Main>
                  <Styled.Content>
                    <a href={html_url}>
                      <Styled.Title>{name}</Styled.Title>
                    </a>
                    <Styled.Description>{description}</Styled.Description>
                    <Styled.Tag>⭐ {stargazers_count}</Styled.Tag>
                    {language && (
                      <Styled.Tag>
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
    </Layout>
  );
};

export default PageWrapper;
