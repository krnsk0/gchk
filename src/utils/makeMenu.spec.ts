import { describe, it, expect, vi } from 'vitest';
import { makeMenu } from './makeMenu';
import prompts from 'prompts';
import { GitBranchOutput } from './getBranches';

vi.mock('prompts', () => {
  return {
    default: vi.fn(),
  };
});

describe('makeMenu', () => {
  it('should invoke prompts with the right choices given some git branches', () => {
    const branches: GitBranchOutput = {
      branches: ['test0', 'test1', 'test2'],
      currentBranch: 'test1',
    };
    makeMenu(branches);
    expect(prompts).toHaveBeenCalledWith({
      choices: [
        { title: 'test0', value: 'test0' },
        { title: 'test1', value: 'test1' },
        { title: 'test2', value: 'test2' },
      ],
      initial: 1,
      message: 'Which branch should we check out?',
      name: 'branches',
      type: 'select',
    });
  });
});
