(ns foobar.shared.routes)

(def routes
  [["/" :index]
   ["/items"
    ["" :items]
    ["/:item-id" :item]]
   ["/api" :api]
   ["/about" :about]])
