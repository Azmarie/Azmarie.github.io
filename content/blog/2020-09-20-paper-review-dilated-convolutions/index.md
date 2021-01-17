---
title: "Paper Review: Multi-Scale Context Aggregation by Dilated Convolutions"
kind: post
description: >-
  Reviewing an important paper in semantic segmentation
date: "2020-09-20T04:15:24.915Z"
categories:
  - Computer Vision
  - Paper Review
keywords:
  - Dilated Convolutions
  - Computer Vision
published: true
cover: ./teaser.jpg

---

📖 Link to the Paper: [Multi-Scale Context Aggregation by Dilated Convolutions](http://vladlen.info/papers/dilated-convolutions.pdf)

## Main Contribution

The research problem in this paper is semantic segmentation. The authors observed that the existing semantic segmentation methods were mostly repurposed convolutional networks from image classification tasks, and they want to challenge this adaptation by proposing a model specifically designed for dense prediction. The main contribution includes, firstly, proposing a module using dilated convolutions to aggregate multi-scale contextual information while preserving resolution; secondly, challenge the necessity of the vestigial components that had been developed for image classification in semantic segmentation networks.

## Method

The proposed method is motivated by the structure of the full-resolution dense prediction problem and the nice exponentially expanding property of dilated convolution that makes it a natural potential solution. The authors constructed the context module with multiple dilated convolution layers of an increasing dilation rate to effectively learn from a large receptive field without losing resolution. This paper also challenged the existing approaches in dealing with the conflicting demands of reducing resolution in imaging classification and the need for full-resolution output in dense prediction. The authors proposed to remove the last two pooling and striding layers entirely to increase accuracy, rather than applying post hoc measures.

## What's good and what's not so good?

Overall, I found this paper valuable as it proposed an alternative view on the adaptation of image classification networks on semantic segmentation tasks. The repurposed networks outperformed the status quo, however, are all parts of the network necessary for the task at hand? It might not be the case, as proven in this paper. 

One thing I find not abundantly clear in this paper is that it seems to assume that loss of resolution in the operation throughout the network is inherently bad, and <b>preserving the full resolution is inherently desirable</b> for dense prediction problems. I don’t think the authors drive the point home by justifying this assumption. Besides, the authors didn’t mention <b>the benefits of transfer learning from pre-training</b> on the image classification task, which I find very relevant in arguing the structural difference between these two tasks. 

From my point of view, this paper would be more convincing if the author explained the assumption, and tried to justify both points of view by presenting a formal comparison between the rectangular prisms this paper proposed to the standard pyramid-shaped architectures carried from image classification tasks.