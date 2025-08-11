<div id="advocateForm"></div>

<script type="text/javascript" src="https://efficiency-momentum-5351-dev-ed.scratch.my.site.com/s/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:TestAura", 
    function() {
        $Lightning.createComponent(
             "c:advocateBiasIncidentReportLwc",
             {},
             "advocateForm",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    "https://efficiency-momentum-5351-dev-ed.scratch.my.site.com/s/"
);
</script>
