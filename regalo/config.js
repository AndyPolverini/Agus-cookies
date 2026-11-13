/* ============================================================
   CONFIG.JS — lo único que tenés que tocar para personalizar.
   Las fotos/videos van en assets/fotos y assets/videos.
   Para agregar una foto: copiala a la carpeta y sumá UNA línea.
   El orden de las listas es el orden en pantalla.
   ============================================================ */
const CONFIG = {
  nombre: "Agus",
  fecha: "30/11/2026",
  tituloLibro: "Cosas que guardé de vos",
  mensajeCumple: "Feliz cumple, mi amor. Pasá la página.",
  portada: [],   // opcional: hasta 3 fotos para la portada, ej. ["005.jpg","040.jpg","090.jpg"]. Vacío = elige solas.
  firma: "Andy",

  musica: "assets/musica/ambiente.mp3", // opcional; el botón ♪ se oculta si no existe

  // Recuerdos en orden cronológico. Para reordenar, mové las líneas.
  // tipo: "foto" | "video" · fecha: "AAAA-MM" (agrupa por mes; "" = "más recuerdos")
  // descripcion: texto que aparece bajo la foto (opcional).
  recuerdos: [
    { tipo: "foto", archivo: "001.jpg", fecha: "2024-02", descripcion: "" },  // IMG_20240212_203246.jpg
    { tipo: "foto", archivo: "002.jpg", fecha: "2024-02", descripcion: "" },  // IMG_20240212_203255.jpg
    { tipo: "foto", archivo: "003.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0016.jpg
    { tipo: "foto", archivo: "004.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0017.jpg
    { tipo: "foto", archivo: "005.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0021.jpg
    { tipo: "foto", archivo: "006.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0022.jpg
    { tipo: "foto", archivo: "007.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0024.jpg
    { tipo: "foto", archivo: "008.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0025.jpg
    { tipo: "foto", archivo: "009.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0026.jpg
    { tipo: "foto", archivo: "010.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0027.jpg
    { tipo: "foto", archivo: "011.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0028.jpg
    { tipo: "foto", archivo: "012.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0029.jpg
    { tipo: "foto", archivo: "013.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0030.jpg
    { tipo: "foto", archivo: "014.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0031.jpg
    { tipo: "foto", archivo: "015.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0032.jpg
    { tipo: "foto", archivo: "016.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0033.jpg
    { tipo: "foto", archivo: "017.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0035.jpg
    { tipo: "foto", archivo: "018.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0038.jpg
    { tipo: "foto", archivo: "019.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0040.jpg
    { tipo: "foto", archivo: "020.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0041.jpg
    { tipo: "foto", archivo: "021.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0042.jpg
    { tipo: "foto", archivo: "022.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0043.jpg
    { tipo: "foto", archivo: "023.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0044.jpg
    { tipo: "foto", archivo: "024.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0045.jpg
    { tipo: "foto", archivo: "025.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0066.jpg
    { tipo: "foto", archivo: "026.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240307-WA0067.jpg
    { tipo: "foto", archivo: "027.jpg", fecha: "2024-03", descripcion: "" },  // IMG_20240312_191952_2.jpg
    { tipo: "foto", archivo: "028.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0051.jpg
    { tipo: "foto", archivo: "029.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0054.jpg
    { tipo: "foto", archivo: "030.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0055.jpg
    { tipo: "foto", archivo: "031.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0057.jpg
    { tipo: "foto", archivo: "032.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0058.jpg
    { tipo: "foto", archivo: "033.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0059.jpg
    { tipo: "foto", archivo: "034.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0060.jpg
    { tipo: "foto", archivo: "035.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0061.jpg
    { tipo: "foto", archivo: "036.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240315-WA0062.jpg
    { tipo: "foto", archivo: "037.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240317-WA0068.jpg
    { tipo: "foto", archivo: "038.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240317-WA0074.jpg
    { tipo: "foto", archivo: "039.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240317-WA0075.jpg
    { tipo: "foto", archivo: "040.jpg", fecha: "2024-03", descripcion: "" },  // IMG-20240317-WA0079.jpg
    { tipo: "foto", archivo: "041.jpg", fecha: "2024-04", descripcion: "" },  // IMG-20240407-WA0007.jpg
    { tipo: "foto", archivo: "042.jpg", fecha: "2024-04", descripcion: "" },  // IMG-20240407-WA0015.jpg
    { tipo: "foto", archivo: "043.jpg", fecha: "2024-04", descripcion: "" },  // IMG-20240407-WA0019.jpg
    { tipo: "foto", archivo: "044.jpg", fecha: "2024-04", descripcion: "" },  // IMG-20240414-WA0049.jpg
    { tipo: "foto", archivo: "045.jpg", fecha: "2024-04", descripcion: "" },  // IMG-20240414-WA0066.jpg
    { tipo: "foto", archivo: "046.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240511-WA0031.jpg
    { tipo: "foto", archivo: "047.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240511-WA0032.jpg
    { tipo: "foto", archivo: "048.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240511-WA0045.jpg
    { tipo: "foto", archivo: "049.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240511-WA0048.jpg
    { tipo: "foto", archivo: "050.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240511-WA0051.jpg
    { tipo: "foto", archivo: "051.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240511-WA0057.jpg
    { tipo: "foto", archivo: "052.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240511-WA0062~2.jpg
    { tipo: "foto", archivo: "053.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240511-WA0065.jpg
    { tipo: "video", archivo: "v01.mp4", fecha: "2024-05", descripcion: "" },  // VID-20240511-WA0015.mp4
    { tipo: "video", archivo: "v02.mp4", fecha: "2024-05", descripcion: "" },  // VID-20240511-WA0024.mp4
    { tipo: "video", archivo: "v03.mp4", fecha: "2024-05", descripcion: "" },  // VID-20240511-WA0025.mp4
    { tipo: "video", archivo: "v04.mp4", fecha: "2024-05", descripcion: "" },  // VID-20240511-WA0027.mp4
    { tipo: "foto", archivo: "054.jpg", fecha: "2024-05", descripcion: "" },  // original_29d269c0-1a61-42bb-a7fb-bb35f7d
    { tipo: "foto", archivo: "055.jpg", fecha: "2024-05", descripcion: "" },  // original_41237696-d0d2-40a2-a17d-483917e
    { tipo: "foto", archivo: "056.jpg", fecha: "2024-05", descripcion: "" },  // original_4f073d21-72fd-428a-80c7-ea65122
    { tipo: "foto", archivo: "057.jpg", fecha: "2024-05", descripcion: "" },  // original_dcfb81e6-e05e-446e-a69a-bf693c2
    { tipo: "foto", archivo: "058.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240512-WA0017.jpg
    { tipo: "foto", archivo: "059.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240512-WA0026~2.jpg
    { tipo: "foto", archivo: "060.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240512-WA0030.jpg
    { tipo: "foto", archivo: "061.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240512-WA0073~2.jpg
    { tipo: "foto", archivo: "062.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240512-WA0089.jpg
    { tipo: "foto", archivo: "063.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240512-WA0091.jpg
    { tipo: "video", archivo: "v05.mp4", fecha: "2024-05", descripcion: "" },  // VID-20240512-WA0012.mp4
    { tipo: "foto", archivo: "064.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0052.jpg
    { tipo: "foto", archivo: "065.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0057.jpg
    { tipo: "foto", archivo: "066.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0067.jpg
    { tipo: "foto", archivo: "067.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0069.jpg
    { tipo: "foto", archivo: "068.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0071.jpg
    { tipo: "foto", archivo: "069.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0073.jpg
    { tipo: "foto", archivo: "070.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0075.jpg
    { tipo: "foto", archivo: "071.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0076.jpg
    { tipo: "foto", archivo: "072.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0084.jpg
    { tipo: "foto", archivo: "073.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0085.jpg
    { tipo: "foto", archivo: "074.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0086.jpg
    { tipo: "foto", archivo: "075.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0087.jpg
    { tipo: "foto", archivo: "076.jpg", fecha: "2024-05", descripcion: "" },  // IMG-20240530-WA0088.jpg
    { tipo: "foto", archivo: "077.jpg", fecha: "2024-06", descripcion: "" },  // IMG-20240629-WA0040.jpg
    { tipo: "foto", archivo: "078.jpg", fecha: "2024-06", descripcion: "" },  // IMG-20240630-WA0002.jpg
    { tipo: "foto", archivo: "079.jpg", fecha: "2024-06", descripcion: "" },  // IMG-20240630-WA0004.jpg
    { tipo: "foto", archivo: "080.jpg", fecha: "2024-06", descripcion: "" },  // IMG-20240630-WA0016.jpg
    { tipo: "foto", archivo: "081.jpg", fecha: "2024-06", descripcion: "" },  // IMG-20240630-WA0017.jpg
    { tipo: "foto", archivo: "082.jpg", fecha: "2024-06", descripcion: "" },  // IMG-20240630-WA0036.jpg
    { tipo: "foto", archivo: "083.jpg", fecha: "2024-08", descripcion: "" },  // IMG_7322.HEIC
    { tipo: "foto", archivo: "084.jpg", fecha: "2024-08", descripcion: "" },  // IMG_0193.HEIC
    { tipo: "video", archivo: "v06.mp4", fecha: "2024-08", descripcion: "" },  // IMG_0193.MP4
    { tipo: "foto", archivo: "085.jpg", fecha: "2024-08", descripcion: "" },  // IMG_0194.HEIC
    { tipo: "video", archivo: "v07.mp4", fecha: "2024-08", descripcion: "" },  // IMG_0194.MP4
    { tipo: "foto", archivo: "086.jpg", fecha: "2024-09", descripcion: "" },  // IMG_0196.HEIC
    { tipo: "video", archivo: "v08.mp4", fecha: "2024-09", descripcion: "" },  // IMG_0196.MP4
    { tipo: "foto", archivo: "087.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.08 (1
    { tipo: "foto", archivo: "088.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.08.jp
    { tipo: "foto", archivo: "089.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.09 (1
    { tipo: "foto", archivo: "090.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.09 (2
    { tipo: "foto", archivo: "091.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.09 (3
    { tipo: "foto", archivo: "092.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.09.jp
    { tipo: "foto", archivo: "093.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "094.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "095.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "096.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "097.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "098.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "099.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "100.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "101.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "102.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (1
    { tipo: "foto", archivo: "103.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (2
    { tipo: "foto", archivo: "104.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (3
    { tipo: "foto", archivo: "105.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (4
    { tipo: "foto", archivo: "106.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (5
    { tipo: "foto", archivo: "107.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (6
    { tipo: "foto", archivo: "108.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (7
    { tipo: "foto", archivo: "109.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (8
    { tipo: "foto", archivo: "110.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10 (9
    { tipo: "foto", archivo: "111.jpg", fecha: "", descripcion: "" },  // WhatsApp Image 2026-11-12 at 15.21.10.jp
  ],

  // Páginas en blanco donde ella puede escribir (se guarda en su celular)
  paginasNota: [
    { clave: "nota",   titulo: "Tu nota",                 ayuda: "Escribí acá lo que quieras…" },
    { clave: "futuro", titulo: "Lo que nos falta vivir",  ayuda: "Como en el libro de Ellie: lo que todavía no hicimos…" }
  ],

  carta: {
    saludo: "Mi amor:",
    texto: [
      "Gracias por ser mi compañera, mi amiga y mi amor. Gracias por todo lo que me enseñás y por todo lo que me hacés sentir, espero que seas eternamente feliz y que sigas aguantandome por mucho mas tiempo.",
      "Esto es algo tonto, pero realmente queria hacerte un regalo que te haga sonreir y que te recuerde lo mucho que te amo. Espero que te guste y que lo disfrutes tanto como yo disfruto de vos.",
      "Te amo con todo mi corazón.",
      "PD: Si seguis pasando las paginas hay otro regalo, pero no te lo voy a decir, es sorpresa."
    ]
  },

  vales: [
    { id: "cita",    titulo: "Cita sorpresa",            detalle: "Vos no sabés dónde. Yo sí Muejejjeje",          color: "pink" },
    { id: "pelis",   titulo: "Noche de películas",       detalle: "cenita, pochoclos y vos elegís la peli.",       color: "acid" },
    { id: "bolso",  titulo: "Bolso para la universidad", detalle: "Elegi el que mas te guste (que no te limite el precio, si te gusta es tuyo).", color: "lav" },
    { id: "cena",    titulo: "Cena",                     detalle: "Cocino yo (o pedimos, pero invito).", color: "cream" },
    { id: "mandas",  titulo: "Agus Day",                 detalle: "Elegís todo. Yo acompaño.",           color: "pink" },
    { id: "plan",    titulo: "Plan sorpresa",            detalle: "Canjealo y se activa.",               color: "acid" }
  ]
};
