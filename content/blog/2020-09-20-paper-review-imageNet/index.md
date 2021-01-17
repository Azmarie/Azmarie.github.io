---
title: "Paper Review: ImageNet: a Large-Scale Hierarchical Image Database"
kind: post
description: >-
  Reviewing the iconic ImageNet paper
date: "2020-09-20T04:15:24.915Z"
categories:
  - Computer Vision
  - Paper Review
keywords:
  - ImageNet
  - Computer Vision
  - Image Dataset
published: true
cover: ./teaser.jpg

---

📖 Link to the Paper: [ImageNet: a Large-Scale Hierarchical Image Database](https://www.researchgate.net/profile/Li_Jia_Li/publication/221361415_ImageNet_a_Large-Scale_Hierarchical_Image_Database/links/00b495388120dbc339000000/ImageNet-a-Large-Scale-Hierarchical-Image-Database.pdf)

💡 Link to Project Webstie: [ImageNet](http://www.image-net.org/)

## What's ImageNet?

Inspired by the explosion of data, ImageNet proposed to target an ambitious research problem - how to harness the power of vast quantities of image data and organize them in such a way that’s beneficial to a variety of research problems. The main contribution in the paper is the introduction of a large-scale, highly-diverse, and highly-accurate database built on the hierarchical structure of WordNet called `ImageNet`.

## Method

Constructing an accurate large-scale database is no easy task. In ImageNet, the data was collected by querying several image search engines per synset and then verified by global users leveraging the services of [Amazon Mechanical Turk](https://www.mturk.com/) to reach a predetermined confidence score threshold. The paper advanced the state-of-art dataset by its large scale, high accuracy, and large diversity, and also its semantic hierarchy based on WordNet. One limitation of the ImageNet could be its choice of assigning only a single label to each image, it’s not optimal when there are more than one clear objects in the image.

## What's good?

What I found as inherently novel about ImageNet is its <b>focus and belief in data</b> - a fair representation of the problem space with data is important and can be beneficial to computer vision tasks regardless of the algorithm and models. In hindsight, ImageNet has been proven to be a supreme source of training data and benchmark datasets. 

## Future Work

ImageNet and ImageNet Challenge inspired a stream of work in the neural networks which generated groundbreaking results, to the point where transfer learning via pre training on ImageNet is widely used as a standard procedure before fine-tuning on another dataset. One possible extension into the computer graphic tasks will be to extend the ImageNet dataset into 3D, including depth information for a 2D scene. Even though a 3D dataset is even more costly to obtain, it could benefit 3D scene understanding and robotic tasks greatly. 
