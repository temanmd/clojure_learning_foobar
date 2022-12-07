(ns foobar.frontend.views
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [reitit.frontend.easy :as rfe]
   [fipp.edn :as fedn]
   [cljs.pprint :refer [pprint]]
   ["react-dom/client" :refer [createRoot]]))

;; Timer

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

;; Shared

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
     :on-click #(re-frame/dispatch [:navigate :about])}
    "Go to About page"]

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

(defn todo-page []
  [:div
   [:h2 "Todo MVC app"]])

(defn navigation []
  (let [match @(re-frame/subscribe [:current-route])]
    [:div
     [:ul
      [:li [:a {:href (rfe/href :index)} "Frontpage"]]
      [:li [:a {:href (rfe/href :about)} "About"]]
      [:li [:a {:href (rfe/href :todo)} "To-do app"]]
      [:li [:a {:href (rfe/href :item {:item-id 1})} "Item 1"]]
      [:li [:a {:href (rfe/href :item {:item-id 2} {:foo "bar"})} "Item 2"]]]
     (if match
       (let [view (:view (:data match))]
         [view match]))
     [:pre (with-out-str (fedn/pprint match))]]))

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

(defonce root (createRoot (.getElementById js/document "app")))




