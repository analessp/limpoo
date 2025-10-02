import { useEffect, useState } from "react";

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/api/services')
        .then((response) => response.json())
        .then((data) => setServices(data))
        .catch((error) => console.error('Erro ao carregar os serviços:', error));
    }, []);

    return (
    <>
    <section id="servicos">
        <h2>CONHEÇA NOSSOS SERVIÇOS</h2>
        <div id="container-de-servicos"></div>
        {services.map((services, index) => (
            <div key={index} className="service.card">
                <img src={services.imgSrc} alt={services.altText} />
                <h3>{services.titulo}</h3>
            </div>
        ))}
    </section>
    <footer>© 2025 Limpoo - Projeto fictício sem fins lucrativos.</footer>
    </>
    )
}