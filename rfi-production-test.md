# RFI Testing Page - PRODUCTION

<div id="lightning"></div>

<script type="text/javascript" src="https://uofstthomasmn.my.site.com/Admissions/lightning/lightning.out.js"></script>

<script type="text/javascript">
$Lightning.use("c:requestForInformationApp", function() {
        $Lightning.createComponent(
             "c:requestForInformationForm",
             {"rfi_controller":"RFI Controller 0342"},
             "lightning",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn.my.site.com/Admissions'
);
</script>

