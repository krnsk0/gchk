import { describe, it, expect, vi } from 'vitest';
import { checkoutBranch } from './checkoutBranch';
import { exec } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    exec: vi.fn(),
  };
});

describe('checloutBranch', () => {
  it('should check out the branch passed in', () => {
    checkoutBranch('testBranch');
    expect(exec).toHaveBeenCalledWith('git checkout testBranch');
  });
});
