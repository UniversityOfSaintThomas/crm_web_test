---
layout: default
---

<h1>RFI-Test page</h1>

<div id="lightning"></div>

<script type="text/javascript" src="https://rockaway-ocean-3668-dev-ed.scratch.my.salesforce-sites.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:requestForInformationApp", 
    function() {
        $Lightning.createComponent(
             "c:requestForInformationForm",
             {"rfi_controller":"RFI Controller 0000"},
             "lightning",
             function(cmp) {
                 console.log("LWC Component Created.");
             }
      );
    },
    'https://rockaway-ocean-3668-dev-ed.scratch.my.site.com/Admissions'
);
</script>
