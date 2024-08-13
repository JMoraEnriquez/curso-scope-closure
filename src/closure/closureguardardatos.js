function createPetList() {
    const petList = [];
    return function addPet(myPet) {
        if (myPet) {
            petList.push(myPet);
        }
        return petList;
    }
}

const myPetList = createPetList();

console.log(myPetList());

console.log(myPetList("michi"));

console.log(myPetList("firulais"));

console.log(myPetList());