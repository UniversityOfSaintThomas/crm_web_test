# RFI from Scratch Org

<div id="lightning"></div>

<script type="text/javascript" src="https://americano-miso-8449-dev-ed.scratch.my.site.com/Admissions/lightning/lightning.out.js"></script>

<script type="text/javascript">
$Lightning.use("c:requestForInformationApp", function() {
        $Lightning.createComponent(
             "c:rfiForm",
             {"rfi_controller":"RFI Controller 0001"},
             "lightning",
             function(cmp) {
                console.log("LWC Component Created.");
             } 
      );
    },
    'https://americano-miso-8449-dev-ed.scratch.my.site.com/Admissions'
);
</script>
