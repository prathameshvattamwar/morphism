document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll('.grid-item');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close');

    // Handle grid item click
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const morphismType = item.id;
            openModal(morphismType);
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Function to open the modal and show respective morphism sample
    function openModal(morphismType) {
        modal.style.display = 'flex';

        // Load the title and sample content dynamically based on the clicked item
        modalTitle.innerText = morphismType.charAt(0).toUpperCase() + morphismType.slice(1);

        let morphismSample = '';

        switch (morphismType) {
            case 'neumorphism':
                morphismSample = `<div class="neumorphic-sample"></div>`;
                break;
            case 'glassmorphism':
                morphismSample = `<div class="glassmorphic-sample"></div>`;
                break;
            case 'claymorphism':
                morphismSample = `<div class="claymorphic-sample"></div>`;
                break;
            case 'skeuomorphism':
                morphismSample = `<div class="skeuomorphic-sample"></div>`;
                break;
            case 'fluidmorphism':
                morphismSample = `<div class="fluidmorphic-sample"></div>`;
                break;
            case 'metamorphism':
                morphismSample = `<div class="metamorphic-sample"></div>`;
                break;
            case 'aurorism':
                morphismSample = `<div class="aurorism-sample"></div>`;
                break;
            case 'gradientmorphism':
                morphismSample = `<div class="gradientmorphic-sample"></div>`;
                break;
            case 'blurmorphism':
                morphismSample = `<div class="blurmorphic-sample"></div>`;
                break;
            case 'texturism':
                morphismSample = `<div class="texturism-sample"></div>`;
                break;
            case 'holographism':
                morphismSample = `<div class="holographism-sample"></div>`;
                break;
            case 'shadowmorphism':
                morphismSample = `<div class="shadowmorphic-sample"></div>`;
                break;
            case 'plasticmorphism':
                morphismSample = `<div class="plasticmorphic-sample"></div>`;
                break;
            case 'paperism':
                morphismSample = `<div class="paperism-sample"></div>`;
                break;
            case 'retroism':
                morphismSample = `<div class="retroism-sample"></div>`;
                break;
            case 'organism':
                morphismSample = `<div class="organism-sample"></div>`;
                break;
            case 'threedmorphism':
                morphismSample = `<div class="threedmorphic-sample"></div>`;
                break;
            default:
                morphismSample = `<p>Sample not available for this morphism.</p>`;
                break;
        }

        modalBody.innerHTML = morphismSample;
    }
});
