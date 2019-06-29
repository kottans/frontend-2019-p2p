export const Autocomplete = (input, callback) => {
    const autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["(cities)"]
    });
    autocomplete.addListener("place_changed", (e) => {
        callback(autocomplete.getPlace(e));
        input.focus();
    })
}