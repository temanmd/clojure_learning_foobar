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

(defn my-expand [registry]
  (fn [data opts]
    (if (keyword? data)
      (some-> data
              registry
              (ring-core/expand opts)
              (assoc :name data))
      (ring-core/expand data opts))))

(def router
  (ring/ring-handler
   (ring/router
     routes/routes
     {:expand (my-expand
                {:api api-handler
                 :index frontend-handler
                 :items frontend-handler
                 :item frontend-handler
                 :about frontend-handler})})
   (ring/routes
    (ring/create-resource-handler {:path "/" :root "/public"})
    (ring/create-default-handler
      {:not-found (constantly {:status 404 :body "Not found"})}))))

(comment
  (router {:request-method :get, :uri "/api"})
  router
  routes/routes)

