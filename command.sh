
# Definí tus rutas aquí:
REPO_DIR=~/domains/tudominio.com/git/Portfolio    # Carpeta donde está tu repo clonado
PUBLIC_DIR=~/domains/tudominio.com/public_html    # Carpeta pública de tu web

echo "Limpiando carpeta pública..."
rm -rf "$PUBLIC_DIR"/*

echo "Copiando build estático a carpeta pública..."
cp -r "$REPO_DIR/out"/* "$PUBLIC_DIR"

echo "Despliegue completado."
