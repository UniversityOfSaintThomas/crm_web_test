# RFI from Scratch Org

<div id="lightning"></div>

<script type="text/javascript" src="https://platform-customer-73312-dev-ed.scratch.my.site.com/Admissions/lightning/lightning.out.js"></script>

<script type="text/javascript">
$Lightning.use("c:requestForInformationApp", function() {
        $Lightning.createComponent(
             "c:requestForInformationForm",
             {"rfi_controller":"RFI Controller 0001"},
             "lightning",
             function(cmp) {
                console.log("LWC Component Created.");
             } 
      );
    },
    'platform-customer-73312-dev-ed.scratch.my.site.com/Admissions'
);
</script>
