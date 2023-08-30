interface Items{
    id: number,
    name: string, 
    image: string, 
    price: number,
    bundle?: number,
    bundle_value?: number
}

export const data: Items[] = [
    {
        id: 1,
        name: "Remote raid pass", 
        image: "remoteraid.png",
        price: 195,
        bundle: 3,
        bundle_value: 525
    },
    {
        id: 2,
        name: "Premium battle pass", 
        image: "premiumraid.png",
        price: 100,
        bundle: 3,
        bundle_value: 250
    },
    {
        id: 3,
        name: "Egg Incubator", 
        image: "incubator.png",
        price: 150
    },
    {
        id: 4,
        name: "Super Incubator", 
        image: "superincubator.png",
        price: 200
    },
    {
        id: 5,
        name: "Poffin", 
        image: "poffin.png",
        price: 100
    },
    {
        id: 6,
        name: "20 Poké Balls", 
        image: "pokeball.png",
        price: 195,
        bundle: 5,
        bundle_value: 460
    },
    {
        id: 7,
        name: "Incense", 
        image: "incense.png",
        price: 40,
        bundle: 8,
        bundle_value: 250
    },
    {
        id: 8,
        name: "Rocket Radar", 
        image: "incense.png",
        price: 200,
    },
    {
        id: 9,
        name: "Star Piece", 
        image: "incense.png",
        price: 200,
    },
    {
        id: 10,
        name: "Lucky Egg", 
        image: "luckyegg.png",
        price: 80,
        bundle: 8,
        bundle_value: 500
    },
    {
        id: 11,
        name: "10 Max Potions", 
        image: "maxpotion.png",
        price: 200,
    },
    {
        id: 12,
        name: "6 Max Revives", 
        image: "maxrevive.png",
        price: 180,
    },
    {
        id: 13,
        name: "Lure Module", 
        image: "lure.png",
        price: 100,
        bundle: 8,
        bundle_value: 680
    },
]

