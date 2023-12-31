import { exec } from 'shelljs';

export interface GitBranchOutput {
  branches: string[];
  currentBranch: string;
}

export const getBranches = (): GitBranchOutput => {
  const { stdout } = exec('git branch', { silent: true });
  const allBranches = stdout.split('\n').map((branch) => branch.trim());

  return {
    branches: allBranches
      .map((branch) => branch.replace('* ', ''))
      .filter((branch) => branch !== ''),
    currentBranch:
      allBranches
        .find((branch) => branch.startsWith('* '))
        ?.replace('* ', '') ?? '',
  };
};
