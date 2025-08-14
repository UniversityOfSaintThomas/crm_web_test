<div id="advocateForm"></div>

<script type="text/javascript" src="https://energy-site-8857-dev-ed.scratch.my.salesforce.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:TestAura", function() {
        $Lightning.createComponent(
             "c:advocateBiasIncidentReportLwc",
             {},
             "advocateForm",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    "https://energy-site-8857-dev-ed.scratch.my.salesforce.com"
);
</script>
