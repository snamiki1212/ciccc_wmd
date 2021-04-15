import React from "react";
import { Issue } from "./types";
import { IssueList } from "./components/IssueList";

const GITHUB_URL = "https://api.github.com/repos/rust-lang/rust/issues";
// const GITHUB_URL = "dummy";

function App() {
  const [issues, setIssues] = React.useState<Issue[]>([]);
  const [error, setError] = React.useState(undefined);

  React.useEffect(() => {
    fetch(GITHUB_URL)
      .then<Issue[]>((res) => res.json())
      .then((list) => setIssues(list))
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, []);

  if (error) return <div>something error happen</div>;

  return (
    <div className="App">
      <IssueList list={issues} />
    </div>
  );
}

export default App;
