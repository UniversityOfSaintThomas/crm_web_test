# RFI Testing Page

<div id="lightning"></div>

<script type="text/javascript" src="https://uofstthomasmn.my.site.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
$Lightning.use("c:requestForInformationApp", function() {
        $Lightning.createComponent(
             "c:requestForInformationForm",
             {"rfi_controller":"RFI Controller 0295"},
             "lightning",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    'https://uofstthomasmn.my.site.com/Admissions'
);
</script>

