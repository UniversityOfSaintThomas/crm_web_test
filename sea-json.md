
<!-- div to land the SEA event list in -->
<div id="eventList"></div>

<!-- Style scheets to adjust list look/feel -->
<style>
#eventList p {
    color: blue;
}
#eventList p.offCampus {
    color: red;
}
</style>

<!-- script that calls out to SEA REST API to get event list -->
<script>

<!-- get the html element to place the list in -->
let eventListWrapper = document.getElementById('eventList');

<!-- fetch the event list from the SEA REST API -->
fetch('https://uofstthomasmn.my.salesforce-sites.com/services/apexrest/summit/summiteventsfeed' 
    + new URLSearchParams({
        feedType : 'eventList'
    }).toString())
    .then((response) => response.json())
    .then((json) => {
        json.forEach(eventItem => {
            let eventTitle = document.createElement('p');
            let eventLInk = document.createElement('a');
            eventLInk.href = eventItem.eventUrl;
            eventTitle.textContent = eventItem.title;
            if (eventItem.locationType === 'Off-Campus') {
                eventTitle.classList.add('offCampus');
            }
            eventListWrapper.appendChild(eventTitle);
        });
    });
</script>
