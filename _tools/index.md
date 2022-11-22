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
{% assign lic = "" | split: "," %}
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
        {% assign li = tool.license | split: "(" | first | trim %}
        {% assign lic = lic | push: li | uniq %}
        {% assign avs = avs | push: tool.availability | uniq | sort %}
        {% assign hcs = hcs | concat: tool.haptic_category | uniq %}
        {% assign ha = tool.hardware_abstraction | split: " (" | first | trim %}
        {% assign has = has | push: ha | uniq %}
        {% assign dfs = dfs | concat: tool.driving_feature | uniq %}
        {% assign els = els | push: tool.effect_localization | uniq %}
        {% assign mss = mss | concat: tool.media_support | uniq %}
        {% assign ips = ips | push: tool.iterative_playback | uniq %}
        {% assign das = das | concat: tool.design_approaches | uniq %}
        {% assign ims = ims | concat: tool.interaction_metaphors | uniq | sort %}
    {% endif %}
{% endfor %}

<section class="filter-section">
    <h2>Filters</h2>
    <details>
        <summary>General Purpose</summary>
        <fieldset>
            <legend aria-describedby="yeartip">Year Range</legend>
            <div role="tooltip" id="yeartip">
                    <p>The year a tool was first publicly released or discussed in an academic paper.</p>
            </div>
            <div>
                <label>Start Year
                    <input id="start-year" class="filter-input" type="number" min="{{ yrs | first }}" max="{{ yrs | last }}" value="{{ yrs | first }}">
                </label>
            </div>
            <div>
                <label>End Year
                    <input id="end-year" class="filter-input" type="number" min="{{ yrs | first }}" max="{{ yrs | last }}" value="{{ yrs | last }}">
                </label>
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="platformtip">Platforms (&#x2227;)</legend>
            <div role="tooltip" id="platformtip">
                <p>The OS or software framework needed to run the tool.</p>
            </div>
            {% for pl in pls %}
                {% assign tmp = pl | downcase | split: " " | join: "-" | prepend: "pl:" %}
                <div>
                    <input class="filter-input filter-input-pl" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ pl }}</label>
                </div>
            {% endfor %}
        </fieldset>
        <fieldset>
            <legend aria-describedby="availabilitytip">Availability (&#x2228;)</legend>
            <div role="tooltip" id="availabilitytip">
                <p>If the tool can be obtained by the public.</p>
            </div>
            {% for av in avs %}
                {% assign tmp = av | split: " " | join: "-" | downcase  | prepend: "av:" %}
                <div>
                    <input class="filter-input filter-input-av" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ av }}</label>
                </div>
            {% endfor %}
        </fieldset>
        <fieldset>
            <legend aria-describedby="licensetip">Licenses (&#x2228;)</legend>
            <div role="tooltip" id="licensetip">
                <p>Tye type of license applied to the tool.</p>
            </div>
            {% for li in lic %}
                {% assign tmp = li | split: " " | join: "-" | downcase | prepend: "li:" %}
                <div>
                    <input class="filter-input filter-input-li" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ li }}</label>
                </div>
            {% endfor %}
        </fieldset>
    </details>
    <details>
        <summary>Hardware Control</summary>
        <fieldset>
            <legend aria-describedby="categorytip">Haptic Category (&#x2228;)</legend>
            <div role="tooltip" id="categorytip">
                <p>The haptic submodalities controllable by the tool.</p>
            </div>
            {% for hc in hcs %}
                {% assign tmp = hc | replace: "Vibrotactile", "vt" | replace: "Force Feedback", "ff" | replace: "Temperature", "temp" | prepend: "hc:" %}
                <div>
                    <input class="filter-input filter-input-hc" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ hc }}</label>
                </div>
            {% endfor %}
        </fieldset>
        <fieldset>
            <legend aria-describedby="abstractiontip">Hardware Abstractions (&#x2228;)</legend>
            <div role="tooltip" id="abstractiontip">
                <p>The genericism of the hardware supported by the tool.</p>
            </div>
            {% for ha in has %}
                {% assign tmp = ha | downcase | prepend: "ha:" %}
                <div>
                    <input class="filter-input filter-input-ha" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ ha }}</label>
                </div>
            {% endfor %}
        </fieldset>
    </details>
    <details>
        <summary>Interaction and Interface</summary>
        <fieldset>
            <legend aria-describedby="drivertip">Driving Feature (&#x2227;)</legend>
            <div role="tooltip" id="drivertip">
                <p>What determines changes in haptic parameters, either time or actions.</p>
            </div>
            {% for df in dfs %}
                {% assign tmp = df | downcase | prepend: "df:" %}
                <div>
                    <input class="filter-input filter-input-df" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ df }}</label>
                </div>
            {% endfor %}
        </fieldset>
        <fieldset>
            <legend aria-describedby="localizationtip">Effect Localization (&#x2228;)</legend>
            <div role="tooltip" id="localizationtip">
                <p>How determining the location of stimuli on the skin is handled.</p>
            </div>
            {% for el in els %}
                {% assign tmp = el | downcase | prepend: "el:" %}
                <div>
                    <input class="filter-input filter-input-el" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ el }}</label>
                </div>
            {% endfor %}
        </fieldset>
        <fieldset>
            <legend aria-describedby="mediatip">Media Support (&#x2228;)</legend>
            <div role="tooltip" id="mediatip">
                <p>Support for non-haptic media in the workspace, even if just to aid in manual synchronization.</p>
            </div>
            {% for ms in mss %}
                {% assign tmp = ms | downcase | prepend: "ms:" %}
                <div>
                    <input class="filter-input filter-input-ms" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ ms }}</label>
                </div>
            {% endfor %}
        </fieldset>
        <fieldset>
            <legend aria-describedby="playbacktip">Iterative Playback (&#x2228;)</legend>
            <div role="tooltip" id="playbacktip">
                <p>If haptic effects can be played back from the tool to aid in the design process.</p>
            </div>
            {% for ip in ips %}
                {% assign tmp = ip | split: " " | join: "-" | downcase | prepend: "ip:" %}
                <div>
                    <input class="filter-input filter-input-ip" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ ip }}</label>
                </div>
            {% endfor %}
        </fieldset>
        <fieldset>
            <legend aria-describedby="approachestip">Design Approaches (&#x2228;)</legend>
            <div role="tooltip" id="approachestip">
                <p>Broadly, the methods available to create a desired effect.</p>
                <ul>
                    <li>Direct parametric control (DPC): low-level parameters are directly modifiable.</li>
                    <li>Process: parameters are controllable by an abstract process.</li>
                    <li>Sequencing: reusable effects are ordered in time to create complex effects.</li>
                    <li>Library: a library of pre-existing effects is available for use or re-use.</li>
                    <li>Description: a natural language description of the experience is used to find an appropriate effect, often through searching a library.</li>
                </ul>
            </div>
            {% for da in das %}
                {% assign tmp = da | downcase | prepend: "da:" %}
                <div>
                    <input class="filter-input filter-input-da" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ da }}</label>
                </div>
            {% endfor %}
        </fieldset>
        <fieldset>
            <legend aria-describedby="metaphortip">Interaction Metaphors (&#x2228;)</legend>
            <div role="tooltip" id="metaphortip">
                <p>Common UI metaphors that define how a user interacts with a tool.</p>
                <ul>
                    <li>Track: a timeline represents an interactive channel containing effects.</li>
                    <li>Keyframe: key points of the effect are set and behavior between them is interpolated.</li>
                    <li>Score: an adaptation of a musical score or notation represents haptic effects.</li>
                    <li>Demonstration: physical actions or other data are mapped simply to effects or parameters.</li>
                    <li>Generic Menu: typical GUI elements (e.g., sliders) are used to control effects with the absence of other metaphors.</li>
                </ul>
            </div>
            {% for im in ims %}
                {% assign tmp = im | downcase | prepend: "im:" %}
                <div>
                    <input class="filter-input filter-input-im" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ im }}</label>
                </div>
            {% endfor %}
        </fieldset>
    </details>
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
            li:{{ tool.license | split: "(" | first | trim | split: " " | join: "-" | downcase }}
            {% for hc in tool.haptic_category %}hc:{{ hc | replace: "Vibrotactile", "vt" | replace: "Force Feedback", "ff" | replace: "Temperature", "temp" }} {% endfor %}
            ha:{{ tool.hardware_abstraction | split: "(" | first | trim | downcase }}
            {% for df in tool.driving_feature %}df:{{ df | downcase }} {% endfor %}
            el:{{ tool.effect_localization | downcase }}
            {% for ms in tool.media_support %}ms:{{ ms | downcase }} {% endfor %}
            ip:{{ tool.iterative_playback | split: " " | join: "-" | downcase }}
            {% for da in tool.design_approaches %}da:{{ da | downcase }} {% endfor %}
            {% for im in tool.interaction_metaphors %}im:{{ im | downcase }} {% endfor %}
        "><a href="{{ site.baseurl }}{{ tool.url }}">
        <div class="tools-img-div">
            <img src="{{ site.baseurl }}{% if tool.image %}{{ tool.image }}{% else %}/assets/tools/unknown.png{% endif %}"
                alt="{% if tool.image %}A image showing {{ tool.title }}.{% else %}A placeholder image for {{ tool.title }}.{% endif %}">
        </div>
        <div class="tools-label-div">
            <h3 style="text-align: center;word-wrap: anywhere; white-space: normal;">{{ tool.title }}</h3>
        </div>
    </a></div>
    {% endif %}
{% endfor %}
</div>
</section>
