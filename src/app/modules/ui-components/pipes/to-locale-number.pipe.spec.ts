import { ToLocaleNumberPipe } from './to-locale-number.pipe';

describe('ToLocaleNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ToLocaleNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
