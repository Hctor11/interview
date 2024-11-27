export interface Countries {
  name: string;
  code: string;
  departments?: Department[];
}
export interface Department {
  name: string;
  code: string;
  municipios: Municipio[];
}
export interface Municipio {
  name: string;
  distritos: string[];
}


export const ADRESS:Countries[] = [
  {
    name: "El Salvador",
    code: "SV",
    departments: [
      {
        name: "Ahuachapan",
        code: "AH",
        municipios: [
          {
            name: "Ahuachapan Norte",
            distritos: ["Atiquizizaya", "El Refugio", "San Lorenzo", "Turín"],
          },
          {
            name: "Ahuachapan Centro",
            distritos: [
              "Ahuachapan",
              "Apaneca",
              "Concepción de Ataco",
              "Tacuba",
            ],
          },
          {
            name: "Ahuachapan Sur",
            distritos: [
              "Guaymango",
              "Jujutla",
              "San Francisco Menéndez",
              "San Pedro Puxtla",
            ],
          },
        ],
      },
      {
        name: "Cabañas",
        code: "CA",
        municipios: [
          {
            name: "Cabañas Este",
            distritos: [
              "Guacotecti",
              "San Isidro",
              "Sensuntepeque",
              "Victoria",
              "Dolores",
            ],
          },
          {
            name: "Cabañas Oeste",
            distritos: ["Cinquera", "Ilobasco", "Jutiapa", "Tejutepeque"],
          },
        ],
      },
      {
        name: "Chalatenango",
        code: "CH",

        municipios: [
          {
            name: "Chalatenango Norte",
            distritos: ["Citalá", "La Palma", "San Ignacio"],
          },
          {
            name: "Chalatenango Centro",
            distritos: [
              "Agua Caliente",
              "Dulce Nombre de Maria",
              "El Paraíso",
              "La Reina",
              "Nueva Concepción",
              "San Fernando",
              "San Francisco Morazán",
              "San Rafael",
              "Santa Rita",
              "Tejutla",
            ],
          },
          {
            name: "Chalatenango Sur",
            distritos: [
              "Arcatao",
              "Azacualpa",
              "Cancasque",
              "Chalatenango",
              "Comalapa",
              "Concepción Quezaltepeque",
              "El Carrizal",
              "La Laguna",
              "Las Vueltas",
              "Las Flores",
              "Nombre de Jesus",
              "Nueva Trinidad",
              "Ojos de Agua",
              "Potonico",
              "San Antonio de la Cruz",
              "San Antonio Los Ranchos",
              "San Francisco Lempa",
              "San Isidro Labrador",
              "San Luis del Carmen",
              "San Miguel de Mercedes",
            ],
          },
        ],
      },
      {
        name: "Cuscatlán",
        code: "CU",
        municipios: [
          {
            name: "Cuscatlán Norte",
            distritos: [
              "Suchitoto",
              "San José Guayabal",
              "Oratorio de Concepción",
              "San Pedro Perulapán",
            ],
          },
          {
            name: "Cuscatlán Sur",
            distritos: [
              "Cojutepeque",
              "Candelaria",
              "El Carmen",
              "El Rosario",
              "Monte San Juan",
              "San Cristóbal",
              "San Rafael Cedros",
              "San Ramón",
              "Santa Cruz Analquito",
              "Santa Cruz Michapa",
              "Tenancingo",
            ],
          },
        ],
      },
      {
        name: "La Libertad",
        code: "LI",
        municipios: [
          {
            name: "La Libertad Norte",
            distritos: ["Quezatepeque", "San Matías", "San Pablo Tacachico"],
          },
          {
            name: "La Libertad Centro",
            distritos: ["San Juan Opico", "Ciudad Arce"],
          },
          {
            name: "La Libertad Oeste",
            distritos: ["Colón", "Jayaque", "Sacacoyo", "Tepecoyo", "Talnique"],
          },
          {
            name: "La Libertad Este",
            distritos: [
              "Antiguo Cuscatlán",
              "Huizúcar",
              "Nuevo Cuscatlán",
              "San José Villanueva",
              "Zaragoza",
            ],
          },
          {
            name: "La Libertad Costa",
            distritos: ["Chilltiupán", "Jicalapa", "Tamanique", "Teotepeque"],
          },
          {
            name: "La Libertad Sur",
            distritos: ["Santa Tecla", "Comasagua"],
          },
        ],
      },
      {
        name: "La Paz",
        code: "PA",

        municipios: [
          {
            name: "La Paz Oeste",
            distritos: [
              "Cuyultitán",
              "Olocuilta",
              "San Juan Talpa",
              "San Luis Talpa",
              "San Pedro Masahuat",
              "Tapalhuaca",
              "San Francisco Chinameca",
            ],
          },
          {
            name: "La Paz Centro",
            distritos: [
              "El Rosario",
              "Jerusalén",
              "Mercedes La Ceiba",
              "Paraíso de Osorio",
              "San Antonio Masahuat",
              "San Emigdio",
              "San Juan Tepezontes",
              "San Luis La Herradura",
              "San Miguel Tepezontes",
              "San Pedro Nonualco",
              "Santa Maria Ostuma",
              "Santiago Nonualco",
            ],
          },
          {
            name: "La Paz Este",
            distritos: [
              "San Juan Nonualco",
              "San Rafael Obrajuelo",
              "Zacatecoluca",
            ],
          },
        ],
      },
      {
        name: "La Unión",
        code: "UN",

        municipios: [
          {
            name: "La Unión Norte",
            distritos: [
              "Anamorós",
              "Bolívar",
              "Concepción de Oriente",
              "El Sauce",
              "Lislique",
              "Pasaquina",
              "Polorós",
              "San José",
              "Santa Rosa de Lima",
            ],
          },
          {
            name: "La Unión Sur",
            distritos: [
              "Conchagua",
              "El Carmen",
              "Intipucá",
              "La Unión",
              "Meanguera del Golfo",
              "San Alejo",
              "Yayantique",
              "Yucuaiquín",
            ],
          },
        ],
      },
      {
        name: "Morazán",
        code: "MO",
        municipios: [
          {
            name: "Morazán Norte",
            distritos: [
              "Arambala",
              "Cacaopera",
              "Corinto",
              "El Rosario",
              "Joateca",
              "Jocoaitique",
              "Meanguera",
              "Perquín",
              "San Fernando",
              "San Isidro",
              "Torola",
            ],
          },
          {
            name: "Morazán Sur",
            distritos: [
              "Chilanga",
              "Delicias de Concepción",
              "El Divisadero",
              "Gualococti",
              "Guatajiagua",
              "Jocoro",
              "Lolotiquillo",
              "Osicala",
              "San Carlos",
              "San Francisco Gotera",
              "San Simón",
              "Sensembra",
              "Sociedad",
              "Yamabal",
              "Yoloaiquín",
            ],
          },
        ],
      },
      {
        name: "San Miguel",
        code: "SM",
        municipios: [
          {
            name: "San Miguel Norte",
            distritos: [
              "Ciudad Barrios",
              "Sesori",
              "Nuevo Edén de San Juan",
              "San Gerardo",
              "San Luis de la Reina",
              "Carolina",
              "San Antonio",
              "Chapeltique",
            ],
          },
          {
            name: "San Miguel Centro",
            distritos: [
              "San Miguel",
              "Comacarán",
              "Uluazapa",
              "Moncagua",
              "Quelepa",
              "Chirilagua",
            ],
          },
          {
            name: "San Miguel Oeste",
            distritos: [
              "Chinameca",
              "El Tránsito",
              "Lolotique",
              "Nueva Guadalupe",
              "San Jorge",
              "San Rafael Oriente",
            ],
          },
        ],
      },
      {
        name: "San Salvador",
        code: "SS",

        municipios: [
          {
            name: "San Salvador Norte",
            distritos: ["Aguilares", "El Paisnal", "Guazapa"],
          },
          {
            name: "San Salvador Oeste",
            distritos: ["Apopa", "Nejapa"],
          },
          {
            name: "San Salvador Este",
            distritos: ["Ilopango", "San Martín", "Soyapango", "Tonacatepeque"],
          },
          {
            name: "San Salvador Centro",
            distritos: [
              "Ayutuxtepeque",
              "Mejicanos",
              "Cuscatancingo",
              "Cuidad Delgado",
              "San Salvador",
            ],
          },
          {
            name: "San Salvador Sur",
            distritos: [
              "San Marcos",
              "Santo Tomás",
              "Panchimalco",
              "Rosario de Mora",
            ],
          },
        ],
      },
      {
        name: "San Vicente",
        code: "SV",
        municipios: [
          {
            name: "San Vicente Norte",
            distritos: [
              "Apastepeque",
              "Santa Clara",
              "San Ildefonso",
              "San Esteban Catarina",
              "San Lorenzo",
              "Santo Domingo",
            ],
          },
          {
            name: "San Vicente Sur",
            distritos: [
              "San Vicente",
              "Guadalupe",
              "San Cayetano Istepeque",
              "Tecoluca",
              "Tepetitán",
              "Verapaz",
            ],
          },
        ],
      },
      {
        name: "Santa Ana",
        code: "SA",
        municipios: [
          {
            name: "Santa Ana Norte",
            distritos: ["Masahuat", "Metapán", "Santa Rosa Guachipilín"],
          },
          {
            name: "Santa Ana Centro",
            distritos: ["Santa Ana"],
          },
          {
            name: "Santa Ana Este",
            distritos: ["Coatepeque", "El Congo"],
          },
          {
            name: "Santa Ana Oeste",
            distritos: [
              "Candelaria de la Frontera",
              "Chalchuapa",
              "El Porvenir",
              "San Antonio Pajonal",
              "San Sebastián Salitrillo",
              "Santiago de la Frontera",
            ],
          },
        ],
      },
      {
        name: "Sonsonate",
        code: "SO",
        municipios: [
          {
            name: "Sonsonate Norte",
            distritos: [
              "Juayúa",
              "Nahuizalco",
              "Salcoatitán",
              "Santa Catarina Masahuat",
            ],
          },
          {
            name: "Sonsonate Centro",
            distritos: [
              "Sonsonate",
              "Sonzacate",
              "Nahulingo",
              "San Antonio del Monte",
              "Santo Domingo de Guzmán",
            ],
          },
          {
            name: "Sonsonate Este",
            distritos: [
              "Armenia",
              "Caluco",
              "Cuisnahuat",
              "Izalco",
              "San Julián",
              "Santa Isabel Ishuatán",
            ],
          },
          {
            name: "Sonsonate Oeste",
            distritos: ["Acajutla"],
          },
        ],
      },
      {
        name: "Usulután",
        code: "US",
        municipios: [
          {
            name: "Usulután Norte",
            distritos: [
              "Alegría",
              "Berlín",
              "El Triunfo",
              "Estanzuelas",
              "Jucuapa",
              "Mercedes Umaña",
              "Nueva Granada",
              "San Buenaventura",
              "Santiago de Mariá",
            ],
          },
          {
            name: "Usulután Este",
            distritos: [
              "California",
              "Concepción Batres",
              "Ereguayquín",
              "Jucuarán",
              "Ozatlán",
              "Santa Elena",
              "San Dionisio",
              "Santa Maria",
              "Tecapán",
              "Usulután",
            ],
          },
          {
            name: "Usulután Oeste",
            distritos: [
              "Jiquilisco",
              "Puerto El Triunfo",
              "San Agustín",
              "San Francisco Javier",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Estados Unidos",
    code: "US",
  },
];
