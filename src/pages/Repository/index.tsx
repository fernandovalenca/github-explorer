import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface IRepositoryParams {
  repository: string;
}

interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

import api from "../../services/api";
import logoImg from "../../assets/github-logo.svg";
import { Header, Issues, RepositoryInfo } from "./styles";

const Repository: React.FunctionComponent = () => {
  const { id } = useParams();
  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  console.log(id);

  /*useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then((response) => {
        setRepository(response.data);
      })
      .catch((error) => {});
  }, [params.repository]);

  useEffect(() => {
    api
      .get(`repos/${params.repository}/issues`)
      .then((response) => {
        setIssues(response.data);
      })
      .catch((error) => {});
  }, [params.repository]);*/

  //TODO: Necessário adicionar o logo.

  return (
    <>
      <Header>
        <img src="" alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map((issue) => (
          <Link key={issue.id} to={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
