function theBeatlesPlay(musicians, insutruments) {
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + "plays" + insturments[i])
  }
  return allMusicians
}
