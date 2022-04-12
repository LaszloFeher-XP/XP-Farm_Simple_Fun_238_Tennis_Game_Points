class Kata {

  tennisGamePoints(score) {
    let scores = score.split('-');
    return this.checkPoint(scores[0]);
  }

  checkPoint(point) {
    if (point === '40') {
      return 3;
    }
    if (point === '30') {
      return 2;
    }
    return 1;
  }
}

module.exports = {
  Kata,
};