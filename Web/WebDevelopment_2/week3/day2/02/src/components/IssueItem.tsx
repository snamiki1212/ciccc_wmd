import React from "react";
import { Issue } from "../types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";

export function IssueItem({ issue }: { issue: Issue }) {
  return (
    <Container>
      <Content>
        <Avatar src={issue.user?.avatar_url} alt="avator" />
        <IssueNumber>#{issue.number}</IssueNumber>
        <div>{issue.title}</div>
      </Content>
      <Divider />
      <ChipWrapper>
        {issue.labels.map((label) => (
          <Chip
            key={label.id}
            label={label.name}
            style={{ background: `#${label.color}` }}
          />
        ))}
      </ChipWrapper>
    </Container>
  );
}

const Container = styled(Card)``;

const IssueNumber = styled.span`
  font-weight: 900;
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ChipWrapper = styled(CardContent)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-y: scroll;
`;
