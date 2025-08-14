<div id="advocateForm"></div>

<!-- <script type="text/javascript" src="https://energy-site-8857-dev-ed.scratch.my.salesforce-sites.com/lightning/lightning.out.js"></script> -->
<script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce-sites.com/lightning/lightning.out.js"></script>

<script type="text/javascript">
    $Lightning.use("c:CommunityOfConcernLwcWrapper", function() {
        $Lightning.createComponent(
             "c:communityOfConcernLwc",
            {paramBId: "", paramSBid: "", paramCrn: "", paramUrl: ""},
             {},
             "advocateForm",
             function(cmp) {
                 console.log("LWC Component Created.");
             } 
      );
    },
    "https://uofstthomasmn--edastaging.sandbox.my.salesforce-sites.com"
);
</script>
