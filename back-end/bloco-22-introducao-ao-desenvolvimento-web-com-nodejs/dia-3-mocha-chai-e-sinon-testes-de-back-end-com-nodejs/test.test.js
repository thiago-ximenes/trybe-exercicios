const { expect } = require('chai');
const readArchive = require('./readArchive');

const ARCHIVE_CONTENT = 'VQV com TDD';

describe('Should read archive', () => {
  describe('When the archive exist, the answer should be ', () => {
    const response = readArchive('arquivo.txt');
    it('a string', () => {
      expect(response).to.be.a('string');
    });
    it('equal to archive content', () => {
      expect(response).to.be.equal(ARCHIVE_CONTENT);
    });
  });
  describe('When the achive does not exist, the answer should be', () => {
    it('null', () => {
      const response = readArchive('nonexistent.txt');

      expect(response).to.be.null;d
    });
  });
});