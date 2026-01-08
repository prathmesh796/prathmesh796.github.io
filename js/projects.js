document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogFigures = document.querySelectorAll('.blogs-figure');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the selected category
            const selectedCategory = button.getAttribute('data-category');
            
            // Filter blog posts
            blogFigures.forEach(figure => {
                const figureCategory = figure.getAttribute('data-category');
                
                if (selectedCategory === 'all' || figureCategory === selectedCategory) {
                    figure.style.display = 'block';
                    // Add a fade-in animation
                    figure.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    figure.style.display = 'none';
                }
            });
        });
    });
});