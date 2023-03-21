// Selecciono el elemento a mover
const $square = document.querySelector('.cuadrado')

/*
** Creo una instancia del giroscopio
** frequency fuerza a que la velocidad de la animación se genera a 60Gz
*/ 
const sensor = new Gyroscope({frequency: 60})

// Inicio el giroscopio
sensor.start()

// Establezco los valores iniciales del giroscopio
const sensorPosition = {
  x: 0,
  y: 0,
  z: 0
}

// Por cada lectura de movimiento, establece la posición
sensor.onreading = () => {
  sensorPosition.x += (sensor.x - sensorPosition.x) * 0.1
  sensorPosition.y += (sensor.y - sensorPosition.y) * 0.1
  sensorPosition.z += (sensor.z - sensorPosition.z) * 0.1
}

// Función que hace los cambios de transformación del elemento
const animate = () => {
  $square.style.transform = 'none'
  $square.style.transform = `translate3d(${sensorPosition.y * 30}px, ${sensorPosition.x * 30}px, ${sensorPosition.z * -30}px)`
  // Aviso al navegador que se prepare para refrescar el DOM
  requestAnimationFrame(animate)
}
animate()