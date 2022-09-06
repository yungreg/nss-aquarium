//*sample object below:

const database =  {
    fish : [
        {
            id: 1,
            image: 'https://i.etsystatic.com/8079306/r/il/a3e657/3412438968/il_1140xN.3412438968_bx0b.jpg',
            name: "The Wind Fish",
            species: "Imaginary Beluga Whale",
            length: 5,
            diet: "plankton",
            harvestLocation: 'Koholint Island'
        },
        {
            id: 2,
            image: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2020/08/diver-with-oarfish.jpg',
            name:"Boaty McBoatface",
            species:'Oarfish',
            length: 8,
            diet:'plankton',
            harvestLocation:'Queensland, Australia',
        },
        {
            id: 3,
            image: 'https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP-970-80.jpg.webp'
            name: 'Tang--Lang',
            species: "Blue Tang",
            length: 0.5,
            diet:['algae','plankton',],
            harvestLocation:'Queensland, Australia',
        },
        {
            id: 4,
            image: 'https://a-z-animals.com/media/2022/01/Types-of-rare-fish-Bluefin-Tuna-1024x535.jpg',
            name: 'Lawng Boi',
            species: "Bluefin Tuna",
            length: 4,
            diet:['algae','plankton',],
            harvestLocation:'Canary Islands, Spain',
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

// console.log(getFish)