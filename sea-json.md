
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
</script>
