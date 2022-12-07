(ns foobar.frontend.effects
  (:require [re-frame.core :refer [reg-fx]]
            [reitit.frontend.easy :as rfe]))

(reg-fx
 :navigate!
 (fn [k params query]
   (println k)
   (println params)
   (println query)
   (rfe/push-state k params query)))
