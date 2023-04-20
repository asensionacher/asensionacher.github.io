---
layout: single
title: "First steps: Design Azure Tags"
permalink: /governance-design-azure-tags
excerpt: "Define and deploy an Azure Tags strategy for real architectures."
categories:
    - Azure
    - Governance
    - Tag
    - First steps
tags:
    - Resource Group
    - Governance
    - Tag
sidebar:
  nav: "first-steps"
# galleryrg:
#   - url: /assets/images/getting-started-resource-group.png
#     image_path: /assets/images/getting-started-resource-group.png
#     alt: "management groups design"
#     title: "Management groups design."
# related_image: /assets/images/getting-started-resource-group.png
---

## Azure Tags strategy
**Azure Tags** is a very important way to organize your resources. **Azure Tags** adds information on them that are used in several ways:
- Reporting
- Building purpose
- Searching
- Automation scripts

A good way to start with **Azure Tags** is with few simple tags and then keep updating them as you need more. Is important the fact that a resource could have more than one **Azure Tag**, but not have multiple values for one **Azure Tag**.

For me, the minimum **Azure Tags** are the following:

| Tag Name            | Description                                                                                                                                                                                                               | Key and example values                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workload Name       | Name of the workload the resource supports.                                                                                                                                                                               | WorkloadName<br />{::nomarkdown}<ul><li>ControlCharts</li></ul>{:/}                                                                                      |
| Data classification | Sensitivity of data hosted by this resource.                                                                                                                                                                              | DataClassification<br />{::nomarkdown}<ul><li>Non-business</li><li>Public</li><li>General</li><li>Confidential</li><li>Highly Confidential</li></ul>{:/} |
| Business Unit       | Top-level division of your company that owns the subscription or workload that the resource belongs to. In smaller organizations, this tag might represent a single corporate or shared top-level organizational element. | BusinessUnit<br />{::nomarkdown}<ul><li>Finance</li><li>Marketing</li><li>Product XYZ</li><li>Corp</li><li>Shared</li></ul>{:/}                          |
| Application name    | Added granularity, if the workload is subdivided across multiple applications or services.                                                                                                                                | ApplicatioName<br />{::nomarkdown}<ul><li>IssueTrackingSystem</li></ul>{:/}                                                                              |
| Environment         | Deployment environment of the application, workload, or service.                                                                                                                                                          | Env<br />{::nomarkdown}<ul><li>DEV</li><li>SIT</li><li>UAT</li><li>PROD</li></ul>{:/}                                                                    |
| Owner name          | Owner of the application, workload, or service.                                                                                                                                                                           | Owner<br />{::nomarkdown}<ul><li>sasensio@codefreaks.com</li>{:/}                                                                                        |
| Requester name      | User who requested the creation of this application.                                                                                                                                                                      | Requester<br />{::nomarkdown}<ul><li>sasensio@codefreaks.com</li>{:/}                                                                                    |
| Modified date       | Date when the resource was last modified                                                                                                                                                                                  | ModifiedDate<br />{::nomarkdown}<ul><li>2023-04-20</li>{:/}                                                                                              |
| Approver name       | Person responsible for approving costs related to this resource.                                                                                                                                                          | Approver<br />{::nomarkdown}<ul><li>sasensio@codefreaks.com</li>{:/}                                                                                     |                            |

> Most examples were extracted from [Microsoft Docs](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-tagging).

**Azure Tags** are going to be forced with Azure Policies.

Next step would be [designing our Azure Resource Policies strategy](/governance-design-azure-policies)

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