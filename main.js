const boton1 = document.getElementById("btnRedondo1")
const boton2 = document.getElementById("btnRedondo2")
const boton3 = document.getElementById("btnRedondo3")

boton1.addEventListener('click', function() {
    textoDinamico.innerHTML = "<p>¡Hola! Mi nombre es Maxi, soy un desarrollador web con cinco años de experiencia dirigiendo proyectos de diseño de páginas web incluyendo la recopilación de las necesidades de los usuarios, producción de código, creación de maquetas y mejora del diseño para clientes exigentes. Centrado en la creación de códigos claros, robustos y con una seguridad excepcional. Capacidad para cumplir con los objetivos de compatibilidad y al mismo tiempo cumplir y superar las demandas del cliente..</p>"
})

boton2.addEventListener('click', function() {
    textoDinamico.innerHTML = "<p>A lo largo de mi experiencia como desarrollador web, participé en más de 15 proyectos digitales y colaboré con un equipo de diseñadores, copywriters creativos, project managers y Q&A testers.Reduje el porcentaje de errores mensuales de la página de inicio del portal de una compañía en un 10%.Como parte del comité de mejoras continuas de la empresa, colaboré para optimizar los tiempos de carga de la página web en un 15%.</p>"
})

boton3.addEventListener('click', function() {
    textoDinamico.innerHTML = "<p>Como profesional de desarrollo web,mis habilidades son: Dominio de PHP, MySQL, HTML5, CSS3 y Javascript.Conocimiento de las bases de datos MySQL, PostgreSQL.Capacidad de liderazgo y trabajo en equipo. Adaptacion al cambio.Actualizacion Continua de nuevas tecnologias, lenguajes, y un gran interes por la inteligencia artificial.</p>"
})

const el = document.getElementById("poster")
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20

    const xRotation = (
        (layerY - width / 2) / height
    ) * 20

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
    `
    el.style.transform = string
})

el.addEventListener('mouseout', () => {
    el.style.transform = `
        perspective(500px)
        scale(1.0)
        rotateX(0)
        rotateY(0)
    `
})