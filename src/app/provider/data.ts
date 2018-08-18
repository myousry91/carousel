import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const slides = [
      {
        header: '236 bestemmingen',
        body: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci1.png'
      },
      {
        header: '237 bestemmingen',
        body: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci2.png'
      },
      {
        header: '238 bestemmingen',
        body: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci3.png'
      },
      {
        header: '239 bestemmingen',
        body: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci4.png'
      },
      {
        header: '240 bestemmingen',
        body: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci5.png'
      },{
        header: '245 Amsterdam',
        body: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci3.png'
      },
    ];
    return {slides};
  }
}
