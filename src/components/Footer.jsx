
const footerData = [
  {
    title: "Somos una Empresa",
    description: [
      "Somos una Empresa de Televisión por Cable e Internet con tecnología de Fibra Óptica.",
      "Fibra Óptica al hogar- FTTH",
    ],
    logo: '/src/assets/Version02.png',
    social: "FB"
  },
  {
    title: "Emergencias Técnicas",
    description: [
      "Exclusivo emergencias técnicas",
      "+52 768 105 12 33",
      'soporte@tvnetnaranjos.com'
    ]
  },
  {
    title: "Seguridad y Justicia",
    description: [
      "Uso exclusivo autoridades federales",
      "+52 768 105 12 33"
    ]
  },
  {
    title: "Documentos",
    description: [
      "Código de gestión de tráfico",
      "Código de ética",
      "Aviso de privacidad",
      "Carta de derechos mínimos del usuario",
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 rounded-s">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
        {footerData.map((section, index) => (
          <div key={index} className="footer-data ml-3">
            {section.logo && <div className="mb-2"><img className="w-40 -mt-9 -mb-14" src={section.logo} alt="TVNET Vleazquez Juarez Asociados S.A de C.V" /></div>}
            {section.title && <h5 className="text-lg font-semibold mb-4">{section.title}</h5>}
            <ul>
              {section.description.map((desc, i) => (
                <li key={i} className="">{desc}</li>
              ))}
              {section.social && <li className="mt-4">{section.social}</li>}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
