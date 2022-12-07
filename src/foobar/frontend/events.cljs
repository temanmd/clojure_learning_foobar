(ns foobar.frontend.events
  (:require
   [re-frame.core :refer [reg-event-db reg-event-fx]]
   [cljs.spec.alpha :as s]))

;; Initialize DB

(reg-event-db
 :initialize
 (fn [__]
   {:time (js/Date.)
    :time-color "orange"
    :current-route nil}))

;; Timer

(reg-event-db
 :timer
 (fn [db [_ new-time]]
   (assoc db :time new-time)))

(reg-event-db
 :time-color-change
 (fn [db [_ new-color-value]]
   (assoc db :time-color new-color-value)))

;; Routes

(reg-event-fx
 :navigate
 (fn [db [_ route]]
   {:navigate! route}))

(reg-event-db
 :navigated
 (fn [db [_ new-match]]
   (assoc db :current-route new-match)))
