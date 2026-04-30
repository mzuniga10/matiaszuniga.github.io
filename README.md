# Página Web - Plásticos Lambruchini

## 🌱 Descripción

Sitio web corporativo para Plásticos Lambruchini SpA, empresa chilena dedicada al reciclaje de plásticos y fabricación de productos sustentables.

## 📁 Estructura del Proyecto

```
web/
├── index.html              # Página principal
├── custom-style.css        # Estilos personalizados (tema verde/ambiental)
├── logo.png               # Logo de la empresa
├── plasticos_lambruchini_spa.png  # Imagen informativa
├── web_template/          # Template HTML5 UP Editorial
│   ├── assets/           # CSS, JS, fuentes
│   ├── images/           # Imágenes del template
│   └── *.html            # Páginas de ejemplo
└── CLAUDE.md             # Documentación para Claude Code
```

## 🚀 Cómo Ver la Página

### Opción 1: Abrir directamente en el navegador
1. Navega a la carpeta `/Users/matias__zv/Desktop/web/`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

### Opción 2: Usar un servidor local (recomendado)

**Con Python:**
```bash
cd /Users/matias__zv/Desktop/web/
python3 -m http.server 8000
```
Luego abre: http://localhost:8000

**Con Node.js (http-server):**
```bash
cd /Users/matias__zv/Desktop/web/
npx http-server -p 8000
```
Luego abre: http://localhost:8000

## 🎨 Características

### Contenido Incluido
✅ **Banner principal** con misión y visión
✅ **Sección de servicios** (Reciclaje, Pellets, Mangas, Bolsas)
✅ **Compromiso ambiental** destacado
✅ **Información de contacto** real
✅ **Diseño responsive** (se adapta a móviles)
✅ **Tema verde/ecológico** personalizado

### Información de Contacto
- **Teléfono:** +56 9 6571 6042
- **Email:** contacto@plasticoslambruchini.cl
- **Web:** www.plasticoslambruchini.cl
- **Redes sociales:** Instagram, Facebook, WhatsApp

## 🛠️ Personalización

### Cambiar Colores
Edita el archivo `custom-style.css` y modifica las variables en `:root`:
```css
:root {
	--color-primary: #2d8659;      /* Verde principal */
	--color-primary-light: #3fa36d;
	--color-primary-dark: #1f5e3f;
	--color-accent: #5cb85c;
}
```

### Modificar Contenido
Edita `index.html` directamente. Las secciones principales están claramente comentadas:
- `<!-- Banner -->` - Sección hero principal
- `<!-- Servicios -->` - Tarjetas de servicios
- `<!-- Compromiso Ambiental -->` - Valores ambientales
- `<!-- Contacto -->` - Información de contacto

### Agregar Nuevas Páginas
Puedes usar `web_template/generic.html` como plantilla para crear nuevas páginas.

## 📱 Responsive Design

La página se adapta automáticamente a:
- 📱 Móviles (< 736px)
- 📱 Tablets (736px - 980px)
- 💻 Desktop (> 980px)

El menú lateral se convierte en un menú hamburguesa en pantallas pequeñas.

## 🔗 Créditos

- **Template:** [HTML5 UP Editorial](https://html5up.net/editorial)
- **Licencia:** CCA 3.0 (uso personal y comercial)
- **Iconos:** Font Awesome
- **Tipografía:** Open Sans, Roboto Slab

## 📝 Próximos Pasos Sugeridos

1. ✨ Reemplazar imágenes de ejemplo con fotos reales de la empresa
2. 📧 Configurar formulario de contacto funcional
3. 🖼️ Agregar galería de productos
4. 📄 Crear páginas adicionales (Sobre Nosotros, Proyectos, etc.)
5. 🔍 Optimización SEO
6. 🌐 Registro de dominio y hosting

---

**Desarrollado para Plásticos Lambruchini SpA** 🌱♻️
