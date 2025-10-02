export default function Appointments() {
    return (
    <>
    <section id="agendamentos">
        <div className="appointments-container">
            <h2>AGENDE O SEU HORÁRIO CONOSCO!</h2>
            <p>Escolha o melhor dia e horário que iremos até você.</p>
            <form action="#" method="POST">
                <div className="form-group">
                    <label htmlFor="nome">Nome Completo</label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label type="tel" id="telefone" name="telefone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="servico">Serviço Desejado:</label>
                    <select id="servico" name="servico" required>
                        <option value="">Selecione um serviço</option>
                        <option value="automoveis">Limpeza de Automóveis</option>
                        <option value="sofas">Limpeza de Sofás</option>
                        <option value="colchoes">Limpeza de Colchões</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data:</label>
                    <input type="date" id="data" name="data" required />
                </div>
                <div className="form-group">
                    <label htmlFor="forario">Horário:</label>
                    <input type="time" id="horario" name="horario" required />
                </div>
                <button type="submit">AGENDAR AGORA!</button>
            </form>
        </div>
    </section>
    <section id="redes-sociais">
        <h3>NOS ACOMPANHE NAS REDES SOCIAIS</h3>
        <ul>
            <li>
                <a href="#" className="link-com-icone">
                    <i className="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                </a>
            </li>
            <li>
                <a href="#" className="link-com-icone">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>WhatsApp</span>
                </a>
            </li>
        </ul>
    </section>
    <footer>© 2025 Limpoo - Projeto fictício sem fins lucrativos.</footer>
    </>
    )
}