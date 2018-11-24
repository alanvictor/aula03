import { FilesizePipe } from './filesize.pipe';

describe('FilesizePipe', () => {
  let pipeInstance: FilesizePipe;

  beforeEach(() => {
    pipeInstance = new FilesizePipe();
  });

  it('create an instance', () => {
    expect(pipeInstance).toBeTruthy();
  });

  it('should convert from bytes to kbytes', () => {
    const oneKB = 1024;
    expect(pipeInstance.transform(oneKB, 'KB')).toBe('1KB');
  });

  it('should convert from bytes to mega bytes', () => {
    const oneMB = Math.pow(1024, 2);
    expect(pipeInstance.transform(oneMB, 'MB')).toBe('1MB');
  });

  it('should convert from bytes to giga bytes', () => {
    const oneGB = Math.pow(1024, 3);
    expect(pipeInstance.transform(oneGB, 'GB')).toBe('1GB');
  });

  it('should convert from bytes to default extension', () => {
    const oneGB = Math.pow(1024, 3);
    expect(pipeInstance.transform(oneGB)).toBe('1024MB');
  });

  it('should be empty with invalid value', () => {
    const invalidValue = 'invalidString';
    expect(pipeInstance.transform(invalidValue, 'GB')).toBe('');
  });

  it('should be empty with invalid extension', () => {
    const oneTB = Math.pow(1024, 4);
    expect(pipeInstance.transform(oneTB, 'TB')).toBe('');
  });
});
