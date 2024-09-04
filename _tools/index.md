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
{% assign bps = "" | split: "," %}
{% assign ucs = "" | split: "," %}
{% assign dns = "" | split: "," %}
{% assign str = "" | split: "," %}
{% assign con = "" | split: "," %}
{% assign ven = "" | split: "," %}
{% for tool in site.tools %}
    {% if tool.title != "Tools" %}
        {% assign yrs = yrs | push: tool.year | uniq | sort %}
        {% assign pls = pls | concat: tool.platform | uniq %}
        {% assign li = tool.license | split: "(" | first | trim %}
        {% assign lic = lic | push: li | uniq %}
        {% assign avs = avs | push: tool.availability | uniq | sort %}
        {% assign ven = ven | concat: tool.venue | uniq | sort %}
        {% assign ucs = ucs | concat: tool.use_case | uniq | sort %}
        {% assign hcs = hcs | concat: tool.haptic_category | uniq %}
        {% assign has = has | push: tool.hardware_abstraction | uniq %}
        {% assign bps = bps | concat: tool.body_position | uniq | sort %}
        {% assign dns = dns | concat: tool.device_names | uniq | sort %}
        {% assign dfs = dfs | concat: tool.driving_feature | uniq %}
        {% assign els = els | push: tool.effect_localization | uniq %}
        {% assign mss = mss | concat: tool.media_support | uniq %}
        {% assign ips = ips | push: tool.iterative_playback | uniq %}
        {% assign das = das | concat: tool.design_approaches | uniq %}
        {% assign ims = ims | concat: tool.interaction_metaphors | uniq | sort %}
        {% assign str = str | concat: tool.storage | uniq | sort %}
        {% assign con = con | concat: tool.connectivity | uniq | sort %}
    {% endif %}
{% endfor %}

<section class="filter-section">
    <h2>Filters</h2>
    <details>
        <summary>General Purpose <span aria-describedby="gptip">&#9432;</span>
            <div role="tooltip" id="gptip">
                {{ site.data.short.generalPurpose }}
            </div>
        </summary>
        <fieldset>
            <legend aria-describedby="yeartip">Year Range&#9432;</legend>
            <div role="tooltip" id="yeartip">
                {{ site.data.short.year }}
            </div>
            <div class="optiongroup">
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
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="platformtip">Platforms (&#x2227;)&#9432;</legend>
            <div role="tooltip" id="platformtip">
                {{ site.data.short.platform }}
            </div>
            <div class="optiongroup">
            {% for pl in pls %}
                {% assign tmp = pl | downcase | split: " " | join: "-" | prepend: "pl:" %}
                <div>
                    <input class="filter-input filter-input-pl" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ pl }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="availabilitytip">Availability (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="availabilitytip">
                {{ site.data.short.availability }}
            </div>
            <div class="optiongroup">
            {% for av in avs %}
                {% assign tmp = av | split: " " | join: "-" | downcase  | prepend: "av:" %}
                <div>
                    <input class="filter-input filter-input-av" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ av }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="licensetip">Licenses (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="licensetip">
                {{ site.data.short.license }}
            </div>
            <div class="optiongroup">
            {% for li in lic %}
                {% assign tmp = li | split: " " | join: "-" | downcase | prepend: "li:" %}
                <div>
                    <input class="filter-input filter-input-li" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ li }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="venuetip">Venue (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="venuetip">
                {{ site.data.short.venue }}
            </div>
            <div class="optiongroup">
            {% for ve in ven %}
                {% assign tmp = ve | split: " " | join: "-" | downcase | prepend: "ve:" %}
                <div>
                    <input class="filter-input filter-input-ve" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ ve }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="uctip">Intended Use Case (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="uctip">
                {{ site.data.short.use_case }}
            </div>
            <div class="optiongroup">
            {% for uc in ucs %}
                {% assign tmp = uc | split: " " | join: "-" | downcase | prepend: "uc:" %}
                <div>
                    <input class="filter-input filter-input-uc" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ uc }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
    </details>
    <details>
        <summary>Hardware Control <span aria-describedby="hctip">&#9432;</span>
            <div role="tooltip" id="hctip">
                {{ site.data.short.hardwareControl }}
            </div>
        </summary>
        <fieldset>
            <legend aria-describedby="categorytip">Haptic Category (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="categorytip">
                {{ site.data.short.hapticCategory }}
            </div>
            <div class="optiongroup">
            {% for hc in hcs %}
                {% assign tmp = hc | replace: "Vibrotactile", "vt" | replace: "Force Feedback", "ff" | replace: "Temperature", "temp" | replace: "Skin Stretch/Compression", "ssc" | prepend: "hc:" %}
                <div>
                    <input class="filter-input filter-input-hc" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ hc }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="abstractiontip">Hardware Abstractions (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="abstractiontip">
                {{ site.data.short.hardwareAbstraction }}
            </div>
            <div class="optiongroup">
            {% for ha in has %}
                {% assign tmp = ha | downcase | prepend: "ha:" %}
                <div>
                    <input class="filter-input filter-input-ha" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ ha }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="dntip">Device Names (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="dntip">
                {{ site.data.short.device_names }}
            </div>
            <div class="optiongroup">
            {% for dn in dns %}
                {% assign tmp = dn | split: " " | join: "-" | downcase | prepend: "dn:" %}
                <div>
                    <input class="filter-input filter-input-dn" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ dn }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="bptip">Body Position (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="bptip">
                {{ site.data.short.body_position }}
            </div>
            <div class="optiongroup">
            {% for bp in bps %}
                {% assign tmp = bp | downcase | prepend: "bp:" %}
                <div>
                    <input class="filter-input filter-input-bp" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ bp }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
    </details>
    <details>
        <summary>Interaction and Interface <span aria-describedby="iitip">&#9432;</span>
            <div role="tooltip" id="iitip">
                {{ site.data.short.iAndI }}
            </div>
        </summary>
        <fieldset>
            <legend aria-describedby="drivertip">Driving Feature (&#x2227;)&#9432;</legend>
            <div role="tooltip" id="drivertip">
                {{ site.data.short.drivingFeature }}
            </div>
            <div class="optiongroup">
            {% for df in dfs %}
                {% assign tmp = df | downcase | prepend: "df:" %}
                <div>
                    <input class="filter-input filter-input-df" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ df }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="localizationtip">Effect Localization (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="localizationtip">
                {{ site.data.short.effectLocalization }}
            </div>
            <div class="optiongroup">
            {% for el in els %}
                {% assign tmp = el | downcase | prepend: "el:" %}
                <div>
                    <input class="filter-input filter-input-el" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ el }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="mediatip">Media Support (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="mediatip">
                {{ site.data.short.mediaSupport }}
            </div>
            <div class="optiongroup">
            {% for ms in mss %}
                {% assign tmp = ms | downcase | prepend: "ms:" %}
                <div>
                    <input class="filter-input filter-input-ms" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ ms }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="playbacktip">Iterative Playback (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="playbacktip">
                {{ site.data.short.iterativePlayback }}
            </div>
            <div class="optiongroup">
            {% for ip in ips %}
                {% assign tmp = ip | split: " " | join: "-" | downcase | prepend: "ip:" %}
                <div>
                    <input class="filter-input filter-input-ip" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ ip }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="approachestip">Design Approaches (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="approachestip">
                {{ site.data.short.designApproaches }}
            </div>
            <div class="optiongroup">
            {% for da in das %}
                {% assign tmp = da | split: " " | join: "-" | downcase | prepend: "da:" %}
                <div>
                    <input class="filter-input filter-input-da" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ da }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="metaphortip">Interaction Metaphors (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="metaphortip">
                {{ site.data.short.interactionMetaphors }}
            </div>
            <div class="optiongroup">
            {% for im in ims %}
                {% assign tmp = im | split: " " | join: "-" | downcase | prepend: "im:" %}
                <div>
                    <input class="filter-input filter-input-im" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ im }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="storagetip">Storage (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="storagetip">
                {{ site.data.short.storage }}
            </div>
            <div class="optiongroup">
            {% for st in str %}
                {% assign tmp = st | split: " " | join: "-" | downcase | prepend: "st:" %}
                <div>
                    <input class="filter-input filter-input-st" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ st }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
        <fieldset>
            <legend aria-describedby="conntip">Connectivity (&#x2228;)&#9432;</legend>
            <div role="tooltip" id="conntip">
                {{ site.data.short.connectivity }}
            </div>
            <div class="optiongroup">
            {% for co in con %}
                {% assign tmp = co | split: " " | join: "-" | downcase | prepend: "co:" %}
                <div>
                    <input class="filter-input filter-input-co" type="checkbox" id="{{ tmp }}" name="{{ tmp }}" value="{{ tmp }}">
                    <label for="{{ tmp }}">{{ co }}</label>
                </div>
            {% endfor %}
            </div>
        </fieldset>
    </details>
    <button id="resetFilters">Reset Filters</button>
</section>

<section>
<h2>Tools</h2>
<button class="compare-reset">Reset Comparison</button>
<div class="list-section">
{% for tool in site.tools %}
    {% if tool.title != "Tools" %}
    <div id = "tool-{{ tool.title | downcase | split: ' ' | join: '-' }}"
        class="tools-top-div
            year:{{ tool.year }}
            {% for pl in tool.platform %}pl:{{ pl | downcase | split: " " | join: "-" }} {% endfor %}
            av:{{ tool.availability | split: "(" | first | trim | split: " " | join: "-" | downcase }}
            li:{{ tool.license | split: "(" | first | trim | split: " " | join: "-" | downcase }}
            {% for ve in tool.venue %}ve:{{ ve | downcase | split: " " | join: "-" }} {% endfor %}
            {% for uc in tool.use_case %}uc:{{ uc | downcase | split: " " | join: "-" }} {% endfor %}
            {% for hc in tool.haptic_category %}hc:{{ hc | replace: "Vibrotactile", "vt" | replace: "Force Feedback", "ff" | replace: "Temperature", "temp" | replace: "Skin Stretch/Compression", "ssc" }} {% endfor %}
            ha:{{ tool.hardware_abstraction | split: "(" | first | trim | downcase }}
            {% for dn in tool.device_names %}dn:{{ dn | downcase | split: " " | join: "-"}} {% endfor %}
            {% for bp in tool.body_position %}bp:{{ bp | downcase | split: " " | join: "-" }} {% endfor %}
            {% for df in tool.driving_feature %}df:{{ df | downcase }} {% endfor %}
            el:{{ tool.effect_localization | downcase }}
            {% for ms in tool.media_support %}ms:{{ ms | downcase }} {% endfor %}
            ip:{{ tool.iterative_playback | split: " " | join: "-" | downcase }}
            {% for da in tool.design_approaches %}da:{{ da | downcase | split: " " | join: "-" }} {% endfor %}
            {% for im in tool.interaction_metaphors %}im:{{ im | downcase | split: " " | join: "-" }} {% endfor %}
            {% for st in tool.storage %}st:{{ st | downcase | split: " " | join: "-" }} {% endfor %}
            {% for co in tool.connectivity %}co:{{ co | downcase | split: " " | join: "-" }} {% endfor %}
        ">
        <div class="tools-int-div">
            <div class="tools-img-div">
                <a href="{{ site.baseurl }}{{ tool.url }}">
                <img src="{{ site.baseurl }}{% if tool.image %}{{ tool.image }}{% else %}/assets/tools/unknown.png{% endif %}"
                    alt="{% if tool.image %}A image showing {{ tool.title }}.{% else %}A placeholder image for {{ tool.title }}.{% endif %}">
                </a>
            </div>
            <div class="tools-label-div">
                <a href="{{ site.baseurl }}{{ tool.url }}">
                    <h3 style="text-align: center;word-wrap: anywhere; white-space: normal;">{{ tool.title }}</h3>
                </a>
                <label>Compare <input type="checkbox" name="{{ tool.title | downcase | split: ' ' | join: '-' }}" class="compare"/></label>
            </div>
        </div>
    </div>
    {% endif %}
{% endfor %}
</div>
<button class="compare-reset">Reset Comparison</button>
</section>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/filter.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/compare-sel.js"></script>
