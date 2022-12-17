/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myInfo = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Nathan Schmidt",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/me.jpg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["sandwiches", "pizza", "sushi", "rice"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ["videogames", "dungeons and dragons", "sports"],
// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [{place: "Virginia", length: "2 years"},
        {place: "Utah", length: "10 years"},
        {place: "Idaho", length: "8 years"},
        {place: "Okinawa", length: "2 years"}]
}
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", myInfo.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt".myInfo.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let myList = document.querySelector("#favorite-foods");
myInfo.favoriteFoods.forEach (food => {
    let listItem = document.querySelector("li");
    listItem.textContent = food;
    myList.append(listItem);
})
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbyNodes = []
myInfo.hobbies.forEach (hobby => {
    const node = document.createElement("li")
    const textNode = document.createTextNode(hobby);
    node.appendChild(textNode);
    hobbyNodes.push(node);
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbyList = document.querySelector("#hobbies");
hobbyNodes.forEach(hobbyNode => {
    hobbyList.appendChild(hobbyNode);
})
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placesLengthNodes= [];
myInfo.placesLived.foreach (place => {
    const placeNode = document.createElement("dt");
    const placeTextNode = document.createTextNode(place.place);
    placeNode = appendChild(placeTextNode)

    placesLengthNodes.push(placeNode);

    const lengthNode = document.createElement("dd");
    const lengthTextNode = document.createTextNode(place.length);
    lengthNode = appendChild(lengthTextNode)

    placesLengthNodes.push(lengthNode);
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let placesLived = document.querySelector("#places-lived");
placesLengthNodes.foreach(place => {
    placesLived.appendChild(place);
});

