(ns aws-amplify-cljs.core
  (:require [reagent.core :as r]
            ["aws-amplify" :default Amplify]
            ["/aws-exports.js" :default aws-exports]))

(.configure Amplify aws-exports)

(defn hello-world
  []
  [:h1 "Hello, World!"])

(defn mount
  []
  (r/render [hello-world] (js/document.getElementById "app")))

(mount)

;; Next steps:
;; - Play with making amplify calls (e.g. Pinpoint analytics)
;; - Try writing some Lambda functions in cljs and calling them from the app
;; - Try loading data from a Datomic Cloud instance
