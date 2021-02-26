const arr = new Array(1, 15, 150, 1500, "Jan", 5525, "Henryk");
console.log(arr)
//zadanie 1
arr.forEach(elementy =>{
    console.log(elementy)
})

//zadanie 2 
const wszytsko = arr.every(item =>{
    if(item >1){
        return item
    }
})
console.log(wszytsko)

//zadanie 3
const index = arr.findIndex(imie => imie === "Jan")
console.log(index)
console.log(arr[index])

//zadanie na 6
const liczby = new Array(1, 15, 150, 1500, 5525)
const imiona = new Array("Jan", "Henryk")

const imionaLiczby = (liczby + ' ' + imiona)
console.log(imionaLiczby)








