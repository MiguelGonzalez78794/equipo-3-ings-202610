# Requisitos Funcionales
A continuación se presentan los requisitcos funcionales iniciales considerados para el proyecto

## F-01. Inicio de sesión institucional (2) 	
**Prioridad:** P(1)

**Descripción:** Como usuario, quisiera iniciar sesión en el aplicativo usando mi ID y contraseña para acceder al contenido de la app
Dado que el usuario tiene asignado un ID, y este se encuentra en la pantalla de log in, puede ingresar su ID y contraseña para iniciar sesión
*	Escenario (Inicio de sesión exitoso)
	*	Dado que el usuario intenta iniciar sesión
    *	Cuando el usuario ingresa credenciales correctas, logra un inicio de sesión satisfactorio
    *	Entonces el aplicativo permite un inicio de sesión

*	Escenario (Inicio de sesion fallido)
	*	Dado que el usuario intenta iniciar sesión
    *	Cuando el usuario ingresa credenciales erradas, no logra un inicio de sesión satisfactorio
    *	Entonces el aplicativo no le permite iniciar sesión

## F-02. Cierre de sesión seguro (1) 	
**Prioridad:** P(1)

**Descripcióon:** Como usuario, quisiera poder cerrar sesión y que no quede información en el aplicativo
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
	*	Dado que el usuario está en la upb con el aplicativo abierto
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
*	Escenario (Busqueda de un profesor)
	*	Dado que el usuario se encuentra en la sección de profesores
    *	Cuando el usuario esta en la sección profesores, encuentra un listado de todos los profesores, con correo y oficina (en caso de tener una) 
    *	Entonces el aplicativo le despliega el profesor a elegir con su respectivo correo y oficina (si tiene)
 

## F-05. Centros deportivos y culturales UPB (5)		
**Prioridad:** P(3)

**Descripción:** Como usuario, me sería interesante tener la oportunidad de conocer los espacios deportivos y culturales que la universidad tiene para ofrecerme. Poder acercarme un poco a ellos y en su caso poderme unir a uno de mi interés
*	Escenario (Busqueda exitosa del centro deportivo/cultural)
	*	Dado que el usuario consulta mediante las funcionalidades un centro deportivo y/o cultural
    *	Cuando el usuario realiza la busqueda, se le presentan todos los elementos relacionados con su busqueda o por defecto todos los centros.
    *	Entonces el aplicativo despliega los centros que haya buscado el usuario o por defecto todos los resultados

## F-06. Oferta culinaria/restaurantes (2) 	
**Prioridad:** P(3)

**Descripción:** Como usuario, quisiera saber donde se encuentran los mejores restaurantes (y el mejor helado) dentro de la universidad
*	Escenario (Busqueda exitosa de los restaurantes)
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


## **F-10. Chat rápido con el mentor (2)**			

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
