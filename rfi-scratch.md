# RFI from Scratch Org

<div id="lightning"></div>

<script type="text/javascript" src="https://platform-saas-4289-dev-ed.scratch.lightning.force.com/lightning/lightning.out.js"></script>

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
    'https://platform-saas-4289-dev-ed.scratch.my.site.com/Admissions'
);
</script>
