import data from './data';

class Round {
  constructor(players, activeRound, activePlayer, cluesRemaining, clues, catNames) {
    this.catNames = [];
    this.catIds = [];
    this.clues = [];
    this.pointValues = [];
    this.questions = [];
    this.dailyDouble = 1;
  }

  startRound(game) {
    this.catIds.forEach(catId => {
      const catClues = data.clues.filter(clue => {
        return clue.categoryId === catId;
      })
      const shuffledClues = game.shuffle(catClues);
      for (let i = 1; i <= 4; i++) {
        this.clues.push(shuffledClues.find(clue => {
          return clue.pointValue === 100 * i;
        }));
      }
    });
    console.log(this)
  }

  getCatNames() {
    const catString = [
      'United States History', 'Life Sciences', 'Public Health', 'Education Jargon',
      'Name That Board Game', 'American Literature', 'Biographies', 'American Cities',
      'Food', 'Cable TV'
    ];
      this.catNames = this.catIds.map(catId => {
      return catString.find((name, index) => index === catId - 1);
      })
    }

  setDDQuestion() {
    let index = Math.floor(Math.random() * this.clues.length);
    this.clues[index].dailyDouble = true;
    if (this.round === 2) {
      let index2 = Math.floor(Math.random() * this.clues.length);
      this.clues[index2].dailyDouble = true;
    }
  }
}

export default Round;