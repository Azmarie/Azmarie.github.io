---
title: "Paper Review: KinectFusion: Real-Time Dense Surface Mapping and Tracking"
kind: post
description: >-
  Reviewing Rendering Paper
date: "2020-10-18T04:15:24.915Z"
categories:
  - Computer Vision
  - Paper Review
keywords:
  - Reconstruction
  - Computer Vision
published: true
cover: ./teaser.jpg

---

📖 Link to the Paper: [KinectFusion: Real-Time Dense Surface Mapping and Tracking](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/ismar2011.pdf)

## Main Contribution

The research problem in this paper is 3D surface reconstruction and interaction. Inspired by the wide availability of the low-cost dense cameras, the authors aim to use only the data collected from a Kinect sensor to perform a global 3D dense reconstructions of the scene as they move through space. 


This research setup is meaningful because real-time tracking with infrastructure-free handheld device mimics scenarios in augmented reality (AR) applications, including 3D scanning and gaming. The main contributions include the proposal of KinectFusion, as the first system supporting the real-time 3D surface reconstruction of complex scenes using a depth sensor, and the tracking is always relative to the fully updated fused dense model.

## Method

The overall system proposed has several components, including surface measurement, pose estimation, update reconstruction, and surface prediction. In surface measurement, the live depth data is roughly converted to 3D points (referred to as point clouds in the paper) and normals in the camera space. Secondly, the authors use ICP alignment with every 3D points to align overlapping 3D point clouds. An important assumption here is that the points clouds between frames are roughly aligned due to small motion from one frame to the next. To calculate the offset transformation, an energy function is defined to minimize the global point-plane movement. This process is iterative until the points are aligned for each frame. 

Later, in surface reconstruction update, the surface is modelled implicitly by a truncated signed distance function (TSDF) representation. This prepares the continuous estimates as discretized values to be feed into the voxel grid. In this component, one implicit design tradeoff is the choice of using the voxel model as the representation. Compared to a polygon mesh, <b>voxel representation is efficient but it restricts the fixed geometry shape and limits model deformations</b>. 

Lastly, the surface prediction is produced by raycasting the grid to extract the position of the implicit surface by following zero crossings (a change of sign in the TSDF values). Putting things together, this real-time reconstruction system utilizes highly parallel GPU implementation to make sure its real-time speed. 


## What's good and what's not so good?

I am intrigued by the application of this paper and by the idea of bringing the physical to the digital world. In the section about experiments, I think the authors did a good job in locating ways to optimize the frame-to-frame results from the baseline model, such as using partial/full loops to combat the accumulating errors between frames, increasing viewpoints, and identifying keyframes. While evaluating a surface reconstruction method, it’s important to <b>consider properties such as scale and speed in addition to quality</b>. I found the <b>regular grid could be a bottleneck for the scalability</b> of this model. The authors mentioned each frame from the depth sensor is a surface measurement on a regular grid, which I understand as a fixed resolution model. 

It’s intuitive to see how a regular grid could make computation easy to manage, but the massive information collected needs to be fit into this <b>fixed grid to be stored in the GPU memory</b>. 

## Future Work

I think this leads to the limiting capability of this model that it only works properly indoors. If this were to be expanded to work outdoors, they might want to <b>incorporate more data streams</b> or <b>multiple videos of the scene</b> to calculate the depth as pre-processing information. From the memory space availability perspective, they could use <b>hierarchical techniques</b> such as octrees. The hierarchical layout could stay shallow to balance the tradeoff between time and space while keeping the computation relatively simple.

