import { exec } from 'shelljs';

export const checkoutBranch = (branchName: string) => {
  exec(`git checkout ${branchName}`);
};
