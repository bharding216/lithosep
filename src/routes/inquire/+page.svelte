<svelte:head>
	<title>Contact Us - Professional Consulting Services</title>
	<meta name="description" content="Get in touch with our consulting experts for Oil & Gas, CCUS, Geothermal, and Critical Minerals projects" />
</svelte:head>


<script>
    import { onMount } from 'svelte';
    import { env } from '$env/dynamic/private';

    let siteKey = env.RECAPTCHA_SITE_KEY;
    let lambdaUrl = env.LAMBDA_URL;

    onMount(async () => {
        // Set up global reCAPTCHA callback function
        window.onSubmit = function(token) {
            // Get the form and submit it programmatically
            const form = document.getElementById("inquire-form");
            if (form) {
                handleFormSubmission(form, token);
            }
        };

        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LfKM7QrAAAAANNwqGYsqKn3omrG6cnKcoMhrReJ';
        script.async = true;
        script.defer = true;

        script.addEventListener('load', () => {
            // Google reCAPTCHA Enterprise script has loaded
        });

        document.body.appendChild(script);
    });

    let formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
        'g-recaptcha-response': '',
    };

    let confirmationMessage = '';
    let errorMessage = '';
    let isLoading = false;



    async function handleFormSubmission(form, recaptchaToken) {
        if (isLoading) return; // Prevent multiple submissions during loading

        isLoading = true;

        const formDataObj = new FormData(form);

        let name = formDataObj.get('name');
        let email = formDataObj.get('email');
        let phone = formDataObj.get('phone');
        let message = formDataObj.get('message');
        let recaptchaResponse = recaptchaToken;

        const response = await fetch(lambdaUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message,
                'g-recaptcha-response': recaptchaResponse,
            }),
        });
        
        if (response.ok) {
            const responseData = await response.json();
            confirmationMessage = responseData.message;

            // Reset form fields
            const formElement = document.getElementById("inquire-form");
            if (formElement) {
                formElement.reset();
            }
            formData = {
                name: '',
                email: '',
                phone: '',
                message: '',
                'g-recaptcha-response': '',
            };
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            errorMessage = 'Our apologies; there was an error processing your request. Please try again later.';
            console.error('Error sending email');
        }

        isLoading = false;  
    }

    // Handle regular form submit (prevent default behavior since we use reCAPTCHA)
    async function handleSubmit(event) {
        event.preventDefault();
        // Form submission should go through reCAPTCHA button instead
        return false;
    }
</script>

<div class="contact-container">
    <div class="contact-header">
        <h1 class="page-title">Expert Consulting for Your Next Project</h1>
        <p class="page-subtitle">Contact our team to discuss your Oil & Gas, CCUS, Geothermal, or Critical Minerals consulting needs</p>
    </div>

    <div class="contact-form-wrapper">
        {#if confirmationMessage}
            <p class="confirmation">{confirmationMessage}</p>
        {:else if errorMessage}
            <p class="error-message">{errorMessage}</p>
        {/if}

        <form on:submit={handleSubmit} class="contact-form" id="inquire-form">
        <div class="form-floating mb-3 col-12">
            <input type="text" class="form-control" bind:value={formData.name} id="name" name="name"
                placeholder="Name" autocomplete="off" required>
            <label for="name">Name *</label>
        </div>

        <div class="form-floating mb-3 col-12">
            <input type="email" class="form-control" bind:value={formData.email} id="email" name="email"
                placeholder="Email" autocomplete="off" required>
            <label for="email">Email *</label>
        </div>

        <div class="form-floating mb-3 col-12">
            <input type="tel" class="form-control" bind:value={formData.phone} id="phone" name="phone"
                placeholder="Phone" autocomplete="off" required>
            <label for="phone">Phone *</label>
        </div>

        <div class="form-floating mb-3 col-md-12 col-lg-6">
            <textarea class="form-control" bind:value={formData.message} id="message" name="message"
                placeholder="Tell us about your project or inquiry..." style="height: 125px;"></textarea>
            <label for="message">Message</label>
        </div>   

        <button class="g-recaptcha btn btn-primary submit-button"
                data-sitekey="6LfKM7QrAAAAANNwqGYsqKn3omrG6cnKcoMhrReJ"
                data-callback="onSubmit"
                data-action="submit"
                disabled={isLoading}>
            {#if isLoading}
                Submitting...
            {:else}
                Submit Inquiry
            {/if}
        </button>

        {#if isLoading}
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        {/if}
        </form>
    </div>
</div>


<style>
    .contact-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    .contact-header {
        text-align: center;
        margin-bottom: 50px;
    }

    .contact-form-wrapper {
        background: white;
        padding: 40px;
        border-radius: 15px;
        box-shadow: var(--shadow-lg);
        border: 1px solid var(--color-border);
    }

    .contact-form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: start;
    }

    .contact-form > .form-floating:nth-child(1),
    .contact-form > .form-floating:nth-child(2) {
        grid-column: span 1;
    }

    .contact-form > .form-floating:nth-child(3) {
        grid-column: span 1;
    }

    .contact-form > .form-floating:has(textarea) {
        grid-column: span 2;
    }

    .submit-button {
        grid-column: span 2;
        justify-self: center;
    }

    .spinner-border {
        grid-column: span 2;
        justify-self: center;
    }

    .page-title {
        font-size: 3em;
        color: var(--color-primary);
        margin-bottom: 20px;
        text-align: center;
        font-weight: 600;
    }

    .page-subtitle {
        font-size: 1.2em;
        color: var(--color-text-light);
        text-align: center;
        margin-bottom: 40px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
    }



    .submit-button {
        padding: 15px 40px;
        font-size: 1.1em;
        font-weight: 600;
        border-radius: var(--border-radius);
        transition: var(--transition);
        margin-top: 20px;
    }

    .submit-button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .confirmation {
        color: var(--color-secondary);
        background: rgba(76, 175, 80, 0.1);
        padding: 15px;
        border-radius: var(--border-radius);
        border-left: 4px solid var(--color-secondary);
        margin-bottom: 20px;
        font-weight: 500;
    }

    .error-message {
        color: #d32f2f;
        background: rgba(211, 47, 47, 0.1);
        padding: 15px;
        border-radius: var(--border-radius);
        border-left: 4px solid #d32f2f;
        margin-bottom: 20px;
        font-weight: 500;
    }

    .form-floating {
        margin-bottom: 20px;
    }

    .form-control {
        border: 2px solid var(--color-border);
        border-radius: var(--border-radius);
        transition: var(--transition);
        font-size: 1rem;
    }

    .form-control:focus {
        border-color: var(--color-primary);
        box-shadow: 0 0 0 0.2rem rgba(30, 60, 114, 0.25);
    }



    .spinner-border {
        margin-left: 15px;
        width: 1.5rem;
        height: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        .contact-container {
            padding: 20px 15px;
        }

        .contact-form-wrapper {
            padding: 25px 20px;
        }

        .contact-form {
            grid-template-columns: 1fr;
            gap: 15px;
        }

        .contact-form > .form-floating,
        .submit-button,
        .spinner-border {
            grid-column: span 1;
        }

        .page-title {
            font-size: 2.5em;
        }

        .page-subtitle {
            font-size: 1.1em;
        }

        .submit-button {
            width: 100%;
            padding: 15px 20px;
        }
    }
</style>