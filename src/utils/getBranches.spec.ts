import { describe, it, expect, vi, Mock } from 'vitest';
import { getBranches } from './getBranches';
import { exec } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    exec: vi.fn(),
  };
});

describe('getBranches', () => {
  it('should remove * from current branch', () => {
    (exec as Mock).mockReturnValue({
      stdout: `* test0\ntest1\ntest2`,
    });
    expect(getBranches().branches).toEqual(['test0', 'test1', 'test2']);
  });

  it('should trim whitespace', () => {
    (exec as Mock).mockReturnValue({
      stdout: `    test0 \n  test1    \n  test2   `,
    });
    expect(getBranches().branches).toEqual(['test0', 'test1', 'test2']);
  });

  it('should exclude empty lines', () => {
    (exec as Mock).mockReturnValue({
      stdout: `test0\ntest1\n\ntest2\n\n\n`,
    });
    expect(getBranches().branches).toEqual(['test0', 'test1', 'test2']);
  });

  it('should identify the current branch', () => {
    (exec as Mock).mockReturnValue({
      stdout: `test0\n* test1\n  test2`,
    });
    expect(getBranches().currentBranch).toBe('test1');
  });
});
