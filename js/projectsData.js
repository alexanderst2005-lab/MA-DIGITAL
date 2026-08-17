/**
 * Base de Datos de Proyectos - MA DIGITAL
 * ----------------------------------------
 * Para agregar un nuevo proyecto en el futuro, simplemente copia una de las
 * estructuras de abajo y completa los datos. La página se actualizará automáticamente.
 */

const PROJECTS_DATA = [
  {
    id: "furia-fuego",
    title: "FURIA & FUEGO",
    category: "restaurantes",
    categoryLabel: "Restaurante / Comida Rápida",
    type: "real",
    typeLabel: "Cliente Real",
    badgeClass: "badge-real",
    shortDescription: "Experiencia web dinámica para restaurante de comida rápida, con catálogo interactivo de productos, carrito de compras y sistema de pedidos directo a WhatsApp.",
    fullDescription: "FURIA & FUEGO es una marca gastronómica joven y potente. Diseñamos una plataforma web interactiva y ultrarrápida que permite a los clientes explorar el menú de hamburguesas gourmet, bebidas y acompañamientos, personalizar sus pedidos y enviarlos directamente a la cocina vía WhatsApp sin intermediarios ni comisiones excesivas.",
    image: "assets/images/furia_fuego.png",
    demoUrl: "https://furia-fuego.vercel.app",
    urlBarText: "furiayfuego.com",
    features: [
      "Menú interactivo categorizado",
      "Carrito de compras sin recarga de página",
      "Envío de pedido estructurado a WhatsApp",
      "Diseño adaptado 100% a smartphones",
      "Panel visual de promociones y combos"
    ],
    technologies: ["HTML5 / JS ES6", "CSS Glassmorphic", "WhatsApp API", "Vercel Hosting"],
    stats: [
      { label: "Carga Inicial", value: "0.4s" },
      { label: "Conversión Mobile", value: "+45%" },
      { label: "Experiencia", value: "100/100" }
    ]
  },
  {
    id: "lumira-beauty",
    title: "LUMIRA LASHES & MAKEUP",
    category: "belleza",
    categoryLabel: "Belleza & Cosméticos",
    type: "real",
    typeLabel: "Cliente Real",
    badgeClass: "badge-real",
    shortDescription: "Tienda e-commerce de belleza, pestañas y maquillaje con envíos a todo el país, pago contra entrega y catálogo navegable por categorías.",
    fullDescription: "LUMIRA es una tienda virtual especializada en productos de belleza, pestañas punto a punto, enteras, makeup, skincare, cuidado corporal y capilar. Diseñamos una experiencia web moderna, fresca y femenina con carrito de compras, barra de promociones con envíos a todo el país, opción de pago contra entrega y sistema de atención directa vía WhatsApp.",
    image: "assets/images/lumira.png",
    demoUrl: "https://lumira-beauuty.vercel.app/",
    urlBarText: "lumira-beauuty.vercel.app",
    features: [
      "Barra de anuncios (Envíos a todo el país / Pago contra entrega)",
      "Navegación por categorías (Pestañas, Makeup, Skincare, Corporal)",
      "Catálogo de productos destacados con precios y botón de compra",
      "Integración de pedidos directo a WhatsApp",
      "Buscador rápido y lista de favoritos"
    ],
    technologies: ["HTML5 / JS Vanilla", "CSS Pink Theme", "Vercel Hosting", "WhatsApp E-Commerce"],
    stats: [
      { label: "Conversión", value: "+50%" },
      { label: "Envíos", value: "Nacional" },
      { label: "Uso Móvil", value: "100%" }
    ]
  },
  {
    id: "pet-lovers",
    title: "PET LOVERS SHOP",
    category: "mascotas",
    categoryLabel: "Pet Shop / Catálogo",
    type: "demo",
    typeLabel: "Proyecto Conceptual",
    badgeClass: "badge-demo",
    shortDescription: "Catálogo digital para una tienda de mascotas, diseñado para facilitar la visualización de alimentos, accesorios y pedidos rápidos.",
    fullDescription: "Una plataforma estética y amigable pensada para amantes de los animales. Cuenta con sistema de filtros por especie (Perros, Gatos, Aves), buscador instantáneo de productos y carrito flotante para solicitar despachos a domicilio con soporte al cliente directo.",
    image: "assets/images/pet_shop.png",
    demoUrl: "#",
    urlBarText: "petlovers-demo.madigital.app",
    features: [
      "Filtro inteligente por tipo de mascota",
      "Tarjetas de producto con fotos en alta resolución",
      "Cálculo automático de pedido",
      "Botón de consulta rápida por producto",
      "Navegación táctil intuitiva"
    ],
    technologies: ["JavaScript Vanilla", "Modern Flexbox/Grid", "LocalStorage", "SEO Optimizado"],
    stats: [
      { label: "Filtro Instantáneo", value: "<10ms" },
      { label: "Responsive", value: "100%" },
      { label: "Interfaz", value: "Clean UI" }
    ]
  },
  {
    id: "barber-shop-pro",
    title: "BARBER SHOP PRO",
    category: "barberia",
    categoryLabel: "Barbería & Grooming",
    type: "demo",
    typeLabel: "Proyecto Conceptual",
    badgeClass: "badge-demo",
    shortDescription: "Plataforma web estilo Dark Mode premium para barbería masculina con reserva de citas, servicios exclusivos y galería de estilos.",
    fullDescription: "Diseño elegante y masculino que transmite clase y experiencia profesional. Permite a los clientes agendar citas por horario, seleccionar su barber de preferencia y explorar la carta de cortes de cabello, perfilado de barba y tratamientos faciales.",
    image: "assets/images/barber_shop.png",
    demoUrl: "#",
    urlBarText: "barbershop-pro.madigital.app",
    features: [
      "Sistema visual de reserva de citas",
      "Catálogo de cortes y servicios con precios",
      "Galería interactiva de resultados",
      "Modo oscuro luxury de alta gama",
      "Integración con ubicación en Google Maps"
    ],
    technologies: ["HTML5 Semantic", "CSS Variables & Glows", "Form UI validation"],
    stats: [
      { label: "Estilo", value: "Dark Luxury" },
      { label: "Agendamiento", value: "3 Pasos" },
      { label: "Retención", value: "Alta" }
    ]
  },
  {
    id: "velvet-atelier",
    title: "VELVET ATELIER",
    category: "moda",
    categoryLabel: "Tienda de Ropa & Boutique",
    type: "demo",
    typeLabel: "Proyecto Conceptual",
    badgeClass: "badge-demo",
    shortDescription: "Showroom digital minimalista para marca de moda urbana y boutique, enfocado en destacar el diseño de las prendas con alta calidad visual.",
    fullDescription: "Una experiencia visual inmersiva donde las fotografías y el estilo minimalista son los protagonistas. Ideal para marcas emergentes de ropa que buscan transmitir sofisticación, exclusividad y facilidad de compra desde Instagram o redes sociales.",
    image: "assets/images/fashion_store.png",
    demoUrl: "#",
    urlBarText: "velvet-atelier.madigital.app",
    features: [
      "Lookbook interactivo de colecciones",
      "Guía de tallas y detalles del producto",
      "Vista rápida de prendas (Quick View)",
      "Conexión directa a Instagram Shopping",
      "Transiciones suaves entre páginas"
    ],
    technologies: ["CSS Grid Layout", "JS Modal Gallery", "Micro-animations"],
    stats: [
      { label: "Visuales", value: "Retina Ready" },
      { label: "Velocidad", value: "Ultrarrápida" },
      { label: "Diseño", value: "Minimalista" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROJECTS_DATA;
}
