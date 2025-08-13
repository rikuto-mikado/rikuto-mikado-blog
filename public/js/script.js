window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");
    const MIN_DISPLAY_TIME = 1500;
    
    if (loading) {
        const startTime = performance.now();
        
        const hideLoader = () => {
            loading.classList.add("hidden");
            
            setTimeout(() => {
                loading.remove();
            }, 500);
        };
        
        const elapsed = performance.now() - startTime;
        const waitTime = Math.max(0, MIN_DISPLAY_TIME - elapsed);
        
        setTimeout(hideLoader, waitTime);
    }
});