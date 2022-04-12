class Kata {

  tennisGamePoints(score) {
    let result = 0;
    let scores = score.split('-');
    result += this.checkPoint(scores[0]);
    result += this.checkPoint(scores[1]);
    return result;
  }

  checkPoint(point) {
    if (point === '40') {
      return 3;
    }
    if (point === '30') {
      return 2;
    }
    if (point === '15') {
      return 1;
    }
    if (point === '15') {
      return 1;
    }
    return 0;
  }
}

module.exports = {
  Kata,
};