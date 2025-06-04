// Basic array / Flat array
// [] square bracket 

const fruitBowl = ["Apple", "Banana", "Orange"];
console.log(fruitBowl)
console.log(fruitBowl[0])

const character = ["Julius", "Bard", 99, false]
console.log("Min karakter " + character[0] + " er ein " + character[1] + " på level " + character[2])

//Array of Objects
const allCharacters = [
    {charName: "Julius", charClass: "Bard", charLevel: 99, isDown: false},
    {charName: "Charles", charClass: "Wizad", charLevel: 1, isDown: true}
]
console.log(allCharacters)
console.log(allCharacters[0])
console.log(allCharacters[0].charName)

//
// 

document.addEventListener("DOMContentLoaded", function () {
    // console.log("hello")
    const cardName = document.getElementById("cardName")
    const cardTitle = document.getElementById("cardTitle")
    const cardDescription = document.getElementById("cardDescription")
    const cardImage = document.getElementById("cardImage")

    const cardInformation = [
    {cardName: "Julie Hauge", cardTitle: "Frontend utvikler", cardDescription: "Sjekk ut min GitHub", cardImage: "images/githubQrCode.png", cardImageDescription: "QR-kode"}
    ]

    cardName.textContent = cardInformation[0].cardName
    cardTitle.textContent = cardInformation[0].cardTitle
    cardDescription.textContent = cardInformation[0].cardDescription
    cardImage.src = cardInformation[0].cardImage
    cardImage.alt = cardInformation[0].cardImageDescription
})

// 
// 

// Nested arrays in objects

const shoppingCart = {
    fruits: [
        {apple: ["Red apple", "Green apple", "Yellow apple"]
    },
    "Banana", "Orange"],
    vegetable: ["Potato", "Carrot", "Brusselsprouts"]
}
console.log(shoppingCart)
console.log(shoppingCart.fruits[0].apple[0])