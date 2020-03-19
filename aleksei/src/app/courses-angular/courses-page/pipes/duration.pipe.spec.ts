import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return time', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(80)).toBe(`1 h, 20 min`);
  });
});
