import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter array', () => {
    const pipe = new FilterPipe();
    expect(pipe
        .transform([
        {title:'Alex'},
        {title:'Egor'},
        {title:'Jenya'},
        ],'Alex'
    )).toEqual([{title: 'Alex'}]);
  });
});
