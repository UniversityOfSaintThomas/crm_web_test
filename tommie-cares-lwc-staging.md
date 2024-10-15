<div id="tommieCaresLwc"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:TommieCaresLwcWrapper", 
    function() {
        $Lightning.createComponent(
             "c:tommieCaresLwc",
             {urlBid: "100360449", urlSbid: "567", urlCrn: "910"},
             "tommieCaresLwc",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
);
</script>
