const mongoose = require( 'mongoose' );
const ObjectId = mongoose.Types.ObjectId;


module.exports = [
  {
    "_id" : ObjectId("5cce1922d664b85fd4bb7ead"),
    "users" : [ 
        {
            "email" : "aa@aa",
            "name" : "aa",
            "playerIndex" : 0,
            "badges" : [],
            "party" : [ 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [],
                    "diceImg" : [],
                    "_id" : "5cce18ccd664b85fd4bb7e12",
                    "name" : "Squirtle",
                    "description" : "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.",
                    "pokemonId" : 7,
                    "imageURL" : "./img/squirtle.gif",
                    "color" : "starter",
                    "gifURL" : "./img/squirtle.gif",
                    "__v" : 0,
                    "selected" : true
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e5f",
                    "name" : "Doduo",
                    "description" : "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.",
                    "pokemonId" : 84,
                    "imageURL" : "./img/doduo.gif",
                    "color" : "pink",
                    "gifURL" : "./img/doduo.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e3b",
                    "name" : "Venonat",
                    "description" : "Lives in the shadows of tall trees where it eats bugs. It is attracted by light at night.",
                    "pokemonId" : 48,
                    "imageURL" : "./img/venonat.gif",
                    "color" : "pink",
                    "gifURL" : "./img/venonat.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e36",
                    "name" : "Oddish",
                    "description" : "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
                    "pokemonId" : 43,
                    "imageURL" : "./img/oddish.gif",
                    "color" : "pink",
                    "gifURL" : "./img/oddish.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e18",
                    "name" : "Weedle",
                    "description" : "It attacks using a two-inch poison barb on its head. It can usually be found under the leaves it eats.",
                    "pokemonId" : 13,
                    "imageURL" : "./img/weedle.gif",
                    "color" : "pink",
                    "gifURL" : "./img/weedle.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e34",
                    "name" : "Zubat",
                    "description" : "Emits ultrasonic cries while it flies. They act as a sonar used to check for ob jects in its way.",
                    "pokemonId" : 41,
                    "imageURL" : "./img/zubat.gif",
                    "color" : "pink",
                    "gifURL" : "./img/zubat.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e47",
                    "name" : "Poliwag",
                    "description" : "Its skin is so thin, its internal organs are visible. It has trouble walking on its newly grown feet.",
                    "pokemonId" : 60,
                    "imageURL" : "./img/poliwag.gif",
                    "color" : "pink",
                    "gifURL" : "./img/poliwag.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e90",
                    "name" : "Eevee",
                    "description" : "An extremely rare POKMON that may evolve in a number of different ways depending on stimuli.",
                    "pokemonId" : 133,
                    "imageURL" : "./img/eevee.gif",
                    "color" : "green",
                    "gifURL" : "./img/eevee.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e2f",
                    "name" : "Clefable",
                    "description" : "CLEFABLE moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
                    "pokemonId" : 36,
                    "imageURL" : "./img/clefable.gif",
                    "color" : "green",
                    "gifURL" : "./img/clefable.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e70",
                    "name" : "Electrode",
                    "description" : "One of ELECTRODEs characteristics is its attraction to electricity. It is a problematical POKMON that congregates mostly at electrical power plants to feed on electricity that has just been generated.",
                    "pokemonId" : 101,
                    "imageURL" : "./img/electrode.gif",
                    "color" : "green",
                    "gifURL" : "./img/electrode.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e33",
                    "name" : "Wigglytuff",
                    "description" : "Its fur is extremely fine, dense, and supple. The exquisitely pleasant fur conveys an image of luxury.",
                    "pokemonId" : 40,
                    "imageURL" : "./img/wigglytuff.gif",
                    "color" : "blue",
                    "gifURL" : "./img/wigglytuff.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e8a",
                    "name" : "Pinsir",
                    "description" : "If it fails to crush the foe in its pincers, it will swing around and toss the opponent.",
                    "pokemonId" : 127,
                    "imageURL" : "./img/pinsir.gif",
                    "color" : "blue",
                    "gifURL" : "./img/pinsir.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e93",
                    "name" : "Flareon",
                    "description" : "FLAREONs fluffy fur releases heat into the air so that its body does not get excessively hot. Its body temperature can rise to a maximum of 1,650 degrees F.",
                    "pokemonId" : 136,
                    "imageURL" : "./img/flareon.gif",
                    "color" : "blue",
                    "gifURL" : "./img/flareon.gif",
                    "__v" : 0
                }
            ],
            "box" : [],
            "itemCards" : [],
            "positionOnBoard" : 70,
            "citiesVisited" : [ 
                0
            ],
            "lastCity" : 0,
            "pokemonCount" : {
                "pink" : 6,
                "green" : 3,
                "blue" : 3,
                "red" : 0
            },
            "sprite" : "./img/trainer5.gif"
        }, 
        {
            "email" : "cc@cc",
            "name" : "cc",
            "playerIndex" : 0,
            "badges" : [],
            "party" : [ 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [],
                    "diceImg" : [],
                    "_id" : "5cce18ccd664b85fd4bb7e3f",
                    "name" : "Meowth",
                    "description" : "MEOWTH withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this POKMON loves shiny coins that glitter with light.",
                    "pokemonId" : 52,
                    "imageURL" : "./img/meowth.gif",
                    "color" : "starter",
                    "gifURL" : "./img/meowth.gif",
                    "__v" : 0,
                    "selected" : true
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e71",
                    "name" : "Exeggcute",
                    "description" : "Its six eggs converse using telepathy. They can quickly gather if they become separated.",
                    "pokemonId" : 102,
                    "imageURL" : "./img/exeggcute.gif",
                    "color" : "pink",
                    "gifURL" : "./img/exeggcute.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e3d",
                    "name" : "Diglett",
                    "description" : "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
                    "pokemonId" : 50,
                    "imageURL" : "./img/diglett.gif",
                    "color" : "pink",
                    "gifURL" : "./img/diglett.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e65",
                    "name" : "Shellder",
                    "description" : "At night, it burrows a hole in the seafloor with its broad tongue to make a place to sleep. While asleep, it closes its shell, but leaves its tongue hanging out.",
                    "pokemonId" : 90,
                    "imageURL" : "./img/shellder.gif",
                    "color" : "pink",
                    "gifURL" : "./img/shellder.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e6f",
                    "name" : "Voltorb",
                    "description" : "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
                    "pokemonId" : 100,
                    "imageURL" : "./img/voltorb.gif",
                    "color" : "pink",
                    "gifURL" : "./img/voltorb.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e51",
                    "name" : "Weepinbell",
                    "description" : "Even though it is filled with ACID, it does not melt because it also oozes a neutral izing fluid.",
                    "pokemonId" : 70,
                    "imageURL" : "./img/weepinbell.gif",
                    "color" : "green",
                    "gifURL" : "./img/weepinbell.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e5d",
                    "name" : "Magneton",
                    "description" : "The MAGNEMITE are united by a mag netism so power ful, it dries all moisture in its vicinities.",
                    "pokemonId" : 82,
                    "imageURL" : "./img/magneton.gif",
                    "color" : "green",
                    "gifURL" : "./img/magneton.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e37",
                    "name" : "Gloom",
                    "description" : "From its mouth GLOOM drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.",
                    "pokemonId" : 44,
                    "imageURL" : "./img/gloom.gif",
                    "color" : "green",
                    "gifURL" : "./img/gloom.gif",
                    "__v" : 0
                }
            ],
            "box" : [],
            "itemCards" : [],
            "positionOnBoard" : 39,
            "citiesVisited" : [ 
                0
            ],
            "lastCity" : 0,
            "pokemonCount" : {
                "pink" : 4,
                "green" : 3,
                "blue" : 0,
                "red" : 0
            },
            "sprite" : "./img/trainer2.gif"
        }, 
        {
            "email" : "bb@bb",
            "name" : "bb",
            "playerIndex" : 0,
            "badges" : [],
            "party" : [ 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [],
                    "diceImg" : [],
                    "_id" : "5cce18ccd664b85fd4bb7e24",
                    "name" : "Pikachu",
                    "description" : "This POKMON has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while PIKACHU sleeps. It occasionally discharges electricity when it is dozy after waking up.",
                    "pokemonId" : 25,
                    "imageURL" : "./img/pikachu.gif",
                    "color" : "starter",
                    "gifURL" : "./img/pikachu.gif",
                    "__v" : 0,
                    "selected" : true
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e83",
                    "name" : "Staryu",
                    "description" : "When the stars twinkle at night, it floats up from the sea floor, and its body's center core flickers.",
                    "pokemonId" : 120,
                    "imageURL" : "./img/staryu.gif",
                    "color" : "pink",
                    "gifURL" : "./img/staryu.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e1e",
                    "name" : "Rattata",
                    "description" : "Its fangs are long and very sharp. They grow continuously, so it gnaws on hard things to whittle them down.",
                    "pokemonId" : 19,
                    "imageURL" : "./img/rattata.gif",
                    "color" : "pink",
                    "gifURL" : "./img/rattata.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e6d",
                    "name" : "Krabby",
                    "description" : "The pincers break off easily. If it loses a pincer, it somehow becomes incapable of walk ing sideways.",
                    "pokemonId" : 98,
                    "imageURL" : "./img/krabby.gif",
                    "color" : "pink",
                    "gifURL" : "./img/krabby.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e39",
                    "name" : "Paras",
                    "description" : "It is doused with mushroom spores when it is born. As its body grows, mushrooms sprout from its back.",
                    "pokemonId" : 46,
                    "imageURL" : "./img/paras.gif",
                    "color" : "pink",
                    "gifURL" : "./img/paras.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e43",
                    "name" : "Mankey",
                    "description" : "An agile POKMON that lives in trees. It angers easily and will not hesitate to attack anything.",
                    "pokemonId" : 56,
                    "imageURL" : "./img/mankey.gif",
                    "color" : "green",
                    "gifURL" : "./img/mankey.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e60",
                    "name" : "Dodrio",
                    "description" : "It collects data and plans three times as wisely, but it may think too much and be come immobilized.",
                    "pokemonId" : 85,
                    "imageURL" : "./img/dodrio.gif",
                    "color" : "green",
                    "gifURL" : "./img/dodrio.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e54",
                    "name" : "Tentacruel",
                    "description" : "Its 80 tentacles can stretch and contract freely. They wrap around prey and weaken it with poison.",
                    "pokemonId" : 73,
                    "imageURL" : "./img/tentacruel.gif",
                    "color" : "green",
                    "gifURL" : "./img/tentacruel.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e57",
                    "name" : "Golem",
                    "description" : "GOLEM live up on mountains. If there is a large earthquake, these POKMON will come rolling down off the mountains en masse to the foothills below.",
                    "pokemonId" : 76,
                    "imageURL" : "./img/golem.gif",
                    "color" : "blue",
                    "gifURL" : "./img/golem.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e42",
                    "name" : "Golduck",
                    "description" : "Often seen swimming elegantly by lakeshores. It is often mistaken for the Japanese monster Kappa.",
                    "pokemonId" : 55,
                    "imageURL" : "./img/golduck.gif",
                    "color" : "blue",
                    "gifURL" : "./img/golduck.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5cce18ccd664b85fd4bb7e59",
                    "name" : "Rapidash",
                    "description" : "Very competitive, this POKMON will chase anything that moves fast in the hopes of racing it.",
                    "pokemonId" : 78,
                    "imageURL" : "./img/rapidash.gif",
                    "color" : "red",
                    "gifURL" : "./img/rapidash.gif",
                    "__v" : 0
                }
            ],
            "box" : [],
            "itemCards" : [],
            "positionOnBoard" : 61,
            "citiesVisited" : [ 
                0
            ],
            "lastCity" : 0,
            "pokemonCount" : {
                "pink" : 4,
                "green" : 3,
                "blue" : 2,
                "red" : 1
            },
            "sprite" : "./img/trainer4.gif"
        }
    ],
    "availableItemCards" : [],
    "gameStarted" : true,
    "gameEnded" : false,
    "availableSprites" : [ 
        1, 
        3, 
        6
    ],
    "gameId" : "5cce1922d664b85fd4bb7ead",
    "name" : "three-players",
    "gameBoard" : {
        "1" : {
            "id" : 1,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e5c"),
                "name" : "Magnemite",
                "description" : "Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.",
                "pokemonId" : 81,
                "imageURL" : "./img/magnemite.gif",
                "color" : "pink",
                "gifURL" : "./img/magnemite.gif",
                "__v" : 0
            },
            "users" : [],
            "gymLeader" : false
        },
        "2" : {
            "id" : 2,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "3" : {
            "id" : 3,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "4" : {
            "id" : 4,
            "typeOfSpot" : "city",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "5" : {
            "id" : 5,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "6" : {
            "id" : 6,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "7" : {
            "id" : 7,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e53"),
                "name" : "Tentacool",
                "description" : "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
                "pokemonId" : 72,
                "imageURL" : "./img/tentacool.gif",
                "color" : "pink",
                "gifURL" : "./img/tentacool.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "8" : {
            "id" : 8,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "9" : {
            "id" : 9,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "10" : {
            "id" : 10,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e34"),
                "name" : "Zubat",
                "description" : "Emits ultrasonic cries while it flies. They act as a sonar used to check for ob jects in its way.",
                "pokemonId" : 41,
                "imageURL" : "./img/zubat.gif",
                "color" : "pink",
                "gifURL" : "./img/zubat.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "11" : {
            "id" : 11,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "12" : {
            "id" : 12,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e8c"),
                "name" : "Magikarp",
                "description" : "Its swimming muscles are weak, so it is easily washed away by currents. In places where water pools, you can see many MAGIKARP deposited there by the flow.",
                "pokemonId" : 129,
                "imageURL" : "./img/magikarp.gif",
                "color" : "pink",
                "gifURL" : "./img/magikarp.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "13" : {
            "id" : 13,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "14" : {
            "id" : 14,
            "typeOfSpot" : "city",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Brock/Onyx"
        },
        "15" : {
            "id" : 15,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "16" : {
            "id" : 16,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "17" : {
            "id" : 17,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "18" : {
            "id" : 18,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "19" : {
            "id" : 19,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e78"),
                "name" : "Koffing",
                "description" : "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
                "pokemonId" : 109,
                "imageURL" : "./img/koffing.gif",
                "color" : "green",
                "gifURL" : "./img/koffing.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "20" : {
            "id" : 20,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "21" : {
            "id" : 21,
            "typeOfSpot" : "city",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Misty/Starmie"
        },
        "22" : {
            "id" : 22,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "23" : {
            "id" : 23,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e58"),
                "name" : "Ponyta",
                "description" : "A PONYTA is very weak at birth. It can barely stand up. Its legs become stronger as it stumbles and falls while trying to keep up with its parent.",
                "pokemonId" : 77,
                "imageURL" : "./img/ponyta.gif",
                "color" : "green",
                "gifURL" : "./img/ponyta.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "24" : {
            "id" : 24,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "25" : {
            "id" : 25,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "26" : {
            "id" : 26,
            "typeOfSpot" : "city",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Erica/Vileplume"
        },
        "27" : {
            "id" : 27,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e48"),
                "name" : "Poliwhirl",
                "description" : "The skin on most of its body is moist. However, the skin on its belly spiral feels smooth.",
                "pokemonId" : 61,
                "imageURL" : "./img/poliwhirl.gif",
                "color" : "green",
                "gifURL" : "./img/poliwhirl.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "28" : {
            "id" : 28,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e45"),
                "name" : "Growlithe",
                "description" : "Very protective of its territory. It will bark and bite to repel intruders from its space.",
                "pokemonId" : 58,
                "imageURL" : "./img/growlithe.gif",
                "color" : "green",
                "gifURL" : "./img/growlithe.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "29" : {
            "id" : 29,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "30" : {
            "id" : 30,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e16"),
                "name" : "Metapod",
                "description" : "The shell covering this POKMONs body is as hard as an iron slab. METAPOD does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
                "pokemonId" : 11,
                "imageURL" : "./img/metapod.gif",
                "color" : "green",
                "gifURL" : "./img/metapod.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "31" : {
            "id" : 31,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e94"),
                "name" : "Porygon",
                "description" : "The worlds first artificially created Pokmon. It can travel through electronic space.",
                "pokemonId" : 137,
                "imageURL" : "./img/porygon.gif",
                "color" : "green",
                "gifURL" : "./img/porygon.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "32" : {
            "id" : 32,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "33" : {
            "id" : 33,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e4b"),
                "name" : "Kadabra",
                "description" : "It possesses strong spiritual power. The more danger it faces, the stronger its psychic power.",
                "pokemonId" : 64,
                "imageURL" : "./img/kadabra.gif",
                "color" : "green",
                "gifURL" : "./img/kadabra.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "34" : {
            "id" : 34,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "35" : {
            "id" : 35,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "36" : {
            "id" : 36,
            "typeOfSpot" : "city",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Sabrina/Alakazam"
        },
        "37" : {
            "id" : 37,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "38" : {
            "id" : 38,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e3a"),
                "name" : "Parasect",
                "description" : "PARASECT is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
                "pokemonId" : 47,
                "imageURL" : "./img/parasect.gif",
                "color" : "green",
                "gifURL" : "./img/parasect.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "39" : {
            "id" : 39,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [ 
                {
                    "email" : "cc@cc",
                    "name" : "cc"
                }
            ],
            "pokemon" : null,
            "gymLeader" : false
        },
        "40" : {
            "id" : 40,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "41" : {
            "id" : 41,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e17"),
                "name" : "Butterfree",
                "description" : "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
                "pokemonId" : 12,
                "imageURL" : "./img/butterfree.gif",
                "color" : "blue",
                "gifURL" : "./img/butterfree.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "42" : {
            "id" : 42,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "43" : {
            "id" : 43,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "44" : {
            "id" : 44,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e95"),
                "name" : "Omanyte",
                "description" : "In prehistoric times, it swam on the sea floor, eating plankton. Its fossils are sometimes found.",
                "pokemonId" : 138,
                "imageURL" : "./img/omanyte.gif",
                "color" : "blue",
                "gifURL" : "./img/omanyte.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "45" : {
            "id" : 45,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "46" : {
            "id" : 46,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "47" : {
            "id" : 47,
            "typeOfSpot" : "city",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Lt. Surge/Raichu"
        },
        "48" : {
            "id" : 48,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "49" : {
            "id" : 49,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "50" : {
            "id" : 50,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "51" : {
            "id" : 51,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "52" : {
            "id" : 52,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "53" : {
            "id" : 53,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "54" : {
            "id" : 54,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e76"),
                "name" : "Hitmonchan",
                "description" : "Punches in cork screw fashion. It can punch its way through a concrete wall in the same way as a drill.",
                "pokemonId" : 107,
                "imageURL" : "./img/hitmonchan.gif",
                "color" : "blue",
                "gifURL" : "./img/hitmonchan.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "55" : {
            "id" : 55,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "56" : {
            "id" : 56,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e25"),
                "name" : "Raichu",
                "description" : "If it stores too much electricity, its behavior turns aggressive. To avoid this, it occasionally discharges excess energy and calms itself down.",
                "pokemonId" : 26,
                "imageURL" : "./img/raichu.gif",
                "color" : "blue",
                "gifURL" : "./img/raichu.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "57" : {
            "id" : 57,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "58" : {
            "id" : 58,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "59" : {
            "id" : 59,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e7e"),
                "name" : "Kangaskhan",
                "description" : "The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
                "pokemonId" : 115,
                "imageURL" : "./img/kangaskhan.gif",
                "color" : "red",
                "gifURL" : "./img/kangaskhan.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "60" : {
            "id" : 60,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "61" : {
            "id" : 61,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [ 
                {
                    "email" : "bb@bb",
                    "name" : "bb"
                }
            ],
            "pokemon" : null,
            "gymLeader" : false
        },
        "62" : {
            "id" : 62,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "63" : {
            "id" : 63,
            "typeOfSpot" : "city",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Koga/Weezing"
        },
        "64" : {
            "id" : 64,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "65" : {
            "id" : 65,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e14"),
                "name" : "Blastoise",
                "description" : "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
                "pokemonId" : 9,
                "imageURL" : "./img/blastoise.gif",
                "color" : "red",
                "gifURL" : "./img/blastoise.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "66" : {
            "id" : 66,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "67" : {
            "id" : 67,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e8e"),
                "name" : "Lapras",
                "description" : "It loves crossing the sea with people and Pokmon on its back. It understands human speech.",
                "pokemonId" : 131,
                "imageURL" : "./img/lapras.gif",
                "color" : "red",
                "gifURL" : "./img/lapras.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "68" : {
            "id" : 68,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e72"),
                "name" : "Exeggutor",
                "description" : "If a head drops off, it emits a telepathic call in search of others to form an EXEGGCUTE cluster.",
                "pokemonId" : 103,
                "imageURL" : "./img/exeggutor.gif",
                "color" : "red",
                "gifURL" : "./img/exeggutor.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "69" : {
            "id" : 69,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "70" : {
            "id" : 70,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [ 
                {
                    "email" : "aa@aa",
                    "name" : "aa"
                }
            ],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e96"),
                "name" : "Omastar",
                "description" : "Despite having strong fangs and tentacles, it went extinct when its heavy shell made it unable to catch prey.",
                "pokemonId" : 139,
                "imageURL" : "./img/omastar.gif",
                "color" : "red",
                "gifURL" : "./img/omastar.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "71" : {
            "id" : 71,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "72" : {
            "id" : 72,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5cce18ccd664b85fd4bb7e8d"),
                "name" : "Gyarados",
                "description" : "It has an extremely aggressive nature. The HYPER BEAM it shoots from its mouth totally incinerates all targets.",
                "pokemonId" : 130,
                "imageURL" : "./img/gyarados.gif",
                "color" : "red",
                "gifURL" : "./img/gyarados.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "73" : {
            "id" : 73,
            "typeOfSpot" : "city",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Blaine/Rapidash"
        }
    },
    "availablePokemon" : {
        "red" : [ 
            142, 
            65, 
            59, 
            87, 
            148, 
            125, 
            141, 
            126, 
            95, 
            112, 
            113, 
            6, 
            149, 
            94, 
            128, 
            68, 
            143
        ],
        "pink" : [ 
            21, 
            37, 
            16, 
            72, 
            74, 
            79, 
            39, 
            116, 
            10, 
            54, 
            23, 
            88, 
            27, 
            63
        ],
        "blue" : [ 
            20, 
            62, 
            18, 
            105, 
            67, 
            124, 
            106, 
            22, 
            83, 
            15, 
            24, 
            34, 
            122, 
            135, 
            2, 
            97, 
            147, 
            5, 
            110, 
            71, 
            49, 
            111, 
            57, 
            134, 
            45, 
            8, 
            31, 
            38, 
            140
        ],
        "green" : [ 
            75, 
            51, 
            66, 
            104, 
            99, 
            91, 
            33, 
            108, 
            14, 
            42, 
            80, 
            93, 
            86, 
            89, 
            30, 
            119, 
            121, 
            114, 
            132, 
            17
        ],
        "gold" : [ 
            145, 
            150, 
            144, 
            146
        ],
        "starter" : [ 
            1, 
            4, 
            35
        ]
    },
    "gameCreator" : {
        "email" : "aa@aa",
        "name" : "aa"
    },
    "gameTurn" : {
        "email" : "bb@bb",
        "name" : "bb"
    },
    "gameCounter" : 143,
    "currentPage" : "boardView",
    "__v" : 173
},
{
  "_id" : ObjectId("5ccdea3118607554a993e308"),
  "users" : [ 
      {
          "email" : "aa@aa",
          "name" : "aa",
          "playerIndex" : 0,
          "badges" : [],
          "party" : [ 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [],
                  "diceImg" : [],
                  "_id" : "5ccd9deb18607554a993e281",
                  "name" : "Pikachu",
                  "description" : "This POKMON has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while PIKACHU sleeps. It occasionally discharges electricity when it is dozy after waking up.",
                  "pokemonId" : 25,
                  "imageURL" : "./img/pikachu.gif",
                  "color" : "starter",
                  "gifURL" : "./img/pikachu.gif",
                  "__v" : 0,
                  "selected" : true
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e291",
                  "name" : "Zubat",
                  "description" : "Emits ultrasonic cries while it flies. They act as a sonar used to check for ob jects in its way.",
                  "pokemonId" : 41,
                  "imageURL" : "./img/zubat.gif",
                  "color" : "pink",
                  "gifURL" : "./img/zubat.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e2c2",
                  "name" : "Shellder",
                  "description" : "At night, it burrows a hole in the seafloor with its broad tongue to make a place to sleep. While asleep, it closes its shell, but leaves its tongue hanging out.",
                  "pokemonId" : 90,
                  "imageURL" : "./img/shellder.gif",
                  "color" : "pink",
                  "gifURL" : "./img/shellder.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e2b7",
                  "name" : "Slowpoke",
                  "description" : "Incredibly slow and sluggish. It is quite content to loll about without worrying about the time.",
                  "pokemonId" : 79,
                  "imageURL" : "./img/slowpoke.gif",
                  "color" : "pink",
                  "gifURL" : "./img/slowpoke.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e29a",
                  "name" : "Diglett",
                  "description" : "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
                  "pokemonId" : 50,
                  "imageURL" : "./img/diglett.gif",
                  "color" : "pink",
                  "gifURL" : "./img/diglett.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e290",
                  "name" : "Wigglytuff",
                  "description" : "Its fur is extremely fine, dense, and supple. The exquisitely pleasant fur conveys an image of luxury.",
                  "pokemonId" : 40,
                  "imageURL" : "./img/wigglytuff.gif",
                  "color" : "blue",
                  "gifURL" : "./img/wigglytuff.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e2ed",
                  "name" : "Eevee",
                  "description" : "An extremely rare POKMON that may evolve in a number of different ways depending on stimuli.",
                  "pokemonId" : 133,
                  "imageURL" : "./img/eevee.gif",
                  "color" : "green",
                  "gifURL" : "./img/eevee.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e2d4",
                  "name" : "Lickitung",
                  "description" : "Its tongue is twice the length of its body. It can be moved like an arm for grabbing food and attacking.",
                  "pokemonId" : 108,
                  "imageURL" : "./img/lickitung.gif",
                  "color" : "green",
                  "gifURL" : "./img/lickitung.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e2a2",
                  "name" : "Growlithe",
                  "description" : "Very protective of its territory. It will bark and bite to repel intruders from its space.",
                  "pokemonId" : 58,
                  "imageURL" : "./img/growlithe.gif",
                  "color" : "green",
                  "gifURL" : "./img/growlithe.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e2e2",
                  "name" : "Mr-mime",
                  "description" : "A skilled mime from birth, it gains the ability to create invisi ble objects as it matures.",
                  "pokemonId" : 122,
                  "imageURL" : "./img/mr-mime.gif",
                  "color" : "blue",
                  "gifURL" : "./img/mr-mime.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e26b",
                  "name" : "Venusaur",
                  "description" : "It is able to con vert sunlight into energy. As a result, it is more powerful in the summertime.",
                  "pokemonId" : 3,
                  "imageURL" : "./img/venusaur.gif",
                  "color" : "red",
                  "gifURL" : "./img/venusaur.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5ccd9deb18607554a993e2a9",
                  "name" : "Alakazam",
                  "description" : "Its brain cells multiply continu ally until it dies. As a result, it remembers everything.",
                  "pokemonId" : 65,
                  "imageURL" : "./img/alakazam.gif",
                  "color" : "red",
                  "gifURL" : "./img/alakazam.gif",
                  "__v" : 0
              }
          ],
          "box" : [],
          "itemCards" : [],
          "positionOnBoard" : 61,
          "citiesVisited" : [ 
              0
          ],
          "lastCity" : 0,
          "pokemonCount" : {
              "pink" : 4,
              "green" : 3,
              "blue" : 2,
              "red" : 2
          },
          "sprite" : "./img/trainer1.gif"
      }
  ],
  "availableItemCards" : [],
  "gameStarted" : true,
  "gameEnded" : true,
  "availableSprites" : [ 
      2, 
      3, 
      4, 
      5, 
      6
  ],
  "gameId" : "5ccdea3118607554a993e308",
  "name" : "wongame",
  "gameBoard" : {
      "1" : {
          "id" : 1,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "pokemon" : null,
          "users" : [],
          "gymLeader" : false
      },
      "2" : {
          "id" : 2,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "3" : {
          "id" : 3,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "4" : {
          "id" : 4,
          "typeOfSpot" : "city",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "5" : {
          "id" : 5,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e2ce"),
              "name" : "Exeggcute",
              "description" : "Its six eggs converse using telepathy. They can quickly gather if they become separated.",
              "pokemonId" : 102,
              "imageURL" : "./img/exeggcute.gif",
              "color" : "pink",
              "gifURL" : "./img/exeggcute.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "6" : {
          "id" : 6,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "7" : {
          "id" : 7,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e278"),
              "name" : "Pidgey",
              "description" : "PIDGEY has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
              "pokemonId" : 16,
              "imageURL" : "./img/pidgey.gif",
              "color" : "pink",
              "gifURL" : "./img/pidgey.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "8" : {
          "id" : 8,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "9" : {
          "id" : 9,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "10" : {
          "id" : 10,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e288"),
              "name" : "Nidoran-m",
              "description" : "It stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.",
              "pokemonId" : 32,
              "imageURL" : "./img/nidoranm.gif",
              "color" : "pink",
              "gifURL" : "./img/nidoranm.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "11" : {
          "id" : 11,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "12" : {
          "id" : 12,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e2e0"),
              "name" : "Staryu",
              "description" : "When the stars twinkle at night, it floats up from the sea floor, and its body's center core flickers.",
              "pokemonId" : 120,
              "imageURL" : "./img/staryu.gif",
              "color" : "pink",
              "gifURL" : "./img/staryu.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "13" : {
          "id" : 13,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "14" : {
          "id" : 14,
          "typeOfSpot" : "city",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Brock/Onyx"
      },
      "15" : {
          "id" : 15,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "16" : {
          "id" : 16,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e272"),
              "name" : "Caterpie",
              "description" : "If you touch the feeler on top of its head, it will release a horrible stink to protect itself.",
              "pokemonId" : 10,
              "imageURL" : "./img/caterpie.gif",
              "color" : "pink",
              "gifURL" : "./img/caterpie.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "17" : {
          "id" : 17,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "18" : {
          "id" : 18,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "19" : {
          "id" : 19,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "20" : {
          "id" : 20,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "21" : {
          "id" : 21,
          "typeOfSpot" : "city",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Misty/Starmie"
      },
      "22" : {
          "id" : 22,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "23" : {
          "id" : 23,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "24" : {
          "id" : 24,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "25" : {
          "id" : 25,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "26" : {
          "id" : 26,
          "typeOfSpot" : "city",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Erica/Vileplume"
      },
      "27" : {
          "id" : 27,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "28" : {
          "id" : 28,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "29" : {
          "id" : 29,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "30" : {
          "id" : 30,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "31" : {
          "id" : 31,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "32" : {
          "id" : 32,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "33" : {
          "id" : 33,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e273"),
              "name" : "Metapod",
              "description" : "The shell covering this POKMONs body is as hard as an iron slab. METAPOD does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
              "pokemonId" : 11,
              "imageURL" : "./img/metapod.gif",
              "color" : "green",
              "gifURL" : "./img/metapod.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "34" : {
          "id" : 34,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e29b"),
              "name" : "Dugtrio",
              "description" : "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake.",
              "pokemonId" : 51,
              "imageURL" : "./img/dugtrio.gif",
              "color" : "green",
              "gifURL" : "./img/dugtrio.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "35" : {
          "id" : 35,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "36" : {
          "id" : 36,
          "typeOfSpot" : "city",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Sabrina/Alakazam"
      },
      "37" : {
          "id" : 37,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "38" : {
          "id" : 38,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : false,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e2d5"),
              "name" : "Koffing",
              "description" : "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
              "pokemonId" : 109,
              "imageURL" : "./img/koffing.gif",
              "color" : "green",
              "gifURL" : "./img/koffing.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "39" : {
          "id" : 39,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "40" : {
          "id" : 40,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "41" : {
          "id" : 41,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "42" : {
          "id" : 42,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "43" : {
          "id" : 43,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e2f0"),
              "name" : "Flareon",
              "description" : "FLAREONs fluffy fur releases heat into the air so that its body does not get excessively hot. Its body temperature can rise to a maximum of 1,650 degrees F.",
              "pokemonId" : 136,
              "imageURL" : "./img/flareon.gif",
              "color" : "blue",
              "gifURL" : "./img/flareon.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "44" : {
          "id" : 44,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "45" : {
          "id" : 45,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "46" : {
          "id" : 46,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e29d"),
              "name" : "Persian",
              "description" : "The gem in its forehead glows on its own! It walks with all the grace and elegance of a proud queen.",
              "pokemonId" : 53,
              "imageURL" : "./img/persian.gif",
              "color" : "blue",
              "gifURL" : "./img/persian.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "47" : {
          "id" : 47,
          "typeOfSpot" : "city",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Lt. Surge/Raichu"
      },
      "48" : {
          "id" : 48,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "49" : {
          "id" : 49,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e299"),
              "name" : "Venomoth",
              "description" : "The powder on its wings is poisonous if it is dark in color. If it is light, it causes paralysis.",
              "pokemonId" : 49,
              "imageURL" : "./img/venomoth.gif",
              "color" : "blue",
              "gifURL" : "./img/venomoth.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "50" : {
          "id" : 50,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "51" : {
          "id" : 51,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e28a"),
              "name" : "Nidoking",
              "description" : "It is recognized by its rock-hard hide and its extended horn. Be careful with the horn as it contains venom.",
              "pokemonId" : 34,
              "imageURL" : "./img/nidoking.gif",
              "color" : "blue",
              "gifURL" : "./img/nidoking.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "52" : {
          "id" : 52,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "53" : {
          "id" : 53,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "54" : {
          "id" : 54,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e2d3"),
              "name" : "Hitmonchan",
              "description" : "Punches in cork screw fashion. It can punch its way through a concrete wall in the same way as a drill.",
              "pokemonId" : 107,
              "imageURL" : "./img/hitmonchan.gif",
              "color" : "blue",
              "gifURL" : "./img/hitmonchan.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "55" : {
          "id" : 55,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "56" : {
          "id" : 56,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "57" : {
          "id" : 57,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5ccd9deb18607554a993e2ef"),
              "name" : "Jolteon",
              "description" : "Every hair on its body starts to stand sharply on end if it becomes charged with electricity.",
              "pokemonId" : 135,
              "imageURL" : "./img/jolteon.gif",
              "color" : "blue",
              "gifURL" : "./img/jolteon.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "58" : {
          "id" : 58,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "59" : {
          "id" : 59,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "60" : {
          "id" : 60,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "61" : {
          "id" : 61,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [ 
              {
                  "email" : "aa@aa",
                  "name" : "aa"
              }
          ],
          "pokemon" : null,
          "gymLeader" : false
      },
      "62" : {
          "id" : 62,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "63" : {
          "id" : 63,
          "typeOfSpot" : "city",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Koga/Weezing"
      },
      "64" : {
          "id" : 64,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "65" : {
          "id" : 65,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "66" : {
          "id" : 66,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "67" : {
          "id" : 67,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "68" : {
          "id" : 68,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "69" : {
          "id" : 69,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "70" : {
          "id" : 70,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "71" : {
          "id" : 71,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "72" : {
          "id" : 72,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "73" : {
          "id" : 73,
          "typeOfSpot" : "city",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Blaine/Rapidash"
      }
  },
  "availablePokemon" : {
      "red" : [ 
          142, 
          59, 
          87, 
          148, 
          125, 
          103, 
          141, 
          115, 
          131, 
          126, 
          139, 
          95, 
          78, 
          112, 
          123, 
          9, 
          113, 
          6, 
          149, 
          94, 
          130, 
          128, 
          68, 
          143
      ],
      "pink" : [ 
          84, 
          21, 
          48, 
          92, 
          37, 
          60, 
          81, 
          19, 
          29, 
          13, 
          118, 
          72, 
          74, 
          39, 
          116, 
          98, 
          100, 
          54, 
          69, 
          23, 
          46, 
          88, 
          129, 
          27, 
          63, 
          43
      ],
      "blue" : [ 
          12, 
          20, 
          26, 
          62, 
          127, 
          18, 
          105, 
          67, 
          124, 
          106, 
          76, 
          55, 
          22, 
          83, 
          15, 
          24, 
          40, 
          2, 
          97, 
          147, 
          5, 
          110, 
          71, 
          111, 
          57, 
          134, 
          45, 
          8, 
          31, 
          38, 
          138, 
          140
      ],
      "green" : [ 
          70, 
          82, 
          75, 
          77, 
          137, 
          66, 
          104, 
          99, 
          96, 
          101, 
          91, 
          33, 
          14, 
          42, 
          80, 
          64, 
          93, 
          61, 
          56, 
          86, 
          89, 
          47, 
          30, 
          119, 
          121, 
          114, 
          44, 
          28, 
          36, 
          73, 
          117, 
          85, 
          132, 
          17
      ],
      "gold" : [ 
          145, 
          150, 
          144, 
          146
      ],
      "starter" : [ 
          7, 
          52, 
          1, 
          4, 
          35
      ]
  },
  "gameCreator" : {
      "email" : "aa@aa",
      "name" : "aa"
  },
  "gameTurn" : {
      "email" : "aa@aa",
      "name" : "aa"
  },
  "gameCounter" : 52,
  "currentPage" : "boardView",
  "__v" : 64
},
{
  "_id" : ObjectId("5cca613fdda6124216732922"),
  "gameEnded" : true,
  "users" : [ 
      {
          "email" : "aa@aa",
          "name" : "aa",
          "playerIndex" : 0,
          "badges" : [],
          "party" : [ 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [],
                  "diceImg" : [],
                  "_id" : "5cca6126dda61242167328a5",
                  "name" : "Clefairy",
                  "description" : "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.",
                  "pokemonId" : 35,
                  "imageURL" : "./img/clefairy.gif",
                  "color" : "starter",
                  "gifURL" : "./img/clefairy.gif",
                  "__v" : 0,
                  "selected" : true
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328b8",
                  "name" : "Psyduck",
                  "description" : "When its headache intensifies, it starts using strange powers. However, it has no recollection of its powers, so it always looks befuddled and bewildered.",
                  "pokemonId" : 54,
                  "imageURL" : "./img/psyduck.gif",
                  "color" : "pink",
                  "gifURL" : "./img/psyduck.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328f8",
                  "name" : "Goldeen",
                  "description" : "Its dorsal, pecto ral and tail fins wave elegantly in water. That is why it is known as the water dancer.",
                  "pokemonId" : 118,
                  "imageURL" : "./img/goldeen.gif",
                  "color" : "pink",
                  "gifURL" : "./img/goldeen.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda612421673289d",
                  "name" : "Sandshrew",
                  "description" : "It burrows and lives underground. If threatened, it curls itself up into a ball for protection.",
                  "pokemonId" : 27,
                  "imageURL" : "./img/sandshrew.gif",
                  "color" : "pink",
                  "gifURL" : "./img/sandshrew.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda6124216732892",
                  "name" : "Pidgey",
                  "description" : "PIDGEY has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
                  "pokemonId" : 16,
                  "imageURL" : "./img/pidgey.gif",
                  "color" : "pink",
                  "gifURL" : "./img/pidgey.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328b5",
                  "name" : "Dugtrio",
                  "description" : "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake.",
                  "pokemonId" : 51,
                  "imageURL" : "./img/dugtrio.gif",
                  "color" : "green",
                  "gifURL" : "./img/dugtrio.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328e7",
                  "name" : "Electrode",
                  "description" : "One of ELECTRODEs characteristics is its attraction to electricity. It is a problematical POKMON that congregates mostly at electrical power plants to feed on electricity that has just been generated.",
                  "pokemonId" : 101,
                  "imageURL" : "./img/electrode.gif",
                  "color" : "green",
                  "gifURL" : "./img/electrode.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda612421673289a",
                  "name" : "Arbok",
                  "description" : "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
                  "pokemonId" : 24,
                  "imageURL" : "./img/arbok.gif",
                  "color" : "blue",
                  "gifURL" : "./img/arbok.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda612421673290e",
                  "name" : "Kabuto",
                  "description" : "This POKMON lived in ancient times. On rare occasions, it has been discovered as a living fossil.",
                  "pokemonId" : 140,
                  "imageURL" : "./img/kabuto.gif",
                  "color" : "blue",
                  "gifURL" : "./img/kabuto.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda612421673288e",
                  "name" : "Butterfree",
                  "description" : "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
                  "pokemonId" : 12,
                  "imageURL" : "./img/butterfree.gif",
                  "color" : "blue",
                  "gifURL" : "./img/butterfree.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda6124216732898",
                  "name" : "Fearow",
                  "description" : "It cleverly uses its thin, long beak to pluck and eat small insects that hide under the ground.",
                  "pokemonId" : 22,
                  "imageURL" : "./img/fearow.gif",
                  "color" : "blue",
                  "gifURL" : "./img/fearow.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda6124216732915",
                  "name" : "Dratini",
                  "description" : "DRATINI continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.",
                  "pokemonId" : 147,
                  "imageURL" : "./img/dratini.gif",
                  "color" : "blue",
                  "gifURL" : "./img/dratini.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328c6",
                  "name" : "Machamp",
                  "description" : "MACHAMP is known as the POKMON that has mastered every kind of martial arts. If it grabs hold of the foe with its four arms, the battle is all but over. The hapless foe is thrown far over the horizon.",
                  "pokemonId" : 68,
                  "imageURL" : "./img/machamp.gif",
                  "color" : "red",
                  "gifURL" : "./img/machamp.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda6124216732911",
                  "name" : "Snorlax",
                  "description" : "SNORLAXs typical day consists of nothing more than eating and sleeping. It is such a docile POKMON that there are children who use its big belly as a place to play.",
                  "pokemonId" : 143,
                  "imageURL" : "./img/snorlax.gif",
                  "color" : "red",
                  "gifURL" : "./img/snorlax.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6dc594be614391bbef93",
                  "name" : "Poliwrath",
                  "description" : "An adept swimmer, it knows the front crawl, butterfly, and more. It is faster than the best human swimmers.",
                  "pokemonId" : 62,
                  "imageURL" : "./img/poliwrath.gif",
                  "color" : "blue",
                  "gifURL" : "./img/poliwrath.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda61242167328a1",
                  "name" : "Nidoqueen",
                  "description" : "It uses its scaly, rugged body to seal the entrance of its nest and protect its young from predators.",
                  "pokemonId" : 31,
                  "imageURL" : "./img/nidoqueen.gif",
                  "color" : "blue",
                  "gifURL" : "./img/nidoqueen.gif",
                  "__v" : 0
              }
          ],
          "box" : [],
          "itemCards" : [],
          "positionOnBoard" : 32,
          "citiesVisited" : [ 
              0
          ],
          "lastCity" : 0,
          "pokemonCount" : {
              "pink" : 4,
              "green" : 2,
              "blue" : 7,
              "red" : 2
          },
          "sprite" : "./img/trainer5.gif"
      }, 
      {
          "email" : "bb@bb",
          "name" : "bb",
          "playerIndex" : 0,
          "badges" : [],
          "party" : [ 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [],
                  "diceImg" : [],
                  "_id" : "5cca6126dda612421673289b",
                  "name" : "Pikachu",
                  "description" : "This POKMON has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while PIKACHU sleeps. It occasionally discharges electricity when it is dozy after waking up.",
                  "pokemonId" : 25,
                  "imageURL" : "./img/pikachu.gif",
                  "color" : "starter",
                  "gifURL" : "./img/pikachu.gif",
                  "__v" : 0,
                  "selected" : true
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328c7",
                  "name" : "Bellsprout",
                  "description" : "Its bud looks like a human face. Because of the bud, it is rumored to be a type of legendary mandrake plant.",
                  "pokemonId" : 69,
                  "imageURL" : "./img/bellsprout.gif",
                  "color" : "pink",
                  "gifURL" : "./img/bellsprout.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda6124216732903",
                  "name" : "Magikarp",
                  "description" : "Its swimming muscles are weak, so it is easily washed away by currents. In places where water pools, you can see many MAGIKARP deposited there by the flow.",
                  "pokemonId" : 129,
                  "imageURL" : "./img/magikarp.gif",
                  "color" : "pink",
                  "gifURL" : "./img/magikarp.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328a6",
                  "name" : "Clefable",
                  "description" : "CLEFABLE moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
                  "pokemonId" : 36,
                  "imageURL" : "./img/clefable.gif",
                  "color" : "green",
                  "gifURL" : "./img/clefable.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda6124216732906",
                  "name" : "Ditto",
                  "description" : "Its transformation ability is per fect. However, if made to laugh, it can't maintain its disguise.",
                  "pokemonId" : 132,
                  "imageURL" : "./img/ditto.gif",
                  "color" : "green",
                  "gifURL" : "./img/ditto.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328ac",
                  "name" : "Golbat",
                  "description" : "However hard its victim's hide may be, it punctures with sharp fangs and gorges itself with blood.",
                  "pokemonId" : 42,
                  "imageURL" : "./img/golbat.gif",
                  "color" : "green",
                  "gifURL" : "./img/golbat.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda612421673289e",
                  "name" : "Sandslash",
                  "description" : "In an attempt to hide itself, it will run around at top speed to kick up a blinding dust storm.",
                  "pokemonId" : 28,
                  "imageURL" : "./img/sandslash.gif",
                  "color" : "green",
                  "gifURL" : "./img/sandslash.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328ef",
                  "name" : "Koffing",
                  "description" : "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
                  "pokemonId" : 109,
                  "imageURL" : "./img/koffing.gif",
                  "color" : "green",
                  "gifURL" : "./img/koffing.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328d9",
                  "name" : "Dewgong",
                  "description" : "Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters.",
                  "pokemonId" : 87,
                  "imageURL" : "./img/dewgong.gif",
                  "color" : "red",
                  "gifURL" : "./img/dewgong.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda61242167328ff",
                  "name" : "Electabuzz",
                  "description" : "If a major power outage occurs, it is certain that this POKMON has eaten electricity at a power plant.",
                  "pokemonId" : 125,
                  "imageURL" : "./img/electabuzz.gif",
                  "color" : "red",
                  "gifURL" : "./img/electabuzz.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6126dda612421673290d",
                  "name" : "Omastar",
                  "description" : "Despite having strong fangs and tentacles, it went extinct when its heavy shell made it unable to catch prey.",
                  "pokemonId" : 139,
                  "imageURL" : "./img/omastar.gif",
                  "color" : "red",
                  "gifURL" : "./img/omastar.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda61242167328fe",
                  "name" : "Jynx",
                  "description" : "It speaks using a language that sounds human. Research is under way to determine what is being said.",
                  "pokemonId" : 124,
                  "imageURL" : "./img/jynx.gif",
                  "color" : "blue",
                  "gifURL" : "./img/jynx.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda61242167328ed",
                  "name" : "Hitmonchan",
                  "description" : "Punches in cork screw fashion. It can punch its way through a concrete wall in the same way as a drill.",
                  "pokemonId" : 107,
                  "imageURL" : "./img/hitmonchan.gif",
                  "color" : "blue",
                  "gifURL" : "./img/hitmonchan.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                  ],
                  "_id" : "5cca6126dda61242167328b9",
                  "name" : "Golduck",
                  "description" : "Often seen swimming elegantly by lakeshores. It is often mistaken for the Japanese monster Kappa.",
                  "pokemonId" : 55,
                  "imageURL" : "./img/golduck.gif",
                  "color" : "blue",
                  "gifURL" : "./img/golduck.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : true,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6dc594be614391bbef62",
                  "name" : "Weedle",
                  "description" : "It attacks using a two-inch poison barb on its head. It can usually be found under the leaves it eats.",
                  "pokemonId" : 13,
                  "imageURL" : "./img/weedle.gif",
                  "color" : "pink",
                  "gifURL" : "./img/weedle.gif",
                  "__v" : 0
              }, 
              {
                  "visible" : false,
                  "alive" : true,
                  "capture" : [ 
                      3, 
                      4, 
                      5
                  ],
                  "diceImg" : [ 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                      "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                  ],
                  "_id" : "5cca6dc594be614391bbef87",
                  "name" : "Diglett",
                  "description" : "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
                  "pokemonId" : 50,
                  "imageURL" : "./img/diglett.gif",
                  "color" : "pink",
                  "gifURL" : "./img/diglett.gif",
                  "__v" : 0
              }
          ],
          "box" : [],
          "itemCards" : [],
          "positionOnBoard" : 15,
          "citiesVisited" : [ 
              0
          ],
          "lastCity" : 0,
          "pokemonCount" : {
              "pink" : 4,
              "green" : 5,
              "blue" : 3,
              "red" : 3
          },
          "sprite" : "./img/trainer4.gif"
      }
  ],
  "availableItemCards" : [],
  "gameStarted" : true,
  "availableSprites" : [ 
      1, 
      2, 
      3, 
      6
  ],
  "gameId" : "5cca613fdda6124216732922",
  "name" : "game one",
  "gameBoard" : {
      "1" : {
          "id" : 1,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "pokemon" : null,
          "users" : [],
          "gymLeader" : false
      },
      "2" : {
          "id" : 2,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "3" : {
          "id" : 3,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "4" : {
          "id" : 4,
          "typeOfSpot" : "city",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "5" : {
          "id" : 5,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "6" : {
          "id" : 6,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "7" : {
          "id" : 7,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "8" : {
          "id" : 8,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328da"),
              "name" : "Grimer",
              "description" : "Born from polluted sludge in the sea, GRIMERs favorite food is anything filthy. They feed on wastewater pumped out from factories.",
              "pokemonId" : 88,
              "imageURL" : "./img/grimer.gif",
              "color" : "pink",
              "gifURL" : "./img/grimer.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "9" : {
          "id" : 9,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "10" : {
          "id" : 10,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328f6"),
              "name" : "Horsea",
              "description" : "When they're in a safe location, they can be seen playfully tangling their tails together.",
              "pokemonId" : 116,
              "imageURL" : "./img/horsea.gif",
              "color" : "pink",
              "gifURL" : "./img/horsea.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "11" : {
          "id" : 11,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "12" : {
          "id" : 12,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328be"),
              "name" : "Poliwag",
              "description" : "Its skin is so thin, its internal organs are visible. It has trouble walking on its newly grown feet.",
              "pokemonId" : 60,
              "imageURL" : "./img/poliwag.gif",
              "color" : "pink",
              "gifURL" : "./img/poliwag.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "13" : {
          "id" : 13,
          "typeOfSpot" : "event",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "14" : {
          "id" : 14,
          "typeOfSpot" : "city",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Brock/Onyx"
      },
      "15" : {
          "id" : 15,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [ 
              {
                  "email" : "bb@bb",
                  "name" : "bb"
              }
          ],
          "pokemon" : null,
          "gymLeader" : false
      },
      "16" : {
          "id" : 16,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "17" : {
          "id" : 17,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "pink",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328fa"),
              "name" : "Staryu",
              "description" : "When the stars twinkle at night, it floats up from the sea floor, and its body's center core flickers.",
              "pokemonId" : 120,
              "imageURL" : "./img/staryu.gif",
              "color" : "pink",
              "gifURL" : "./img/staryu.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "18" : {
          "id" : 18,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "19" : {
          "id" : 19,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "20" : {
          "id" : 20,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "21" : {
          "id" : 21,
          "typeOfSpot" : "city",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Misty/Starmie"
      },
      "22" : {
          "id" : 22,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "23" : {
          "id" : 23,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328d7"),
              "name" : "Dodrio",
              "description" : "It collects data and plans three times as wisely, but it may think too much and be come immobilized.",
              "pokemonId" : 85,
              "imageURL" : "./img/dodrio.gif",
              "color" : "green",
              "gifURL" : "./img/dodrio.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "24" : {
          "id" : 24,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "25" : {
          "id" : 25,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "26" : {
          "id" : 26,
          "typeOfSpot" : "city",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Erica/Vileplume"
      },
      "27" : {
          "id" : 27,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328c2"),
              "name" : "Kadabra",
              "description" : "It possesses strong spiritual power. The more danger it faces, the stronger its psychic power.",
              "pokemonId" : 64,
              "imageURL" : "./img/kadabra.gif",
              "color" : "green",
              "gifURL" : "./img/kadabra.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "28" : {
          "id" : 28,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "29" : {
          "id" : 29,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "30" : {
          "id" : 30,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6dc694be614391bbefc7"),
              "name" : "Tangela",
              "description" : "Blue plant vines cloak the POKMONs identity in a tangled mass. It entangles anything that gets close.",
              "pokemonId" : 114,
              "imageURL" : "./img/tangela.gif",
              "color" : "green",
              "gifURL" : "./img/tangela.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "31" : {
          "id" : 31,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "32" : {
          "id" : 32,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [ 
              {
                  "email" : "aa@aa",
                  "name" : "aa"
              }
          ],
          "pokemon" : null,
          "gymLeader" : false
      },
      "33" : {
          "id" : 33,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6dc694be614391bbefde"),
              "name" : "Porygon",
              "description" : "The worlds first artificially created Pokmon. It can travel through electronic space.",
              "pokemonId" : 137,
              "imageURL" : "./img/porygon.gif",
              "color" : "green",
              "gifURL" : "./img/porygon.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "34" : {
          "id" : 34,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328dd"),
              "name" : "Cloyster",
              "description" : "For protection, it uses its harder- than-diamonds shell. It also shoots spikes from the shell.",
              "pokemonId" : 91,
              "imageURL" : "./img/cloyster.gif",
              "color" : "green",
              "gifURL" : "./img/cloyster.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "35" : {
          "id" : 35,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "36" : {
          "id" : 36,
          "typeOfSpot" : "city",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Sabrina/Alakazam"
      },
      "37" : {
          "id" : 37,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "38" : {
          "id" : 38,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  4, 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328bf"),
              "name" : "Poliwhirl",
              "description" : "The skin on most of its body is moist. However, the skin on its belly spiral feels smooth.",
              "pokemonId" : 61,
              "imageURL" : "./img/poliwhirl.gif",
              "color" : "green",
              "gifURL" : "./img/poliwhirl.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "39" : {
          "id" : 39,
          "typeOfSpot" : "event",
          "colorOfSpot" : "green",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "40" : {
          "id" : 40,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "41" : {
          "id" : 41,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "42" : {
          "id" : 42,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "43" : {
          "id" : 43,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5cca6126dda6124216732884"),
              "name" : "Ivysaur",
              "description" : "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom.",
              "pokemonId" : 2,
              "imageURL" : "./img/ivysaur.gif",
              "color" : "blue",
              "gifURL" : "./img/ivysaur.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "44" : {
          "id" : 44,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "45" : {
          "id" : 45,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "46" : {
          "id" : 46,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328a4"),
              "name" : "Nidoking",
              "description" : "It is recognized by its rock-hard hide and its extended horn. Be careful with the horn as it contains venom.",
              "pokemonId" : 34,
              "imageURL" : "./img/nidoking.gif",
              "color" : "blue",
              "gifURL" : "./img/nidoking.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "47" : {
          "id" : 47,
          "typeOfSpot" : "city",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Lt. Surge/Raichu"
      },
      "48" : {
          "id" : 48,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "49" : {
          "id" : 49,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "50" : {
          "id" : 50,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "51" : {
          "id" : 51,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "52" : {
          "id" : 52,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "53" : {
          "id" : 53,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328a8"),
              "name" : "Ninetales",
              "description" : "Some legends claim that each of its nine tails has its own unique type of special mystical power.",
              "pokemonId" : 38,
              "imageURL" : "./img/ninetales.gif",
              "color" : "blue",
              "gifURL" : "./img/ninetales.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "54" : {
          "id" : 54,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "55" : {
          "id" : 55,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "56" : {
          "id" : 56,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "57" : {
          "id" : 57,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  3, 
                  4
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
              ],
              "_id" : ObjectId("5cca6126dda61242167328fc"),
              "name" : "Mr-mime",
              "description" : "A skilled mime from birth, it gains the ability to create invisi ble objects as it matures.",
              "pokemonId" : 122,
              "imageURL" : "./img/mr-mime.gif",
              "color" : "blue",
              "gifURL" : "./img/mr-mime.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "58" : {
          "id" : 58,
          "typeOfSpot" : "event",
          "colorOfSpot" : "blue",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "59" : {
          "id" : 59,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "60" : {
          "id" : 60,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "61" : {
          "id" : 61,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "62" : {
          "id" : 62,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "63" : {
          "id" : 63,
          "typeOfSpot" : "city",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Koga/Weezing"
      },
      "64" : {
          "id" : 64,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "65" : {
          "id" : 65,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "66" : {
          "id" : 66,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "67" : {
          "id" : 67,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "68" : {
          "id" : 68,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda612421673288b"),
              "name" : "Blastoise",
              "description" : "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
              "pokemonId" : 9,
              "imageURL" : "./img/blastoise.gif",
              "color" : "red",
              "gifURL" : "./img/blastoise.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "69" : {
          "id" : 69,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "70" : {
          "id" : 70,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda6124216732916"),
              "name" : "Dragonair",
              "description" : "A mystical POKMON that exudes a gentle aura. Has the ability to change climate conditions.",
              "pokemonId" : 148,
              "imageURL" : "./img/dragonair.gif",
              "color" : "red",
              "gifURL" : "./img/dragonair.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "71" : {
          "id" : 71,
          "typeOfSpot" : "event",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : false
      },
      "72" : {
          "id" : 72,
          "typeOfSpot" : "pokemon",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : {
              "visible" : true,
              "alive" : true,
              "capture" : [ 
                  5
              ],
              "diceImg" : [ 
                  "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
              ],
              "_id" : ObjectId("5cca6126dda612421673290f"),
              "name" : "Kabutops",
              "description" : "It swims freely through water. It catches prey with its scythe-like arms and drains the victims fluids.",
              "pokemonId" : 141,
              "imageURL" : "./img/kabutops.gif",
              "color" : "red",
              "gifURL" : "./img/kabutops.gif",
              "__v" : 0
          },
          "gymLeader" : false
      },
      "73" : {
          "id" : 73,
          "typeOfSpot" : "city",
          "colorOfSpot" : "red",
          "users" : [],
          "pokemon" : null,
          "gymLeader" : "Blaine/Rapidash"
      }
  },
  "availablePokemon" : {
      "red" : [ 
          142, 
          65, 
          59, 
          103, 
          115, 
          131, 
          126, 
          95, 
          78, 
          112, 
          123, 
          113, 
          6, 
          149, 
          94, 
          130, 
          128, 
          3
      ],
      "pink" : [ 
          84, 
          21, 
          32, 
          48, 
          92, 
          37, 
          90, 
          81, 
          19, 
          29, 
          102, 
          72, 
          74, 
          79, 
          39, 
          98, 
          100, 
          10, 
          23, 
          41, 
          46, 
          43, 
          50
      ],
      "blue" : [ 
          26, 
          127, 
          18, 
          105, 
          67, 
          106, 
          76, 
          83, 
          15, 
          40, 
          97, 
          136, 
          5, 
          110, 
          71, 
          49, 
          111, 
          53, 
          57, 
          134, 
          45, 
          8, 
          138
      ],
      "green" : [ 
          70, 
          82, 
          75, 
          77, 
          66, 
          104, 
          99, 
          96, 
          33, 
          108, 
          11, 
          14, 
          58, 
          80, 
          93, 
          56, 
          86, 
          89, 
          47, 
          40, 
          30, 
          119, 
          121, 
          44, 
          73, 
          117, 
          17, 
          133
      ],
      "gold" : [ 
          145, 
          150, 
          144, 
          146
      ],
      "starter" : [ 
          7, 
          52, 
          1, 
          4
      ]
  },
  "gameCreator" : {
      "email" : "aa@aa",
      "name" : "aa"
  },
  "gameTurn" : {
      "email" : "aa@aa",
      "name" : "aa"
  },
  "gameCounter" : 134,
  "currentPage" : "boardView",
  "__v" : 165
},
{
    "_id" : ObjectId("5ccdea3118607554a993e378"),
    "users" : [ 
        {
            "email" : "bb@bb",
            "name" : "bb",
            "playerIndex" : 0,
            "badges" : [],
            "party" : [ 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [],
                    "diceImg" : [],
                    "_id" : "5ccd9deb18607554a993e281",
                    "name" : "Pikachu",
                    "description" : "This POKMON has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while PIKACHU sleeps. It occasionally discharges electricity when it is dozy after waking up.",
                    "pokemonId" : 25,
                    "imageURL" : "./img/pikachu.gif",
                    "color" : "starter",
                    "gifURL" : "./img/pikachu.gif",
                    "__v" : 0,
                    "selected" : true
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e291",
                    "name" : "Zubat",
                    "description" : "Emits ultrasonic cries while it flies. They act as a sonar used to check for ob jects in its way.",
                    "pokemonId" : 41,
                    "imageURL" : "./img/zubat.gif",
                    "color" : "pink",
                    "gifURL" : "./img/zubat.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e2c2",
                    "name" : "Shellder",
                    "description" : "At night, it burrows a hole in the seafloor with its broad tongue to make a place to sleep. While asleep, it closes its shell, but leaves its tongue hanging out.",
                    "pokemonId" : 90,
                    "imageURL" : "./img/shellder.gif",
                    "color" : "pink",
                    "gifURL" : "./img/shellder.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e2b7",
                    "name" : "Slowpoke",
                    "description" : "Incredibly slow and sluggish. It is quite content to loll about without worrying about the time.",
                    "pokemonId" : 79,
                    "imageURL" : "./img/slowpoke.gif",
                    "color" : "pink",
                    "gifURL" : "./img/slowpoke.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e29a",
                    "name" : "Diglett",
                    "description" : "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
                    "pokemonId" : 50,
                    "imageURL" : "./img/diglett.gif",
                    "color" : "pink",
                    "gifURL" : "./img/diglett.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e290",
                    "name" : "Wigglytuff",
                    "description" : "Its fur is extremely fine, dense, and supple. The exquisitely pleasant fur conveys an image of luxury.",
                    "pokemonId" : 40,
                    "imageURL" : "./img/wigglytuff.gif",
                    "color" : "blue",
                    "gifURL" : "./img/wigglytuff.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e2ed",
                    "name" : "Eevee",
                    "description" : "An extremely rare POKMON that may evolve in a number of different ways depending on stimuli.",
                    "pokemonId" : 133,
                    "imageURL" : "./img/eevee.gif",
                    "color" : "green",
                    "gifURL" : "./img/eevee.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e2d4",
                    "name" : "Lickitung",
                    "description" : "Its tongue is twice the length of its body. It can be moved like an arm for grabbing food and attacking.",
                    "pokemonId" : 108,
                    "imageURL" : "./img/lickitung.gif",
                    "color" : "green",
                    "gifURL" : "./img/lickitung.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        4, 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e2a2",
                    "name" : "Growlithe",
                    "description" : "Very protective of its territory. It will bark and bite to repel intruders from its space.",
                    "pokemonId" : 58,
                    "imageURL" : "./img/growlithe.gif",
                    "color" : "green",
                    "gifURL" : "./img/growlithe.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : true,
                    "alive" : true,
                    "capture" : [ 
                        3, 
                        4
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e2e2",
                    "name" : "Mr-mime",
                    "description" : "A skilled mime from birth, it gains the ability to create invisi ble objects as it matures.",
                    "pokemonId" : 122,
                    "imageURL" : "./img/mr-mime.gif",
                    "color" : "blue",
                    "gifURL" : "./img/mr-mime.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e26b",
                    "name" : "Venusaur",
                    "description" : "It is able to con vert sunlight into energy. As a result, it is more powerful in the summertime.",
                    "pokemonId" : 3,
                    "imageURL" : "./img/venusaur.gif",
                    "color" : "red",
                    "gifURL" : "./img/venusaur.gif",
                    "__v" : 0
                }, 
                {
                    "visible" : false,
                    "alive" : true,
                    "capture" : [ 
                        5
                    ],
                    "diceImg" : [ 
                        "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                    ],
                    "_id" : "5ccd9deb18607554a993e2a9",
                    "name" : "Alakazam",
                    "description" : "Its brain cells multiply continu ally until it dies. As a result, it remembers everything.",
                    "pokemonId" : 65,
                    "imageURL" : "./img/alakazam.gif",
                    "color" : "red",
                    "gifURL" : "./img/alakazam.gif",
                    "__v" : 0
                }
            ],
            "box" : [],
            "itemCards" : [],
            "positionOnBoard" : 61,
            "citiesVisited" : [ 
                0
            ],
            "lastCity" : 0,
            "pokemonCount" : {
                "pink" : 4,
                "green" : 3,
                "blue" : 2,
                "red" : 2
            },
            "sprite" : "./img/trainer1.gif"
        }
    ],
    "availableItemCards" : [],
    "gameStarted" : true,
    "gameEnded" : true,
    "availableSprites" : [ 
        2, 
        3, 
        4, 
        5, 
        6
    ],
    "gameId" : "5ccdea3118607554a993e378",
    "name" : "wongame2",
    "gameBoard" : {
        "1" : {
            "id" : 1,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "pokemon" : null,
            "users" : [],
            "gymLeader" : false
        },
        "2" : {
            "id" : 2,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "3" : {
            "id" : 3,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "4" : {
            "id" : 4,
            "typeOfSpot" : "city",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "5" : {
            "id" : 5,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e2ce"),
                "name" : "Exeggcute",
                "description" : "Its six eggs converse using telepathy. They can quickly gather if they become separated.",
                "pokemonId" : 102,
                "imageURL" : "./img/exeggcute.gif",
                "color" : "pink",
                "gifURL" : "./img/exeggcute.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "6" : {
            "id" : 6,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "7" : {
            "id" : 7,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e278"),
                "name" : "Pidgey",
                "description" : "PIDGEY has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
                "pokemonId" : 16,
                "imageURL" : "./img/pidgey.gif",
                "color" : "pink",
                "gifURL" : "./img/pidgey.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "8" : {
            "id" : 8,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "9" : {
            "id" : 9,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "10" : {
            "id" : 10,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e288"),
                "name" : "Nidoran-m",
                "description" : "It stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.",
                "pokemonId" : 32,
                "imageURL" : "./img/nidoranm.gif",
                "color" : "pink",
                "gifURL" : "./img/nidoranm.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "11" : {
            "id" : 11,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "12" : {
            "id" : 12,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e2e0"),
                "name" : "Staryu",
                "description" : "When the stars twinkle at night, it floats up from the sea floor, and its body's center core flickers.",
                "pokemonId" : 120,
                "imageURL" : "./img/staryu.gif",
                "color" : "pink",
                "gifURL" : "./img/staryu.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "13" : {
            "id" : 13,
            "typeOfSpot" : "event",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "14" : {
            "id" : 14,
            "typeOfSpot" : "city",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Brock/Onyx"
        },
        "15" : {
            "id" : 15,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "16" : {
            "id" : 16,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e272"),
                "name" : "Caterpie",
                "description" : "If you touch the feeler on top of its head, it will release a horrible stink to protect itself.",
                "pokemonId" : 10,
                "imageURL" : "./img/caterpie.gif",
                "color" : "pink",
                "gifURL" : "./img/caterpie.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "17" : {
            "id" : 17,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "pink",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "18" : {
            "id" : 18,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "19" : {
            "id" : 19,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "20" : {
            "id" : 20,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "21" : {
            "id" : 21,
            "typeOfSpot" : "city",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Misty/Starmie"
        },
        "22" : {
            "id" : 22,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "23" : {
            "id" : 23,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "24" : {
            "id" : 24,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "25" : {
            "id" : 25,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "26" : {
            "id" : 26,
            "typeOfSpot" : "city",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Erica/Vileplume"
        },
        "27" : {
            "id" : 27,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "28" : {
            "id" : 28,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "29" : {
            "id" : 29,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "30" : {
            "id" : 30,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "31" : {
            "id" : 31,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "32" : {
            "id" : 32,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "33" : {
            "id" : 33,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e273"),
                "name" : "Metapod",
                "description" : "The shell covering this POKMONs body is as hard as an iron slab. METAPOD does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
                "pokemonId" : 11,
                "imageURL" : "./img/metapod.gif",
                "color" : "green",
                "gifURL" : "./img/metapod.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "34" : {
            "id" : 34,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e29b"),
                "name" : "Dugtrio",
                "description" : "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake.",
                "pokemonId" : 51,
                "imageURL" : "./img/dugtrio.gif",
                "color" : "green",
                "gifURL" : "./img/dugtrio.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "35" : {
            "id" : 35,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "36" : {
            "id" : 36,
            "typeOfSpot" : "city",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Sabrina/Alakazam"
        },
        "37" : {
            "id" : 37,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "38" : {
            "id" : 38,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : {
                "visible" : false,
                "alive" : true,
                "capture" : [ 
                    4, 
                    5
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_5.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e2d5"),
                "name" : "Koffing",
                "description" : "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
                "pokemonId" : 109,
                "imageURL" : "./img/koffing.gif",
                "color" : "green",
                "gifURL" : "./img/koffing.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "39" : {
            "id" : 39,
            "typeOfSpot" : "event",
            "colorOfSpot" : "green",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "40" : {
            "id" : 40,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "41" : {
            "id" : 41,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "42" : {
            "id" : 42,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "43" : {
            "id" : 43,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e2f0"),
                "name" : "Flareon",
                "description" : "FLAREONs fluffy fur releases heat into the air so that its body does not get excessively hot. Its body temperature can rise to a maximum of 1,650 degrees F.",
                "pokemonId" : 136,
                "imageURL" : "./img/flareon.gif",
                "color" : "blue",
                "gifURL" : "./img/flareon.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "44" : {
            "id" : 44,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "45" : {
            "id" : 45,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "46" : {
            "id" : 46,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e29d"),
                "name" : "Persian",
                "description" : "The gem in its forehead glows on its own! It walks with all the grace and elegance of a proud queen.",
                "pokemonId" : 53,
                "imageURL" : "./img/persian.gif",
                "color" : "blue",
                "gifURL" : "./img/persian.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "47" : {
            "id" : 47,
            "typeOfSpot" : "city",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Lt. Surge/Raichu"
        },
        "48" : {
            "id" : 48,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "49" : {
            "id" : 49,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e299"),
                "name" : "Venomoth",
                "description" : "The powder on its wings is poisonous if it is dark in color. If it is light, it causes paralysis.",
                "pokemonId" : 49,
                "imageURL" : "./img/venomoth.gif",
                "color" : "blue",
                "gifURL" : "./img/venomoth.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "50" : {
            "id" : 50,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "51" : {
            "id" : 51,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e28a"),
                "name" : "Nidoking",
                "description" : "It is recognized by its rock-hard hide and its extended horn. Be careful with the horn as it contains venom.",
                "pokemonId" : 34,
                "imageURL" : "./img/nidoking.gif",
                "color" : "blue",
                "gifURL" : "./img/nidoking.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "52" : {
            "id" : 52,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "53" : {
            "id" : 53,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "54" : {
            "id" : 54,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e2d3"),
                "name" : "Hitmonchan",
                "description" : "Punches in cork screw fashion. It can punch its way through a concrete wall in the same way as a drill.",
                "pokemonId" : 107,
                "imageURL" : "./img/hitmonchan.gif",
                "color" : "blue",
                "gifURL" : "./img/hitmonchan.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "55" : {
            "id" : 55,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "56" : {
            "id" : 56,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "57" : {
            "id" : 57,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : {
                "visible" : true,
                "alive" : true,
                "capture" : [ 
                    3, 
                    4
                ],
                "diceImg" : [ 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_3.png", 
                    "https://www.wpclipart.com/recreation/games/dice/die_face_4.png"
                ],
                "_id" : ObjectId("5ccd9deb18607554a993e2ef"),
                "name" : "Jolteon",
                "description" : "Every hair on its body starts to stand sharply on end if it becomes charged with electricity.",
                "pokemonId" : 135,
                "imageURL" : "./img/jolteon.gif",
                "color" : "blue",
                "gifURL" : "./img/jolteon.gif",
                "__v" : 0
            },
            "gymLeader" : false
        },
        "58" : {
            "id" : 58,
            "typeOfSpot" : "event",
            "colorOfSpot" : "blue",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "59" : {
            "id" : 59,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "60" : {
            "id" : 60,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "61" : {
            "id" : 61,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [ 
                {
                    "email" : "aa@aa",
                    "name" : "aa"
                }
            ],
            "pokemon" : null,
            "gymLeader" : false
        },
        "62" : {
            "id" : 62,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "63" : {
            "id" : 63,
            "typeOfSpot" : "city",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Koga/Weezing"
        },
        "64" : {
            "id" : 64,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "65" : {
            "id" : 65,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "66" : {
            "id" : 66,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "67" : {
            "id" : 67,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "68" : {
            "id" : 68,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "69" : {
            "id" : 69,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "70" : {
            "id" : 70,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "71" : {
            "id" : 71,
            "typeOfSpot" : "event",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "72" : {
            "id" : 72,
            "typeOfSpot" : "pokemon",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : false
        },
        "73" : {
            "id" : 73,
            "typeOfSpot" : "city",
            "colorOfSpot" : "red",
            "users" : [],
            "pokemon" : null,
            "gymLeader" : "Blaine/Rapidash"
        }
    },
    "availablePokemon" : {
        "red" : [ 
            142, 
            59, 
            87, 
            148, 
            125, 
            103, 
            141, 
            115, 
            131, 
            126, 
            139, 
            95, 
            78, 
            112, 
            123, 
            9, 
            113, 
            6, 
            149, 
            94, 
            130, 
            128, 
            68, 
            143
        ],
        "pink" : [ 
            84, 
            21, 
            48, 
            92, 
            37, 
            60, 
            81, 
            19, 
            29, 
            13, 
            118, 
            72, 
            74, 
            39, 
            116, 
            98, 
            100, 
            54, 
            69, 
            23, 
            46, 
            88, 
            129, 
            27, 
            63, 
            43
        ],
        "blue" : [ 
            12, 
            20, 
            26, 
            62, 
            127, 
            18, 
            105, 
            67, 
            124, 
            106, 
            76, 
            55, 
            22, 
            83, 
            15, 
            24, 
            40, 
            2, 
            97, 
            147, 
            5, 
            110, 
            71, 
            111, 
            57, 
            134, 
            45, 
            8, 
            31, 
            38, 
            138, 
            140
        ],
        "green" : [ 
            70, 
            82, 
            75, 
            77, 
            137, 
            66, 
            104, 
            99, 
            96, 
            101, 
            91, 
            33, 
            14, 
            42, 
            80, 
            64, 
            93, 
            61, 
            56, 
            86, 
            89, 
            47, 
            30, 
            119, 
            121, 
            114, 
            44, 
            28, 
            36, 
            73, 
            117, 
            85, 
            132, 
            17
        ],
        "gold" : [ 
            145, 
            150, 
            144, 
            146
        ],
        "starter" : [ 
            7, 
            52, 
            1, 
            4, 
            35
        ]
    },
    "gameCreator" : {
        "email" : "bb@bb",
        "name" : "bb"
    },
    "gameTurn" : {
        "email" : "bb@bb",
        "name" : "bb"
    },
    "gameCounter" : 52,
    "currentPage" : "boardView",
    "__v" : 64
  },

];