import {Hero} from './hero';

describe('Hero', () => {
  it('Hero.name is defined', () => {
    var myHero: Hero = {
      "id": 1,
      "name": "Snyde"
    };
    expect(myHero.name).toEqual("Snyde");
  });

  it('Hero.id is defined', () => {
    var myHero: Hero = {
      "id": 1,
      "name": "Snyde"
    };
    expect(myHero.id).toEqual(1);
  });
})
