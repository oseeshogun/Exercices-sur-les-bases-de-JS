
function valMinMax(arr){

  const sum = arr.reduce((a, b) => a + b, 0);

  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);

  return min + " " + max;
}

function matriceCaree(arr){
  const x = arr.length;
  let sumDiagonalOne = 0;
  let sumDiagonalTwo = 0;

  for (let i = 0; i < x; i++){
    const diagonalOneItem = arr[i][i];
    const diagonalTwoItem = arr[i][x-i-1];

    sumDiagonalOne += diagonalOneItem;
    sumDiagonalTwo += diagonalTwoItem;
  }

  return Math.abs(sumDiagonalOne-sumDiagonalTwo);
}

function camelCase(str){
  if (!str.trim()) return 0;
  let count = 1;
  
  for (let i = 0; i < str.length; i++){
    const letter = str[i];
    const isUpperCase = letter == letter.toUpperCase();

    if (isUpperCase) count++;
  }

  return count;
}

function arcadeRank(top_scores, jeu){

  const getRank = (x) => {
    let topScoresCopy = [...new Set([...top_scores, , x])];
    topScoresCopy.sort((a, b) => b - a);
    return topScoresCopy.indexOf(x) + 1;
  }

  let ranks = [];

  for (let i = 0; i < jeu.length;i++){
    const score = jeu[i];

    const rank = getRank(score);

    const minRank = Math.min(...ranks);

    ranks.push(minRank < rank ? minRank : rank);
  }

  return ranks;
}


module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };
