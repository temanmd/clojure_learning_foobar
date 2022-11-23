(ns foobar.frontend.app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            ["react-dom/client" :refer [createRoot]]
            [spec-tools.data-spec :as ds]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rcs]
            [reitit.core :as ring-core]
            [fipp.edn :as fedn]
            [foobar.shared.routes :as routes]))

(defonce root (createRoot (.getElementById js/document "app")))
(defonce match (r/atom nil))

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

(defn about-page []
  [:div
   [:h2 "About frontend"]
   [:ul
    [:li [:a {:href "http://google.com"} "external link"]]
    [:li [:a {:href (rfe/href :foobar)} "Missing route"]]
    [:li [:a {:href (rfe/href :item)} "Missing route params"]]]

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

(defn init []
  (init-routes)
  (mount-root))
