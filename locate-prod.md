
<div id="locateYourCounselor"></div>

<script type="text/javascript" src="https://uofstthomasmn.my.site.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:LocateYourCounselorWrapper", 
    function() {
        $Lightning.createComponent(
             "c:locateYourCounselorLWC",
             {rfiType: "veteran"},
             "locateYourCounselor",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn.my.site.com/Admissions'
);
</script>
