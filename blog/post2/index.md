---
title: A wiggle of Corgis
tags: post
layout: layout.liquid
---   

# Hey2
whassup??~~~~~~~~~~~

![Party corgis!](../../img/surf.jpg)

{{ github.stargazers }} GitHub Stars

{% raw %}
<ul>  
  {% for meetup in meetups %}  
  <li>
    <a href="{{ meetup.link }}">{{ meetup.name }}</a>
  </li>  
  {% endfor %}  
</ul>
{% endraw %}
