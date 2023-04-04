---
layout: single
title: "First steps: Design an Azure Management Group strategy"
permalink: /first-steps/design-azure-management-groups
excerpt: "Define and deploy Azure Management group strategy for real architectures."
categories:
    - Azure
    - Governance
    - First steps
tags:
    - Management group
    - Subscription
    - Policies
    - Tags
    - 
    - First steps
toc: true
sidebar:
  nav: "first-steps"
gallerymg:
  - url: /assets/images/getting-started-management-groups.png
    image_path: /assets/images/getting-started-management-groups.png
    alt: "management groups design"
    title: "Management groups design."
---

## Management Group strategy

**Management groups** are a way to efficiently manage access, policies and compliance for all your subscriptions. These also provides a governance scope above subscriptions. 

In our solution, we are going to imagine a enterprise called *Codefreaks*. This company wants to start in Azure, so they created an Azure Active Directory called *codefreaks.microsoft.com* and they want to sync their directory to AAD and extend their network to Azure.

The proposed design of **Management groups** is the following:

{% include gallery id="gallerymg" caption="**Management groups** design." %}

Let's explain each **Management group**:
-   Tenant root group: Root **Management Group** created when the Azure Active Directory is created.  

{% comment %} Previous/Next buttons {% endcomment %}

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

{% comment %} AdSense {% endcomment %}

{% include advertisements.html %}