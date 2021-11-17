---
layout: page
title: Tools
nav_order: 2
has_children: true
permalink: /tools/
nav_exclude: false
has_toc: false
---
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools-menu.css">

{% assign yrs = "" | split: "," %}
{% assign pls = "" | split: "," %}
{% assign hcs = "" | split: "," %}
{% assign dfs = "" | split: "," %}
{% assign els = "" | split: "," %}
{% assign mss = "" | split: "," %}
{% assign ips = "" | split: "," %}
{% assign das = "" | split: "," %}
{% assign ims = "" | split: "," %}
{% for tool in site.tools %}
    {% if tool.title != "Tools" %}
        {% assign yrs = yrs | push: tool.year | uniq | sort %}
        {% assign pls = pls | concat: tool.platform | uniq %}
        {% assign hcs = hcs | concat: tool.haptic_category | uniq %}
        {% assign dfs = dfs | concat: tool.design_approaches | uniq %}
        {% assign els = els | push: tool.effect_localization | uniq %}
        {% assign mss = mss | concat: tool.media_support | uniq %}
        {% assign ips = ips | push: tool.iterative_playback | uniq %}
        {% assign das = das | concat: tool.design_approaches | uniq %}
        {% assign ims = ims | concat: tool.interaction_metaphors | uniq %}
    {% endif %}
{% endfor %}

<section class="filter-section">
    <h2>Filters</h2>
    <fieldset>
        <legend>Haptic Category</legend>
        {% for hc in hcs %}
            {% assign tmp = hc | replace: "Vibrotactile", "vt" | replace: "Force Feedback", "ff" | replace: "Temperature", "temp" | prepend: "hc:" %}
            <div>
                <input class="filter-input filter-input-hc" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                <label for="{{ tmp }}">{{ hc }}</label>
            </div>
        {% endfor %}
    </fieldset>
    <script type="text/javascript" src="{{ site.baseurl }}/assets/js/filter.js"></script>
</section>

<section>
<h2>Tools</h2>
<div class="list-section">
{% for tool in site.tools %}
    {% if tool.title != "Tools" %}
    <div class="tools-top-div
            year:{{ tool.year }}
            {% for pl in tool.platform %}pl:{{ pl | downcase | split: " " | join: "-" }} {% endfor %}
            {% for hc in tool.haptic_category %}hc:{{ hc | replace: "Vibrotactile", "vt" | replace: "Force Feedback", "ff" | replace: "Temperature", "temp" }} {% endfor %}
            {% for df in tool.driving_feature %}df:{{ df | downcase }} {% endfor %}
            el:{{ tool.effect_localization | downcase }}
            {% for ms in tool.media_support %}ms:{{ ms | downcase }} {% endfor %}
            ip:{{ tool.iterative_playback | downcase }}
            {% for da in tool.design_approaches %}da:{{ da | downcase }} {% endfor %}
            {% for im in tool.interaction_metaphors %}im:{{ im | downcase }} {% endfor %}
        "><a href="{{ site.baseurl }}{{ tool.url }}">
        <div class="tools-img-div">
            <img src="{{ site.baseurl }}{% if tool.image %}{{ tool.image }}{% else %}/assets/tools/unknown.png{% endif %}">
        </div>
        <div class="tools-label-div">
            <h3 style="text-align: center;word-wrap: anywhere; white-space: normal;">{{ tool.title }}</h3>
        </div>
    </a></div>
    {% endif %}
{% endfor %}
</div>
</section>
