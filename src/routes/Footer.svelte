<script>
    import { page } from '$app/stores';

    const linkedinLink = 'https://www.linkedin.com/in/jmanrique-2082j/';
    const emailLink = 'mailto:jorge@lithosep.net';

    let currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="footer-content">
        <div class="footer-sections">
            <div class="footer-section">
                <h4>Contact Information</h4>
                <div class="contact-info">
                    <p><strong>Lithos E&P</strong></p>
                    <p>Email: jorge@lithosep.net</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Location: Houston, TX</p>
                </div>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="/portfolio">Oil & Gas Consulting</a></li>
                    <li><a href="/portfolio">CCUS</a></li>
                    <li><a href="/portfolio">Geothermal Energy</a></li>
                    <li><a href="/portfolio">Critical Minerals</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Resources</h4>
                <ul class="footer-links">
                    <li><a href="/resources">Publications</a></li>
                    <li><a href="/resources">Applications</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/inquire">Contact</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Connect With Us</h4>
                <div class="social-links">
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer" class="social-link">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href={emailLink} class="social-link">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p>&copy; {currentYear} Professional Consulting Services. All rights reserved.</p>
                <p class="disclaimer">Providing expert consulting solutions across energy and industrial sectors.</p>
            </div>
        </div>
    </div>
</footer>


<style>
  footer {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    margin-top: 60px;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px 20px;
  }

  .footer-sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }

  .footer-section h4 {
    color: white;
    font-size: 1.3em;
    margin-bottom: 20px;
    border-bottom: 2px solid rgba(255,255,255,0.2);
    padding-bottom: 10px;
  }

  .contact-info p {
    margin-bottom: 8px;
    opacity: 0.9;
    color: rgba(255,255,255,0.9);
  }

  .contact-info strong {
    color: var(--color-warning);
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin-bottom: 10px;
  }

  .footer-links a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-links a:hover {
    color: var(--color-warning);
  }

  .social-links {
    display: flex;
    gap: 20px;
  }

  .social-link {
    color: rgba(255,255,255,0.8);
    font-size: 24px;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  .social-link:hover {
    color: var(--color-warning);
  }

  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.2);
    padding-top: 20px;
    text-align: center;
  }

  .footer-bottom-content p {
    margin-bottom: 5px;
    opacity: 0.8;
    color: rgba(255,255,255,0.8);
  }

  .disclaimer {
    font-style: italic;
    font-size: 0.9em;
  }

  @media screen and (max-width: 768px) {
    .footer-sections {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .footer-content {
      padding: 40px 20px 20px;
    }

    .social-links {
      justify-content: center;
    }
  }
</style>
