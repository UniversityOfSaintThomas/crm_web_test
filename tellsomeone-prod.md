<div id="tellsomeonelwc"></div>

<script type="text/javascript" src="https://uofstthomasmn.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    const paramUrl = window.location.href;

    $Lightning.use("c:TellSomeoneLwcWrapper", 
    function() {
        $Lightning.createComponent(
             "c:tellSomeoneLwc",
             {paramBId: "", paramSBid: "", paramPageType: "public", paramUrl: paramUrl},
             "tellsomeonelwc",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn.my.site.com/CurrentStudents'

);
</script>
