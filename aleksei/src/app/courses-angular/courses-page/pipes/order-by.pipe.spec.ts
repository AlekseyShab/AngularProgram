import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    const array = [{
      id: 2,
      title: 'React',
      description: 'about2',
      durationTime: 88,
      creationDate: new Date("2016-06-03"),
      topRated: true,
    },
      {
        id: 3,
        title: 'Vue',
        description: 'about',
        durationTime: 30,
        creationDate: new Date("2020-03-03"),
        topRated: false,
      }];
    const sortedArray = array.reverse();
    expect(pipe.transform(array)).toEqual(sortedArray);
  });
});
