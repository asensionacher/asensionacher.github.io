---
layout: single
title: "First steps: Design Azure Subscriptions"
permalink: /governance/design-azure-subscriptions
excerpt: "Define and deploy an Azure Subscription strategy for real architectures."
categories:
    - Azure
    - Governance
    - Subscription
    - First steps
tags:
    - Subscription
    - Governance
    - First steps
sidebar:
  nav: "first-steps"
gallerysub:
  - url: /assets/images/getting-started-subscription.png
    image_path: /assets/images/getting-started-subscription.png
    alt: "subscriptions design"
    title: "Subscriptions design."
related_image: /assets/images/getting-started-subscription.png
---

## Subscription strategy
**Subscriptions** are logical containers where deploy Azure resources. You can create multiple **subscriptions** under an Azure Active Directory and also you can assign multiple **subscriptions** to a single Management Group.

In our example, we will define the following subscription strategy: {% include gallery id = "gallerysub" caption = "**Subscriptions** design." %}

Each subscription have an specific goal. Let's see what is used each subscription for:
- Identity subscription: Used for deploying *Domain Controllers* virtual machines or *Azure Active Directory Domain Services*. Maybe you don't have *Active Directory* deployed on premises, but if you have is interesting to have synchronized your domain in Azure and with Azure Active Directory.
- Management subscription: Used for management purposes, like *Log Analytics* for all the resources on all your subscriptions and automated proceses, like change tracking, inventory management, virtual machines update management, etc.
- Connectivity subscription: Used for connecting your resources between them and on premises. It also will have *Azure DNS Zones*, *Azure Private DNS Zones*, *Azure Firewall*, *VPNs*, *Front Doors*, etc. This subscription also is going to have the *Hub Virtual Network*, so all the resources on the *Landing Zones* are going to connect here.
- Landing zones subscriptions: Here will be deployed all resources needed for each project. They will be separated by location (West Europe, North Europe...) and environment (Dev, SIT, UAT, Production...). 
- Decommissioned subscriptions: Here will be moved those subscriptions that are not used any more until the moment they could be destroyed. 
- Sandbox subscriptions: Used for deploying resources for tests purposes. This subscription must have separated networking and not connected to the *Hub Virtual Network* for security reasons.

Next step would be [designing our Azure Subscriptions]()

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