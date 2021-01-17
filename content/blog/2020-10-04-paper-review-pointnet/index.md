---
title: "Paper Review: PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation"
kind: post
description: >-
  Reviewing PointNet for 3D Classification and Segmentation
date: "2020-10-04T04:15:24.915Z"
categories:
  - Computer Vision
  - Paper Review
keywords:
  - 3D Classification
  - 3D Segmentation
  - Computer Vision
published: true
cover: ./teaser.jpg

---

📖 Link to the Paper: [PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation](https://openaccess.thecvf.com/content_cvpr_2017/papers/Qi_PointNet_Deep_Learning_CVPR_2017_paper.pdf)

## Main Contribution

The research problem in this paper is 3D Classification and Segmentation. Among different 3D representations, the authors choose to use point cloud for its proximity to raw sensor data and its canonical form. Previously, the point cloud was often converted to other representation before being processed in deep neural networks, which causes artifacts. To solve this problem, the authors designed an effective feature learning directly on the point clouds. The main contributions include the proposal of PointNet, which performs end-to-end learning in 3D and achieves good results in various 3D tasks.

## Method

The proposed method is motivated to overcome the challenges of using point clouds as input. 

Firstly, point clouds are orderless, thus the model consuming N points needs to be invariant to N! permutations. Secondly, a rigid transformation should not alter the output, thus the model needs to preserve invariance under transformation. Thirdly, there are interactions among local points among the set of point clouds, which the model needs to capture. To tackle the first challenge, the authors observe that a permutation invariant neural network corresponds to a symmetric function, because in a symmetric function, for any ordering of the arguments, the function value stays the same. 

In this paper, they construct a family of symmetric functions by neural networks by multi-layer perceptron (MLP) and max pooling. Regarding the second challenge, the authors aligned input point clouds a canonical space, which is achieved by applying an affine transformation to input point coordinates, predicted by a mini PointNet T-net. This can be similarly applied to embedding space alignment in feature space with regularization to avoid bad local minimum. So far the network for 3D classification can be constructed, but the last challenge is important for the 3D segmentation network where class scores for each point need to be predicted. The method used here is to concatenate local embeddings and global feature vectors so that per point feature is aware of both local and global information for segmentation. 

## What's good and what's not so good?

One limitation of the paper is, in tackling the third challenge, they use the <b>concatenation of local and global embedding.</b> However, I think it seems extreme to put together embedding for one local point with the embedding of all points (global). Compared to 3D CNN where hierarchical feature learning is used, this method doesn’t consider multiple-level local context, and may not generalize well to a complex scene with multiple objects. 

Besides, in tackling the challenge of transformation invariance, they use affirm transformation. <b>Will that affect the coordinates in a way that’s spatially confusing to the network?</b> For example, would turning a chair upside down with a rotation transformation be a valid transformation? I think the author could have elaborated on T-net a bit more and what are the valid transformation matrices used to tackle this challenge.

This paper exceeded the prior work with its direct usage of the point cloud in deep learning networks and great results. PointNet is also robust to data corruption including missing data points or outliers thanks to the “critical points” which can sparsely summarize the shape. 

## Future Work

Overall I think this is a great paper as the beginning for 3D deep learning with point clouds. One extension could be to exploit the benefit of hierarchical feature learning with PointNet or using a structure such as a skip connection to resample multi-layer local context. In hindsight, PointNet++ has proposed hierarchical feature learning precisely to extract information from the local neighbourhood.
