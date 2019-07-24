class UserProfile {
    constructor(img,firstName,lastName,city,gender,age,date) {
        this.img = img;
        this.firstName = firstName.capitalize();
        this.lastName = lastName.capitalize();
        this.city = city.capitalize();
        this.gender = gender;
        this.age = age;
        this.dateOfRegistration = date;
        this.textHtml = 
        `<li class='userLi'>
            <p> <img class='photo' src=${this.img}> </p>
            <h2 class='userName'>${this.firstName} ${this.lastName}</h2>
            <p>${this.age}</p>
            <p>${this.city}</p>           
        </li>`;
    }
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


export const createHtmlList = (list) => {
    let users = list.map(function(e) {
        let {name, gender, dob, picture, location} = e;
        return new UserProfile(
            picture['large'], 
            name["first"],
            name["last"],
            location["city"],
            gender, 
            dob["age"],
            dob["date"])
    });
    
    return users;  
}



  