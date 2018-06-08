(ns aws-amplify-cljs.core
  (:require [reagent.core :as r]
            ["aws-amplify" :default Amplify :refer [Analytics API]]
            ["/aws-exports.js" :default aws-exports]
            ["test-idea" :default TestIdea]))

(def test-idea (r/adapt-react-class TestIdea))

(defn get-items
  []
  (let [api-name "sampleCloudApi"
        path "/items"]
    (-> (.get API api-name path)
        (.then #(js/console.log %))
        (.catch #(js/console.error %)))))

(defn items-btn
  []
  [:button {:on-click get-items} "Get Items"])

(defn hello-world
  []
  (let [username (r/atom "")
        on-change #(reset! username %)
        on-click #(js/console.log @username)]
    (fn []
      [:div
       [:h1 "Hello, World!"]
       [items-btn]
       [test-idea {:value @username
                   :onChange on-change
                   :onClick on-click}]])))

(defn mount
  []
  (.configure Amplify aws-exports)
  (.record Analytics #js {:name "appRender"
                          :attributes {:component "hello-world"}})
  (r/render [hello-world] (js/document.getElementById "app")))

(mount)

;; Next steps:
;; - Try writing some Lambda functions in cljs and calling them from the app
;; - Try loading data from a Datomic Cloud instance
