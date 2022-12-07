(ns foobar.frontend.app
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [spec-tools.data-spec :as ds]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rcs]
            [reitit.core :as ring-core]
            [foobar.shared.routes :as routes]
            [foobar.frontend.events]
            [foobar.frontend.subs]
            [foobar.frontend.effects]
            [foobar.frontend.views :as views]))

(defn dispatch-timer-event []
  (let [now (js/Date.)]
    (re-frame/dispatch [:timer now])))

(defonce do-timer (js/setInterval dispatch-timer-event 1000))

(defn my-expand [registry]
  (fn [data opts]
    (if (keyword? data)
      (some-> data
              registry
              (ring-core/expand opts)
              (assoc :name data))
      (ring-core/expand data opts))))

(defn init-routes []
  (rfe/start!
   (rf/router routes/routes {:data {:coercion rcs/coercion}
                             :expand (my-expand
                                      {:index {:view views/home-page}
                                       :about {:view views/about-page}
                                       :item {:view views/item-page}
                                       :todo {:view views/todo-page}})})

   (fn [new-match] (re-frame/dispatch [:navigated new-match]))
    ;; set to false to enable HistoryAPI
   {:use-fragment false}))

(defn mount-root []
  (.render views/root (r/as-element [views/component])))

(defn alert-me-handler
  [data]
  (js/alert "Alert message"))

(defn init []
  (init-routes)
  (re-frame/dispatch-sync [:initialize])
  (mount-root))
