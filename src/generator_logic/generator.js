import * as data from "../../data/items"

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomGenerator() {
    return{
    Species: randomChoice(data.species),
    Body: randomChoice(data.bodyTypes),
    Skin: randomChoice(data.skinTypes),
    SkinColour: randomChoice(data.skinColours),
    Face: randomChoice(data.faceShapes),
    Eye: randomChoice(data.eyeShapes),
    EyeColour: randomChoice(data.eyeColours),
    HairLength: randomChoice(data.hairLength),
    HairColour: randomChoice(data.hairColours),
    Nose: randomChoice(data.noses),
    Ears: randomChoice(data.ears),
    Additional: randomChoice(data.additionalFeatures),
    Markings: randomChoice(data.markings),
    Accessories: randomChoice(data.accessories)}

}



export { randomGenerator }