(ns foobar.backend.core
  (:gen-class)
  (:require [ring.adapter.jetty :as jetty]
            [foobar.backend.routes :as routes]))

(defn -main
  [& args]
  (jetty/run-jetty routes/router
                   {:port 3000
                    :join? false}))
