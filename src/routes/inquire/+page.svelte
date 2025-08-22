<svelte:head>
	<title>Inquire</title>
	<meta name="description" content="Contact us" />
</svelte:head>


<script>
    import { onMount } from 'svelte';

    let siteKey = '6Lf85lkpAAAAAGIBlyA9VIZjMKLR7EMlXmV30w-v';

    onMount(async () => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;

        script.addEventListener('load', () => {
            // Google reCAPTCHA script has loaded
        });

        document.body.appendChild(script);
    });

    let formData = {
        name: '',
        email: '',
        message: '',
        phone: '',
        city: '',
        projectType: '',
        projectBudget: '',
        'g-recaptcha-response': '',
    };

    let confirmationMessage = '';
    let errorMessage = '';
    let isLoading = false;

    async function handleSubmit(event) {
        event.preventDefault();

        if (isLoading) return; // Prevent multiple submissions during loading

        isLoading = true;

        const form = new FormData(event.target);

        let name = form.get('name');
        let email = form.get('email');
        let phone = form.get('phone');
        let city = form.get('city');
        let projectType = form.get('projectType');
        let projectBudget = form.get('projectBudget');
        let message = form.get('message');
        let recaptchaResponse = grecaptcha.getResponse();

        const response = await fetch('https://2jealshrq3ogi6nfghzshfj5a40kdokp.lambda-url.us-east-2.on.aws/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                city: city,
                projectType: projectType,
                projectBudget: projectBudget,
                message: message,
                'g-recaptcha-response': recaptchaResponse,
            }),
        });
        
        if (response.ok) {
            const responseData = await response.json();
            confirmationMessage = responseData.message;

            // Reset form fields
            formData = {
                name: '',
                email: '',
                message: '',
                phone: '',
                city: '',
                projectType: '',
                projectBudget: '',
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
</script>

<div>
    <h1 class="pb-4">Let's Design Your Dream Space Together</h1>

    {#if confirmationMessage}
        <p class="confirmation">{confirmationMessage}</p>
    {:else if errorMessage}
        <p class="error-message">{errorMessage}</p>
    {/if}

    <form on:submit={handleSubmit}>
        <div class="form-floating mb-3 col-md-12 col-lg-6">
            <input type="text" class="form-control" bind:value={formData.name} id="name" name="name"
                placeholder="Name" autocomplete="off" required>
            <label for="name">Name *</label>
        </div>

        <div class="form-floating mb-3 col-md-12 col-lg-6">
            <input type="email" class="form-control" bind:value={formData.email} id="email" name="email"
                placeholder="Email" autocomplete="off" required>
            <label for="email">Email *</label>
        </div>

        <div class="form-floating mb-3 col-md-12 col-lg-6">
            <input type="tel" class="form-control" bind:value={formData.phone} id="phone" name="phone"
                placeholder="Phone" autocomplete="off" required>
            <label for="phone">Phone *</label>
            </div>
        
            <div class="form-floating mb-3 col-md-12 col-lg-6">
            <input type="text" class="form-control" bind:value={formData.city} id="city" name="city"
                placeholder="City" autocomplete="off">
            <label for="city">City</label>
            </div>

            <div class="form-floating mb-3 col-md-12 col-lg-6">
            <label for="projectType" style="display: none;">Project Type</label>
            <select bind:value={formData.projectType} id="projectType" name="projectType" class="form-select" style="padding-top: 10px;">
                <option value="" disabled>Select Project Type</option>
                <option value="new-construction">New Construction</option>
                <option value="renovation">Renovation</option>
            </select>
            </div>
        
        <div class="budget-div" style="margin-left: 10px">
            <p class="mb-2">Project budget:</p>
            <div class="form-check mb-3 col-md-12">
                <div class="mb-2">
                    <input type="radio" class="form-check-input" id="low_budget" name="projectBudget" value="50" bind:group={formData.projectBudget}>
                    <label class="form-check-label" for="low_budget">&lt;$50k</label>
                </div>
                
                <div class="mb-2">
                    <input type="radio" class="form-check-input" id="med_budget" name="projectBudget" value="50_to_150" bind:group={formData.projectBudget}>
                    <label class="form-check-label" for="med_budget">$50k - $150k</label>
                </div>
                
                <div>
                    <input type="radio" class="form-check-input" id="high_budget" name="projectBudget" value="150" bind:group={formData.projectBudget}>
                    <label class="form-check-label" for="high_budget">$150k+</label>
                </div>
            </div>
        </div>

        <div class="form-floating mb-3 col-md-12 col-lg-6">
            <textarea class="form-control" bind:value={formData.message} id="message" name="message"
                placeholder="Message" style="height: 125px;"></textarea>
            <label for="message">Message</label>
        </div>   

        <div class="g-recaptcha mb-3" data-sitekey={siteKey}></div>
    
        <button type="submit" class="btn btn-secondary">Submit</button>

        {#if isLoading}
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        {/if}
    </form>
</div>


<style>
    .confirmation {
        color: rgb(0, 0, 184)
    }

    .error-message {
        color: rgb(199, 0, 0)
    }
</style>