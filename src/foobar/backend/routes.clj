(ns foobar.backend.routes
  (:require [reitit.ring :as ring]
            [reitit.core :as ring-core]
            [foobar.backend.html-page :as html]
            [foobar.shared.routes :as routes]))

(defn frontend-handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (html/html-page)})

(defn api-handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello, World! Its API."})

(defn my-expand [data opts]
  (if (keyword? data)
    (case data
      :api {:handler api-handler}
      {:handler frontend-handler})
    (ring-core/expand data opts)))

(def router
  (ring/ring-handler
   (ring/router
     routes/routes
     {:expand my-expand})
   (ring/routes
    (ring/create-resource-handler {:path "/" :root "/public"})
    (ring/create-default-handler
      {:not-found (constantly {:status 404 :body "Not found"})}))))




(comment
  (defn example [data opts]
    (let [registry {:kikka {:get api-handler
                             :post frontend-handler}
                     :bar frontend-handler}]
      (println data)
      (some-> data
              registry
              (ring-core/expand opts)
              (assoc :name data))))
  (router {:request-method :get, :uri "/api"})
  (router {:request-method :get, :uri "/about"})
  (my-expand :index {})
  router
  routes/routes
  (example :bar {}))

