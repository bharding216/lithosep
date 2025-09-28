<script>
	export let isOpen = false;
	export let pdfUrl = '';
	export let fileName = '';
	
	let loading = true;
	let error = false;
	
	function closeModal() {
		isOpen = false;
		loading = true;
		error = false;
	}
	
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
	
	function handleIframeLoad() {
		loading = false;
	}
	
	function handleIframeError() {
		loading = false;
		error = true;
	}
	
	// Reset loading state when URL changes
	$: if (pdfUrl) {
		loading = true;
		error = false;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div class="modal-overlay" on:click={closeModal} role="dialog" aria-modal="true" aria-labelledby="preview-title">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<div class="modal-content" on:click|stopPropagation role="document">
			<div class="modal-header">
				<h3 id="preview-title">{fileName}</h3>
				<button class="close-button" on:click={closeModal} aria-label="Close preview">
					<i class="fas fa-times"></i>
				</button>
			</div>
			
			<div class="modal-body">
				{#if loading}
					<div class="loading-container">
						<div class="loading-spinner"></div>
						<p>Loading preview...</p>
					</div>
				{/if}
				
				{#if error}
					<div class="error-container">
						<i class="fas fa-exclamation-circle error-icon"></i>
						<h4>Preview not available</h4>
						<p>Unable to load PDF preview. Please download the file to view it.</p>
					</div>
				{/if}
				
				{#if pdfUrl && !error}
					<iframe
						src="{pdfUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH"
						title="PDF Preview"
						class="pdf-iframe"
						class:hidden={loading}
						on:load={handleIframeLoad}
						on:error={handleIframeError}
					></iframe>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
	}
	
	.modal-content {
		background: white;
		border-radius: 12px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		max-width: 90vw;
		max-height: 90vh;
		width: 800px;
		height: 600px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	
	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 25px;
		border-bottom: 1px solid #e0e6ed;
		background: #f8f9fa;
	}
	
	.modal-header h3 {
		margin: 0;
		color: #1e3c72;
		font-size: 1.2em;
		font-weight: 600;
		flex: 1;
		padding-right: 15px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.close-button {
		background: none;
		border: none;
		color: #666;
		cursor: pointer;
		padding: 8px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		flex-shrink: 0;
	}
	
	.close-button:hover {
		background: #f0f0f0;
		color: #333;
	}
	
	.modal-body {
		flex: 1;
		position: relative;
		overflow: hidden;
	}
	
	.pdf-iframe {
		width: 100%;
		height: 100%;
		border: none;
		display: block;
	}
	
	.pdf-iframe.hidden {
		display: none;
	}
	
	.loading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: #666;
	}
	
	.loading-spinner {
		width: 40px;
		height: 40px;
		border: 3px solid #f0f0f0;
		border-top: 3px solid #1e3c72;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 15px;
	}
	
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	
	.error-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: #666;
		text-align: center;
		padding: 40px;
	}
	
	.error-icon {
		color: #dc3545;
		font-size: 48px;
		margin-bottom: 20px;
	}
	
	.error-container h4 {
		margin: 0 0 10px 0;
		color: #333;
		font-size: 1.2em;
	}
	
	.error-container p {
		margin: 0;
		line-height: 1.5;
	}
	
	@media screen and (max-width: 768px) {
		.modal-content {
			width: 95vw;
			height: 85vh;
			margin: 20px;
		}
		
		.modal-header {
			padding: 15px 20px;
		}
		
		.modal-header h3 {
			font-size: 1.1em;
		}
	}
	
	@media screen and (max-width: 480px) {
		.modal-content {
			width: 100vw;
			height: 100vh;
			border-radius: 0;
			margin: 0;
		}
		
		.modal-overlay {
			padding: 0;
		}
	}
</style>
