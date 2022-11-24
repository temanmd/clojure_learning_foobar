(ns foobar.frontend.app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [re-frame.core :as re-frame]
            ["react-dom/client" :refer [createRoot]]
            [spec-tools.data-spec :as ds]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rcs]
            [reitit.core :as ring-core]
            [fipp.edn :as fedn]
            [cljs.pprint :refer [pprint]]
            [foobar.shared.routes :as routes]))

(defonce root (createRoot (.getElementById js/document "app")))
(defonce match (r/atom nil))


(defn dispatch-timer-event []
  (let [now (js/Date.)]
    (re-frame/dispatch [:timer now])))

(defonce do-timer (js/setInterval dispatch-timer-event 1000))

(defn register-events []
  (re-frame/reg-event-db
    :initialize
    (fn [__]
      {:time (js/Date.)
       :time-color "orange"}))
  (re-frame/reg-event-db
    :timer
    (fn [db [_ new-time]]
      (assoc db :time new-time)))
  (re-frame/reg-event-db
    :time-color-change
    (fn [db [_ new-color-value]]
      (assoc db :time-color new-color-value))))

(defn register-subscriptions []
  (re-frame/reg-sub
    :time
    (fn [db _]
      (:time db)))
  (re-frame/reg-sub
    :time-color
    (fn [db _]
      (:time-color db))))

(register-events)
(register-subscriptions)

(defn clock []
  (let [color @(re-frame/subscribe [:time-color])
        time (-> @(re-frame/subscribe [:time])
                 .toTimeString
                 (clojure.string/split " ")
                 first)]
    [:div.example-clock {:style {:color color}} time]))

(defn color-input []
  (let [gettext (fn [e] (-> e .-target .-value))
        emit (fn [e] (re-frame/dispatch [:time-color-change (gettext e)]))
        color-value @(re-frame/subscribe [:time-color])]
    [:div.color-input
     "Display color: "
     [:input {:type "text"
              :style {:border "1px solid #CCC"}
              :value color-value
              :on-change emit}]]))

(defn item-page [match]
  (let [{:keys [path query]} (:parameters match)
        {:keys [id]} path]
    [:div
     [:h2 "Selected item " id]
     (if (:foo query)
       [:p "Optional foo query param: " (:foo query)])]))

(defn home-page []
  [:div
   [:h2 "Welcome to frontend"]

   [:button
    {:type "button"
     :on-click #(rfe/push-state :item {:item-id 3})}
    "Item 3"]

   [:button
    {:type "button"
     :on-click #(rfe/replace-state :item {:item-id 4})}
    "Replace State Item 4"]])

(defn alert-button []
  [:div.garbage-bin
    :on-click #(re-frame/dispatch [:alert-me])])

(defn about-page []
  [:div
   [:h2 "About frontend"]
   [:ul
    [:li [:a {:href "http://google.com"} "external link"]]
    [:li [:a {:href (rfe/href :foobar)} "Missing route"]]
    [:li [:a {:href (rfe/href :item)} "Missing route params"]]]

   [:div
    [clock]
    [color-input]]

   [:div
    {:content-editable true
     :suppressContentEditableWarning true}
    [:p "Link inside contentEditable element is ignored."]
    [:a {:href (rfe/href ::frontpage)} "Link"]]])

(defn navigation []
  [:div
   [:ul
    [:li [:a {:href (rfe/href :index)} "Frontpage"]]
    [:li [:a {:href (rfe/href :about)} "About"]]
    [:li [:a {:href (rfe/href :item {:item-id 1})} "Item 1"]]
    [:li [:a {:href (rfe/href :item {:item-id 2} {:foo "bar"})} "Item 2"]]]
   (if @match
     (let [view (:view (:data @match))]
       [view @match]))
   [:pre (with-out-str (fedn/pprint @match))]])

(defn another-component []
  [:button.btn-primary.btn {:type "button"} "Sign in"])

(defn component []
  [:div
   [:h1 "Hello, World and Clojurians!"]
   [:h3 "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]
   [another-component]
   [navigation]])

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
                                      {:index {:view home-page}
                                       :about {:view about-page}
                                       :item {:view item-page}})})
   (fn [m] (reset! match m))
    ;; set to false to enable HistoryAPI
   {:use-fragment false}))

(defn mount-root []
  (.render root (r/as-element [component])))

(defn alert-me-handler
  [data]
  (js/alert "Alert message"))

(defn init []
  (init-routes)
  (re-frame/dispatch-sync [:initialize])
  (mount-root))
