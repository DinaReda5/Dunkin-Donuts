const navbarHTML = `
    <nav class="navbar navbar-expand-lg fixed-top bg-white">
        <div class="container ">
          <a class="navbar-brand"  href="./index.html">
            <img class="img-fluid" src="./assets/logo2.png" alt="logo" style="width: 150px; margin-top: -5px;" >
          </a>
          <button
            class="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item me-4">
                <a
                  class="nav-link active fw-semibold"
                  aria-current="page"
                  href="./index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item me-4">
                <a class="nav-link fw-semibold" href="./menu.html">Menu</a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link fw-semibold" href="./contact.html">ContactUs</a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link fw-semibold" href="./about.html">About</a>
              </li>
            </ul>
           <form class="d-flex" role="search">
    <input id="searchInput" class="form-control me-2 rounded-start-0" type="search" placeholder="Search" aria-label="Search">
    <button class="signin-btn w-50 text-white rounded-end-0" type="submit">Search</button>
</form>
            <button
              class="signin-btn text-white fs-6 px-4 py-1 mx-2"
              type="button"
            >
              SignIn
            </button>
         
            <i class="icon bi bi-cart fs-4" style="color:#a8094e; cursor: pointer;"></i>
          </div>
        </div>
      </nav>
      `;

  
    document.getElementById('navbar-container').innerHTML = navbarHTML;
