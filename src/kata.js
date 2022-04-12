class Kata {

  tennisGamePoints(score) {
    let scores = score.split('-');
    console.log(scores);
    if (scores[0] === '30') {
      return 2;
    }
    return 1;
  }
}

module.exports = {
  Kata,
};