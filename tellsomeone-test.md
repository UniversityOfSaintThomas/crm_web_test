<div id="tellsomeone"></div>

<!--<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script>-->
<script type="text/javascript" src="https://playground-americano-4563-dev-ed.scratch.my.site.com/lightning.out.js"></script>

<script type="text/javascript">

    const paramUrl = window.location.href;

    $Lightning.use("c:TellSomeoneWrapper", 
    function() {
        $Lightning.createComponent(
             "c:tellSomeoneLwc",
             {paramBId: "", paramSBid: "", paramCrn: "", paramUrl: paramUrl},
             "tellsomeone",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    //'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
    'https://playground-americano-4563-dev-ed.scratch.my.site.com/Admissions'
);
</script>
