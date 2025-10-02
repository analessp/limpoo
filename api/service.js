export default function handler(req, res) {
    const listaDeServicos = [
        {
            titulo: 'LIMPEZA DE AUTOMÓVEIS',
            imgSrc: '/src/assets/limpeza-automoveis.jpg',
            altText: 'Limpeza de Automóveis.'
        },
        {
            titulo: 'HIGIENIZAÇÃO DE SOFÁS',
            imgSrc: '/src/assets/limpeza-sofa.jpg',
            altText: 'Higienização de Sofás.'
        },
        {
            titulo: 'HIGIENIZAÇÃO DE COLCHÕES',
            imgSrc: '/src/assets/limpeza-colchao.jpg',
            altText: 'Higienização de colchões.'
        }
    ];

    res.status(200).json(listaDeServicos);
}