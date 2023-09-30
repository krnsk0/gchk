import prompts from 'prompts';
import { GitBranchOutput } from './getBranches';
import { MENU_MESSAGE } from '../strings';

export const makeMenu = (gitBranches: GitBranchOutput) => {
  return prompts({
    type: 'select',
    name: 'branch',
    message: MENU_MESSAGE,
    choices: gitBranches.branches.map((choice) => {
      return {
        title: `${choice}`,
        value: choice,
      };
    }),
    initial: gitBranches.branches.indexOf(gitBranches.currentBranch),
  });
};
