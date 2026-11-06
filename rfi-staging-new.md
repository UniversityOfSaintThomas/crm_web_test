# RFI from Staging - New RFI

<div id="lightning"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions/lightning/lightning.out.js"></script>

<script type="text/javascript">
$Lightning.use("c:requestForInformationApp", function() {
        $Lightning.createComponent(
             "c:rfiForm",
             {"rfi_controller":"RFI Controller 0360"},
             "lightning",
             function(cmp) {
                console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
);
</script>
