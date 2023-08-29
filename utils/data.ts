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
        price: 100
    },
    {
        id: 3,
        name: "Egg Incubator", 
        image: "incubator.png",
        price: 195
    },
    {
        id: 4,
        name: "Super Incubator", 
        image: "superincubator.png",
        price: 195
    },
    {
        id: 5,
        name: "Remote pass raid", 
        image: "remoteraid.png",
        price: 195
    },
    {
        id: 6,
        name: "Remote pass raid", 
        image: "remoteraid.png",
        price: 195
    },
]

