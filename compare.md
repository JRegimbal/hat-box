---
layout: default
title: Comparison
search_exclude: true
---
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/toolcompare.css">
<section id="compare-warning">
    <p id="no-tools" class="hidden">
        Nothing is currently selected for comparison. Please select two tools to compare on <a href="{{ site.baseurl }}/tools/">the Tools page</a>.
    </p>
    <p id="one-tool" class="hidden">
        Only one tool is selected for comparison. Please select another to compare on <a href="{{ site.baseurl }}/tools/">the Tools page</a>.
    </p>
    <p id="no-storage">
        Your web browser does not support the Session Storage API. This feature will not work.
    </p>
</section>
<div id="compare-div" class="hidden">
<section id="compare-1">
{% for tool in site.tools %}
{% if tool.title != "Tools" %}
<div class="tool-whatever hidden" id="tool1-{{tool.title | downcase | split: ' ' | join: '-'}}">
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
<div class="tool-whatever hidden" id="tool2-{{tool.title | downcase | split: ' ' | join: '-'}}">
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
<script src="{{ site.baseurl }}/assets/js/compare.js"></script>
