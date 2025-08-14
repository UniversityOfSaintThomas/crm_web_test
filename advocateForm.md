<div id="communityOfConcernLwc"></div>

<script type="text/javascript" src="https://energy-site-8857-dev-ed.scratch.my.salesforce-sites.com/lightning/lightning.out.js"></script>
<!-- <script type="text/javascript" src="https://uofstthomasmn--edastaging.sandbox.my.salesforce-sites.com/lightning/lightning.out.js"></script> -->

<script type="text/javascript">
    
    const paramUrl = window.location.href;

    $Lightning.use("c:TestAura",
        function () {
            $Lightning.createComponent(
                "c:communityOfConcernLwc",
                {paramBId: "", paramSfId: "", paramSBid: "", paramCrn: "", paramUrl: paramUrl},
                "communityOfConcernLwc",
                function (cmp) {
                    console.log("LWC Component Created.");
                }
            );
        },
    "https://energy-site-8857-dev-ed.scratch.my.salesforce-sites.com"
);
</script>
