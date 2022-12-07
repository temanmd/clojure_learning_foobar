(ns foobar.frontend.subs
  (:require
   [re-frame.core :refer [reg-sub]]))

;; Routes

(reg-sub
 :current-route
 (fn [db]
   (:current-route db)))

;; Timer

(reg-sub
 :time
 (fn [db _]
   (:time db)))

(reg-sub
 :time-color
 (fn [db _]
   (:time-color db)))
