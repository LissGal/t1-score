document.getElementById('footer-container').innerHTML = `
    <footer class="t1-footer">
        <div class="footer-main">
            <div class="footer-col brand">
                <div class="logo">
                    <img src="assets/img/Logo_T1_score.svg">
                </div>
                <p>El hub global de riesgo e inteligencia antifraude.</p>
            </div>

            <div class="footer-col">
                <h4>Plataforma</h4>
                <div class="sub-columns">
                    <div>
                        <a href="#que-es-t1-score">T1score</a>
                        <a href="#para-quien-es-t1-score">¿Para quién es?</a>
                        <a href="#">Producto</a>
                    </div>
                    <div>
                        <a href="#como-funciona-t1-score">¿Cómo funciona?</a>
                        <a href="#resultados-que-transforman">Resultados</a>
                        <a href="#" onclick="openPopUp();">Solicitar demo</a>
                    </div>
                </div>
            </div>

            <div class="footer-col">
                <h4>Seguridad</h4>
                <div class="security-logos">
                    <img src="assets/img/footer/gdpr.svg" alt="GDPR">
                    <img src="assets/img/footer/pci-dss.svg" alt="PCI DSS">
                    <img src="assets/img/footer/aws.svg" alt="AWS">
                    <img src="assets/img/footer/iso.svg" alt="ISO 27001">
                </div>
            </div>

            <div class="footer-col last">
                <h4>Contacto</h4>
                <p>ventas@score.t1.com</p>
                <p>t1score@t1.com</p>
                <p>11529 Miguel Hidalgo,<br>Ciudad De México. México</p>
            </div>
        </div>

        <hr class="footer-divider">

        <div class="footer-bottom">
            <span>© 2025 T1. Todos los derechos reservados.</span>
            <div class="footer-bottom-links">
                <a href="#">Aviso de privacidad</a>
                <a href="#">Términos y Condiciones</a>
            </div>
        </div>
    </footer>`;
