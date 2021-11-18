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
{% assign avs = "" | split: "," %}
{% assign hcs = "" | split: "," %}
{% assign has = "" | split: "," %}
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
        {% assign av = tool.availability | split: "(" | first | trim %}
        {% assign avs = avs | push: av | uniq %}
        {% assign hcs = hcs | concat: tool.haptic_category | uniq %}
        {% assign ha = tool.hardware_abstraction | split: " (" | first | trim %}
        {% assign has = has | push: ha | uniq %}
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
        <legend>Platform (&&)</legend>
        {% for pl in pls %}
            {% assign tmp = pl | downcase | split: " " | join: "-" | prepend: "pl:" %}
            <div>
                <input class="filter-input filter-input-pl" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                <label for="{{ tmp }}">{{ pl }}</label>
            </div>
        {% endfor %}
    </fieldset>
    <fieldset>
        <legend>Availability (||)</legend>
        {% for av in avs %}
            {% assign tmp = av | split: " " | join: "-" | downcase  | prepend: "av:" %}
            <div>
                <input class="filter-input filter-input-av" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                <label for="{{ tmp }}">{{ av }}</label>
            </div>
        {% endfor %}
    </fieldset>
    <fieldset>
        <legend>Haptic Category (||)</legend>
        {% for hc in hcs %}
            {% assign tmp = hc | replace: "Vibrotactile", "vt" | replace: "Force Feedback", "ff" | replace: "Temperature", "temp" | prepend: "hc:" %}
            <div>
                <input class="filter-input filter-input-hc" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                <label for="{{ tmp }}">{{ hc }}</label>
            </div>
        {% endfor %}
    </fieldset>
    <fieldset>
        <legend>Hardware Abstraction (||)</legend>
        {% for ha in has %}
            {% assign tmp = ha | downcase | prepend: "ha:" %}
            <div>
                <input class="filter-input filter-input-ha" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                <label for="{{ tmp }}">{{ ha }}</label>
            </div>
        {% endfor %}
    </fieldset>
    <fieldset>
        <legend>Effect Localization (||)</legend>
        {% for el in els %}
            {% assign tmp = el | downcase | prepend: "el:" %}
            <div>
                <input class="filter-input filter-input-el" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                <label for="{{ tmp }}">{{ el }}</label>
            </div>
        {% endfor %}
    </fieldset>
    <fieldset>
        <legend>Media Support</legend>
        {% for ms in mss %}
            {% assign tmp = ms | downcase | prepend: "ms:" %}
            <div>
                <input class="filter-input filter-input-ms" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                <label for="{{ tmp }}">{{ ms }}</label>
            </div>
        {% endfor %}
    </fieldset>
    <fieldset>
        <legend>Design Approaches</legend>
        {% for da in das %}
            {% assign tmp = da | downcase | prepend: "da:" %}
            <div>
                <input class="filter-input filter-input-da" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                <label for="{{ tmp }}">{{ da }}</label>
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
            av:{{ tool.availability | split: "(" | first | trim | split: " " | join: "-" | downcase }}
            {% for hc in tool.haptic_category %}hc:{{ hc | replace: "Vibrotactile", "vt" | replace: "Force Feedback", "ff" | replace: "Temperature", "temp" }} {% endfor %}
            ha:{{ tool.hardware_abstraction | split: "(" | first | trim | downcase }}
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
