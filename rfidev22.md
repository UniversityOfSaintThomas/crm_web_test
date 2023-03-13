# RFI from Dev 22
<div id="lightning"></div>

<script type="text/javascript" src="https://uofstthomasmn--edadev22.sandbox.my.site.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
$Lightning.use("c:requestForInformationApp", function() {
        $Lightning.createComponent(
             "c:requestForInformationForm",
             {"rfi_controller":"RFI Controller 0000"},
             "lightning",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edadev22.sandbox.my.site.com/Admissions'
);
</script>
