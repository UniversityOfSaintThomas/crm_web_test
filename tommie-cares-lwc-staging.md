<div id="tommieAlertsLightingOut"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">

    const paramUrl = window.location.href;

    $Lightning.use("c:tommieAlertsLwcWrapper", 
    function() {
        $Lightning.createComponent(
             "c:tommieAlertsLightingOut",
             {paramBId: "", paramSBid: "", paramCrn: "", paramUrl: paramUrl},
             "tommieCaresLwcv2",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/CurrentStudents'
);
</script>
