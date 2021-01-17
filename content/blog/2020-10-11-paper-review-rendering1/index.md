---
title: "Paper Review: Interactive Reconstruction of Monte Carlo Image Sequences using a Recurrent Denoising Autoencoder"
kind: post
description: >-
  Reviewing Rendering Paper
date: "2020-10-11T04:15:24.915Z"
categories:
  - Computer Vision
  - Paper Review
keywords:
  - Rendering
  - Denoising
  - Recurrent Autoencoder
  - Autoencoder
  - Computer Vision
  - Ray Tracing
published: true
cover: ./teaser.jpg

---

📖 Link to the Paper: [Interactive Reconstruction of Monte Carlo Image Sequences using a Recurrent Denoising Autoencoder](https://research.nvidia.com/sites/default/files/publications/dnn_denoise_author.pdf)

## Main Contribution

The research problem in this paper is interactive image reconstruction/ rendering. This problem is relevant in the gaming industry and especially in AR/ VR applications enabling real-time experiences. Motivated by the success of image restoration using neural networks in recent years, the authors aimed to target the ray tracing denoising problem as reconstructing image sequences with the help of deep neural networks. 

The main contributions include the proposal of using novel recurrent connections in deep autoencoder networks for temporal stability, which is end-to-end trainable thus can automatically learn relationships based on auxiliary per-pixel input channels. Noteworthy, the network achieved a good execution speed with high-quality results from extremely low sampling frames.   

## Method

The proposed architecture is a recurrent autoencoder with skip connection every second layer, trained end to end in a supervised manner with paired data. In the paper, the authors refer to the autoencoder as denoising autoencoders. Autoencoders are known to be effective in learning to reconstruct the inputs from a minimal latent representation obtained in the bottleneck. The noise is often random and can be averaged out, so it is regarded as non-essential information and won't be included in the latent representation. 

Moreover, I think the usage of RNN is also easily justifiable intuitively. The past frames can provide useful information in constructing the current frame through the feedback loop, thus the recurrent connections are a good structure for temporal coherence. The authors made it clear that they are focusing on solving the reconstruction task with an extremely low amount of sampling frames. Thus, using the recurrent structure can obtain illumination information from its sparse sampling point. The temporal features are learnt at multiple scales through recurrent blocks. The architecture is fully convolutional, so it is trainable in small fixed resolution and much faster than training on the full resolution (such as a CNN with skip connection network). 

Further, the network is end-to-end trainable and put auxiliary inputs automatically into use to disambiguate the colour data. The tradeoff of using an RNN is between the <b>temporal coherency and the expensive hierarchy of recurrent blocks</b>. Since this paper focuses on rendering at an interactive rate with low sample counts, it is not production-quality ready and the performance suffers from low sampling. Besides, neural networks tend to produce what is seen frequently more prominently, thus it may produce poor quality for a complex scene and rare objects. The authors mentioned that they choose to not consider the depth of field and motion blur, which limited the application to gaming and other virtual experiences. 

## What's good and what's not so good?

In the experiments, the authors showcased examples where the inputs were highly noisy, and the network generated good quality outputs. However, it would be good to know <b>if the trained network can fit inputs with multiple intensity of noise</b>, such as mildly noisy and extremely noisy. I think the authors have yet to explore the spatial property of the objects in the video, adding spatial information to be jointly optimized with the temporal information could be a possible extension while keeping the low sample count. 

Overall, this paper is a successful example of using deep learning techniques in image rendering. It seems that deep learning is not only great for image restoration tasks but also is readily employable for image sequences for light transport reconstruction. It set good examples for future deep learning based ray tracing denoisers, where different types of kernels are learnt to substitute for the hand crafted kernels. 
