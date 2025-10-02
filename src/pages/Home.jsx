export default function Home() {
    return (
    <>
    <section id="inicio">
        <div>
            <h2>SUA CASA RENOVADA. SOFÁ, COLCHÃO E CARRO COMO NOVOS.</h2>
            <h3>POR QUE UTILIZAR NOSSOS SERVIÇOES</h3>
            <div className="limpeza-icon">
                <a>
                    <img src="/src/assets/limpeza-icon.png" alt="Ícone de Limpeza" />
                </a>
                <h4>LIMPEZA PROFUNDA E EFICAZ</h4>
                <p>Eliminando ácaros, bactérias, fungos e odores que a higienização comum não alcança.</p>
            </div>
            <div className="saude-icon">
                <a>
                    <img src="/src/assets/saude-icon.png" alt="Ícone de Saúde" />
                </a>
                <h4>SAÚDE E BEM-ESTAR</h4>
                <p>Um ambiente limpo e livre de agentes nocivos é essencial para o bem-estar de todos.</p>
            </div>
            <div className="economia-icon">
                <a>
                    <img src="/src/assets/economia-icon.png" alt="Ícone de Economia" />
                </a>
                <h4>ECONOMIA</h4>
                <p>A higienização regular não apenas limpar, mas também prolonga a vida útil dos seus bens.</p>
            </div>
        </div>
    </section>
    <footer>© 2025 Limpoo - Projeto fictício sem fins lucrativos.</footer>
    </>
    );
}