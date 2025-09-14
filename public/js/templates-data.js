// Datos de las plantillas
const templatesData = {
    // BODAS (5 plantillas)
    1: {
        id: 1,
        name: 'Boda Clásica',
        category: 'wedding',
        description: 'Invitación elegante para bodas tradicionales',
        background: '#f5ece1',
        preview: 'linear-gradient(135deg, #f5ece1 0%, #e9dccc 100%)',
        elements: [
            {
                type: 'text',
                content: 'NOS CASAMOS',
                fontFamily: 'Playfair Display',
                fontSize: '32px',
                color: '#6d655a',
                x: 50,
                y: 50,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'María & Juan',
                fontFamily: 'Great Vibes',
                fontSize: '42px',
                color: '#6d655a',
                x: 50,
                y: 100,
                textAlign: 'center'
            }
        ]
    },
    2: {
        id: 2,
        name: 'Boda Moderna',
        category: 'wedding',
        description: 'Diseño contemporáneo para bodas actuales',
        background: '#f8f6f2',
        preview: 'linear-gradient(135deg, #f8f6f2 0%, #e8e1d5 100%)',
        elements: [
            {
                type: 'text',
                content: 'CELEBRAMOS NUESTRO AMOR',
                fontFamily: 'Raleway',
                fontSize: '24px',
                color: '#6d655a',
                x: 50,
                y: 40,
                fontWeight: '300',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'CARLA & MARTÍN',
                fontFamily: 'Montserrat',
                fontSize: '36px',
                color: '#6d655a',
                x: 50,
                y: 90,
                fontWeight: 'bold',
                textAlign: 'center'
            }
        ]
    },
    3: {
        id: 3,
        name: 'Boda con Flores',
        category: 'wedding',
        description: 'Invitación elegante con diseño floral',
        background: '#faf7f2',
        preview: 'linear-gradient(135deg, #faf7f2 0%, #f0e9df 100%)',
        elements: [
            {
                type: 'image',
                src: 'https://placehold.co/100x100/e9dccc/6d655a?text=🌺',
                x: 400,
                y: 30,
                width: 80,
                height: 80,
                rotation: 15
            },
            {
                type: 'image',
                src: 'https://placehold.co/100x100/e9dccc/6d655a?text=🌹',
                x: 50,
                y: 600,
                width: 80,
                height: 80,
                rotation: -10
            },
            {
                type: 'text',
                content: 'MARÍA & JUAN',
                fontFamily: 'Great Vibes',
                fontSize: '42px',
                color: '#6d655a',
                x: 50,
                y: 100,
                textAlign: 'center'
            }
        ]
    },
    4: {
        id: 4,
        name: 'Boda con Marco',
        category: 'wedding',
        description: 'Invitación con marco decorativo',
        background: '#f5ece1',
        preview: 'linear-gradient(135deg, #f5ece1 0%, #e9dccc 100%)',
        elements: [
            {
                type: 'image',
                src: 'https://placehold.co/600x800/f5ece1/6d655a?text=🎀',
                x: 0,
                y: 0,
                width: 600,
                height: 800,
                rotation: 0
            },
            {
                type: 'text',
                content: 'NOS CASAMOS',
                fontFamily: 'Playfair Display',
                fontSize: '32px',
                color: '#6d655a',
                x: 50,
                y: 170,
                fontWeight: 'bold',
                textAlign: 'center'
            }
        ]
    },
    5: {
        id: 5,
        name: 'Boda con Logo',
        category: 'wedding',
        description: 'Invitación con logo personalizado',
        background: '#f8f6f2',
        preview: 'linear-gradient(135deg, #f8f6f2 0%, #e8e1d5 100%)',
        elements: [
            {
                type: 'image',
                src: 'https://placehold.co/100x100/e9dccc/6d655a?text=❤️',
                x: 250,
                y: 50,
                width: 100,
                height: 100,
                rotation: 0
            },
            {
                type: 'text',
                content: 'CARLA & MARTÍN',
                fontFamily: 'Montserrat',
                fontSize: '36px',
                color: '#6d655a',
                x: 50,
                y: 90,
                fontWeight: 'bold',
                textAlign: 'center'
            }
        ]
    },

    // GRADUACIONES (5 plantillas)
    6: {
        id: 6,
        name: 'Graduación Universitaria',
        category: 'graduation',
        description: 'Invitación formal para graduaciones universitarias',
        background: '#e8f4f8',
        preview: 'linear-gradient(135deg, #e8f4f8 0%, #d4e8f0 100%)',
        elements: [
            {
                type: 'image',
                src: 'https://cdn.pixabay.com/photo/2012/04/05/01/39/balloon-25734_1280.png',
                x: 240,
                y: 240,
                width: 120,
                height: 120,
                rotation: 40
            },
            {
                type: 'image',
                src: 'https://cdn.pixabay.com/photo/2012/04/05/01/39/balloon-25734_1280.png',
                x: 340,
                y: 40,
                width: 120,
                height: 120,
                rotation: 40
            },
            {
                type: 'image',
                src: 'https://cdn.pixabay.com/photo/2012/04/05/01/39/balloon-25734_1280.png',
                x: 640,
                y: 70,
                width: 120,
                height: 120,
                rotation: 90
                
            },
            {
                type: 'text',
                content: 'GRADUACIÓN UNIVERSITARIA',
                fontFamily: 'Montserrat',
                fontSize: '24px',
                color: '#2c3e50',
                x: 50,
                y: 180,
                fontWeight: 'bold',
                textAlign: 'center'
            }
        ]
    },
    7: {
        id: 7,
        name: 'Graduación Escolar',
        category: 'graduation',
        description: 'Invitación para graduaciones de secundaria',
        background: '#f0f8e8',
        preview: 'linear-gradient(135deg, #f0f8e8 0%, #e0f0d8 100%)',
        elements: [
            {
                type: 'text',
                content: '¡GRADUACIÓN!',
                fontFamily: 'Poppins',
                fontSize: '28px',
                color: '#2e7d32',
                x: 50,
                y: 70,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'image',
                src: 'https://placehold.co/80x80/e0f0d8/2e7d32?text=📚',
                x: 260,
                y: 60,
                width: 80,
                height: 80,
                rotation: 5
            }
        ]
    },
    8: {
        id: 8,
        name: 'Graduación Kindergarten',
        category: 'graduation',
        description: 'Invitación adorable para graduaciones de jardín',
        background: '#fff8e1',
        preview: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)',
        elements: [
            {
                type: 'image',
                src: 'https://placehold.co/100x100/ffecb3/ff6f00?text=🎨',
                x: 250,
                y: 50,
                width: 100,
                height: 100,
                rotation: 0
            },
            {
                type: 'text',
                content: '¡MI PRIMERA GRADUACIÓN!',
                fontFamily: 'Comic Sans MS',
                fontSize: '24px',
                color: '#ff6f00',
                x: 50,
                y: 170,
                fontWeight: 'bold',
                textAlign: 'center'
            }
        ]
    },
    9: {
        id: 9,
        name: 'Graduación Postgrado',
        category: 'graduation',
        description: 'Invitación elegante para graduaciones de posgrado',
        background: '#e8eaf6',
        preview: 'linear-gradient(135deg, #e8eaf6 0%, #d1d9e8 100%)',
        elements: [
            {
                type: 'text',
                content: 'MAESTRÍA EN INGENIERÍA',
                fontFamily: 'Roboto',
                fontSize: '22px',
                color: '#303f9f',
                x: 50,
                y: 60,
                fontWeight: '500',
                textAlign: 'center'
            },
            {
                type: 'image',
                src: 'https://placehold.co/100x100/d1d9e8/303f9f?text=⚡',
                x: 250,
                y: 100,
                width: 100,
                height: 100,
                rotation: 0
            }
        ]
    },
    10: {
        id: 10,
        name: 'Graduación Técnica',
        category: 'graduation',
        description: 'Invitación para graduaciones de carreras técnicas',
        background: '#f1f8e9',
        preview: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)',
        elements: [
            {
                type: 'image',
                src: 'https://placehold.co/120x120/dcedc8/33691e?text=🔧',
                x: 240,
                y: 40,
                width: 120,
                height: 120,
                rotation: 0
            },
            {
                type: 'text',
                content: 'TÉCNICO EN INFORMÁTICA',
                fontFamily: 'Open Sans',
                fontSize: '22px',
                color: '#33691e',
                x: 50,
                y: 180,
                fontWeight: '600',
                textAlign: 'center'
            }
        ]
    }
};



// CUMPLEAÑOS (5 plantillas)
const birthdayTemplates = {
    11: {
        id: 11,
        name: 'Cumpleaños Infantil',
        category: 'birthday',
        description: 'Invitación divertida para cumpleaños de niños',
        background: '#fff8e1',
        preview: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)',
        elements: [
            {
                type: 'text',
                content: '¡FIESTA DE CUMPLEAÑOS!',
                fontFamily: 'Comic Sans MS',
                fontSize: '26px',
                color: '#ff6f00',
                x: 50,
                y: 60,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'LUCAS',
                fontFamily: 'Comic Sans MS',
                fontSize: '42px',
                color: '#ff6f00',
                x: 50,
                y: 110,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'CUMPLE 5 AÑOS',
                fontFamily: 'Comic Sans MS',
                fontSize: '20px',
                color: '#ff6f00',
                x: 50,
                y: 170,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Sábado 15 de Junio • 15:00 hs',
                fontFamily: 'Comic Sans MS',
                fontSize: '16px',
                color: '#ff6f00',
                x: 50,
                y: 210,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Casa de Lucas - Jardín trasero',
                fontFamily: 'Comic Sans MS',
                fontSize: '14px',
                color: '#ff6f00',
                x: 50,
                y: 250,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '¡Trae traje de baño!',
                fontFamily: 'Comic Sans MS',
                fontSize: '16px',
                color: '#ff6f00',
                x: 50,
                y: 290,
                textAlign: 'center',
                fontStyle: 'italic'
            }
        ]
    },
    12: {
        id: 12,
        name: 'Cumpleaños Adolescente',
        category: 'birthday',
        description: 'Invitación moderna para adolescentes',
        background: '#f3e5f5',
        preview: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
        elements: [
            {
                type: 'text',
                content: 'SAVE THE DATE',
                fontFamily: 'Poppins',
                fontSize: '22px',
                color: '#7b1fa2',
                x: 50,
                y: 50,
                fontWeight: '300',
                textAlign: 'center',
                letterSpacing: '3px'
            },
            {
                type: 'text',
                content: 'SOFÍA',
                fontFamily: 'Poppins',
                fontSize: '38px',
                color: '#7b1fa2',
                x: 50,
                y: 90,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '15 AÑOS',
                fontFamily: 'Poppins',
                fontSize: '28px',
                color: '#7b1fa2',
                x: 50,
                y: 140,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '28.09.2024',
                fontFamily: 'Poppins',
                fontSize: '20px',
                color: '#7b1fa2',
                x: 50,
                y: 190,
                textAlign: 'center',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                content: '22:00 HS • SALÓN STARLIGHT',
                fontFamily: 'Poppins',
                fontSize: '16px',
                color: '#7b1fa2',
                x: 50,
                y: 230,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'DJ • BARRA LIBRE • FOTOBOX',
                fontFamily: 'Poppins',
                fontSize: '14px',
                color: '#7b1fa2',
                x: 50,
                y: 270,
                textAlign: 'center',
                fontWeight: '300'
            }
        ]
    },
    13: {
        id: 13,
        name: 'Cumpleaños Adulto',
        category: 'birthday',
        description: 'Invitación elegante para cumpleaños de adultos',
        background: '#e8f5e9',
        preview: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
        elements: [
            {
                type: 'text',
                content: 'INVITACIÓN',
                fontFamily: 'Playfair Display',
                fontSize: '24px',
                color: '#2e7d32',
                x: 50,
                y: 60,
                fontStyle: 'italic',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '40 AÑOS',
                fontFamily: 'Playfair Display',
                fontSize: '36px',
                color: '#2e7d32',
                x: 50,
                y: 110,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'DE',
                fontFamily: 'Playfair Display',
                fontSize: '20px',
                color: '#2e7d32',
                x: 50,
                y: 160,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'CARLOS',
                fontFamily: 'Playfair Display',
                fontSize: '32px',
                color: '#2e7d32',
                x: 50,
                y: 200,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Sábado 12 de Octubre • 21:00 hs',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#2e7d32',
                x: 50,
                y: 250,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Restaurante "El Jardín"',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#2e7d32',
                x: 50,
                y: 290,
                textAlign: 'center'
            }
        ]
    },
    14: {
        id: 14,
        name: 'Cumpleaños Sorpresa',
        category: 'birthday',
        description: 'Invitación para fiesta sorpresa',
        background: '#fff3e0',
        preview: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
        elements: [
            {
                type: 'text',
                content: '¡SHHH! ES UNA SORPRESA',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                color: '#ef6c00',
                x: 50,
                y: 70,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'PARA',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                color: '#ef6c00',
                x: 50,
                y: 110,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'MARTA',
                fontFamily: 'Dancing Script',
                fontSize: '46px',
                color: '#ef6c00',
                x: 50,
                y: 150,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '50 AÑOS',
                fontFamily: 'Montserrat',
                fontSize: '24px',
                color: '#ef6c00',
                x: 50,
                y: 210,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Domingo 20 de Octubre • 13:00 hs',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#ef6c00',
                x: 50,
                y: 250,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Casa de María - Av. Siempre Viva 742',
                fontFamily: 'Montserrat',
                fontSize: '14px',
                color: '#ef6c00',
                x: 50,
                y: 290,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '¡Confirma tu asistencia!',
                fontFamily: 'Montserrat',
                fontSize: '14px',
                color: '#ef6c00',
                x: 50,
                y: 330,
                fontStyle: 'italic',
                textAlign: 'center'
            }
        ]
    },
    15: {
        id: 15,
        name: 'Cumpleaños Temático',
        category: 'birthday',
        description: 'Invitación para fiesta con tema específico',
        background: '#e3f2fd',
        preview: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        elements: [
            {
                type: 'text',
                content: 'FIESTA HAWAIANA',
                fontFamily: 'Pacifico',
                fontSize: '28px',
                color: '#0277bd',
                x: 50,
                y: 60,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'CUMPLEAÑOS DE',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                color: '#0277bd',
                x: 50,
                y: 110,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'JAVIER',
                fontFamily: 'Montserrat',
                fontSize: '36px',
                color: '#0277bd',
                x: 50,
                y: 150,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '30 AÑOS',
                fontFamily: 'Montserrat',
                fontSize: '22px',
                color: '#0277bd',
                x: 50,
                y: 200,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Viernes 8 de Noviembre • 20:00 hs',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#0277bd',
                x: 50,
                y: 240,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Salón Paradise',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#0277bd',
                x: 50,
                y: 280,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '¡Ven con tu mejor outfit hawaiano!',
                fontFamily: 'Montserrat',
                fontSize: '14px',
                color: '#0277bd',
                x: 50,
                y: 320,
                fontStyle: 'italic',
                textAlign: 'center'
            }
        ]
    }
};


// XV AÑOS (5 plantillas)
const xvTemplates = {
    16: {
        id: 16,
        name: 'XV Años Clásico',
        category: 'xv-years',
        description: 'Invitación tradicional para quinceañeras',
        background: '#fce4ec',
        preview: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)',
        elements: [
            {
                type: 'text',
                content: 'XV AÑOS',
                fontFamily: 'Playfair Display',
                fontSize: '32px',
                color: '#c2185b',
                x: 50,
                y: 60,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'VALENTINA',
                fontFamily: 'Great Vibes',
                fontSize: '46px',
                color: '#c2185b',
                x: 50,
                y: 110,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '15 de Marzo 2024',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                color: '#c2185b',
                x: 50,
                y: 170,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '21:00 horas',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                color: '#c2185b',
                x: 50,
                y: 210,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Salón de Fiestas "La Scala"',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#c2185b',
                x: 50,
                y: 250,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Av. Colón 1200, Córdoba',
                fontFamily: 'Montserrat',
                fontSize: '14px',
                color: '#c2185b',
                x: 50,
                y: 290,
                textAlign: 'center'
            }
        ]
    },
    17: {
        id: 17,
        name: 'XV Años Moderno',
        category: 'xv-years',
        description: 'Diseño contemporáneo para quinceañeras',
        background: '#f3e5f5',
        preview: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
        elements: [
            {
                type: 'text',
                content: 'QUINCE AÑOS',
                fontFamily: 'Montserrat',
                fontSize: '26px',
                color: '#7b1fa2',
                x: 50,
                y: 70,
                fontWeight: '300',
                textAlign: 'center',
                letterSpacing: '4px'
            },
            {
                type: 'text',
                content: 'SOFÍA',
                fontFamily: 'Montserrat',
                fontSize: '40px',
                color: '#7b1fa2',
                x: 50,
                y: 120,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'CELEBRACIÓN',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                color: '#7b1fa2',
                x: 50,
                y: 180,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '08.06.2024',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                color: '#7b1fa2',
                x: 50,
                y: 220,
                textAlign: 'center',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                content: '22:00 HS • SALÓN DIAMANTE',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#7b1fa2',
                x: 50,
                y: 260,
                textAlign: 'center'
            }
        ]
    },
    18: {
        id: 18,
        name: 'XV Años Elegante',
        category: 'xv-years',
        description: 'Invitación sofisticada para quinceañeras',
        background: '#e8eaf6',
        preview: 'linear-gradient(135deg, #e8eaf6 0%, #d1d9e8 100%)',
        elements: [
            {
                type: 'text',
                content: 'CON ALEGRÍA INVITAMOS',
                fontFamily: 'Cormorant Garamond',
                fontSize: '20px',
                color: '#303f9f',
                x: 50,
                y: 60,
                fontStyle: 'italic',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'A CELEBRAR LOS XV AÑOS DE',
                fontFamily: 'Cormorant Garamond',
                fontSize: '20px',
                color: '#303f9f',
                x: 50,
                y: 90,
                fontStyle: 'italic',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'ISABELLA',
                fontFamily: 'Great Vibes',
                fontSize: '44px',
                color: '#303f9f',
                x: 50,
                y: 140,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '22 de Septiembre 2024',
                fontFamily: 'Cormorant Garamond',
                fontSize: '20px',
                color: '#303f9f',
                x: 50,
                y: 200,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '20:30 horas • Salón Versalles',
                fontFamily: 'Cormorant Garamond',
                fontSize: '18px',
                color: '#303f9f',
                x: 50,
                y: 240,
                textAlign: 'center'
            }
        ]
    },
    19: {
        id: 19,
        name: 'XV Años Colorido',
        category: 'xv-years',
        description: 'Invitación vibrante para quinceañeras',
        background: '#fff3e0',
        preview: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
        elements: [
            {
                type: 'text',
                content: '¡FIESTA DE XV!',
                fontFamily: 'Pacifico',
                fontSize: '30px',
                color: '#ff6f00',
                x: 50,
                y: 70,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'CAMILA',
                fontFamily: 'Pacifico',
                fontSize: '42px',
                color: '#ff6f00',
                x: 50,
                y: 120,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'CUMPLE 15 AÑOS',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                color: '#ff6f00',
                x: 50,
                y: 180,
                fontWeight: 'bold',
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'Sábado 12 de Octubre',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                color: '#ff6f00',
                x: 50,
                y: 220,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '21:00 hs • Salón Fiesta Joven',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#ff6f00',
                x: 50,
                y: 260,
                textAlign: 'center'
            }
        ]
    },
    20: {
        id: 20,
        name: 'XV Años Dorado',
        category: 'xv-years',
        description: 'Invitación con tonos dorados para quinceañeras',
        background: '#fffde7',
        preview: 'linear-gradient(135deg, #fffde7 0%, #fff9c4 100%)',
        elements: [
            {
                type: 'text',
                content: 'XV AÑOS',
                fontFamily: 'Dancing Script',
                fontSize: '36px',
                color: '#c8a951',
                x: 50,
                y: 80,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'de',
                fontFamily: 'Dancing Script',
                fontSize: '24px',
                color: '#c8a951',
                x: 50,
                y: 130,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: 'EMILY',
                fontFamily: 'Dancing Script',
                fontSize: '48px',
                color: '#c8a951',
                x: 50,
                y: 170,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '5 de Julio 2024',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                color: '#c8a951',
                x: 50,
                y: 230,
                textAlign: 'center'
            },
            {
                type: 'text',
                content: '20:00 horas • Salón Dorado',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#c8a951',
                x: 50,
                y: 270,
                textAlign: 'center'
            }
        ]
    }
};







// Agregar plantillas de XV años al objeto principal
Object.assign(templatesData, xvTemplates);

// Agregar plantillas de cumpleaños al objeto principal
Object.assign(templatesData, birthdayTemplates);

// Obtener datos de una plantilla específica
function getTemplateData(templateId) {
    return templatesData[templateId] || null;
}

// Obtener todas las plantillas
function getAllTemplates() {
    return Object.values(templatesData);
}

// Obtener plantillas por categoría
function getTemplatesByCategory(category) {
    if (category === 'all') return getAllTemplates();
    return Object.values(templatesData).filter(template => template.category === category);
}

// Exportar funciones
export { getTemplateData, getAllTemplates, getTemplatesByCategory, templatesData };