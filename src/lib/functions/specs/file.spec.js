import * as files from '../files';

jest.mock('fs', () => ({
  readFileSync: (mockContent) => mockContent,
}));

describe('getFileLines', () => {
  it('returns the mock content as an array of strings', () => {
    expect(files.getFileLines('some\n\ncontent')).toEqual([
      'some',
      '',
      'content',
    ]);
  });
  it('trims trailing newlines', () => {
    expect(files.getFileLines('something\n')).toEqual(['something']);
  });
});

describe('groupLines', () => {
  it('groups an array based on newline separators', () => {
    expect(files.groupLines(['some', 'thing', '', 'else'])).toEqual([
      ['some', 'thing'],
      ['else'],
    ]);
  });
});
