---
layout: default
title: Comparison
nav_exclude: true
permalink: /compare
---
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/toolcompare.css">
<div id="compare-div">
<section id="compare-1">
{% for tool in site.tools %}
{% if tool.title != "Tools" %}
<div class="tool-whatever" id="tool1-{{tool.title | downcase | split: ' ' | join: '-'}}">
    <h1>{{tool.title}}</h1>
    {% if tool.image %}
    <section class="tool-image">
        <img src="{{ site.baseurl }}{{ tool.image }}" alt="An image of {{ tool.title }} to aid in identification." loading="lazy">
    </section>
    {% endif %}
    <section class="tool-summary">
        <h2>Tool Summary</h2>
        {% include gp_table_cmp.html %}
        {% include hardware_table_cmp.html %}
        {% include interaction_table_cmp.html %}
    </section>

    <section class="description">
        <h2>Additional Information</h2>
        {{ tool.content }}
    </section>
</div>
{% endif %}
{% endfor %}
</section>
<section id="compare-2">
{% for tool in site.tools %}
{% if tool.title != "Tools" %}
<div class="tool-whatever" id="tool1-{{tool.title | downcase | split: ' ' | join: '-'}}">
    <h1>{{tool.title}}</h1>
    {% if tool.image %}
    <section class="tool-image">
        <img src="{{ site.baseurl }}{{ tool.image }}" alt="An image of {{ tool.title }} to aid in identification." loading="lazy">
    </section>
    {% endif %}
    <section class="tool-summary">
        <h2>Tool Summary</h2>
        {% include gp_table_cmp.html %}
        {% include hardware_table_cmp.html %}
        {% include interaction_table_cmp.html %}
    </section>

    <section class="description">
        <h2>Additional Information</h2>
        {{ tool.content }}
    </section>
</div>
{% endif %}
{% endfor %}
</section>
</div>
