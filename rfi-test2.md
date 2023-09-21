# RFI-Test page 2

<div id="lightning"></div>

<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", () => {
        console.log('loaded');
        $Lightning.use("c:requestForInformationApp", 
            function() {
                $Lightning.createComponent(
                     "c:requestForInformationForm",
                     {"rfi_controller":"RFI Controller 0303"},
                     "lightning",
                     function(cmp) {
                         console.log("LWC Component Created.");
                     } 
              );
            },
            'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
        );
    });
</script>
