
<div id="locateYourCounselor"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:LocateYourCounselorWrapper", 
    function() {
        $Lightning.createComponent(
             "c:locateYourCounselorLWC",
             {rfiType: ""},
             "locateYourCounselor",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
);
</script>
