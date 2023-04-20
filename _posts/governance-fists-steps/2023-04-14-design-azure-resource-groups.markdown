---
layout: single
title: "First steps: Design Azure Resource Groups"
permalink: /governance-design-azure-resource-groups
excerpt: "Define and deploy an Azure Resource Groups strategy for real architectures."
categories:
    - Azure
    - Governance
    - Resource Group
    - First steps
tags:
    - Resource Group
    - Governance
    - First steps
sidebar:
  nav: "first-steps"
galleryrg:
  - url: /assets/images/getting-started-resource-group.png
    image_path: /assets/images/getting-started-resource-group.png
    alt: "management groups design"
    title: "Management groups design."
related_image: /assets/images/getting-started-resource-group.png
---

## Resource Group strategy
As the [design of Azure Naming Convention](/governance-design-azure-naming-convention), the design of the **Resource Group Strategy** is something that is very personal, but here I would explain how I like to do this with few examples.

First, it is important to know what we are going to deploy and group them by its functionality. For example, if we are going to deploy the networking for a project/landing zone, where it is going to include Virtual Networks, Network Security Groups, Route Tables and other stuff, I like to add them in the same **Resource Group**. The same occurs for the resources used for each type of the resources used to run the project (computing, AI, data, etc.). In the following image you would see an example for a production environment of an sample project, which have networking, computing and data resources:

{% include gallery id = "galleryrg" caption = "**Resource Group** example design." %}

As you can see, there are three **Resource Groups** with its resource type added there. The thing is that there are multiple cases where this can change, but the thing to be sure is to have a consistent strategy for not having a mess. There could be another examples like having all the compute resources in one **Resource Group** but having two Virtual Machines in another **Resource Group** because those are used for an specific case in high availability, that is something that also makes sense for me.  

Next step would be [designing our Azure Resource Tags strategy](/governance-design-azure-resource-tags)



<head>{% include advertisements.html %}</head>