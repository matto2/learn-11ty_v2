---
layout: layout.liquid
title: This should work
permalink: /
tags:
---


## Hello, Hello, Hello!!!

{% for post in collections.post %}
* [{{post.data.title}}]({{post.url}})
{% endfor %}
