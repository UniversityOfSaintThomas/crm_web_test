let eventListWrapper = document.getElementById('eventList');
fetch('https://uofstthomasmn.my.salesforce-sites.com/services/apexrest/summit/summiteventsfeed?feedType=eventList')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(eventItem => {
            let eventTitle = document.createElement('p');
            eventTitle.textContent = eventItem.title;
            if (eventItem.locationType === 'Off-Campus') {
                eventTitle.classList.add('offCampus');
            }
            eventListWrapper.appendChild(eventTitle);
        });
    });