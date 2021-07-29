---
layout: page
title: Tools
permalink: /tools/
---
The following is a list of tools added to the site:

<section style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-auto-rows: 12em;">
{% for tool in site.tools %}
    <div><a href="{{ site.baseurl }}{{ tool.url }}">
        <div>
            <img src="{{ site.baseurl }}{{ tool.image }}" style="margin: auto; padding: 1em; height: 100%; width: auto;">
        </div>
        <div style="width: 100%; display: flex; justify-content: center;">
            <h3 style="text-align: center;word-wrap: anywhere; white-space: normal;">{{ tool.title }}</h3>
        </div>
    </a></div>
{% endfor %}
</section>
