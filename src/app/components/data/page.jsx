
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) - min;
}

export const destinationItems = [{
    Id: "1",
    Image: "/arts.jpg",
    Title: "Arts Hotels ",
    Rating: getRandomValue(1, 5),
    Period: "3 Days 2 Nights",
    Price: "N34,000-N130,000"
},
{
    Id: "2",
    Image: "/bon.jpg",
    Title: "BON Hotels and Suites",
    Rating: getRandomValue(1, 5),
    Period: "2 Days 1 Nights",
    Price: "N40,000-N330,000"
},
{
    Id: "3",
    Image: "/disland.jpg",
    Title: "D'island Hotel and Suites",
    Rating: getRandomValue(0, 5),
    Period: "4 Days 4 Nights",
    Price: "N15,000-N70,000"
},
{
    Id: "4",
    Image: "/gov-lounge.jpg",
    Title: "Governor's Lounge",
    Rating: getRandomValue(1, 5),
    Period: "3 Days 2 Nights",
    Price: "N7,000-N90,000"
},
{
    Id: "5",
    Image: "/monty.jpg",
    Title: "Monty Hotel",
    Rating: getRandomValue(1, 5),
    Period: "3 Days 2 Nights",
    Price: "N34,000-N180,000"
},
{
    Id: "6",
    Image: "/palmviewManor.jpg",
    Title: "PalmView Manor Hotel",
    Rating: getRandomValue(1, 5),
    Period: "5 Days 4 Nights",
    Price: "N20,000-N100,000"
},
{
    Id: "7",
    Image: "/tivoli.jpg",
    Title: "Tivoli Hotel",
    Rating: getRandomValue(1, 5),
    Period: "8 Days 8 Nights",
    Price: "N30,000-N100,000"
},
{
    Id: "8",
    Image: "/zirocresidence.jpg",
    Title: "Ziroc Residence Hotel",
    Rating: getRandomValue(1, 5),
    Period: "8 Days 8 Nights",
    Price: "N24,000-N230,000"
},
{
    Id: "9",
    Image: "/jesse-lounge.jpg",
    Title: "Jesse Lounge",
    Rating: getRandomValue(1, 5),
    Period: "8 Days 8 Nights",
    Price: "N20,000-N100,000"
}
]

export const testimonyItems = [{
    Id:"1",
    Name: "Timo Wener",
    Country: "Ghana",
    Image: "",
    Content: "It was a great experience all round",
    Period: "3 Days 2 Nights"
    },
    {
    Id:"2",
    Name: "Jeremiah Okoro",
    Country: "Togo",
    Image: "",
    Content: "I love the way we were able to navigate the best spots on the island",
    Period: "3 Days 2 Nights"
    },
    {
    Id:"3",
    Name: "Pamilerin Taiwo",
    Country: "Benin Rep",
    Image: "",
    Content: "It was easy find quality outing with this app, thanksS",
    Period: "3 Days 2 Nights"
    }]
    