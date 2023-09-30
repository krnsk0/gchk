import kleur from 'kleur';
import { getBranches } from './utils/getBranches';
import { makeMenu } from './utils/makeMenu';
import { EXITING } from './strings';
import { checkoutBranch } from './utils/checkoutBranch';

export const menu = async () => {
  const allBranches = getBranches();
  if (allBranches.branches.length === 0) {
    console.log(kleur.grey(EXITING));
    process.exit(1);
  } else {
    const promptResult = await makeMenu(allBranches);
    checkoutBranch(promptResult.branch);
  }
};
