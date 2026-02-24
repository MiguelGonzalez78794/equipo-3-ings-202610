# Requisitos Funcionales
A continuación, se presentan los requisitos funcionales iniciales considerados para el proyecto

## F-01. Inicio de sesión institucional (2) 	
**Prioridad:** P(1)

**Descripción:** Como usuario, quisiera iniciar sesión en el aplicativo usando mi ID y contraseña para acceder al contenido de la app
Dado que el usuario tiene asignado un ID, y este se encuentra en la pantalla de log in, puede ingresar su ID y contraseña para iniciar sesión
*	Escenario (Inicio de sesión exitoso)
	*	Dado que el usuario intenta iniciar sesión
    *	Cuando el usuario ingresa credenciales correctas, logra un inicio de sesión satisfactorio
    *	Entonces el aplicativo permite un inicio de sesión

*	Escenario (Inicio de sesión fallido)
	*	Dado que el usuario intenta iniciar sesión
    *	Cuando el usuario ingresa credenciales erradas, no logra un inicio de sesión satisfactorio
    *	Entonces el aplicativo no le permite iniciar sesión

## F-02. Cierre de sesión seguro (1) 	
**Prioridad:** P(1)

**Descripción:** Como usuario, quisiera poder cerrar sesión y que no quede información en el aplicativo
*	Escenario (Cierre de sesión)
	*	Dado que el usuario intenta cerrar sesión, en su perfil
    *	Cuando el usuario presione el botón "Cerrar sesión" esta se cierre
    *	Entonces el aplicativo cierra la sesión del usuario y lo lleva a la página principal

## F-03. Mapa Interactivo UPB (5)	
**Prioridad:** P(0)
**Descripción:** Como usuario, me gustaría poder acceder a un mapa de la universidad, además, me gustaría poder interactuar con este para acceder a la información de cada ubicación relevante.

* F-03.1. Mapa con ubicación a tiempo real (3)
**Prioridad:** P(0)

*	Escenario (Uso de mapa)
	*	Dado que el usuario está en la UPB con el aplicativo abierto
    *	Cuando el usuario ingresa carga el mapa
    *	Entonces el aplicativo presenta 


* F-03.2. Botones de información en el mapa 2
**Prioridad:** P(0)

*	Escenario (Uso de funcionalidades)
	*	Dado que el usuario se encuentra en la sección de "mapa", este puede interactuar con él por medio de botones ubicados sobre cada sitio de interés de la universidad
    *	Cuando el usuario hace click en un botón de una ubicación, este encontrará información corta y relevante sobre este, además de una imagen de referencia
    *	Entonces el aplicativo despliega la información pertinente de la consulta

## F-04. Información general de profesores (2) 	
**Prioridad:** P(2)

**Descripción:** Como usuario quisiera encontrar información de contacto de mis profesores en un mismo sitio
*	Escenario (Búsqueda de un profesor)
	*	Dado que el usuario se encuentra en la sección de profesores
    *	Cuando el usuario esta en la sección profesores, encuentra un listado de todos los profesores, con correo y oficina (en caso de tener una) 
    *	Entonces el aplicativo le despliega el profesor a elegir con su respectivo correo y oficina (si tiene)
 

## F-05. Centros deportivos y culturales UPB (5)		
**Prioridad:** P(3)

**Descripción:** Como usuario, me sería interesante tener la oportunidad de conocer los espacios deportivos y culturales que la universidad tiene para ofrecerme. Poder acercarme un poco a ellos y en su caso poderme unir a uno de mi interés
*	Escenario (Búsqueda exitosa del centro deportivo/cultural)
	*	Dado que el usuario consulta mediante las funcionalidades un centro deportivo y/o cultural
    *	Cuando el usuario realiza la búsqueda, se le presentan todos los elementos relacionados o por defecto todos los centros.
    *	Entonces el aplicativo despliega los centros que haya buscado el usuario o por defecto todos los resultados

## F-06. Oferta culinaria/restaurantes (2) 	
**Prioridad:** P(3)

**Descripción:** Como usuario, quisiera saber donde se encuentran los mejores restaurantes (y el mejor helado) dentro de la universidad
*	Escenario (Búsqueda exitosa de los restaurantes)
	*	Dado que el usuario busca mediante las funcionalidades el apartado de oferta culinaria
    *	Cuando el usuario ingresa la oferta culinaria de su interes, se le presenta los resultados relacionados
    *	Entonces el aplicativo despliega la oferta culinaria segun la consulta del usuario

## F-07. Recuperación de contraseña (2) 
**Prioridad:** P(1)

**Descripción:** Como usuario, me gustaría que en caso de olvidar o perder mi contraseña, pueda cambiar haciendo uso de mi correo institucional
el usuario puede recuperar su contraseña
*	Escenario (Reestablecimiento correcto de la contraseña)
	*	Dado que el usuario intenta recuperar la contraseña de su cuenta
    *	Cuando el usuario pida el cambio de contraseña y pueda verificar su identidad, podrá cambiar su contraseña
    *	Entonces el aplicativo olvida la contraseña antigua y actualiza a la nueva contraseña

## F-08. Versión para dispositivos móviles (3)	
**Prioridad:** P(0)

**Descripción:** Como usuario, me facilitaría mucho el poder acceder desde mi celular a el aplicativo desarrollado, puesto que es mucho mas simple acceder desde una aplicación que desde una página web.
*	Escenario (Instalación de la aplicación exitosa)
	*	Dado que el usuario quiere tener un acceso facil desde su movil al aplicativo
    *	Cuando el usuario ingrese a su appstore de confianza podrá descargar el aplicativo sin importar el dispositivo
    *	Entonces el aplicativo se descarga en el dispositvio del usuario

## F-09. Solicitud rápida de turnos en atención integral (5)	
**Prioridad:** P(3)

**Descripción:** Como usuario, sería mucho más fácil realizar peticiones y/o agendar citas acerca de tramites estudiantiles desde un aplicativo, ahorrándome así largas filas de espera.
*	Escenario (Envio de solicitud)
	*	Dado que el usuario necesita agendar una cita en asesoría integral
    *	Cuando el usuario esté en el apartado de "Asesoría Integral" puede agendar una cita o en su defecto generar un ticket de petición
    *	Entonces el aplicativo registra, guarda y apila las solicitudes para que un asesor las procese


## **F-10. Chat rápido con el mentor (2)** 💬

**Prioridad:** P(2)

**Descripción:** Como usuario, sería conveniente que tenga una forma de contactar a mi mentor de forma rápida mientras me encuentro usando la aplicación en caso de requerirlo.

*  Escenario (Estudiante Nuevo):
    *   Dado que el usuario es un estudiante nuevo y se encuentra usando la app, 
    *   Cuando este accede a la pestaña "mentoría"
    *   Entonces el aplicativo abre una ventana de chat con su mentor


*   Escenario (Mentor):
    *   Dado que el usuario es un mentor y usa la app
    *   Cuando este acceda la pestaña de "mentoría"
    *   Entonces el aplicativo muestra el listado de los chats con los estudiantes asignados



## **F-11. Tutoriales de los debidos procesos académicos (1)** 📄

**Prioridad:** P(2)


**Descripción:** Como estudiante nuevo, me interesa poder aprender todos los procesos académicos para solicitar supletorios, aplazamientos, matricular materias, etc. Todo en un mismo lugar.

*   Escenario (Proceso Listado):
    *   Dado que el usuario se encuentra en "Procesos Académicos"
    *   Cuando este selecciona un proceso de la lista
    *   Entonces se muestra una guía paso a paso con imágenes




## **F-12. Accesos directos institucionales (0)** ⚡

**Prioridad:** P(3)



**Descripción:** Como usuario me gustaría poder acceder a Moodle, Brightspace, SIGAA, mi correo y otras plataformas en pocos clicks en un mismo lugar

*   Escenario (Acceder):
    *   Dado que el usuario se encuentra en la sección de accesos directos
    *   Cuando hace click en cualquiera de estos
    *   Entonces el aplicativo abre una pestaña del servicio específico en el navegador



## **F-13. Preguntas frecuentes de primiparos y no primiparos (1)** ❓

**Prioridad:** P(2)



**Descripción:** Como usuario, tengo momentos en los que se me generan dudas que seguramente comparto con otros compañeros, por lo que me gustaría una sección donde pueda encontrar la respuesta a todas estas inquietudes sin tener que contactar a alguien o investigar
*   Escenario (FAQ)
    *   Dado que el usuario se encuentra en la sección "FAQ"
    *   Cuando este hace click en cualquiera de las preguntas listadas
    *   Entonces el aplicativo desplegará una respuesta breve, junto con la opción "¿Aún con dudas?" 

*   Escenario (¿Aún con dudas?)
    *   Dado que el usuario se encuentra en "FAQ" y hay una respuesta desplegada
    *   Cuando este hace click en "¿Aún con dudas?"
    *   Entonces aplicativo lo redirigirá a los foros para publicar la duda



## **F-14. Barra de búsqueda con sistema de etiquetas (8)** 🏷️

**Prioridad:** P(2)



**Descripción:** Como usuario, me gustaría poder buscar específicamente algún lugar que yo necesite, seleccionarlo y que se me lleve a ese lugar sin necesidad de buscarlo yo manualmente en el mapa

* F-14.1. Agilizar usando la Barra de Búsqueda (1)    

    **Prioridad:** P(3)
    *   Escenario (Buscar):
        *   Dado que el usuario se encuentra en "Buscar"
        *   Cuando este escribe un término o palabras clave y hace click en buscar
        *   Entonces el aplicativo mostrará contenido con relación a lo buscado
    
    *   Escenario (Sin Resultados al Buscar):
        *   Dado que el usuario se encuentra en "Buscar" e hizo una consulta sin resultados
        *   Cuando este hace click en el botón "Usar filtros"
        *   Entonces el aplicativo regresará al inicio de la búsqueda y ofrecerá usar etiquetas

* F-14.2. Facilitar usando sistema de etiquetas (5)

    **Prioridad:** P(0)
    *   Escenario (Buscar):
        *   Dado que el usuario se encuentra en "Buscar"
        *   Cuando este hace click en el botón de filtrar y selecciona una etiqueta
        *   Entonces el aplicativo buscará automáticamente las secciones marcadas y las mostrará

    


## **F-15. El aplicativo le envía al usuario información de eventos (2)** 🔔

**Prioridad:** P(3)



**Descripción:** Como usuario, me interesa conocer todos los eventos y actividades que la universidad realiza, por lo que poder encontrar estos en mi bandeja de notificaciones sería llamativo.
*   Escenario (Computadora)
    *   Dado que el usuario usa el aplicativo en una computadora
    *   Cuando este hace click en el ícono de la campana en el header
    *   Entonces el aplicativo enviará notificaciones con eventos por medio del navegador 

*   Escenario (Dispositivo Móvil)
    *   Dado que el usuario usa el aplicativo en un dispositivo móvil
    *   Cuando este hace click en el ícono de la campana
    *   Entonces el aplicativo enviará notificaciones con eventos a la bandeja del usuario

*   Escenario (Click en notificación)
    *   Dado que el usuario recibe notificaciones del aplicativo
    *   Cuando este hace click en una notificación en particular
    *   Entonces su navegador abrirá una pestaña con información del evento 



## **F-16. Actividades que permiten conocer la universidad (5)** 🔎

**Prioridad:** P(1)

**Descripción:** Como usuario, me parece importante que se me enseñe cada instalación dentro de la universidad que se me ofrece, para ello me parecería interesante que la app me proponga ir a explorar diferentes instalaciones mediante actividades con alguna recompensa menor

* F-16.1. Conocer un nuevo lugar (2)    

    **Prioridad:** P(3)
    *   Escenario (Recomendado):
        *   Dado que el usuario se encuentra en "Conoce la Universidad"
        *   Cuando este hace click en "Recomendado de hoy"
        *   Entonces el aplicativo revelará el lugar a conocer con información de este y una opción de encontrar
    
    *   Escenario (Seleccionado):
        *   Dado que el usuario se encuentra en "Conoce la Universidad"
        *   Cuando este elige "Escoger por hoy"
        *   Entonces el aplicativo muestra información del lugar a conocer y una opción de encontrar

    *   Escenario (Ir al Lugar):
        *   Dado que el usuario se encuentra en "Conoce la Universidad" y tiene un lugar asignado
        *   Cuando este se dirige al sitio en específico y da click en finalizar
        *   Entonces el aplicativo verifica su ubicación usando el GPS e inicia un cuestionario sobre la actividad realizada

* F-16.2. Guiar al usuario con el mapa (3)

    **Prioridad:** P(0)
    *   Escenario (Encontrar lugar):
        *   Dado que el usuario se encuentra en "Conoce la Universidad" y tiene información de un lugar
        *   Cuando este hace click en el botón de "Encontrar"
        *   Entonces el aplicativo lo redirigirá al mapa con la ruta hacia el lugar en cuestión

* F-16.3. Recompensar al usuario por conocer la universidad (3)

    **Prioridad:** P(0)
    *   Escenario (El usuario finaliza las actividades):
        *   Dado que el usuario se encuentra en "Conoce la Universidad" y tiene información de un lugar
        *   Cuando este finaliza la última actividad disponible
        *   Entonces el aplicativo presentará varias opciones a elegir para ser recompensado



## **F-17. El usuario puede hacer uso de recursos de estudio guía (8)** 🧠

**Prioridad:** P(2)



**Descripción:** Como usuario, me encantaría poder acceder fácilmente a talleres y evaluaciones pasadas que me ayuden a prepararme para próximos exámenes en una materia a mi elección, además me parecería aún mejor que los recursos de estudio se me ofrezcan según como progrese el plan de estudios para así saber con certeza como planificar.

*   Escenario (Estudiante Regular):
    *   Dado que el usuario se encuentra en "*Materia*: Cronograma"
    *   Cuando este da click en una semana específica del "clase a clase" 
    *   Entonces la aplicación muestra secciones de materiales de estudio pertinentes.

*   Escenario (Estudiante Monitor):
    *   Dado que el usuario se encuentra en "*Materia*: Cronograma"
    *   Cuando este selecciona "adjuntar" en una semana específica del "clase a clase" y añade material
    *   Entonces el sistema actualiza la sección y muestra el vídeo, bloc de notas, etc. adicional
        *   Nota: No disponible para estudiante regular

*   Escenario (Actualizar Materia):
    *   Dado que el usuario es un profesor y se encuentra en "*Materia*: Cronograma"
    *   Cuando este selecciona una materia y da click en subir PDF
    *   Entonces el sistema parsea la tabla a un HTML y presenta un formulario de material de estudio

*   Escenario (Llenar Formulario):
    *   Dado que el usuario es un profesor y subió un PDF
    *   Cuando este llena cada campo semanal con imágenes, texto y enlaces
    *   Entonces el sistema añade un botón a cada semana con el material de estudio adjuntado

## **F-18. Solicitar ayuda de bienestar institucional (5)** 🫂

**Prioridad:** P(1)



**Descripción:** Como usuario, existen momentos estudiantiles y personales donde me veo en necesidad de un apoyo que me ayude a seguir y superar mis situaciones difíciles, por lo que sería excelente poder contactar con ayuda del bienestar institucional en cualquier momento

*   Escenario (Solicitar Ayuda):
    *   Dado que el usuario se encuentra en "Bienestar"
    *   Cuando hace click en solicitar apoyo y suministra información solicitada
    *   Entonces el sistema envía la solicitud en formato de ticket a bienestar y da una confirmación al usuario
    
*   Escenario (Recibir Solicitud):
    *   Dado que el usuario se encuentra envío una solicitud de "Bienestar"
    *   Cuando el asesor UPB revisa la bandeja del correo 
    *   Entonces encontrará los correos que el sistema envío, los cuales tienen como contenido la información suministrada
    

## **F-19. El usuario puede reportar problemas en un bloque especifico (5)** 🏢

**Prioridad:** P(3)



**Descripción:** Como usuario, es muy común ir a cualquier lugar dentro de la universidad y encontrarme algún objeto perdido por ahí, por lo que me parecería perfecto el yo poder dar a conocer el objeto y la ubicación para que así el dueño lo localice mucho más fácil.

*   Escenario (Objeto Encontrado):
    *   Dado que el usuario se encuentra en la sección "reportes: objetos perdidos"
    *   Cuando este selecciona reportar y suministra una foto junto con el lugar
    *   Entonces el aplicativo publica el objeto en el tablero y muestra al usuario los siguientes pasos
        *   Nota: "Los siguientes pasos": Como entregar el objeto a personal encargado

*   Escenario (Objeto perdido):
    *   Dado que el usuario se encuentra en la sección "reportes: objetos perdidos"
    *   Cuando este hace click en un objeto particular
    *   Entonces será guiado hacia el lugar respectivo y el sistema notificará al encargado
        *   Nota: El aplicativo no determina si el usuario es dueño o no del objeto


## **F-20. Publicación de ofertas de emprendedores (3)** 💰

**Prioridad:** P(3)



**Descripción:** Cómo usuario, me facilitaría tener un foro donde pueda publicitar mi emprendimiento para darme una mejor visibilidad y a su vez darme a conocer a todo posible cliente interesado. A su vez el consumidor podrá conocer la gran cantidad de emprendimientos que la comunidad ofrece

*   Escenario (Publicar):
    *   Dado que el usuario se encuentra en "Emprendimientos"
    *   Cuando este selecciona "publicar" y añade texto e imágenes
    *   Entonces el aplicativo válida la información y publica el anuncio en el tablero 

*   Escenario (Navegar):
    *   Dado que el usuario se encuentra en "Emprendimientos"
    *   Cuando este hace click en la sección de un emprendimiento
    *   Entonces el aplicativo muestra la información completa de este, incluidas imágenes y texto

