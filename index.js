const { Timer } = require('./timer')

setInterval(() => {
  let timing = Timer('00:10:00')
  console.log(timing)
}, 1000)
