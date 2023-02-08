let eventListWrapper = document.getElementById('eventList');
fetch('https://uofstthomas.secure.force.com/services/apexrest/summit/summiteventsfeed?feedType=eventList')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(eventItem => {
            console.log(eventItem.title);
            let eventTitle = document.createElement('p');
            eventTitle.textContent = eventItem.title;
            if(eventItem.locationType === 'Off-Campus') {
                eventTitle.classList.add('offCampus');
            }
            eventListWrapper.appendChild(eventTitle);
        });

        console.log(json.length);

        console.log(json)
    });