# Registro de Acceso

Formulario simple que pide **nombre, edad, teléfono y correo electrónico**, valida los datos y, al enviarlos, muestra un panel (dashboard) con la información capturada.

No usa frameworks ni dependencias externas: es HTML, CSS y JavaScript puro, así que funciona con solo abrir `index.html`.

## Estructura

```
registro-usuario/
├── index.html   # Formulario + dashboard (dos pantallas en un solo archivo)
├── style.css    # Estilos
├── app.js       # Validación y lógica de transición
└── README.md
```

## Cómo probarlo localmente

Solo abre `index.html` en tu navegador. No necesitas servidor ni instalación.

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en GitHub (sin README, para evitar conflictos).
2. En tu terminal, dentro de la carpeta `registro-usuario`:

```bash
git init
git add .
git commit -m "Formulario de registro con dashboard"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

3. (Opcional) Para verlo publicado con GitHub Pages:
   - Ve a **Settings → Pages** en tu repositorio.
   - En "Branch", selecciona `main` y la carpeta `/ (root)`.
   - Guarda; en un par de minutos tu formulario estará disponible en `https://TU-USUARIO.github.io/TU-REPO/`.

## Personalizarlo

- Los campos y su validación están en `app.js`, dentro de `validarCampos()`.
- Si quieres que los datos se envíen a un backend en vez de solo mostrarse en el dashboard, agrega un `fetch()` dentro del listener `formulario.addEventListener('submit', ...)` justo antes de llamar a `irAlDashboard(datos)`.
