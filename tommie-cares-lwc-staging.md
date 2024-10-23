<div id="tommieCaresLwc"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">

    let paramUrl = window.location.href;
    console.log("paramUrl from outside script: "+paramUrl);
    
    $Lightning.use("c:TommieCaresLwcWrapper", 
    function(paramUrl) {
        $Lightning.createComponent(
             "c:tommieCaresLwc",
             {paramBId: "100436429", paramSBid: "101317066", paramCrn: "42061", paramUrl: paramUrl},
             "tommieCaresLwc",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
);
</script>
