// svenja ist toll
console.log("svenja ist toll");

var starters = ["red", "blue", "yellow"]
var change = ["pattern", "color", "monster"];
var funnelCount = 3;

var pattern = ["dotted", "striped"];
var monster = ["oneeye", "twoeye"];
var color = ["red", "blue"];

var cardsModel = function (options) {
    this.type = options.type; // direction, monster, funnel, change
    this.change = options.change;

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

    // change
    change.forEach(function (item) {
        cards.push(new cardsModel({
            type: 'change',
            change: item
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


    var attrType = document.createAttribute("pl-cardtype");
    attrType.value  = card.type;
    card.$element.setAttributeNode(attrType);

    if (card.type == "change") {
        var attrChange = document.createAttribute("pl-change");
        attrChange.value  = card.change;
        card.$element.setAttributeNode(attrChange);
    }

    if (card.type == "monster") {
        var attrMonster = document.createAttribute("pl-monster");
        attrMonster.value  = card.monster;
        card.$element.setAttributeNode(attrMonster);

        var attrColor = document.createAttribute("pl-color");
        attrColor.value = card.color;
        card.$element.setAttributeNode(attrColor);

        var attrPattern = document.createAttribute("pl-pattern");
        attrPattern.value = card.pattern;
        card.$element.setAttributeNode(attrPattern);
    }

    card.$element.innerText = card.type;

    playground.appendChild(card.$element);
});