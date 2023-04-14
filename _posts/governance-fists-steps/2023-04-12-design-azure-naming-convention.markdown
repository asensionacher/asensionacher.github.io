---
layout: single
title: "First steps: Design Azure Naming Convention"
permalink: /governance/design-azure-naming-convention
excerpt: "Define and deploy an Azure Naming Convention strategy for real architectures."
categories:
    - Azure
    - Governance
    - Naming Convention
    - First steps
tags:
    - Naming Convention
    - Governance
    - First steps
sidebar:
  nav: "first-steps"
---

## Naming Convention strategy
Having a good **naming convention** strategy is a good way to classify each resource and knowing where each one is used for. This is something that is very personal, but this is what I'm used to do and works very well for me. I'm very fan of using the [*Azure Naming Tool solution*](https://github.com/microsoft/CloudAdoptionFramework/tree/master/ready/AzNamingTool). Please, take a look on this awesome project for having an idea of how to deploy a strong naming convention.

Next step would be [designing our Azure Resource Groups](/governance/design-azure-resource-groups)

{% if page.categories %}
  {% assign category = page.categories[0] %}
  {% assign posts = site.categories[category] %}
  {% for post in posts %}
    {% if post.url == page.url %}
      {% assign post_index0 = forloop.index0 %}
      {% assign post_index1 = forloop.index %}
    {% endif %}
  {% endfor %}
  {% for post in posts %}
    {% if post_index0 == forloop.index %}
      {% assign next_post = post %}
    {% endif %}
    {% if post_index1 == forloop.index0 %}
      {% assign prev_post = post %}
    {% endif %}
  {% endfor %}
{% endif %}

{% include advertisements.html %}