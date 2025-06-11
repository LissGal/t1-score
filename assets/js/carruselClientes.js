class LogoCarousel {
    constructor() {
        this.logos = [
            // OPCIÓN 1: Solo con imagen
            { 
                image: 'assets/img/ict1s01.png', 
                alt: 'MercadoLibre',
                class: 'MercadoLibre' 

                
            },
            
            { 
                image: 'assets/img/ict1s02.png', 
                alt: 'Finvero',
                class: 'Finvero' 
            },
            
                { 
                image: 'assets/img/ict1s03.png', 
                alt: 'Banorte',
                class: 'Banorte' 
            },

                { 
                image: 'assets/img/ict1s04.png', 
                alt: 'Plata Card',
                class: 'Plata Card' 
            },

                { 
                image: 'assets/img/ict1s05.png', 
                alt: 'kubo',
                class: 'kubo' 
            },

                { 
                image: 'assets/img/ict1s06.png', 
                alt: 'Claro',
                class: 'Claro' 
            },

                { 
                image: 'assets/img/ict1s07.png', 
                alt: 'Pase',
                class: 'Pase' 
            },

                { 
                image: 'assets/img/ict1s08.png', 
                alt: 'Telcel',
                class: 'Telcel' 
            },

                { 
                image: 'assets/img/ict1s09.png', 
                alt: 'Sears',
                class: 'Sears' 
            },

                { 
                image: 'assets/img/ict1s10.png', 
                alt: 'Sanborns',
                class: 'Sanborns' 
            },

                
        ];
        
        this.track = document.getElementById('logosTrack');
        this.containerWidth = 0;
        this.logoWidth = 0;
        this.currentPosition = 0;
        this.animationId = null;
        
        this.init();
    }

    init() {
        this.createLogos();
        // Iniciar animación después de un pequeño delay para asegurar que todo esté listo
        setTimeout(() => {
            this.calculateDimensions();
            setTimeout(() => {
                this.startAnimation();
            }, 100);
        }, 100);
        this.setupResize();
    }

    createLogos() {
        // Limpiar el contenedor
        this.track.innerHTML = '';
        
        // Crear más copias para un loop más suave
        const copies = 4; // Aumentado de 3 a 4 para mejor fluidez
        
        for (let copy = 0; copy < copies; copy++) {
            this.logos.forEach(logo => {
                const logoElement = document.createElement('div');
                logoElement.className = `logo-item ${logo.class || ''}`;
                
                // Determinar si usar imagen o texto
                if (logo.image) {
                    // Crear elemento de imagen
                    const img = document.createElement('img');
                    img.src = logo.image;
                    img.alt = logo.alt || logo.text || '';
                    img.loading = 'lazy'; // Optimización de carga
                    
                    // Manejar errores de carga de imagen
                    img.onerror = () => {
                        // Si la imagen falla, usar texto como fallback
                        if (logo.text) {
                            logoElement.innerHTML = `<div class="logo-text">${logo.text}</div>`;
                        }
                    };
                    
                    logoElement.appendChild(img);
                } else if (logo.text) {
                    // Usar texto
                    logoElement.innerHTML = `<div class="logo-text">${logo.text}</div>`;
                }
                
                this.track.appendChild(logoElement);
            });
        }
    }

    calculateDimensions() {
        // Esperar a que las imágenes carguen antes de calcular
        setTimeout(() => {
            this.containerWidth = this.track.parentElement.offsetWidth;
            
            // Calcular el ancho total de UN set completo de logos
            let totalWidth = 0;
            const itemsPerSet = this.logos.length;
            
            for (let i = 0; i < itemsPerSet; i++) {
                const item = this.track.children[i];
                if (item) {
                    const style = getComputedStyle(item);
                    const itemWidth = item.offsetWidth + 
                        parseInt(style.marginLeft) + 
                        parseInt(style.marginRight);
                    totalWidth += itemWidth;
                }
            }
            
            this.logoWidth = totalWidth;
            console.log('Logo set width:', this.logoWidth); // Debug
        }, 500); // Dar tiempo para que las imágenes carguen
    }

    startAnimation() {
        const speed = this.getAnimationSpeed();
        let lastTime = 0;
        
        const animate = (currentTime) => {
            // Control de tiempo más preciso
            if (currentTime - lastTime >= 16) { // ~60fps
                this.currentPosition -= speed;
                
                // Reset más suave cuando hemos movido exactamente un set
                if (this.logoWidth > 0 && Math.abs(this.currentPosition) >= this.logoWidth) {
                    this.currentPosition += this.logoWidth; // Suma en lugar de resetear a 0
                }
                
                this.track.style.transform = `translateX(${this.currentPosition}px)`;
                lastTime = currentTime;
            }
            
            this.animationId = requestAnimationFrame(animate);
        };
        
        this.animationId = requestAnimationFrame(animate);
    }

    getAnimationSpeed() {
        const screenWidth = window.innerWidth;
        let baseSpeed = 0.2; // Velocidad más lenta para mejor suavidad
        
        if (screenWidth < 768) {
            baseSpeed = 0.5;
        } else if (screenWidth < 1024) {
            baseSpeed = 0.4;
        }
        
        return baseSpeed;
    }

    setupResize() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.stop();
                this.calculateDimensions();
                this.startAnimation();
            }, 150);
        });
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    restart() {
        this.stop();
        this.currentPosition = 0;
        this.startAnimation();
    }
}

// Inicializar el carrusel
let logoCarousel;
document.addEventListener('DOMContentLoaded', () => {
    logoCarousel = new LogoCarousel();
    window.logoCarousel = logoCarousel;
});

// Optimización de rendimiento
document.addEventListener('visibilitychange', () => {
    if (logoCarousel) {
        if (document.hidden) {
            logoCarousel.stop();
        } else {
            logoCarousel.restart();
        }
    }
});