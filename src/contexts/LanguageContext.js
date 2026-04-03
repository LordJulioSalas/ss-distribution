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
      brands: 'Brands',
      contact: 'Contact'
    },
    // Home Page
    home: {
      title: 'S&S Distribution',
      subtitle: 'Industrial Chemical Products and Equipment',
      viewProducts: 'View Products',
      contactUs: 'Contact Us',
      advantagesTitle: 'Our Advantages',
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
      paragraph1: 'S&S Distribution is a Curaçao-based supplier of industrial cleaning chemicals, sanitation solutions, and specialized lubricants.',
      paragraph2: 'Our company focuses on providing businesses with reliable products that improve maintenance efficiency, sanitation performance, and equipment protection.',
      paragraph3: 'We support clients across various industries including automotive services, industrial operations, food processing facilities, construction companies, and marine operations.',
      paragraph4: 'Our commitment is to provide quality products, reliable supply, and professional support to our clients.'
    },
    // Products Page
    products: {
      title: 'Our Products',
      categories: [
        {
          title: 'Industrial Cleaning Products',
          description: 'High-performance cleaning chemicals designed for industrial environments',
          items: [
            'Heavy-duty degreasers',
            'Equipment cleaning solutions',
            'Industrial maintenance cleaners',
            'Surface cleaning chemicals'
          ]
        },
        {
          title: 'Auto Care & Fleet Wash',
          description: 'Products designed for vehicle cleaning and maintenance operations',
          items: [
            'Car wash detergents',
            'Truck wash chemicals',
            'Engine degreasers',
            'Vehicle detailing products'
          ],
          featured: 'Maxi-Clean 120 - Heavy-duty degreaser'
        },
        {
          title: 'Food Processing Sanitation',
          description: 'Sanitation products designed for food and beverage facilities',
          items: [
            'Peracetic acid sanitizers',
            'Surface sanitation solutions',
            'Hand sanitizers',
            'Food-safe cleaning chemicals'
          ]
        },
        {
          title: 'Greases and Lubricants',
          description: 'Industrial and food-grade lubricants designed for equipment protection and performance',
          items: [
            'Food-grade lubricants',
            'Industrial greases',
            'Marine greases',
            'Maintenance lubricants'
          ],
          brand: 'Includes JAX lubricants'
        }
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
          name: 'Membranes',
          description: 'Membrane technology and filtration solutions',
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
      brands: 'Marcas',
      contact: 'Contacto'
    },
    // Home Page
    home: {
      title: 'S&S Distribution',
      subtitle: 'Productos Químicos Industriales y Equipos',
      viewProducts: 'Ver Productos',
      contactUs: 'Contactar',
      advantagesTitle: 'Nuestras Ventajas',
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
      paragraph1: 'S&S Distribution es un proveedor con sede en Curaçao de productos químicos de limpieza industrial, soluciones de sanitización y lubricantes especializados.',
      paragraph2: 'Nuestra empresa se enfoca en proporcionar a las empresas productos confiables que mejoran la eficiencia del mantenimiento, el rendimiento de la sanitización y la protección de equipos.',
      paragraph3: 'Apoyamos a clientes en varias industrias incluyendo servicios automotrices, operaciones industriales, instalaciones de procesamiento de alimentos, empresas de construcción y operaciones marinas.',
      paragraph4: 'Nuestro compromiso es proporcionar productos de calidad, suministro confiable y soporte profesional a nuestros clientes.'
    },
    // Products Page
    products: {
      title: 'Nuestros Productos',
      categories: [
        {
          title: 'Productos de Limpieza Industrial',
          description: 'Químicos de limpieza de alto rendimiento diseñados para entornos industriales',
          items: [
            'Desengrasantes de servicio pesado',
            'Soluciones de limpieza de equipos',
            'Limpiadores de mantenimiento industrial',
            'Químicos de limpieza de superficies'
          ]
        },
        {
          title: 'Auto Care & Fleet Wash',
          description: 'Productos diseñados para operaciones de limpieza y mantenimiento de vehículos',
          items: [
            'Detergentes para lavado de autos',
            'Químicos para lavado de camiones',
            'Desengrasantes de motores',
            'Productos de detallado de vehículos'
          ],
          featured: 'Maxi-Clean 120 - Desengrasante de servicio pesado'
        },
        {
          title: 'Sanitización para Procesamiento de Alimentos',
          description: 'Productos de sanitización diseñados para instalaciones de alimentos y bebidas',
          items: [
            'Sanitizadores de ácido peracético',
            'Soluciones de sanitización de superficies',
            'Sanitizadores de manos',
            'Químicos de limpieza aptos para alimentos'
          ]
        },
        {
          title: 'Grasas y Lubricantes',
          description: 'Lubricantes industriales y de grado alimenticio diseñados para protección y rendimiento de equipos',
          items: [
            'Lubricantes de grado alimenticio',
            'Grasas industriales',
            'Grasas marinas',
            'Lubricantes de mantenimiento'
          ],
          brand: 'Incluye lubricantes JAX'
        }
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
          name: 'Membranes',
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
      brands: 'Merken',
      contact: 'Contact'
    },
    // Home Page
    home: {
      title: 'S&S Distribution',
      subtitle: 'Industriële Chemische Producten en Apparatuur',
      viewProducts: 'Bekijk Producten',
      contactUs: 'Neem Contact Op',
      advantagesTitle: 'Onze Voordelen',
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
      paragraph1: 'S&S Distribution is een in Curaçao gevestigde leverancier van industriële reinigingschemicaliën, sanitatie oplossingen en gespecialiseerde smeermiddelen.',
      paragraph2: 'Ons bedrijf richt zich op het leveren van betrouwbare producten aan bedrijven die de onderhoudsefficiëntie, sanitatieprestaties en apparatuurbescherming verbeteren.',
      paragraph3: 'We ondersteunen klanten in verschillende industrieën, waaronder automotive diensten, industriële operaties, voedselverwerkingsfaciliteiten, bouwbedrijven en maritieme operaties.',
      paragraph4: 'Onze toewijding is om kwaliteitsproducten, betrouwbare levering en professionele ondersteuning aan onze klanten te bieden.'
    },
    // Products Page
    products: {
      title: 'Onze Producten',
      categories: [
        {
          title: 'Industriële Reinigingsproducten',
          description: 'Hoogwaardige reinigingschemicaliën ontworpen voor industriële omgevingen',
          items: [
            'Zware ontvetter',
            'Apparatuur reinigingsoplossingen',
            'Industriële onderhoudsreinigers',
            'Oppervlakte reinigingschemicaliën'
          ]
        },
        {
          title: 'Auto Care & Fleet Wash',
          description: 'Producten ontworpen voor voertuigreiniging en onderhoudsoperaties',
          items: [
            'Autowas detergenten',
            'Vrachtwagen was chemicaliën',
            'Motor ontvetters',
            'Voertuig detailing producten'
          ],
          featured: 'Maxi-Clean 120 - Zware ontvetter'
        },
        {
          title: 'Voedselverwerkings Sanitatie',
          description: 'Sanitatieproducten ontworpen voor voedsel- en drankfaciliteiten',
          items: [
            'Perazijnzuur sanitizers',
            'Oppervlakte sanitatie oplossingen',
            'Hand sanitizers',
            'Voedselveilige reinigingschemicaliën'
          ]
        },
        {
          title: 'Vetten en Smeermiddelen',
          description: 'Industriële en voedselgeschikte smeermiddelen ontworpen voor apparatuurbescherming en prestaties',
          items: [
            'Voedselgeschikte smeermiddelen',
            'Industriële vetten',
            'Maritieme vetten',
            'Onderhoud smeermiddelen'
          ],
          brand: 'Inclusief JAX smeermiddelen'
        }
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
          name: 'Membranes',
          description: 'Membraantechnologie en filtratieoplossingen',
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
      brands: 'Markanan',
      contact: 'Kontakto'
    },
    // Home Page
    home: {
      title: 'S&S Distribution',
      subtitle: 'Produktonan Kímiko Industrial i Ekipo',
      viewProducts: 'Mira Produktonan',
      contactUs: 'Tuma Kontakto',
      advantagesTitle: 'Nos Bentahanan',
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
      paragraph1: 'S&S Distribution ta un proveedor situá na Kòrsou di kímiko di limpiesa industrial, solushonnan di sanitisashon i lubrikante spesializá.',
      paragraph2: 'Nos kompania ta enfoká riba provee produktonan konfiabel na negoshinan ku ta mehora efisiensia di mantenementu, rendimentu di sanitisashon i protekshon di ekipo.',
      paragraph3: 'Nos ta suportá klientenan den diferente industrianan inkluí servisionan outomotivo, operashonnan industrial, fasilidat di prosesamentu di kuminda, kompanianan di konstrukshon i operashonnan marino.',
      paragraph4: 'Nos kompromiso ta pa provee produktonan di kalidat, suministro konfiabel i soporte profesional na nos klientenan.'
    },
    // Products Page
    products: {
      title: 'Nos Produktonan',
      categories: [
        {
          title: 'Produktonan di Limpiesa Industrial',
          description: 'Kímiko di limpiesa di haltu rendimentu diseñá pa ambiente industrial',
          items: [
            'Desengrasante di servicio pisa',
            'Solushonnan di limpiesa di ekipo',
            'Limpiadornan di mantenementu industrial',
            'Kímiko di limpiesa di superficie'
          ]
        },
        {
          title: 'Auto Care & Fleet Wash',
          description: 'Produktonan diseñá pa operashonnan di limpiesa i mantenementu di vehíkulo',
          items: [
            'Detergente pa laba outo',
            'Kímiko pa laba kamion',
            'Desengrasante di motor',
            'Produktonan di detallado di vehíkulo'
          ],
          featured: 'Maxi-Clean 120 - Desengrasante di servicio pisa'
        },
        {
          title: 'Sanitisashon pa Prosesamentu di Kuminda',
          description: 'Produktonan di sanitisashon diseñá pa fasilidat di kuminda i bebida',
          items: [
            'Sanitisador di asido perasétiko',
            'Solushonnan di sanitisashon di superficie',
            'Sanitisador di man',
            'Kímiko di limpiesa apto pa kuminda'
          ]
        },
        {
          title: 'Grasa i Lubrikante',
          description: 'Lubrikante industrial i di grado alimentisio diseñá pa protekshon i rendimentu di ekipo',
          items: [
            'Lubrikante di grado alimentisio',
            'Grasa industrial',
            'Grasa marino',
            'Lubrikante di mantenementu'
          ],
          brand: 'Inkluí lubrikante JAX'
        }
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
          name: 'Membranes',
          description: 'Teknologia di membrana i solushonnan di filtrashon',
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

