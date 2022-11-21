const dispositivo__texto = document.getElementById('dispositivo__texto')
const texto_pc = document.getElementById('texto_pc')
const texto_movil = document.getElementById('texto_movil')
const dispositivo_pc = document.getElementById('dispositivo_pc')

class Dispositivo {
    esMovil = false
    esTablet = false
    esAndroid = false
    esiPhone = false
    esiPad = false
    esOrdenador = false
    esWindows = false
    esLinux = false
    esMac = false
}

const deteccion = () => {
    dispositivo = new Dispositivo()

    if (navigator.userAgent.toLowerCase().match(/mobile/)) {
        dispositivo.esMovil = true
    }
    else {
        if (navigator.userAgent.toLowerCase().match(/tablet/))
            dispositivo.esTablet = true
        else
            dispositivo.esOrdenador = true
    }

    console.log(navigator.userAgent.toLocaleLowerCase())

    if (dispositivo.esMovil == true) {
        if (navigator.userAgent.toLowerCase().match(/android/)) {
            dispositivo.esAndroid = true
            dispositivo_pc.innerText = "Descargar"
            texto_movil.innerText = 'Click al boton para descargar la aplicacion'
            dispositivo_pc.href = 'https://drive.google.com/uc?id=16XT3BXz5njcTIXaEL4ubQcKnvQIpArmn&export=download&confirm=t&uuid=ebbb3e39-f45f-4c47-bebb-ec9e76e25333' 

        } else if (navigator.userAgent.toLowerCase().match(/ipad/)) {
            dispositivo.esiPad = true
            dispositivo_pc.innerText = "Descargar"
            texto_movil.innerText = 'Click al boton para descargar la aplicacion'
            dispositivo_pc.href = 'https://drive.google.com/uc?id=16XT3BXz5njcTIXaEL4ubQcKnvQIpArmn&export=download&confirm=t&uuid=ebbb3e39-f45f-4c47-bebb-ec9e76e25333' 
        } else {
            dispositivo.esiPhone = true
            dispositivo_pc.innerText = "Descargar"
            texto_movil.innerText = 'Click al boton para descargar la aplicacion'
            dispositivo_pc.href = 'https://drive.google.com/uc?id=16XT3BXz5njcTIXaEL4ubQcKnvQIpArmn&export=download&confirm=t&uuid=ebbb3e39-f45f-4c47-bebb-ec9e76e25333' 
        }
    } else if (dispositivo.esTablet == true)
        dispositivo__texto.innerText = "Tablet"
    else {
        if (navigator.userAgent.toLowerCase().match(/mac/)) {
            dispositivo.esMac = true
            texto_pc.innerText = 'Escanea el código QR para descargar la Aplicación o descárgala a través del link'
            dispositivo__texto.src = '/core/static/img/QR.png'
            dispositivo_pc.innerText = 'Descargar'
            dispositivo_pc.href = 'https://drive.google.com/uc?id=16XT3BXz5njcTIXaEL4ubQcKnvQIpArmn&export=download&confirm=t&uuid=ebbb3e39-f45f-4c47-bebb-ec9e76e25333' 
        } else if (navigator.userAgent.toLowerCase().match(/linux/)) {
            dispositivo.esLinux = true
            texto_pc.innerText = 'Escanea el código QR para descargar la Aplicación o descárgala a través del link'
            dispositivo__texto.src = '/core/static/img/QR.png'
            dispositivo_pc.innerText = 'Descargar'
            dispositivo_pc.href = 'https://drive.google.com/uc?id=16XT3BXz5njcTIXaEL4ubQcKnvQIpArmn&export=download&confirm=t&uuid=ebbb3e39-f45f-4c47-bebb-ec9e76e25333' 
        } else {
            dispositivo.esWindows = true
            texto_pc.innerText = 'Escanea el código QR para descargar la Aplicación o descárgala a través del link'
            dispositivo__texto.src = '/core/static/img/QR.png'
            dispositivo_pc.innerText = 'Descargar'
            dispositivo_pc.href = 'https://drive.google.com/uc?id=16XT3BXz5njcTIXaEL4ubQcKnvQIpArmn&export=download&confirm=t&uuid=ebbb3e39-f45f-4c47-bebb-ec9e76e25333' 
        }
    }
} 

window.addEventListener('load', deteccion())