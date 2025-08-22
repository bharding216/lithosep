<script>
    import { page } from '$app/stores';

    const facebookLink = 'https://www.facebook.com/people/Elizabeth-B-Interiors-LLC/100054350988710/?sk=photos';
    const instagramLink = 'https://www.instagram.com/elizabeth_b_interiors/';

    let currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="py-5 mb-4 text-center">
        <div class="row pt-5 py-3 mb-4 mb-sm-3">
            <div class="col-12">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" class="social-link fbook-link">
                    <i class="fab fa-facebook"></i>
                  </a>
                  
                  <a href={instagramLink} target="_blank" rel="noopener noreferrer" class="social-link">
                    <i class="fab fa-instagram"></i>
                  </a>
            </div>
        </div>

        <div class="row d-flex align-items-center">

            <div class="col-12 col-sm-6 mb-4 mb-sm-0">
              <p class="fw-bold">Our Home Office</p>
              <p class="m-1">4883 McCullough Ave</p>
              <p>San Antonio, TX 78212</p>
            </div>

            <div class="col-12 col-sm-6">
                <p class="fw-bold">&copy; {currentYear} Elizabeth B. Interiors</p>
                <p>Site created by <a class="hover-link" href="https://www.getsurmount.com/" target="_blank" rel="noopener noreferrer">Surmount Web Development</a></p>
            </div>

        </div>
    </div>
</footer>


<style>
  .social-link {
    font-size: 36px;
    color: rgb(93, 93, 93);
  }

  .fbook-link {
    margin-right: 30px;
  }

</style>
