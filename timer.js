let sInicial = 0
let mInicial = 0
let hInicial = 0

let sOriginal = 0
let porcentagemFormatada = 0

function Timer(horaEstimadaParam) {
  let hEstimado = parseInt(horaEstimadaParam.substring(0, 2))

  let mEstimado = parseInt(horaEstimadaParam.substring(3, 5))

  let sEstimado = parseInt(horaEstimadaParam.substring(6, 8))

  let horaEstimada = `${hEstimado}:${mEstimado}:${sEstimado}`

  let horaEstimadaEmSegundos = hEstimado * 60 * 60
  let minutosEstimadosEmSegundos = mEstimado * 60

  let tempoRodando = `${hInicial}:${mInicial}:${sInicial}`

  let timer = ''

  sInicial++
  sOriginal++

  if (sInicial === 60) {
    sInicial = 0
    mInicial++
  }

  if (mInicial === 60) {
    mInicial = 0
    hInicial++
  }

  if (hInicial < 10 && mInicial < 10 && sInicial >= 10) {
    timer = `0${hInicial}:0${mInicial}:${sInicial}`
  } else if (hInicial < 10 && mInicial < 10 && sInicial < 10) {
    timer = `0${hInicial}:0${mInicial}:0${sInicial}`
  }

  if (mInicial >= 10 && hInicial < 10 && sInicial < 10) {
    timer = `0${hInicial}:${mInicial}:0${sInicial}`
  } else if (mInicial < 10 && sInicial < 10 && hInicial < 10) {
    timer = `0${hInicial}:0${mInicial}:0${sInicial}`
  }

  if (hInicial >= 10 && mInicial < 10 && sInicial < 10) {
    timer = `${hInicial}:0${mInicial}:0${sInicial}`
  } else if (hInicial < 10 && mInicial < 10 && sInicial < 10) {
    timer = `0${hInicial}:0${mInicial}:0${sInicial}`
  }

  if (hInicial < 10 && mInicial >= 10 && sInicial >= 10) {
    timer = `0${hInicial}:${mInicial}:${sInicial}`
  }

  if (hInicial >= 10 && mInicial >= 10 && sInicial >= 10) {
    timer = `${hInicial}:${mInicial}:${sInicial}`
  }

  const calculoPorcentagem = () => {
    let umPorcento = 0
    let tempoSubtraido = 0

    if (hEstimado >= 1) {
      tempoSubtraido = horaEstimadaEmSegundos - sOriginal
      umPorcento = horaEstimadaEmSegundos / 100
    } else if (hEstimado < 1 && mEstimado < 60 && mEstimado > 0) {
      tempoSubtraido = minutosEstimadosEmSegundos - sOriginal
      umPorcento = minutosEstimadosEmSegundos / 100
    }

    let porcentagemRestante = tempoSubtraido / umPorcento

    let porcentagemProgresso = 100 - porcentagemRestante
    let porcentagemInteira = Math.floor(porcentagemProgresso)

    porcentagemFormatada = porcentagemProgresso.toFixed(2) + '%'
    return { porcentagemFormatada, timer, porcentagemInteira }
  }

  return calculoPorcentagem()
}

// function initTimer(horaEstimada) {
  // let teste = 0

  // return new Promise((resolve, reject) => {
  // setInterval(() => {
    // teste = Timer(horaEstimada)
    // return Timer(horaEstimada)
    // resolve(teste)
  // }, 1000)
  // })
  // .then(res => (res))
// }

module.exports = {
  Timer
}
