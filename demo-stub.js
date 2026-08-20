window.TOM_DEMO = true; (() => { const nativeFetch = window.fetch.bind(window); window.fetch = async (input, init = {}) => { const url = new URL(input instanceof Request ? input.url : String(input), location.href); if (url.origin === location.origin && url.pathname.endsWith("/__rsvp-local-test")) { window.dispatchEvent(new CustomEvent("tom:rsvp", { detail: { local: true } })); return new Response(JSON.stringify({ success: true, local: true }), { status: 200, headers: { "content-type": "application/json" } }) } return nativeFetch(input, init) } })();


console.log('demo stub');