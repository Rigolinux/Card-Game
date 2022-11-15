
//this function shuffles the array of cards and returns a new array

export const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));

        //swap the elements at i and randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
};