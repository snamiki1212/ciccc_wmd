import { paths } from "@octokit/openapi-types";

export type Issue = paths["/repos/{owner}/{repo}/issues"]["get"]["responses"]["200"]["content"]["application/json"][0]; // https://github1s.com/octokit/openapi-types.ts/blob/HEAD/src/generated/types.ts
