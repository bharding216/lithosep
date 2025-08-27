<svelte:head>
	<title>Contact Us - Professional Consulting Services</title>
	<meta name="description" content="Get in touch with our consulting experts for Oil & Gas, CCUS, Geothermal, and Critical Minerals projects" />
</svelte:head>


<script>
    import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    let siteKey = data.siteKey;
    let lambdaUrl = data.lambdaUrl;
    
    onMount(async () => {   
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js`;
        script.async = true;
        script.defer = true;

        script.addEventListener('load', () => {
            console.log('reCAPTCHA script loaded');
        });

        script.addEventListener('error', (error) => {
            console.error('Error loading reCAPTCHA script:', error);
        });

        document.body.appendChild(script);
    });

    async function handleManualSubmit() {
        if (!window.grecaptcha) {
            console.error('reCAPTCHA not loaded');
            errorMessage = 'Security verification not loaded. Please refresh the page.';
            return;
        }

        // Get the reCAPTCHA response from the automatically rendered widget
        const token = window.grecaptcha.getResponse();
        
        if (!token) {
            errorMessage = 'Please complete the reCAPTCHA verification.';
            return;
        }

        const form = document.getElementById("inquire-form");
        if (form) {
            try {
                await handleFormSubmission(form, token);
            } catch (error) {
                console.error('Error in form submission:', error);
            }
        }
    }

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
    
    // Validation state
    let emailValid = true;
    let phoneValid = true;
    let emailError = '';
    let phoneError = '';

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            emailValid = true;
            emailError = '';
            return true;
        }
        
        if (!emailRegex.test(email)) {
            emailValid = false;
            emailError = 'Please enter a valid email address';
            return false;
        }
        
        emailValid = true;
        emailError = '';
        return true;
    }

    // Phone validation function
    function validatePhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
        
        if (!phone) {
            phoneValid = true;
            phoneError = '';
            return true;
        }
        
        if (cleanPhone.length < 10 || !phoneRegex.test(cleanPhone)) {
            phoneValid = false;
            phoneError = 'Please enter a valid phone number (at least 10 digits)';
            return false;
        }
        
        phoneValid = true;
        phoneError = '';
        return true;
    }

    // Real-time validation handlers
    function handleEmailInput() {
        validateEmail(formData.email);
    }

    function handlePhoneInput() {
        validatePhone(formData.phone);
    }

    async function handleFormSubmission(form, recaptchaToken) {
        if (isLoading) return; // Prevent multiple submissions during loading

        // Validate form before submission
        const isEmailValid = validateEmail(formData.email);
        const isPhoneValid = validatePhone(formData.phone);
        
        if (!isEmailValid || !isPhoneValid) {
            return; // Don't submit if validation fails
        }

        isLoading = true;
        errorMessage = ''; // Clear any previous error messages

        // Check if lambdaUrl is available
        if (!lambdaUrl || lambdaUrl.includes('your-lambda-url-here')) {
            console.error('Lambda URL is not configured');
            errorMessage = 'Form submission is not configured. Please contact support directly.';
            isLoading = false;
            return;
        }

        try {
            const formDataObj = new FormData(form);

            let name = formDataObj.get('name');
            let email = formDataObj.get('email');
            let phone = formDataObj.get('phone');
            let message = formDataObj.get('message');
            let recaptchaResponse = recaptchaToken;

            console.log('Submitting form to:', lambdaUrl);
            console.log('Form data:', { name, email, phone, message, recaptchaToken: recaptchaResponse });

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

            console.log('Response status:', response.status);
            
            if (response.ok) {
                const responseData = await response.json();
                confirmationMessage = responseData.message || 'Thank you for your inquiry! We will get back to you soon.';

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
                
                // Reset validation states
                emailValid = true;
                phoneValid = true;
                emailError = '';
                phoneError = '';
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const errorData = await response.text();
                console.error('Server error:', errorData);
                errorMessage = 'Our apologies; there was an error processing your request. Please try again later.';
            }
        } catch (error) {
            console.error('Network or other error:', error);
            // Check if this is a CORS error but the request might have succeeded
            if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
                console.warn('CORS error detected, but request may have succeeded. Check email for confirmation.');
                confirmationMessage = 'Your message has been sent! Due to a technical issue, we cannot confirm receipt here, but please check your email for confirmation.';
            } else {
                errorMessage = 'Our apologies; there was an error processing your request. Please check your connection and try again later.';
            }
        } finally {
            isLoading = false;  
        }
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
            <input type="email" class="form-control {!emailValid ? 'is-invalid' : ''}" 
                bind:value={formData.email} 
                on:input={handleEmailInput}
                id="email" name="email"
                placeholder="Email" autocomplete="off" required>
            <label for="email">Email *</label>
            {#if emailError}
                <div class="invalid-feedback">{emailError}</div>
            {/if}
        </div>

        <div class="form-floating mb-3 col-12">
            <input type="tel" class="form-control {!phoneValid ? 'is-invalid' : ''}" 
                bind:value={formData.phone} 
                on:input={handlePhoneInput}
                id="phone" name="phone"
                placeholder="Phone" autocomplete="off" required>
            <label for="phone">Phone *</label>
            {#if phoneError}
                <div class="invalid-feedback">{phoneError}</div>
            {/if}
        </div>

        <div class="form-floating mb-3 col-md-12 col-lg-6">
            <textarea class="form-control" bind:value={formData.message} id="message" name="message"
                placeholder="Tell us about your project or inquiry..." style="height: 125px;"></textarea>
            <label for="message">Message</label>
        </div>   

        <!-- reCAPTCHA Enterprise widget -->
        <div class="recaptcha-container">
            <div class="g-recaptcha" 
                 data-sitekey={siteKey} 
                 data-action="submit"></div>
        </div>

        <button type="button" 
                class="btn btn-primary submit-button"
                disabled={isLoading}
                on:click={handleManualSubmit}>
            {#if isLoading}
                Sending...
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

    .form-control.is-invalid {
        border-color: #dc3545;
    }

    .form-control.is-invalid:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        font-size: 0.875em;
        color: #dc3545;
    }

    .recaptcha-container {
        grid-column: span 2;
        justify-self: center;
        margin: 20px 0;
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
        .spinner-border,
        .recaptcha-container {
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