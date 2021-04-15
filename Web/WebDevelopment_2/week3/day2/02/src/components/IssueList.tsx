import React from "react";
import { Issue } from "../types";
import { IssueItem } from "./IssueItem";
import styled from "styled-components";

export function IssueList({ list }: { list: Issue[] }) {
  return (
    <Container>
      {list.map((item) => (
        <IssueItem key={item.id} issue={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  background: rgb(250, 251, 252);
  display: grid;

  gap: 0.5rem;
  padding: 1rem;

  max-width: 500px;
  max-height: 80vh;
  overflow-x: scroll;
`;
