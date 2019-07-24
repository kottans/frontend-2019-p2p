const getJson = url => 
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.status);
        });

export const fetchPeople = () => 
    getJson('https://randomuser.me/api/?results=25&nat=fr')
        .then(({results}) => results);



