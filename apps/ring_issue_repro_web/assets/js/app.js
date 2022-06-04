import css from '../css/app.css'
import 'phoenix_html'
import { Socket } from 'phoenix'
import { LiveSocket } from 'phoenix_live_view'
import topbar from 'topbar'
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'

window.Alpine = Alpine
Alpine.plugin(focus)
Alpine.start()

// Define hooks
const Hooks = {}

// Used to pass saved state from local storage to view's mount function
// Can access in mount() with:
// connect_params = get_connect_params(socket)["connect_params"]
function buildConnectParamsCallback(csrfToken) {
  return () => {
    if (window.connectParams) {
      return {
        _csrf_token: csrfToken,
        connect_params: window.connectParams,
      }
    } else {
      return {
        _csrf_token: csrfToken,
      }
    }
  }
}

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute('content')
let liveSocket = new LiveSocket('/live', Socket, {
  dom: {
    onBeforeElUpdated(from, to) {
      if (from._x_dataStack) {
        window.Alpine.clone(from, to)
      }
    },
  },
  params: buildConnectParamsCallback(csrfToken),
  hooks: Hooks,
  // logger: (kind, msg, data) => console.log(`${kind}: ${msg}`, data),
})

// Show progress bar on live navigation and form submits
topbar.config({
  autoRun: false,
  barThickness: 12,
  barColors: {
    0: '#D1DED3',
    '.25': '#EFEFEF',
    '.50': '#FAFC8D',
    '.75': '#FFF0EC',
    '1.0': '#FFD8C8',
  },
  shadowBlur: 5,
  shadowColor: 'rgba(0, 0, 0, .5)',
  className: 'topbar',
})

let topBarScheduled = undefined
window.addEventListener('phx:page-loading-start', () => {
  if (!topBarScheduled) {
    topBarScheduled = setTimeout(() => topbar.show(), 150)
  }
})
window.addEventListener('phx:page-loading-stop', () => {
  clearTimeout(topBarScheduled)
  topBarScheduled = undefined
  topbar.hide()
})

liveSocket.connect()
window.liveSocket = liveSocket
// liveSocket.enableDebug(2000)
// liveSocket.enableLatencySim(2000)
// liveSocket.enableProfiling()

//
