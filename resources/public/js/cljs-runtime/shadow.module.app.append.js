
shadow.cljs.devtools.client.env.module_loaded('app');

try { foobar.frontend.app.init(); } catch (e) { console.error("An error occurred when calling (foobar.frontend.app/init)"); throw(e); }