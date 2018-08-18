import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const slides = [
      {
        title: '236 bestemmingen',
        text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci1.png'
      },
      {
        title: '237 bestemmingen',
        text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci2.png'
      },
      {
        title: '238 bestemmingen',
        text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci3.png'
      },
      {
        title: '239 bestemmingen',
        text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci4.png'
      },
      {
        title: '240 bestemmingen',
        text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci5.png'
      },{
        title: '245 Amsterdam',
        text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
        img: '/assets/imgs/soci3.png'
      },
    ];
    return {slides};
  }
}
