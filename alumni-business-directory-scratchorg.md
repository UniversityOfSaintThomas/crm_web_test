<div id="alumniBusinessDirectory"></div>

<!-- <script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce.com/lightning/lightning.out.js"></script> -->
<script type="text/javascript" src="https://ability-business-6804-dev-ed.scratch.my.salesforce-sites.com/lightning/lightning.out.js"></script>


<script type="text/javascript">
    $Lightning.use("c:AlumniBusinessDirectoryWrapper", 
    function() {
        $Lightning.createComponent(
             "c:alumniBusinessDirectory_3",
             {},
             "alumniBusinessDirectory",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    //'https://uofstthomasmn--edastaging.sandbox.my.site.com/Admissions'
    'https://ability-business-6804-dev-ed.scratch.my.salesforce-sites.com'

);
</script>
