import prompts from 'prompts';
import { GitBranchOutput } from './getBranches';
import { MENU_MESSAGE } from '../strings';

export const makeMenu = (gitBranches: GitBranchOutput) => {
  return prompts({
    type: 'select',
    name: 'branches',
    message: MENU_MESSAGE,
    choices: gitBranches.branches.map((choice) => {
      return {
        title: `${choice}`,
        value: choice,
      };
    }),
  });
};
