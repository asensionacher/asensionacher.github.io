---
layout: single
title: "First steps: Design Azure Management Groups"
permalink: /governance/design-azure-management-groups
excerpt: "Define and deploy an Azure Management Group strategy for real architectures."
categories:
    - Azure
    - Governance
    - Management group
    - First steps
tags:
    - Management group
    - Governance
    - First steps
sidebar:
  nav: "first-steps"
gallerymg:
  - url: /assets/images/getting-started-management-groups.png
    image_path: /assets/images/getting-started-management-groups.png
    alt: "management groups design"
    title: "Management groups design."
related_image: /assets/images/getting-started-management-groups.png
---

## Management Group strategy
**Management groups** are a way to efficiently manage access, policies and compliance for all your subscriptions. These also provides a governance scope above subscriptions. 

In our solution, we are going to imagine a enterprise called *Codefreaks*. This company wants to start in Azure, so they created an Azure Active Directory called *codefreaks.microsoft.com* and they want to sync their directory to AAD and extend their network to Azure.

The proposed design of **Management groups** is the following:{% include gallery id = "gallerymg" caption = "**Management groups** design." %}

Let's explain each **Management group**:
- Tenant root group: Root **Management Group** created when the Azure Active Directory is created. We will only use this group for assigning a top level administration for the rest of management groups and subscriptions.
- Codefreaks: **Management Group** top level for our company. From here we will start to deploy the rest of the **Management Groups**. 
- Platform: This will be our **Management Group** for our business resources, like Active Directory, Hub networking, VPN, etc.
  - Identity: Mostly used for Active Directory or Azure Active Directory Domain Services resources.
  - Management: Used for tasks like change tracking, inventory, update management and deployment of Log Analytics Workspace with dashboards, queries and alerting.
  - Connectivity: Used for networking resources. Here will be deployed the Hub network and other resources like Frontdoor, Azure Firewall, VPN, etc.
- Landing zones: This **Management Group** will be where the magic is deployed. Any kind of applications or other stuff that we want to develop will be stored here. For that, we are going to create a **Management Group** for each project, environment and location.
- Decomissioned: A place for old subscriptions that will not be used any more.
- Sandbox: The place for testing. Have to be well done for not being a problem on cost terms.

With this strategy you are going to be able to:
- Assign access to groups of people depending on their role. For example, security and networking people may only need to have access to the identity subscriptions with contributor role and to all landing zones but only as a network contributor.
- Get control about how much is spending our company for each kind of deployments.
- Apply policies for our different subscriptions. It's possible that for an application we want more restrictive policies than for another, so we can apply this policies directly on its **Management Group**.
- Have completely separated infrastructures for decomissioned and sandbox subscriptions.

Next step would be [designing our Azure Subscriptions](/governance/design-azure-subscriptions)

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



<head>{% include advertisements.html %}</head>