
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) - min;
}

export const eatryItems = [{
    Id: "1",
    Image: "/bfk.jpg",
    Title: "BFK ",
    Rating: getRandomValue(1, 5),
    Period: "3 Days 2 Nights",
    Price: "N4,000-8,000"
},
{
    Id: "2",
    Image: "/burger).jpg",
    Title: "Burger King",
    Rating: getRandomValue(1, 5),
    Period: "2 Days 1 Nights",
    Price: "N9,000-30,000"
},
{
    Id: "3",
    Image: "/ceo.jpg",
    Title: "CEO's Lounge",
    Rating: getRandomValue(0, 5),
    Period: "4 Days 4 Nights",
    Price: "N2,000-130,000"
},
{
    Id: "4",
    Image: "/kap.jpg",
    Title: "Kappitana Bar & Lounge",
    Rating: getRandomValue(1, 5),
    Period: "3 Days 2 Nights",
    Price: "N1,500-230,000"
},
{
    Id: "5",
    Image: "/Kfcr.jpg",
    Title: "KFC ",
    Rating: getRandomValue(1, 5),
    Period: "3 Days 2 Nights",
    Price: "N2,000-N30,000"
},
{
    Id: "6",
    Image: "/Mega.jpg",
    Title: "Mega Chicken",
    Rating: getRandomValue(1, 5),
    Period: "5 Days 4 Nights",
    Price: "N5,500-N30,000"
},
{
    Id: "7",
    Image: "/farm.jpg",
    Title: "Farm City",
    Rating: getRandomValue(1, 5),
    Period: "8 Days 8 Nights",
    Price: "N2,000-N30,000"
},
{
    Id: "8",
    Image: "/jesse-lounge.jpg",
    Title: "Jesse Lounge",
    Rating: getRandomValue(1, 5),
    Period: "8 Days 8 Nights",
    Price: "N2,000-N30,000"
},
{
    Id: "9",
    Image: "/gov-lounge.jpg",
    Title: "Governor's Lounge",
    Rating: getRandomValue(1, 5),
    Period: "8 Days 8 Nights",
    Price: "N1,500-N30,000"
}
]
