---
layout: page
title: Tools
permalink: /tools/
---
The following is a list of tools added to the site:

<section style="display: flex; flex-direction: row; flex-wrap: wrap;">
{% for tool in site.tools %}
    <div style="max-width: 12em; flex-basis: 100%;"><a href="{{ site.baseurl }}{{ tool.url }}">
        <div>
            <img src="{{ site.baseurl }}{% if tool.image %}{{ tool.image }}{% else %}/assets/tools/unknown.png{% endif %}" style="margin: auto; padding: 1em; max-height: 100%; max-width: 100%;">
        </div>
        <div style="width: 100%; display: flex; justify-content: center;">
            <h3 style="text-align: center;word-wrap: anywhere; white-space: normal;">{{ tool.title }}</h3>
        </div>
    </a></div>
{% endfor %}
</section>
