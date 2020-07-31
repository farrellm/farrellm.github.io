window.roll = function(id, n) {
    var el = document.getElementById(id);
    var v = Math.floor(Math.random() * n) + 1;
    el.innerHTML = v;
};


var factions = [
    {
        name: "Auren",
        color: "green",
        side: "a"
    },
    {
        name: "Witches",
        color: "green",
        side: "a"
    },
    {
        name: "Mermaids",
        color: "blue",
        side: "a"
    },
    {
        name: "Swarmlings",
        color: "blue",
        side: "a"
    },
    {
        name: "Alchemists",
        color: "black",
        side: "a"
    },
    {
        name: "Darklings",
        color: "black",
        side: "a"
    },
    {
        name: "Cultists",
        color: "brown",
        side: "a"
    },
    {
        name: "Halflings",
        color: "brown",
        side: "a"
    },
    {
        name: "Fakir",
        color: "yellow",
        side: "a"
    },
    {
        name: "Nomads",
        color: "yellow",
        side: "a"
    },
    {
        name: "Chaos Magicians",
        color: "red",
        side: "a"
    },
    {
        name: "Giants",
        color: "red",
        side: "a"
    },
    {
        name: "Dwarves",
        color: "grey",
        side: "a"
    },
    {
        name: "Engineers",
        color: "grey",
        side: "a"
    },
    {
        name: "Ice Maidens",
        color: "ice",
        side: "b"
    },
    {
        name: "Yetis",
        color: "ice",
        side: "b"
    },
    {
        name: "Acolytes",
        color: "fire",
        side: "b"
    },
    {
        name: "Dragonlords",
        color: "fire",
        side: "b"
    },
    {
        name: "Riverwalkers",
        color: "null",
        side: "b"
    },
    {
        name: "Shapeshifters",
        color: "null",
        side: "b"
    },
];
// factions.sort((a, b) => (a.color > b.color) ? 1 : -1)


var done = false;
function initialize() {
    if (!done) {
        console.log("init");

        window.roll("d4", 4);
        window.roll("d6", 6);
        window.roll("d10", 10);
        window.roll("d20", 20);

        var facts = document.getElementById("factions");
        console.log(facts);

        var ul = document.createElement("ul");
        facts.appendChild(ul);

        factions.forEach(f => {
            console.log(f);
            var i = document.createElement("input");
            i.setAttribute("id", f.name);
            i.setAttribute("type", "checkbox");
            i.checked = true;

            var l = document.createElement("label");
            l.setAttribute("class", "checkbox faction " + f.color);
            l.appendChild(i);
            l.appendChild(document.createTextNode(f.name));

            var il = document.createElement("il");
            il.appendChild(l);

            ul.appendChild(il);

        });

        rollFaction();
        done = true;
    }
}

window.rollFaction = function() {
    var fact = document.getElementById("faction");
    var fs = [];

    factions.forEach(f => {
        var i = document.getElementById(f.name);
        if (i.checked) {
            fs.push(f.name);
        }
    });

    fact.innerHTML = fs[Math.floor(Math.random() * fs.length)];
};
