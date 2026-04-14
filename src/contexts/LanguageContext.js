'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      industries: 'Industries',
      brands: 'Clients',
      contact: 'Contact'
    },
    // Home Page
    home: {
      title: 'S&S Distribution',
      subtitle: 'Industrial Solutions & Chemical Supply in the Caribbean',
      heroTitle: 'Industrial Chemical Solutions & Supply in the Caribbean',
      heroDesc: 'S&S Distribution delivers high-performance chemical solutions, industrial cleaning technologies, and specialty products designed to support efficient, reliable, and safe operations across multiple industries.',
      heroDesc2: 'Through strategic partnerships with global manufacturers such as Chemical Global, ZymeFlow, and Hydranautics, we bring proven technologies and advanced solutions directly to the Caribbean market.',
      heroRegion: 'With a strong regional presence, we provide reliable distribution and technical support across Curaçao, Aruba, and Bonaire, ensuring fast response times and consistent product availability.',
      contactUs: 'Contact Us',
      ourSolutions: 'Our Solutions',
      partnershipsTitle: 'Our Strategic Partnerships',
      partnershipsDesc: 'We proudly represent internationally recognized manufacturers, delivering high-performance solutions across the Caribbean.',
      partnershipsFooter: 'Through these partnerships, we provide direct access to proven technologies, ensuring quality, reliability, and performance for industrial operations in the region.',
      whatWeDoTitle: 'What We Do',
      whatWeDoDesc: 'We provide integrated chemical and industrial solutions to support operational efficiency, maintenance, and process performance.',
      whyTitle: 'Why S&S Distribution',
      industriesTitle: 'Industries We Serve',
      industriesDesc: 'Our solutions support a wide range of industries across Curaçao, Aruba, and Bonaire, addressing critical operational and maintenance challenges.',
      regionalTitle: 'Regional Presence',
      regionalDesc: 'We provide reliable distribution and technical support across the Dutch Caribbean. Ensuring product availability, fast delivery, and responsive service throughout the region.',
      ctaTitle: "Let's Work Together",
      ctaDesc: 'Contact us to discuss your operational needs and identify the right solution for your business.',
      ctaButton: 'Get in Touch',
      viewProducts: 'View Products',
      advantagesTitle: 'Our Advantages',
      partners: [
        { name: 'Chemical Global', url: 'https://chemicalsglobal.com/', description: 'Supplier of high-performance specialty chemicals for industrial applications, including:', items: ['Industrial cleaning and degreasing solutions', 'Sanitation and disinfection products', 'Maintenance and operational chemicals'] },
        { name: 'ZymeFlow', url: 'https://www.zymeflow.com/', description: 'Provider of advanced chemical cleaning technologies for industrial systems, including:', items: ['Heat exchangers', 'Pipelines', 'Process equipment', 'Supporting efficient, safe, and environmentally responsible maintenance operations.'] },
        { name: 'Hydranautics (Nitto Group)', url: 'https://membranes.com/solutions/products/', description: 'Global leader in membrane technology for water and wastewater treatment, including:', items: ['Reverse Osmosis (RO)', 'Nanofiltration (NF)', 'Ultrafiltration (UF)', 'Serving desalination, industrial processes, and water reuse applications.'] },
      ],
      services: [
        { icon: '🧪', text: 'Industrial chemical cleaning solutions' },
        { icon: '⚙️', text: 'Specialty and maintenance chemicals' },
        { icon: '💧', text: 'Water treatment technologies' },
        { icon: '🔬', text: 'Technical support and application guidance' },
      ],
      reasons: [
        { icon: '🌐', title: 'Official Representation', desc: 'Official representatives of leading international manufacturers' },
        { icon: '🔬', title: 'Technical Knowledge', desc: 'Strong technical understanding of industrial processes' },
        { icon: '⚡', title: 'Fast Local Support', desc: 'Fast response and local support' },
        { icon: '📦', title: 'Reliable Supply', desc: 'Reliable supply across the Caribbean' },
      ],
      industries: [
        { icon: '💧', name: 'Utilities & Water Treatment', items: ['Desalination plants', 'Water production and distribution', 'Wastewater treatment'] },
        { icon: '🏭', name: 'Industrial Manufacturing', items: ['Process industries', 'Cement and construction', 'General manufacturing plants'] },
        { icon: '🍽️', name: 'Food & Beverage', items: ['Beverage production', 'Food processing facilities', 'Hygiene and sanitation systems'] },
        { icon: '⚡', name: 'Energy & Oil & Gas', items: ['Power generation plants', 'Refineries and fuel terminals', 'Industrial utility systems'] },
        { icon: '⚓', name: 'Marine & Offshore', items: ['Ports and terminals', 'Vessel maintenance', 'Marine and offshore operations'] },
      ],
      regions: ['Curaçao', 'Aruba', 'Bonaire'],
      advantages: [
        {
          title: 'Reliable Products',
          description: 'Professional-grade chemicals and lubricants for demanding applications',
          icon: '🔬'
        },
        {
          title: 'Industry Solutions',
          description: 'Products designed for automotive, food, manufacturing and marine industries',
          icon: '🏭'
        },
        {
          title: 'Local Distribution',
          description: 'Product availability and technical support in Curaçao',
          icon: '📦'
        }
      ]
    },
    // About Page
    about: {
      title: 'About Us',
      intro: 'S&S Distribution is a Caribbean-based industrial solutions provider focused on improving the performance, reliability, and efficiency of operations across Curaçao, Aruba, and Bonaire.',
      introDesc: 'We support a wide range of industries, including utilities, water treatment, food & beverage, industrial manufacturing, and energy, by delivering specialized solutions in chemical cleaning, water treatment, and industrial chemical supply. With a strong regional presence, we ensure reliable distribution and responsive support across the Dutch Caribbean.',
      operationalTitle: 'Operational Focus',
      operationalDesc: 'Our solutions are designed to address common operational challenges across multiple industries, including:',
      operationalItems: ['Fouling and scaling in heat exchangers and process systems', 'Reduced efficiency in water treatment and desalination systems', 'High maintenance costs and unplanned downtime', 'Inefficient cleaning and sanitation processes'],
      operationalFooter: 'By combining advanced technologies with technical expertise, we help our clients optimize performance and extend equipment life.',
      capabilitiesTitle: 'Core Capabilities',
      capabilities: [
        { title: 'Industrial Chemical Cleaning', partner: 'Delivered in collaboration with ZymeFlow', items: ['Heat exchangers', 'Pipelines', 'Process equipment'], impact: 'Improved efficiency, reduced downtime, and safer maintenance operations.' },
        { title: 'Water Treatment Solutions', partner: 'Powered by Hydranautics (Nitto Group)', items: ['Reverse Osmosis (RO) systems', 'Membrane supply and replacement', 'Desalination and water reuse solutions'], impact: 'Reliable water production and optimized system performance.' },
        { title: 'Industrial Chemical Supply', partner: 'Through Chemical Global', items: ['Degreasers and industrial cleaners', 'Disinfection and sanitation solutions', 'Maintenance and specialty chemicals'], impact: 'Consistent operational performance and compliance with industrial standards.' },
      ],
      impactLabel: 'Impact:',
      regionalTitle: 'Regional Distribution Capability',
      regionalDesc: 'S&S Distribution provides reliable and efficient distribution services across Curaçao, Aruba, and Bonaire. Our regional logistics capability allows us to ensure product availability, timely delivery, and consistent support for our clients, regardless of their location within the Dutch Caribbean.',
      advantageTitle: 'Strategic Advantage',
      advantageDesc: 'Our direct partnerships with globally recognized manufacturers enable us to deliver proven technologies combined with local execution capabilities.',
      advantageItems: ['Access to world-class industrial solutions', 'Local technical support and fast response times', 'Reduced procurement and logistics complexity', 'Reliable and consistent supply'],
      approachTitle: 'Our Approach',
      approachDesc: 'We work closely with our clients to understand their operations and provide practical, results-driven solutions tailored to their needs. Our approach is based on:',
      approachItems: ['Technical understanding of industrial systems', 'Strong commitment to service and reliability', 'Long-term partnership mindset'],
      closing: 'S&S Distribution is committed to becoming a trusted industrial partner in the Caribbean, delivering high-performance solutions supported by global expertise and strong regional presence.',
    },
    // Products Page
    products: {
      title: 'Our Products',
      applicationsLabel: 'Applications:',
      benefitsLabel: 'Key Benefits:',
      solutionsLabel: 'Solutions include:',
      categoriesLabel: 'Product categories:',
      categories: [
        {
          title: 'Industrial Chemical Cleaning Solutions',
          description: 'Advanced chemical cleaning services and products designed to restore efficiency and extend the life of industrial equipment.',
          applications: ['Heat exchangers', 'Pipelines', 'Condensers', 'Process systems'],
          benefits: ['Improved operational efficiency', 'Reduced downtime', 'Environmentally responsible solutions'],
        },
        {
          title: 'Water Treatment Solutions',
          description: 'High-performance membrane technologies for water and wastewater treatment applications.',
          solutions: ['Reverse Osmosis (RO) systems', 'Membrane replacement and supply', 'Desalination support', 'Water reuse systems'],
          applications: ['Industrial plants', 'Utilities', 'Desalination facilities'],
        },
        {
          title: 'Industrial Chemicals Supply',
          description: 'Reliable supply of high-quality industrial chemicals tailored to operational needs.',
          items: ['Degreasers and cleaners', 'Disinfectants and sanitizers', 'Maintenance chemicals', 'Specialty formulations'],
        },
        {
          title: 'Technical Support & Advisory',
          description: 'We support our clients with technical guidance to ensure optimal product selection and application.',
          items: ['Product selection support', 'Application guidance', 'Operational optimization', 'On-site recommendations'],
        },
      ],
      featuredLabel: 'Featured product:',
      brandLabel: ''
    },
    // Industries Page
    industries: {
      title: 'Industries We Serve',
      list: [
        {
          title: 'Automotive Services',
          description: 'Car wash chemicals, degreasers, and detailing products',
          icon: '🚗'
        },
        {
          title: 'Food and Beverage Processing',
          description: 'Sanitation chemicals and food-grade lubricants',
          icon: '🍽️'
        },
        {
          title: 'Industrial Operations',
          description: 'Maintenance cleaners, lubricants, and equipment protection solutions',
          icon: '🏭'
        },
        {
          title: 'Construction Industry',
          description: 'Cleaning chemicals and maintenance for heavy equipment and facilities',
          icon: '🏗️'
        },
        {
          title: 'Marine Industry',
          description: 'Greases and lubricants for vessels and marine equipment',
          icon: '⚓'
        }
      ]
    },
    // Brands Page
    brands: {
      title: 'Our Clients',
      subtitle: 'Companies We Supply',
      description: 'S&S Distribution is a trusted supplier to leading industrial companies. We provide high-quality chemical products and equipment to businesses across various industries.',
      clientsTitle: 'Companies We Serve',
      clients: [
        {
          name: 'Chemicals Global',
          description: 'Global supplier and distributor of industrial chemical products',
          products: 'JAX Lubricants, Industrial Chemicals'
        },
        {
          name: 'Zymeflow',
          description: 'Specialized industrial solutions provider',
          products: 'Industrial Equipment & Chemicals'
        },
        {
          name: 'Hydranautics',
          description: 'Global leader in membrane technology for water and wastewater treatment, including RO, NF and UF systems.',
          products: 'Filtration Products & Equipment'
        }
      ],
      note: 'We work with leading companies to provide reliable supply of industrial chemical products and equipment.'
    },
    // Contact Page
    contact: {
      title: 'Contact Us',
      infoTitle: 'Contact Information',
      location: 'Location',
      locationValue: 'Curaçao, Caribbean',
      email: 'Email',
      emailValue: 'ssdistribution.curacao@gmail.com',
      phone: 'Phone / WhatsApp',
      phoneValue: '+599 9528 3385',
      schedule: 'Business Hours',
      scheduleValue: 'Monday - Friday',
      hours: '8:00 AM - 5:00 PM',
      formTitle: 'Send Us a Message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'How can we help you?',
      submitButton: 'Send Message'
    },
    // Footer
    footer: {
      title: 'S&S Distribution',
      description: 'Industrial Chemical Products and Equipment',
      contactTitle: 'Contact',
      location: 'Curaçao, Caribbean',
      email: 'Email: ssdistribution.curacao@gmail.com',
      scheduleTitle: 'Schedule',
      schedule: 'Monday - Friday',
      hours: '8:00 AM - 5:00 PM',
      rights: 'All rights reserved.'
    }
  },
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      products: 'Productos',
      industries: 'Industrias',
      brands: 'Clientes',
      contact: 'Contacto'
    },
    // Home Page
    home: {
      title: 'S&S Distribution',
      subtitle: 'Productos Químicos Industriales y Equipos',
      heroTitle: 'Soluciones Químicas Industriales y Suministro en el Caribe',
      heroDesc: 'S&S Distribution ofrece soluciones químicas de alto rendimiento, tecnologías de limpieza industrial y productos especializados diseñados para apoyar operaciones eficientes, confiables y seguras en múltiples industrias.',
      heroDesc2: 'A través de alianzas estratégicas con fabricantes globales como Chemical Global, ZymeFlow e Hydranautics, llevamos tecnologías probadas y soluciones avanzadas directamente al mercado caribeño.',
      heroRegion: 'Con una fuerte presencia regional, proporcionamos distribución confiable y soporte técnico en Curaçao, Aruba y Bonaire.',
      contactUs: 'Contáctenos',
      ourSolutions: 'Nuestras Soluciones',
      partnershipsTitle: 'Nuestras Alianzas Estratégicas',
      partnershipsDesc: 'Representamos con orgullo a fabricantes internacionalmente reconocidos, ofreciendo soluciones de alto rendimiento en todo el Caribe.',
      partnershipsFooter: 'A través de estas alianzas, proporcionamos acceso directo a tecnologías probadas, garantizando calidad, confiabilidad y rendimiento para las operaciones industriales en la región.',
      whatWeDoTitle: 'Lo Que Hacemos',
      whatWeDoDesc: 'Proporcionamos soluciones químicas e industriales integradas para apoyar la eficiencia operativa, el mantenimiento y el rendimiento de los procesos.',
      whyTitle: 'Por Qué S&S Distribution',
      industriesTitle: 'Industrias que Servimos',
      industriesDesc: 'Nuestras soluciones apoyan una amplia gama de industrias en Curaçao, Aruba y Bonaire.',
      regionalTitle: 'Presencia Regional',
      regionalDesc: 'Proporcionamos distribución confiable y soporte técnico en todo el Caribe holandés. Garantizando disponibilidad de productos, entrega rápida y servicio receptivo en toda la región.',
      ctaTitle: 'Trabajemos Juntos',
      ctaDesc: 'Contáctenos para discutir sus necesidades operativas e identificar la solución adecuada para su negocio.',
      ctaButton: 'Ponerse en Contacto',
      viewProducts: 'Ver Productos',
      advantagesTitle: 'Nuestras Ventajas',
      partners: [
        { name: 'Chemical Global', url: 'https://chemicalsglobal.com/', description: 'Proveedor de químicos especializados de alto rendimiento para aplicaciones industriales.', items: ['Soluciones de limpieza y desengrase industrial', 'Productos de sanitización y desinfección', 'Químicos de mantenimiento y operación'] },
        { name: 'ZymeFlow', url: 'https://www.zymeflow.com/', description: 'Proveedor de tecnologías avanzadas de limpieza química para sistemas industriales.', items: ['Intercambiadores de calor', 'Tuberías', 'Equipos de proceso'] },
        { name: 'Hydranautics', url: 'https://membranes.com/solutions/products/', description: 'Líder global en tecnología de membranas para tratamiento de agua y aguas residuales.', items: ['Ósmosis Inversa (RO)', 'Nanofiltración (NF)', 'Ultrafiltración (UF)'] },
      ],
      services: [
        { icon: '💧', text: 'Sistemas de tratamiento de agua y tecnologías de membranas' },
        { icon: '🧪', text: 'Soluciones de limpieza química industrial' },
        { icon: '🏭', text: 'Programas de sanitización para entornos industriales y alimentarios' },
        { icon: '⚙️', text: 'Suministro de químicos de mantenimiento y especialidad' },
      ],
      reasons: [
        { icon: '🌐', title: 'Representación Oficial', desc: 'Representación oficial de fabricantes internacionales líderes' },
        { icon: '🔬', title: 'Experiencia Técnica', desc: 'Sólido conocimiento técnico de procesos industriales' },
        { icon: '⚡', title: 'Soporte Local', desc: 'Respuesta rápida y soporte local en el Caribe' },
        { icon: '📦', title: 'Suministro Confiable', desc: 'Cadena de suministro confiable y disponibilidad de productos' },
      ],
      industries: [
        { icon: '💧', name: 'Servicios Públicos y Tratamiento de Agua', items: ['Plantas de desalinización', 'Producción y distribución de agua', 'Tratamiento de aguas residuales'] },
        { icon: '🏭', name: 'Manufactura Industrial', items: ['Industrias de proceso', 'Cemento y construcción', 'Plantas de manufactura general'] },
        { icon: '🍽️', name: 'Alimentos y Bebidas', items: ['Producción de bebidas', 'Instalaciones de procesamiento de alimentos', 'Sistemas de higiene y sanitización'] },
        { icon: '⚡', name: 'Energía y Petróleo & Gas', items: ['Plantas de generación eléctrica', 'Refinerías y terminales de combustible', 'Sistemas de utilidades industriales'] },
        { icon: '⚓', name: 'Marina y Offshore', items: ['Puertos y terminales', 'Mantenimiento de embarcaciones', 'Operaciones marinas y offshore'] },
      ],
      regions: ['Curaçao', 'Aruba', 'Bonaire'],
      advantages: [
        {
          title: 'Productos Confiables',
          description: 'Químicos y lubricantes de grado profesional para aplicaciones exigentes',
          icon: '🔬'
        },
        {
          title: 'Soluciones por Industria',
          description: 'Productos diseñados para automotriz, alimentos, manufactura y marina',
          icon: '🏭'
        },
        {
          title: 'Distribución Local',
          description: 'Disponibilidad de productos y soporte técnico en Curaçao',
          icon: '📦'
        }
      ]
    },
    // About Page
    about: {
      title: 'Sobre Nosotros',
      intro: 'S&S Distribution es un proveedor de soluciones industriales con sede en el Caribe, enfocado en mejorar el rendimiento, la confiabilidad y la eficiencia de las operaciones en Curaçao, Aruba y Bonaire.',
      introDesc: 'Apoyamos a una amplia gama de industrias, incluyendo servicios públicos, tratamiento de agua, alimentos y bebidas, manufactura industrial y energía, ofreciendo soluciones especializadas en limpieza química, tratamiento de agua y suministro de químicos industriales.',
      operationalTitle: 'Enfoque Operativo',
      operationalDesc: 'Nuestras soluciones están diseñadas para abordar desafíos operativos comunes en múltiples industrias, incluyendo:',
      operationalItems: ['Incrustaciones en intercambiadores de calor y sistemas de proceso', 'Reducción de eficiencia en sistemas de tratamiento de agua y desalinización', 'Altos costos de mantenimiento y tiempo de inactividad no planificado', 'Procesos de limpieza y sanitización ineficientes'],
      operationalFooter: 'Combinando tecnologías avanzadas con experiencia técnica, ayudamos a nuestros clientes a optimizar el rendimiento y extender la vida útil de los equipos.',
      capabilitiesTitle: 'Capacidades Principales',
      capabilities: [
        { title: 'Limpieza Química Industrial', partner: 'En colaboración con ZymeFlow', items: ['Intercambiadores de calor', 'Tuberías', 'Equipos de proceso'], impact: 'Mejora de eficiencia, reducción de tiempo de inactividad y operaciones de mantenimiento más seguras.' },
        { title: 'Soluciones de Tratamiento de Agua', partner: 'Con Hydranautics (Nitto Group)', items: ['Sistemas de Ósmosis Inversa (RO)', 'Suministro y reemplazo de membranas', 'Soluciones de desalinización y reutilización de agua'], impact: 'Producción confiable de agua y rendimiento optimizado del sistema.' },
        { title: 'Suministro de Químicos Industriales', partner: 'A través de Chemical Global', items: ['Desengrasantes y limpiadores industriales', 'Soluciones de desinfección y sanitización', 'Químicos de mantenimiento y especialidad'], impact: 'Rendimiento operativo consistente y cumplimiento de estándares industriales.' },
      ],
      impactLabel: 'Impacto:',
      regionalTitle: 'Capacidad de Distribución Regional',
      regionalDesc: 'S&S Distribution proporciona servicios de distribución confiables y eficientes en Curaçao, Aruba y Bonaire. Nuestra capacidad logística regional nos permite garantizar disponibilidad de productos, entrega oportuna y soporte consistente para nuestros clientes.',
      advantageTitle: 'Ventaja Estratégica',
      advantageDesc: 'Nuestras alianzas directas con fabricantes reconocidos mundialmente nos permiten ofrecer tecnologías probadas combinadas con capacidades de ejecución local.',
      advantageItems: ['Acceso a soluciones industriales de clase mundial', 'Soporte técnico local y tiempos de respuesta rápidos', 'Reducción de la complejidad de adquisición y logística', 'Suministro confiable y consistente'],
      approachTitle: 'Nuestro Enfoque',
      approachDesc: 'Trabajamos estrechamente con nuestros clientes para entender sus operaciones y proporcionar soluciones prácticas y orientadas a resultados. Nuestro enfoque se basa en:',
      approachItems: ['Comprensión técnica de los sistemas industriales', 'Fuerte compromiso con el servicio y la confiabilidad', 'Mentalidad de asociación a largo plazo'],
      closing: 'S&S Distribution está comprometida a convertirse en un socio industrial de confianza en el Caribe, ofreciendo soluciones de alto rendimiento respaldadas por experiencia global y fuerte presencia regional.',
    },
    // Products Page
    products: {
      title: 'Nuestros Productos',
      applicationsLabel: 'Aplicaciones:',
      benefitsLabel: 'Beneficios Clave:',
      solutionsLabel: 'Soluciones incluidas:',
      categoriesLabel: 'Categorías de productos:',
      categories: [
        {
          title: 'Soluciones de Limpieza Química Industrial',
          description: 'Servicios y productos de limpieza química avanzados diseñados para restaurar la eficiencia y extender la vida útil de los equipos industriales.',
          applications: ['Intercambiadores de calor', 'Tuberías', 'Condensadores', 'Sistemas de proceso'],
          benefits: ['Mejora de la eficiencia operativa', 'Reducción del tiempo de inactividad', 'Soluciones ambientalmente responsables'],
        },
        {
          title: 'Soluciones de Tratamiento de Agua',
          description: 'Tecnologías de membranas de alto rendimiento para aplicaciones de tratamiento de agua y aguas residuales.',
          solutions: ['Sistemas de Ósmosis Inversa (RO)', 'Reemplazo y suministro de membranas', 'Soporte para desalinización', 'Sistemas de reutilización de agua'],
          applications: ['Plantas industriales', 'Servicios públicos', 'Instalaciones de desalinización'],
        },
        {
          title: 'Suministro de Químicos Industriales',
          description: 'Suministro confiable de químicos industriales de alta calidad adaptados a las necesidades operativas.',
          items: ['Desengrasantes y limpiadores', 'Desinfectantes y sanitizadores', 'Químicos de mantenimiento', 'Formulaciones especiales'],
        },
        {
          title: 'Soporte Técnico y Asesoría',
          description: 'Apoyamos a nuestros clientes con orientación técnica para garantizar la selección y aplicación óptima de productos.',
          items: ['Soporte en selección de productos', 'Orientación de aplicación', 'Optimización operativa', 'Recomendaciones en sitio'],
        },
      ],
      featuredLabel: 'Producto destacado:',
      brandLabel: ''
    },
    // Industries Page
    industries: {
      title: 'Industrias que Servimos',
      list: [
        {
          title: 'Servicios Automotrices',
          description: 'Químicos para lavado de autos, desengrasantes y productos de detallado',
          icon: '🚗'
        },
        {
          title: 'Procesamiento de Alimentos y Bebidas',
          description: 'Químicos de sanitización y lubricantes de grado alimenticio',
          icon: '🍽️'
        },
        {
          title: 'Operaciones Industriales',
          description: 'Limpiadores de mantenimiento, lubricantes y soluciones de protección de equipos',
          icon: '🏭'
        },
        {
          title: 'Industria de la Construcción',
          description: 'Químicos de limpieza y mantenimiento para equipos pesados e instalaciones',
          icon: '🏗️'
        },
        {
          title: 'Industria Marina',
          description: 'Grasas y lubricantes para embarcaciones y equipos marinos',
          icon: '⚓'
        }
      ]
    },
    // Brands Page
    brands: {
      title: 'Nuestros Clientes',
      subtitle: 'Empresas a las que Proveemos',
      description: 'S&S Distribution es un proveedor confiable para empresas industriales líderes. Suministramos productos químicos y equipos de alta calidad a empresas de diversas industrias.',
      clientsTitle: 'Empresas que Servimos',
      clients: [
        {
          name: 'Chemicals Global',
          description: 'Proveedor y distribuidor global de productos químicos industriales',
          products: 'Lubricantes JAX, Químicos Industriales'
        },
        {
          name: 'Zymeflow',
          description: 'Proveedor de soluciones industriales especializadas',
          products: 'Equipos y Químicos Industriales'
        },
        {
          name: 'Hydranautics',
          description: 'Tecnología de membranas y soluciones de filtración',
          products: 'Productos y Equipos de Filtración'
        }
      ],
      note: 'Trabajamos con empresas líderes para proporcionar suministro confiable de productos químicos industriales y equipos.'
    },
    // Contact Page
    contact: {
      title: 'Contáctanos',
      infoTitle: 'Información de Contacto',
      location: 'Ubicación',
      locationValue: 'Curaçao, Caribe',
      email: 'Email',
      emailValue: 'ssdistribution.curacao@gmail.com',
      phone: 'Teléfono / WhatsApp',
      phoneValue: '+599 9528 3385',
      schedule: 'Horario de Atención',
      scheduleValue: 'Lunes - Viernes',
      hours: '8:00 AM - 5:00 PM',
      formTitle: 'Envíanos un Mensaje',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿En qué podemos ayudarte?',
      submitButton: 'Enviar Mensaje'
    },
    // Footer
    footer: {
      title: 'S&S Distribution',
      description: 'Productos Químicos Industriales y Equipos',
      contactTitle: 'Contacto',
      location: 'Curaçao, Caribe',
      email: 'Email: ssdistribution.curacao@gmail.com',
      scheduleTitle: 'Horario',
      schedule: 'Lunes - Viernes',
      hours: '8:00 AM - 5:00 PM',
      rights: 'Todos los derechos reservados.'
    }
  },
  nl: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'Over Ons',
      products: 'Producten',
      industries: 'Industrieën',
      brands: 'Klanten',
      contact: 'Contact'
    },
    // Home Page
    home: {
      title: 'S&S Distribution',
      subtitle: 'Industriële Chemische Producten en Apparatuur',
      heroTitle: 'Industriële Oplossingen & Chemische Levering in het Caribisch Gebied',
      heroDesc: 'Officiële vertegenwoordigers van toonaangevende wereldwijde fabrikanten in waterbehandeling, industriële reiniging en speciale chemicaliën.',
      heroRegion: 'Wij bedienen Curaçao, Aruba en Bonaire met betrouwbare levering en technische expertise.',
      contactUs: 'Neem Contact Op',
      ourSolutions: 'Onze Oplossingen',
      partnershipsTitle: 'Onze Strategische Partnerschappen',
      partnershipsDesc: 'Wij vertegenwoordigen internationaal erkende fabrikanten en leveren hoogwaardige industriële oplossingen in het Caribisch gebied.',
      whatWeDoTitle: 'Wat Wij Doen',
      whatWeDoDesc: 'Wij bieden geïntegreerde industriële oplossingen op maat van operationele behoeften.',
      whyTitle: 'Waarom S&S Distribution',
      industriesTitle: 'Industrieën die Wij Bedienen',
      regionalTitle: 'Regionale Aanwezigheid',
      regionalDesc: 'Wij opereren in het gehele Nederlandse Caribisch gebied en zorgen voor nabijheid en reactievermogen.',
      ctaTitle: 'Laten We Samenwerken',
      ctaDesc: 'Neem contact met ons op om uw projectvereisten, operationele uitdagingen of productbehoeften te bespreken.',
      ctaButton: 'Neem Contact Op',
      viewProducts: 'Bekijk Producten',
      advantagesTitle: 'Onze Voordelen',
      partners: [
        { name: 'Chemical Global', url: 'https://chemicalsglobal.com/', description: 'Leverancier van hoogwaardige speciale chemicaliën voor industriële toepassingen.', items: ['Industriële reinigings- en ontvettingsoplossingen', 'Sanitatie- en desinfectieproducten', 'Onderhouds- en operationele chemicaliën'] },
        { name: 'ZymeFlow', url: 'https://www.zymeflow.com/', description: 'Leverancier van geavanceerde chemische reinigingstechnologieën voor industriële systemen.', items: ['Warmtewisselaars', 'Pijpleidingen', 'Procesapparatuur'] },
        { name: 'Hydranautics', url: 'https://membranes.com/solutions/products/', description: 'Wereldleider in membraantechnologie voor water- en afvalwaterbehandeling.', items: ['Omgekeerde osmose (RO)', 'Nanofiltratie (NF)', 'Ultrafiltratie (UF)'] },
      ],
      services: [
        { icon: '💧', text: 'Waterbehandelingssystemen en membraantechnologieën' },
        { icon: '🧪', text: 'Industriële chemische reinigingsoplossingen' },
        { icon: '🏭', text: 'Sanitatieprogramma\'s voor industriële en voedselomgevingen' },
        { icon: '⚙️', text: 'Levering van onderhouds- en speciale chemicaliën' },
      ],
      reasons: [
        { icon: '🌐', title: 'Officiële Vertegenwoordiging', desc: 'Officiële vertegenwoordiging van toonaangevende internationale fabrikanten' },
        { icon: '🔬', title: 'Technische Expertise', desc: 'Sterke technische kennis van industriële processen' },
        { icon: '⚡', title: 'Lokale Ondersteuning', desc: 'Snelle respons en lokale ondersteuning in het Caribisch gebied' },
        { icon: '📦', title: 'Betrouwbare Levering', desc: 'Betrouwbare toeleveringsketen en productbeschikbaarheid' },
      ],
      industries: [
        { icon: '💧', name: 'Nutsbedrijven & Waterbehandeling', items: ['Ontziltingsinstallaties', 'Waterproductie en -distributie', 'Afvalwaterbehandeling'] },
        { icon: '🏭', name: 'Industriële Productie', items: ['Procesindustrieën', 'Cement en constructie', 'Algemene productiefabrieken'] },
        { icon: '🍽️', name: 'Voeding & Dranken', items: ['Drankenproductie', 'Voedselverwerkingsfaciliteiten', 'Hygiëne- en sanitatiesystemen'] },
        { icon: '⚡', name: 'Energie & Olie & Gas', items: ['Energiecentrales', 'Raffinaderijen en brandstofterminals', 'Industriële nutssystemen'] },
        { icon: '⚓', name: 'Marine & Offshore', items: ['Havens en terminals', 'Scheepsonderhoud', 'Marine- en offshoreoperaties'] },
      ],
      regions: ['Curaçao', 'Aruba', 'Bonaire'],
      advantages: [
        {
          title: 'Betrouwbare Producten',
          description: 'Professionele chemicaliën en smeermiddelen voor veeleisende toepassingen',
          icon: '🔬'
        },
        {
          title: 'Industrie Oplossingen',
          description: 'Producten ontworpen voor automotive, voedsel, productie en maritieme industrieën',
          icon: '🏭'
        },
        {
          title: 'Lokale Distributie',
          description: 'Productbeschikbaarheid en technische ondersteuning in Curaçao',
          icon: '📦'
        }
      ]
    },
    // About Page
    about: {
      title: 'Over Ons',
      intro: 'S&S Distribution is een in het Caribisch gebied gevestigde leverancier van industriële oplossingen, gericht op het verbeteren van de prestaties, betrouwbaarheid en efficiëntie van operaties in Curaçao, Aruba en Bonaire.',
      introDesc: 'Wij ondersteunen een breed scala aan industrieën, waaronder nutsbedrijven, waterbehandeling, voeding & dranken, industriële productie en energie, door gespecialiseerde oplossingen te leveren op het gebied van chemische reiniging, waterbehandeling en industriële chemicaliënlevering.',
      operationalTitle: 'Operationele Focus',
      operationalDesc: 'Onze oplossingen zijn ontworpen om veelvoorkomende operationele uitdagingen in meerdere industrieën aan te pakken, waaronder:',
      operationalItems: ['Vervuiling en aanslag in warmtewisselaars en processen', 'Verminderde efficiëntie in waterbehandeling en ontziltingssystemen', 'Hoge onderhoudskosten en ongeplande downtime', 'Inefficiënte reinigings- en sanitatieprocessen'],
      operationalFooter: 'Door geavanceerde technologieën te combineren met technische expertise, helpen wij onze klanten de prestaties te optimaliseren en de levensduur van apparatuur te verlengen.',
      capabilitiesTitle: 'Kerncompetenties',
      capabilities: [
        { title: 'Industriële Chemische Reiniging', partner: 'In samenwerking met ZymeFlow', items: ['Warmtewisselaars', 'Pijpleidingen', 'Procesapparatuur'], impact: 'Verbeterde efficiëntie, minder downtime en veiligere onderhoudsoperaties.' },
        { title: 'Waterbehandelingsoplossingen', partner: 'Met Hydranautics (Nitto Group)', items: ['Omgekeerde osmose (RO) systemen', 'Membraanlevering en -vervanging', 'Ontzilting en waterhergebruiksoplossingen'], impact: 'Betrouwbare waterproductie en geoptimaliseerde systeemprestaties.' },
        { title: 'Levering van Industriële Chemicaliën', partner: 'Via Chemical Global', items: ['Ontvetters en industriële reinigingsmiddelen', 'Desinfectie- en sanitatieoplossingen', 'Onderhouds- en speciale chemicaliën'], impact: 'Consistente operationele prestaties en naleving van industriële normen.' },
      ],
      impactLabel: 'Impact:',
      regionalTitle: 'Regionale Distributiecapaciteit',
      regionalDesc: 'S&S Distribution biedt betrouwbare en efficiënte distributiediensten in Curaçao, Aruba en Bonaire. Onze regionale logistieke capaciteit stelt ons in staat productbeschikbaarheid, tijdige levering en consistente ondersteuning te garanderen.',
      advantageTitle: 'Strategisch Voordeel',
      advantageDesc: 'Onze directe partnerschappen met wereldwijd erkende fabrikanten stellen ons in staat bewezen technologieën te leveren gecombineerd met lokale uitvoeringsmogelijkheden.',
      advantageItems: ['Toegang tot industriële oplossingen van wereldklasse', 'Lokale technische ondersteuning en snelle responstijden', 'Verminderde inkoop- en logistieke complexiteit', 'Betrouwbare en consistente levering'],
      approachTitle: 'Onze Aanpak',
      approachDesc: 'Wij werken nauw samen met onze klanten om hun operaties te begrijpen en praktische, resultaatgerichte oplossingen te bieden. Onze aanpak is gebaseerd op:',
      approachItems: ['Technisch begrip van industriële systemen', 'Sterke toewijding aan service en betrouwbaarheid', 'Langetermijn partnerschapsmentaliteit'],
      closing: 'S&S Distribution is toegewijd aan het worden van een vertrouwde industriële partner in het Caribisch gebied, met hoogwaardige oplossingen ondersteund door wereldwijde expertise en sterke regionale aanwezigheid.',
    },
    // Products Page
    products: {
      title: 'Onze Producten',
      applicationsLabel: 'Toepassingen:',
      benefitsLabel: 'Belangrijkste Voordelen:',
      solutionsLabel: 'Oplossingen omvatten:',
      categoriesLabel: 'Productcategorieën:',
      categories: [
        {
          title: 'Industriële Chemische Reinigingsoplossingen',
          description: 'Geavanceerde chemische reinigingsdiensten en -producten ontworpen om de efficiëntie te herstellen en de levensduur van industriële apparatuur te verlengen.',
          applications: ['Warmtewisselaars', 'Pijpleidingen', 'Condensatoren', 'Processen systemen'],
          benefits: ['Verbeterde operationele efficiëntie', 'Verminderde downtime', 'Milieuvriendelijke oplossingen'],
        },
        {
          title: 'Waterbehandelingsoplossingen',
          description: 'Hoogwaardige membraantechnologieën voor water- en afvalwaterbehandelingstoepassingen.',
          solutions: ['Omgekeerde osmose (RO) systemen', 'Membraanvervanging en -levering', 'Ondersteuning bij ontzilting', 'Waterhergebruiksystemen'],
          applications: ['Industriële fabrieken', 'Nutsbedrijven', 'Ontziltingsfaciliteiten'],
        },
        {
          title: 'Levering van Industriële Chemicaliën',
          description: 'Betrouwbare levering van hoogwaardige industriële chemicaliën op maat van operationele behoeften.',
          items: ['Ontvetters en reinigingsmiddelen', 'Desinfectanten en sanitizers', 'Onderhoudschemicaliën', 'Speciale formuleringen'],
        },
        {
          title: 'Technische Ondersteuning & Advies',
          description: 'Wij ondersteunen onze klanten met technische begeleiding voor optimale productselectie en toepassing.',
          items: ['Ondersteuning bij productselectie', 'Toepassingsbegeleiding', 'Operationele optimalisatie', 'Aanbevelingen ter plaatse'],
        },
      ],
      featuredLabel: 'Uitgelicht product:',
      brandLabel: ''
    },
    // Industries Page
    industries: {
      title: 'Industrieën die Wij Bedienen',
      list: [
        {
          title: 'Automotive Diensten',
          description: 'Autowas chemicaliën, ontvetters en detailing producten',
          icon: '🚗'
        },
        {
          title: 'Voedsel- en Drankverwerking',
          description: 'Sanitatie chemicaliën en voedselgeschikte smeermiddelen',
          icon: '🍽️'
        },
        {
          title: 'Industriële Operaties',
          description: 'Onderhoudsreinigers, smeermiddelen en apparatuurbeschermingsoplossingen',
          icon: '🏭'
        },
        {
          title: 'Bouwindustrie',
          description: 'Reinigingschemicaliën en onderhoud voor zware apparatuur en faciliteiten',
          icon: '🏗️'
        },
        {
          title: 'Maritieme Industrie',
          description: 'Vetten en smeermiddelen voor schepen en maritieme apparatuur',
          icon: '⚓'
        }
      ]
    },
    // Brands Page
    brands: {
      title: 'Onze Klanten',
      subtitle: 'Bedrijven die Wij Bevoorraden',
      description: 'S&S Distribution is een betrouwbare leverancier voor toonaangevende industriële bedrijven. Wij leveren hoogwaardige chemische producten en apparatuur aan bedrijven in verschillende industrieën.',
      clientsTitle: 'Bedrijven die Wij Bedienen',
      clients: [
        {
          name: 'Chemicals Global',
          description: 'Wereldwijde leverancier en distributeur van industriële chemische producten',
          products: 'JAX Smeermiddelen, Industriële Chemicaliën'
        },
        {
          name: 'Zymeflow',
          description: 'Gespecialiseerde industriële oplossingen leverancier',
          products: 'Industriële Apparatuur & Chemicaliën'
        },
        {
          name: 'Hydranautics',
          description: 'Wereldleider in membraantechnologie voor water- en afvalwaterbehandeling, inclusief RO, NF en UF systemen.',
          products: 'Filtratieproducten & Apparatuur'
        }
      ],
      note: 'Wij werken samen met toonaangevende bedrijven om betrouwbare levering van industriële chemische producten en apparatuur te bieden.'
    },
    // Contact Page
    contact: {
      title: 'Neem Contact Op',
      infoTitle: 'Contactinformatie',
      location: 'Locatie',
      locationValue: 'Curaçao, Caribisch gebied',
      email: 'Email',
      emailValue: 'ssdistribution.curacao@gmail.com',
      phone: 'Telefoon / WhatsApp',
      phoneValue: '+599 9528 3385',
      schedule: 'Openingstijden',
      scheduleValue: 'Maandag - Vrijdag',
      hours: '8:00 - 17:00',
      formTitle: 'Stuur Ons een Bericht',
      nameLabel: 'Naam',
      namePlaceholder: 'Uw naam',
      emailLabel: 'Email',
      emailPlaceholder: 'uw@email.com',
      messageLabel: 'Bericht',
      messagePlaceholder: 'Hoe kunnen we u helpen?',
      submitButton: 'Verstuur Bericht'
    },
    // Footer
    footer: {
      title: 'S&S Distribution',
      description: 'Industriële Chemische Producten en Apparatuur',
      contactTitle: 'Contact',
      location: 'Curaçao, Caribisch gebied',
      email: 'Email: ssdistribution.curacao@gmail.com',
      scheduleTitle: 'Openingstijden',
      schedule: 'Maandag - Vrijdag',
      hours: '8:00 - 17:00',
      rights: 'Alle rechten voorbehouden.'
    }
  },
  pap: {
    // Navbar
    nav: {
      home: 'Kas',
      about: 'Tokante Nos',
      products: 'Produktonan',
      industries: 'Industrianan',
      brands: 'Klientenan',
      contact: 'Kontakto'
    },
    // Home Page
    home: {
      title: 'S&S Distribution',
      subtitle: 'Produktonan Kímiko Industrial i Ekipo',
      heroTitle: 'Solushonnan Industrial i Suministro Kímiko den Karibe',
      heroDesc: 'Representantenan ofisial di fabrikante lider mundial den tratamento di awa, limpiesa industrial i kímiko spesializá.',
      heroRegion: 'Sirbiendo Kòrsou, Aruba i Boneiru ku suministro konfiabel i ekspertisia tékniko.',
      contactUs: 'Tuma Kontakto',
      ourSolutions: 'Nos Solushonnan',
      partnershipsTitle: 'Nos Aliansanan Estratégiko',
      partnershipsDesc: 'Nos ta representá ku orguyo fabrikante internashonalmente rekonosí, ofresiendo solushonnan industrial di haltu rendimentu den tur Karibe.',
      whatWeDoTitle: 'Kiko Nos Ta Hasi',
      whatWeDoDesc: 'Nos ta provee solushonnan industrial integrado adaptá na nesesidatnan operashonal.',
      whyTitle: 'Pakiko S&S Distribution',
      industriesTitle: 'Industrianan ku Nos Ta Sirbi',
      regionalTitle: 'Presencia Regional',
      regionalDesc: 'Nos ta operá den tur Karibe Hulandes, garantisando serkania i kapasidad di respuesta.',
      ctaTitle: 'Laga Nos Traha Huntu',
      ctaDesc: 'Tuma kontakto ku nos pa diskutí rekerimentonan di bo proyekto, desafionan operashonal òf nesesidatnan di produkto.',
      ctaButton: 'Tuma Kontakto',
      viewProducts: 'Mira Produktonan',
      advantagesTitle: 'Nos Bentahanan',
      partners: [
        { name: 'Chemical Global', url: 'https://chemicalsglobal.com/', description: 'Proveedor di kímiko spesializá di haltu rendimentu pa aplikashonnan industrial.', items: ['Solushonnan di limpiesa i desengrase industrial', 'Produktonan di sanitisashon i desinfekshon', 'Kímiko di mantenementu i operashon'] },
        { name: 'ZymeFlow', url: 'https://www.zymeflow.com/', description: 'Proveedor di teknolohianan avansá di limpiesa kímiko pa sistemanan industrial.', items: ['Intercambiadornan di kalor', 'Tuberanan', 'Ekipo di proseso'] },
        { name: 'Hydranautics', url: 'https://membranes.com/solutions/products/', description: 'Lider mundial den teknologia di membrana pa tratamento di awa i awa residual.', items: ['Ósmosis Inverso (RO)', 'Nanofiltrasion (NF)', 'Ultrafiltrasion (UF)'] },
      ],
      services: [
        { icon: '💧', text: 'Sistemanan di tratamento di awa i teknolohianan di membrana' },
        { icon: '🧪', text: 'Solushonnan di limpiesa kímiko industrial' },
        { icon: '🏭', text: 'Programanan di sanitisashon pa entornonan industrial i alimentario' },
        { icon: '⚙️', text: 'Suministro di kímiko di mantenementu i espesialidá' },
      ],
      reasons: [
        { icon: '🌐', title: 'Representashon Ofisial', desc: 'Representashon ofisial di fabrikante internashonal lider' },
        { icon: '🔬', title: 'Ekspertisia Tékniko', desc: 'Konosementu tékniko sólido di prosonan industrial' },
        { icon: '⚡', title: 'Soporte Lokal', desc: 'Respuesta rápido i soporte lokal den Karibe' },
        { icon: '📦', title: 'Suministro Konfiabel', desc: 'Kadena di suministro konfiabel i disponibilidat di produkto' },
      ],
      industries: [
        { icon: '💧', name: 'Servisio Públiko i Tratamento di Awa', items: ['Plantanan di desalinisashon', 'Produkshon i distribushon di awa', 'Tratamento di awa residual'] },
        { icon: '🏭', name: 'Fabrikashon Industrial', items: ['Industrianan di proseso', 'Simento i konstrukshon', 'Plantanan di fabrikashon general'] },
        { icon: '🍽️', name: 'Kuminda i Bebida', items: ['Produkshon di bebida', 'Fasilidat di prosesamentu di kuminda', 'Sistemanan di higiene i sanitisashon'] },
        { icon: '⚡', name: 'Energia i Petroleo & Gas', items: ['Plantanan di generashon di energia', 'Refinerianan i terminalnan di kumstibel', 'Sistemanan di utilidad industrial'] },
        { icon: '⚓', name: 'Marina i Offshore', items: ['Portnan i terminalnan', 'Mantenementu di bapor', 'Operashonnan marino i offshore'] },
      ],
      regions: ['Kòrsou', 'Aruba', 'Boneiru'],
      advantages: [
        {
          title: 'Produktonan Konfiabel',
          description: 'Kímiko i lubrikante di grado profesional pa aplikashonnan eksigente',
          icon: '🔬'
        },
        {
          title: 'Solushonnan pa Industria',
          description: 'Produktonan diseñá pa outomotivo, kuminda, fabrikashon i marina',
          icon: '🏭'
        },
        {
          title: 'Distribushon Lokal',
          description: 'Disponibilidat di produkto i soporte tékniko na Kòrsou',
          icon: '📦'
        }
      ]
    },
    // About Page
    about: {
      title: 'Tokante Nos',
      intro: 'S&S Distribution ta un proveedor di solushonnan industrial ku sede den Karibe, enfoká riba mehora rendimentu, konfiabilidat i efisiensia di operashonnan na Kòrsou, Aruba i Boneiru.',
      introDesc: 'Nos ta soportá un amplio rango di industrianan, inkluí servisio públiko, tratamento di awa, kuminda i bebida, fabrikashon industrial i energia, ofresiendo solushonnan spesializá den limpiesa kímiko, tratamento di awa i suministro di kímiko industrial.',
      operationalTitle: 'Enfoke Operashonal',
      operationalDesc: 'Nos solushonnan ta diseñá pa atendé desafionan operashonal komun den múltiple industrianan, inkluí:',
      operationalItems: ['Inkrustashon den intercambiadornan di kalor i sistemanan di proseso', 'Redukshon di efisiensia den sistemanan di tratamento di awa i desalinisashon', 'Gastonan haltu di mantenementu i tempo di inaktividat no planiá', 'Prosonan di limpiesa i sanitisashon inefisiente'],
      operationalFooter: 'Kombinando teknolohianan avansá ku ekspertisia tékniko, nos ta yuda nos klientenan optimisá rendimentu i extendé bida útil di ekipo.',
      capabilitiesTitle: 'Kapasidatnan Prinsipal',
      capabilities: [
        { title: 'Limpiesa Kímiko Industrial', partner: 'Den kolaborashon ku ZymeFlow', items: ['Intercambiadornan di kalor', 'Tuberanan', 'Ekipo di proseso'], impact: 'Mehora di efisiensia, redukshon di downtime i operashonnan di mantenementu mas sigur.' },
        { title: 'Solushonnan di Tratamento di Awa', partner: 'Ku Hydranautics (Nitto Group)', items: ['Sistemanan di Ósmosis Inverso (RO)', 'Suministro i reemplaso di membrana', 'Solushonnan di desalinisashon i reutilisashon di awa'], impact: 'Produkshon konfiabel di awa i rendimentu optimisá di sistema.' },
        { title: 'Suministro di Kímiko Industrial', partner: 'Via Chemical Global', items: ['Desengrasante i limpiadornan industrial', 'Solushonnan di desinfekshon i sanitisashon', 'Kímiko di mantenementu i espesialidá'], impact: 'Rendimentu operashonal konsistente i kumplimentu ku estándarnan industrial.' },
      ],
      impactLabel: 'Impakto:',
      regionalTitle: 'Kapasidad di Distribushon Regional',
      regionalDesc: 'S&S Distribution ta provee servisionan di distribushon konfiabel i efisiente na Kòrsou, Aruba i Boneiru. Nos kapasidad logístiko regional nos permite garantisá disponibilidat di produkto, entrega oportuno i soporte konsistente pa nos klientenan.',
      advantageTitle: 'Bentaha Estratégiko',
      advantageDesc: 'Nos aliansanan direkto ku fabrikante rekonosí mundialmente nos permite ofresé teknolohianan probá kombiná ku kapasidatnan di eheкushon lokal.',
      advantageItems: ['Akseso na solushonnan industrial di klas mundial', 'Soporte tékniko lokal i temponan di respuesta rápido', 'Redukshon di komplejidad di adkisishon i logístika', 'Suministro konfiabel i konsistente'],
      approachTitle: 'Nos Enfoke',
      approachDesc: 'Nos ta traha estrecho ku nos klientenan pa komprondé nan operashonnan i provee solushonnan prátiko i orientá na resultadonan. Nos enfoke ta basá riba:',
      approachItems: ['Komprenshon tékniko di sistemanan industrial', 'Kompromiso fuerte ku servicio i konfiabilidat', 'Mentalidad di aliansa a largo plaso'],
      closing: 'S&S Distribution ta kompromití pa bira un socio industrial di konfiansa den Karibe, ofresiendo solushonnan di haltu rendimentu respaldá pa ekspertisia global i presencia regional fuerte.',
    },
    // Products Page
    products: {
      title: 'Nos Produktonan',
      applicationsLabel: 'Aplikashonnan:',
      benefitsLabel: 'Benefishionan Klave:',
      solutionsLabel: 'Solushonnan inkluí:',
      categoriesLabel: 'Kategorianan di produkto:',
      categories: [
        {
          title: 'Solushonnan di Limpiesa Kímiko Industrial',
          description: 'Servisionan i produktonan di limpiesa kímiko avansá diseñá pa restaurá efisiensia i extendé bida útil di ekipo industrial.',
          applications: ['Intercambiadornan di kalor', 'Tuberanan', 'Condensadornan', 'Sistemanan di proseso'],
          benefits: ['Mehora di efisiensia operashonal', 'Redukshon di tempo di inaktividat', 'Solushonnan responsabel pa medio ambiente'],
        },
        {
          title: 'Solushonnan di Tratamento di Awa',
          description: 'Teknolohianan di membrana di haltu rendimentu pa aplikashonnan di tratamento di awa i awa residual.',
          solutions: ['Sistemanan di Ósmosis Inverso (RO)', 'Reemplaso i suministro di membrana', 'Soporte pa desalinisashon', 'Sistemanan di reutilisashon di awa'],
          applications: ['Plantanan industrial', 'Servisio públiko', 'Fasilidat di desalinisashon'],
        },
        {
          title: 'Suministro di Kímiko Industrial',
          description: 'Suministro konfiabel di kímiko industrial di haltu kalidat adaptá na nesesidatnan operashonal.',
          items: ['Desengrasante i limpiadornan', 'Desinfektante i sanitisadornan', 'Kímiko di mantenementu', 'Formulashonnan spesial'],
        },
        {
          title: 'Soporte Tékniko i Asesoría',
          description: 'Nos ta soportá nos klientenan ku guia tékniko pa garantisá selekshon i aplikashon óptimo di produkto.',
          items: ['Soporte den selekshon di produkto', 'Guia di aplikashon', 'Optimisashon operashonal', 'Rekomendashonnan na sitio'],
        },
      ],
      featuredLabel: 'Produkto destacá:',
      brandLabel: ''
    },
    // Industries Page
    industries: {
      title: 'Industrianan ku Nos ta Sirbi',
      list: [
        {
          title: 'Servisionan Outomotivo',
          description: 'Kímiko pa laba outo, desengrasante i produktonan di detallado',
          icon: '🚗'
        },
        {
          title: 'Prosesamentu di Kuminda i Bebida',
          description: 'Kímiko di sanitisashon i lubrikante di grado alimentisio',
          icon: '🍽️'
        },
        {
          title: 'Operashonnan Industrial',
          description: 'Limpiadornan di mantenementu, lubrikante i solushonnan di protekshon di ekipo',
          icon: '🏭'
        },
        {
          title: 'Industria di Konstrukshon',
          description: 'Kímiko di limpiesa i mantenementu pa ekipo pisa i fasilidat',
          icon: '🏗️'
        },
        {
          title: 'Industria Marino',
          description: 'Grasa i lubrikante pa bapor i ekipo marino',
          icon: '⚓'
        }
      ]
    },
    // Brands Page
    brands: {
      title: 'Nos Klientenan',
      subtitle: 'Kompanianan ku Nos ta Suministrá',
      description: 'S&S Distribution ta un proveedor konfiabel pa kompanianan industrial líder. Nos ta suministrá produktonan kímiko i ekipo di haltu kalidat na negoshinan di diferente industrianan.',
      clientsTitle: 'Kompanianan ku Nos ta Sirbi',
      clients: [
        {
          name: 'Chemicals Global',
          description: 'Proveedor i distribuidor global di produktonan kímiko industrial',
          products: 'Lubrikante JAX, Kímiko Industrial'
        },
        {
          name: 'Zymeflow',
          description: 'Proveedor di solushonnan industrial spesializá',
          products: 'Ekipo i Kímiko Industrial'
        },
        {
          name: 'Hydranautics',
          description: 'Lider mundial den teknologia di membrana pa tratamento di awa, inkluiendo sistemanan RO, NF i UF.',
          products: 'Produktonan i Ekipo di Filtrashon'
        }
      ],
      note: 'Nos ta traha ku kompanianan líder pa provee suministro konfiabel di produktonan kímiko industrial i ekipo.'
    },
    // Contact Page
    contact: {
      title: 'Tuma Kontakto',
      infoTitle: 'Informashon di Kontakto',
      location: 'Lokashon',
      locationValue: 'Kòrsou, Karibe',
      email: 'Email',
      emailValue: 'ssdistribution.curacao@gmail.com',
      phone: 'Telefòn / WhatsApp',
      phoneValue: '+599 9528 3385',
      schedule: 'Orario di Atenshon',
      scheduleValue: 'Dialuna - Dibierne',
      hours: '8:00 AM - 5:00 PM',
      formTitle: 'Manda Nos un Mensahe',
      nameLabel: 'Nòmber',
      namePlaceholder: 'Bo nòmber',
      emailLabel: 'Email',
      emailPlaceholder: 'bo@email.com',
      messageLabel: 'Mensahe',
      messagePlaceholder: 'Con nos por yuda bo?',
      submitButton: 'Manda Mensahe'
    },
    // Footer
    footer: {
      title: 'S&S Distribution',
      description: 'Produktonan Kímiko Industrial i Ekipo',
      contactTitle: 'Kontakto',
      location: 'Kòrsou, Karibe',
      email: 'Email: ssdistribution.curacao@gmail.com',
      scheduleTitle: 'Orario',
      schedule: 'Dialuna - Dibierne',
      hours: '8:00 AM - 5:00 PM',
      rights: 'Tur derecho reservá.'
    }
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage && translations[savedLanguage]) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  const t = translations[language] || translations['en']

  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}





