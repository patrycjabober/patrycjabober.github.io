document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({ titleScreenImageURL: "titlescreen.gif",
  	attackRadius: 100, monsterHitRadius: 100, attackDuration:600, 
  	jumpHeight: 300, monsterMoveToX: 100, maxSimultaneousMonsters: 1 
	});
});