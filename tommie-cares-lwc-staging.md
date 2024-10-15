<div id="tommieCaresLwc"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:TommieCaresLwcWrapper", 
    function() {
        const queryString = window.location.search;
        console.log(queryString);
        
        $Lightning.createComponent(
             "c:tommieCaresLwc",
             {},
             "tommieCaresLwc",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
);
</script>
