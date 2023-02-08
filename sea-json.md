<script>

fetch('https://uofstthomas.secure.force.com/services/apexrest/summit/summiteventsfeed?feedType=eventList')
    .then((response) => response.json())
    .then((json) => { 
        console.log(json.length);

        console.log(json)
    });

</script>