
<template>
    <div class="container " id="footer-container">
        <div id="footer-newsletter">
            <div class="newsletter-title">Join the One Page Love Newsletter and get a free eBook!</div>
            <div class="newsletter-pitch">
                <ul>
                <li><span class="tick ft">✓</span> Monthly</li>
                <li><span class="tick">✓</span> Inspiration</li>
                <li><span class="tick">✓</span> Freebies</li>
                <li><span class="tick">✓</span> Resources</li>
                <li><span class="tick">✓</span> Free eBook</li>				
                </ul>
            </div>
            <div class="newsletter-lower-wrapper">
                <div class="newsletter-ebook">
                <img src="https://onepagelove-wpengine.netdna-ssl.com/wp-content/themes/onepagelove/img/footer-ebook.jpg" alt="10 Quick Tips to tighten your Landing Page design" width="500" height="375">
                </div>
            </div>
        </div>
    </div>
</template>
<script >
export default {
  
    data(){
      return{
         
      }
    },
    mounted(){
    },
    methods:{   }

}
</script>
<style scoped>
#container-outer #footer-container {
    position: relative;
}
#footer-container {
    z-index: 2000;
}
#footer-container {
    background: #141414;
}
.newsletter-title {
   text-align: center;
    color: #DDD;
    max-width: 90%;
    margin: 0 auto 1.25rem auto;
    font-size: 2.56rem;
    line-height: 2rem;
    font-family: Quicksand,Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
    font-weight: bold;
    letter-spacing: -1px;
    margin-top: 90px;
}
.newsletter-pitch {
        text-align: center;
    color: #AAA;
    max-width: 90%;
    margin: 0 auto 2.5rem auto;
    font-family: -apple-system,BlinkMacSystemFont,Arial,Helvetica Neue,Helvetica,sans-serif;
    font-size: 1.65rem;
    line-height: 1.75rem;
    padding: 0;
}
.newsletter-pitch ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.newsletter-pitch ul li {
    display: inline-block;
    list-style: none;
}
.newsletter-pitch .tick {
    color: #FD6CA3;
    margin-left: .625rem;
    margin-right: -0.125rem;
}
.newsletter-lower-wrapper .newsletter-ebook {
    clear: both;
    display: block;
    padding-top: 2.5rem;
    text-align: center;
    max-width: 90%;
    margin: 0 auto 0 auto;
}

</style>

