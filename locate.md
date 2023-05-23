<div id="locateYourCounselorLWC"></div>
<script type="text/javascript">
    $Lightning.use("c:requestForInformationApp", 
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
