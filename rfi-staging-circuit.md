<!-- This div tag is needed to land the LWC component on the page.-->
<div id="lightning"></div>

<!-- This script tag is needed to load the Lightning Web Component framework from the community org -->
<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions/lightning/lightning.out.js"></script>

<!-- the variable rfi_controller references a Salesforce record that controls the fields displayed and action of the RFI -->
<script type="text/javascript">
$Lightning.use("c:requestForInformationApp", function() {
        $Lightning.createComponent(
             "c:requestForInformationForm",
             {"rfi_controller":"RFI Controller 0340"},
             "lightning",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
);
</script>