import { ICONS } from '../icons';
import { IconPipe } from './icon.pipe';

describe('IconPipe', () => {
  it('create an instance', () => {
    const pipe = new IconPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return url of flag mexico', () => {
    const pipe = new IconPipe();
    const url = pipe.transform('es');
    console.log(url)
    expect(url).toContain('spanish.png');
  });

  it('should return url of icons object', () => {
    const pipe = new IconPipe();
    const keys = Object.keys(ICONS);
    console.log(keys)
    keys.forEach(key => {
      const url = pipe.transform(key);
      console.log(url, 'ssss', key)
      expect(url).toEqual(ICONS[key as keyof typeof ICONS]);
      
    });

  });

  it('should return a empty string on not kety found', () => {
    const pipe = new IconPipe();

    const url = pipe.transform('notfound');
    console.log(url)
    expect(url).toBe('');
  });
});
