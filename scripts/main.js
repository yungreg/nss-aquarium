import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    // console.log(fish)
}
 
// todo: 3:59pm Sept6th make sure this has been imported correctly by priniting Allfish to the log. continue from there.

// *solved: this wouldn't work until i added a package.json  file to the directory. why is that? (found after googling Error: Uncaught SyntaxError: cannot use import statement)

// todo: figure out what's going on with this import
import { FishList } from './Fishlist.js'

const parentHTMLElement = document.querySelector(".main-content")
parentHTMLElement.innerHTML = FishList()