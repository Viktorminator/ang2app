import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Віктор' },
      { id: 1, name: 'Сашко' },
      { id: 2, name: 'Петро' },
      { id: 3, name: 'DDDD' },
      { id: 4, name: 'VVVV' },
      { id: 5, name: 'KKKK' },
      { id: 12, name: 'Петро' },
      { id: 23, name: 'DDDD' },
      { id: 34, name: 'VVVV' },
      { id: 45, name: 'KKKK' }
    ];
    return { heroes };
  }
}
