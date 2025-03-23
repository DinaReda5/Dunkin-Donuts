const footerHTML = `
<footer class=" text-black my-custom p-5 mt-2" id="end" style="background: rgb(255, 255, 255);border-top: 1px solid black; ">
    <div class="container px-5">
        <div class="row">
            <div class="col-6 col-lg-4">
              <a class="navbar-brand" href="#">
                <img src="./assets/logo2.png" class="rounded" alt="..." />
              </a>
                <p class="pt-2" style="max-width: 200px;">FOLLOW US</p>
                <!-- <p class="mb-2">0987654321</p>
                <p>1234567890</p> -->
                <div class="social-media pt-2">
                  <a href="#" class="text-light fs-2 me-3"><img src="./assets/Facebook.png" class="img-fluid" alt="..."></a>
                  <a href="#" class="text-light fs-2 me-3"><img src="./assets/X.png" class="img-fluid" alt="..."></a>
                  <a href="#" class="text-light fs-2 me-3"><img src="./assets/Instagram.png" class="img-fluid" alt="..."></a>
                  <a href="#" class="text-light fs-2 me-3"><img src="./assets/Linkdin.png" class="img-fluid" alt="..."></a>
              </div>
            </div>
            <div class="col">
                <h4>Our Services</h4>
                <ul class="list-unstyled pt-2">
                    <li class="py-1">Press Room</li>
                    <li class="py-1"> Mobile App</li>
                    <li class="py-1">Corporate</li>
                  
                    
                    
                   
                    
                   
                    
                    <li class="py-1">Sustainability</li>
                </ul>
            </div>
            <div class="col">
                <h4>QUICK LINKS</h4>
                <ul class="list-unstyled pt-2">
                    <li class="py-1"> About Us</li>
                    <li class="py-1">Franchising</li>
                    <li class="py-1"> Contact Us</li>
                    <li class="py-1">Site Map</li>
                </ul>
            </div>
            <div class="col">
                <h4>Come Visit</h4>
                <ul class="list-unstyled pt-2">
                    <li class="py-1">info@Dunkin'Donuts.com</li>
                    <li class="py-1">Dunkin' Donuts store, CA 90210 United States</li>
                    
                </ul>
            </div>
         
        </div>
       
    </div>
</footer>
`;


document.getElementById('footer-container').innerHTML = footerHTML;
