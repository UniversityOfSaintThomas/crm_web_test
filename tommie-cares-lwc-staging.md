<div id="tommieCaresLwc"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">

    const paramUrl = window.location.href;

    $Lightning.use("c:TommieCaresLwcWrapper", 
    function() {
        $Lightning.createComponent(
             "c:tommieCaresLwc",
             {paramBId: "100819159", paramSBid: "101319412", paramCrn: "40715", paramUrl: paramUrl},
             "tommieCaresLwc",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
);
</script>
