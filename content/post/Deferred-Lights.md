+++
date = "2016-05-07T19:27:14+03:00"
draft = true
title = "Deferred Lights"
image = "plight1.jpg"
+++

Since Yume is fully deferred,there has to be a way to implement lights.In a deferred pipeline,we must create a pass for each light,be it directional, point or spot light.
For each point light,we draw a tesellated sphere,move it to lights 
