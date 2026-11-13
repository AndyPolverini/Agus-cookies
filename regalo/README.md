# Libro de recuerdos (estilo Adventure Book de UP)

HTML + CSS + JS puro. Sin frameworks, sin build, sin servicios pagos.

## Cómo probarlo
Abrilo con un servidor local (los celulares/navegadores son más estrictos con archivos sueltos):
`python3 -m http.server 8000` y entrá a `http://localhost:8000`.

## Personalizar (todo en `config.js`)
- **Nombre, fecha, título, mensaje, firma:** primeras líneas.
- **Recuerdos:** fotos y videos ya están cargados (optimizados) en `recuerdos`, en orden cronológico. Para sumar uno, copialo a `assets/fotos/` o `assets/videos/` y agregá `{ tipo: "foto", archivo: "x.jpg", fecha: "2024-05", descripcion: "..." }`. Para reordenar, mové las líneas. Se agrupan 4 fotos (o 2 videos) por página y por mes.
- **Notas:** la carta tuya es la 2ª página; `paginasNota` define las páginas en blanco donde ella escribe (se guarda en su celular y tiene botón para copiar).
- **Carta:** cada texto de `carta.texto` es un párrafo.
- **Vales:** editá, quitá o agregá objetos en `vales` (`color`: pink, acid, lav, cream). El estado "usado" queda guardado en el celular de ella.
- **Música:** `assets/musica/ambiente.mp3` (opcional, solo suena si ella toca ♪).

## Optimizar fotos
Redimensioná a ~1200 px de ancho y comprimí (JPG calidad 75–80, ideal < 300 KB c/u) con squoosh.app (gratis).
Videos: MP4 H.264, 720p, idealmente < 20 MB.

## Publicar (gratis)
- **GitHub Pages:** subí la carpeta a un repo → Settings → Pages → rama `main`, carpeta `/ (root)`. URL: `https://TU-USUARIO.github.io/NOMBRE-REPO/`
- **Cloudflare Pages:** "Create project" → subida directa o repo, sin comando de build, directorio de salida `/`.
Las rutas son relativas, funcionan en subcarpetas.

## QR
Con la URL definitiva, generá el QR en qrcode-monkey.com o con `qrencode -o qr.png "https://tu-url"`. Probalo con tu propio celular antes de imprimirlo.
