import kleur from 'kleur';
import { getBranches } from './utils/getBranches';
import { makeMenu } from './utils/makeMenu';
import { EXITING } from './strings';

export const menu = async () => {
  const allBranches = getBranches();
  if (allBranches.branches.length === 0) {
    console.log(kleur.grey(EXITING));
    process.exit(1);
  } else {
    const promptResult = await makeMenu(allBranches);
    console.log(promptResult);
  }
};
