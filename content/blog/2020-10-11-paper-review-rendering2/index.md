---
title: "Paper Review: A Practical Model for Subsurface Light Transport"
kind: post
description: >-
  Reviewing a Rendering paper
date: "2020-10-11T04:15:24.915Z"
categories:
  - Computer Vision
  - Paper Review
keywords:
  - Rendering
  - Subsurface Light Transport
  - Computer Vision
published: true
cover: ./teaser.jpg

---

📖 Link to the Paper: [A Practical Model for Subsurface Light Transport](https://graphics.stanford.edu/papers/bssrdf/bssrdf.pdf)

## Main Contribution

The research problem in this paper is image rendering, designed to accommodate for subsurface scattering in translucent materials such as liquids and human skin. Subsurface scattering refers to the phenomena where light enters the object, it scatters and propagates inside the material, and then either gets absorbed or leaves the object at a separate location of lower intensity. 

The main contribution includes a practical model of BSSRDF, which efficiently renders a realistic simulation of the object capturing the translucency effect, and its mathematical foundation. This research problem is important because most of the material is translucent to some degree in reality. This is especially useful for the development of realistic CGI and medical physics research.


## Method

Compared to the simplified BRDF model where light enters and leaves at the same surface point, the authors utilize the BSSRDF model accommodating phenomena like subsurface scattering. BSSRDF stands for the bidirectional scattering-surface reflectance distribution function, which describes how light enters an object, scatters around it, and then leaves the surface at a different location. In technical terms, it illustrates the relationship between outgoing radiance and the incident flux in light propagation with reduced intensity. Building on the theory of BSSRDF, the authors constructed this model with two parts - the diffusion approximation term and the single scattering term. 

First, the diffusion approximation is based on the isotropic light distribution in highly scattering media, which in simple terms, means roughly the same light distribution measured in different directions. 

As mentioned earlier, the surface scattering transports light from one point to another. Intuitively, the diffusion term is approximated by the distance of these two points and the Fresnel terms of the incoming and the outgoing light vectors. The dipole is the method of estimating the reflectance from two point sources, which is often a solution in diffusion problems. Here, the authors constructed these two point sources on the opposite side of the surface, with positive and negative contributions individually. In this step, the authors <b>assume a locally flat and semi-infinite homogeneous media</b>. However, in reality, this could hardly be the case. Hence, I think this could be one of the limitations of this method. 

Secondly, the single scattering term extends from a previous model for BRDF. The outgoing radiance after a single scattering is calculated by integrating the incident radiance along the refracted outgoing ray, which accounts for each reflection on the surface. Taking two parts together, the complete model is a sum of the diffusion approximation and the single scattering term.


## What's good and what's not so good?

This model exceeded the state-of-art method by its great results and efficiency. The authors argued that this outperformed the BRDF models since it produces a soft-looking surface that is more realistic and closer to human eye perception for the translucent materials. It also exceeds the brute force path tracing method in speed and efficiency, though could be less performant than a BRDF due to its computational complexity. In my opinion, this paper is novel in proposing a practical model to formulate the problem of subsurface scattering, which paved the foundation for future work and spike in CGI in the movie industry. One limitation of the paper, as mentioned earlier, is the idealistic assumptions made about the scattering media, in reality, which may not be the case. 

## Future Work

In my research around this paper, I found an extension by the author in 2005 [4] on multipole diffusion approximation for better results. Some other extensions were various efforts made in handcrafting solutions for a specific texture such as hair shading [1], rainbows in nature[2], and fur[3]. The results from the above papers are stunning and many of them are mature enough to be applied in the industry. 

This, on the other hand, makes me think about the <b>trade-off between using a traditional handcrafted method like this one and a deep learning method in computer vision and graphic tasks</b>. Many deep learning networks that we consider as standard these days, such as CNN or GAN, can often be constructed as a general-purpose or multi-tasking architecture, which achieve generally good results on images from different domains. 

However, the <b>generalizability of neural networks</b> is not guaranteed on edge or real-world complex cases, for example, in the areas the extensions of this work have addressed - complex texture like fur, hair, rainbows. Another potential problem with neural networks in image rendering is the flexibility to deal with an artifact, as we couldn’t fiddle with the networks directly case by case.


## Reference

[1] Sadeghi, I., Pritchett, H., Jensen, H. W., & Tamstorf, R. (2010). An artist friendly hair shading system. ACM Transactions on Graphics (TOG), 29(4), 1-10.

[2] Sadeghi, I., Munoz, A., Laven, P., Jarosz, W., Seron, F., Gutierrez, D., & Jensen, H. W. (2012). Physically-based simulation of rainbows. ACM Transactions on Graphics (TOG), 31(1), 1-12.

[3] Yan, L. Q., Sun, W., Jensen, H. W., & Ramamoorthi, R. (2017). A BSSRDF model for efficient rendering of fur with global illumination. ACM Transactions on Graphics (TOG), 36(6), 1-13.

[4] Donner, C., & Jensen, H. W. (2005). Light diffusion in multi-layered translucent materials. ACM Transactions on Graphics (ToG), 24(3), 1032-1039.
