document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const figures = document.querySelectorAll('.blogs-figure, .projects-figure');

    // Function to filter figures based on category
    const filterFigures = (selectedCategory) => {
        figures.forEach(figure => {
            const figureCategory = figure.getAttribute('data-category');
            
            if (selectedCategory === 'all' || figureCategory === selectedCategory) {
                figure.style.display = 'flex';
                // Add a fade-in animation
                figure.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                figure.style.display = 'none';
            }
        });
    };

    // Apply initial filter based on active button on page load
    const activeButton = document.querySelector('.category-btn.active');
    if (activeButton) {
        const initialCategory = activeButton.getAttribute('data-category');
        filterFigures(initialCategory);
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the selected category
            const selectedCategory = button.getAttribute('data-category');
            
            // Filter figures
            filterFigures(selectedCategory);
        });
    });
});