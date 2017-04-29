// svenja ist toll
console.log("svenja ist toll");

var starters = ["red", "blue", "yellow"]
var changes = ["pattern", "color", "monster"];
var funnelCount = 3;

var pattern = ["dotted", "striped"];
var monster = ["oneeye", "twoeye"];
var color = ["red", "purple"];

var cardsModel = function (options) {
    this.type = options.type; // direction, monster, funnel, changer
    this.changes = options.changes;

    this.color = options.color;
    this.monster = options.monster;
    this.pattern = options.pattern;
};


var generateCards = function () {
    var cards = [];

    // starters
    starters.forEach(function (item) {
        cards.push(new cardsModel({
            type: 'direction',
            color: item
        }));
    });

    // changer
    changes.forEach(function (item) {
        cards.push(new cardsModel({
            type: 'changer',
            changes: item
        }));
    });

    for (var i = 0; i < funnelCount; i++) {
        cards.push(new cardsModel({
            type: "funnel"
        }));
    }

    // monster
    monster.forEach(function (mon) {
        pattern.forEach(function (pat) {
            color.forEach(function (col) {
                cards.push(new cardsModel({
                    type: "monster",
                    color: col,
                    pattern: pat,
                    monster: mon
                }));
            });
        });
    });
    monster.forEach(function (mon) {
        pattern.forEach(function (pat) {
            color.forEach(function (col) {
                cards.push(new cardsModel({
                    type: "monster",
                    color: col,
                    pattern: pat,
                    monster: mon
                }));
            });
        });
    });

    return cards;
};


// do it

var round_monster = Math.floor((Math.random() * monster.length));console.debug("monster: " + round_monster);
document.getElementById("die_monster").classList.add(monster[round_monster]);

var round_color = Math.floor((Math.random() * color.length));
document.getElementById("die_color").classList.add(color[round_color]);


var cards = generateCards();

var playground = document.getElementById("playground");

cards.forEach(function(card, index) {
    card.$element = document.createElement("div");
    card.$element.classList.add("card");
    card.$element.style.transform = "rotate(" + ((360 / cards.length) * index) + "deg)";

    card.$element.innerText = card.type;

    playground.appendChild(card.$element);
});