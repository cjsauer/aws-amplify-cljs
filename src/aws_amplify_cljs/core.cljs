(ns aws-amplify-cljs.core
  (:require [reagent.core :as r]))

(defn hello-world
  []
  [:h1 "Hello, World!"])

(defn mount
  []
  (r/render [hello-world] (js/document.getElementById "app")))

(mount)
