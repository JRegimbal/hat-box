---
layout: page
title: Tools
permalink: /tools/
---
The following is a list of tools added to the site:

<ul>
{% for tool in site.tools %}
    <li><a href="{{ site.baseurl }}{{ tool.url }}">
        {{ tool.title}}
    </a></li>
{% endfor %}
</ul>
