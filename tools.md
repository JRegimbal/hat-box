---
layout: page
title: Tools
permalink: /tools/
nav_order: 2
---
The following is a list of tools added to the site:

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools-menu.css">

<section class="list-section">
{% for tool in site.tools %}
    <div class="tools-top-div"><a href="{{ site.baseurl }}{{ tool.url }}">
        <div class="tools-img-div">
            <img src="{{ site.baseurl }}{% if tool.image %}{{ tool.image }}{% else %}/assets/tools/unknown.png{% endif %}">
        </div>
        <div class="tools-label-div">
            <h3 style="text-align: center;word-wrap: anywhere; white-space: normal;">{{ tool.title }}</h3>
        </div>
    </a></div>
{% endfor %}
</section>
