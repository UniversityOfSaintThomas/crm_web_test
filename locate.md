
<div id="locateYourCounselorLWC"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:locateYourCounselorWrapper", 
    function() {
        $Lightning.createComponent(
             "c:locateYourCounselorLWC",
             {},
             "locateYourCounselor",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
);
</script>
