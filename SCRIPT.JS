<script>
document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const returnButton = container.querySelector('.return-button');

        // Adiciona evento para mostrar o botão quando o vídeo está sendo reproduzido
        video.addEventListener('play', () => {
            container.classList.add('show-button');
        });

        // Adiciona evento para esconder o botão quando o vídeo é pausado
        video.addEventListener('pause', () => {
            container.classList.remove('show-button');
        });

        // Adiciona eventos para mostrar/esconder o botão quando o mouse passa por cima
        container.addEventListener('mouseover', () => {
            container.classList.add('show-button');
        });

        container.addEventListener('mouseout', () => {
            if (!video.paused) {
                container.classList.add('show-button');
            } else {
                container.classList.remove('show-button');
            }
        });

        // Redireciona para o site ao clicar no botão
        returnButton.addEventListener('click', () => {
            window.location.href = '/'; // Altere para o URL do seu site
        });
    });
});
</script>
