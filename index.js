// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
}

function appendCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.push(name)
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.unshift(name)
    return copyOfCats
}

function removeLastCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.pop(name)
    return copyOfCats
}

function removeFirstCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.shift(name)
    return copyOfCats
}