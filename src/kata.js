class Kata {

  tennisGamePoints(score) {
    let result = 0;
    let scores = score.split('-');
    result += this.checkSinglePoint(scores[0]);
    result += this.checkSecondPoint(scores[1], scores[0]);
    return result;
  }

  checkSinglePoint(point) {
    if (point === '40') {
      return 3;
    }
    if (point === '30') {
      return 2;
    }
    if (point === '15') {
      return 1;
    }
    if (point === 'love') {
      return 0;
    }
  }

  checkSecondPoint(point, all) {
    if (point === 'all') {
      return this.checkSinglePoint(all);
    }
    return this.checkSinglePoint(point);
  }
}

module.exports = {
  Kata,
};