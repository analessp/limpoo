export default function handler(req, res) {
    const listaDeServicos = [
        {
            titulo: 'LIMPEZA DE AUTOMÓVEIS',
            imgSrc: '/public/assets/limpeza-automoveis.jpg',
            altText: 'Limpeza de Automóveis.'
        },
        {
            titulo: 'HIGIENIZAÇÃO DE SOFÁS',
            imgSrc: '/public/assets/limpeza-sofa.jpg',
            altText: 'Higienização de Sofás.'
        },
        {
            titulo: 'HIGIENIZAÇÃO DE COLCHÕES',
            imgSrc: '/public/assets/limpeza-colchao.jpg',
            altText: 'Higienização de colchões.'
        }
    ];
    
    res.status(200).json(listaDeServicos);
}