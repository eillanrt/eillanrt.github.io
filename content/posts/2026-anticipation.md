---
author: ["Allan Robert Tan"]
title: '2026 Anticipation'
description: "Nothing to read much here. Just yapping about my expectations for 2026 and the post-work hangover from 2025."
summary: "A year start reflection."
date: 2026-01-17T17:00:00+08:00
draft: false
tags: ['reflection']
categories: ['personal']
slug: '2026-anticipation'
showToc: false
math: true
---

# Hello 2026!
It's the first month of the year and there seems to be a lot for me to look forward to. This year is going to be hell lot of work. A year that will be a genesis of my development as an industry-ready professional. These past few days, I have been reading about the semiconductor industry and its impact in the modern world and the potential that it brings.

If we were talking over a cup of coffee and I asked you, "when you are choosing your dream job, your program in college, or a specific career path specialization, is there any self-defined, intrinsic, or delicate philosophy that drives you into that field? Is it for the growth, the money, or maybe you want to contribute something to the world?". Whatever your answer is, or whatever domain you're getting into, sometimes there is just this thought that lingers that make us think if there is really something profound in what we're working for or maybe we just want to survive in a world that requires sustenance. The financial aspect of choosing a career is of course, undeniable. But it is another story I would like to ramble about for some other time. I am just gonna keep it cool for now.

Also, I may be late but... to anyone reading this, I hope you'll have a prosperous and a blissful 2026!

{{< callout type="warning" title="Classes are starting again">}}

Classes are starting again soon and I'll probably have less time. I also feel that things move too fast, it makes me anxious sometimes. Maybe it's just me jittering for consuming too much caffeine. My  body clock and attention span also have been a bit off lately.

{{< /callout >}}

## December 2025 Workload Hangover
Last December 2025, my crew and I worked with this grueling [7400-series IC](https://en.wikipedia.org/wiki/7400-series_integrated_circuits) checker using a custom circuit board. What it does basically is it checks if the ICs' output the value we expect them to. We had this program written in 8086 Assembly (which I kinda vibe coded) to drive and receive signal between the circuit and the computer. We spent the whole week designing, soldering, and programming the circuit. We had a DB25 connector for parallel data signal transmission between the computer and the circuit which had the 7400-series ICs. We had to consider not just debugging the software, but more importantly, fighting the Quantum Physics itself. That week also happened to be our University Week, which we didn't savor much because of the workload. It was so tedious that I literally jumped and fell onto the floor out of joy when it finally worked the way we intended it to. Big thanks to my friends Karl for his clever circuit design and to Ruejen for his soldering dexterity.

On top of that, we also had our design tasks with FPGA. We had to emulate an [ALU circuit](https://en.wikipedia.org/wiki/Arithmetic_logic_unit) on an FPGA. Though was not as tedious as the IC Checker, we still spent hours of figuring out the appropriate pins. We also implemented an input pattern detection with FPGA following the design of a mealy machine. We had to handle the clock timing of the FPGA. We utilized the Cyclone IV FPGA which has a clock speed of 50MHz, way too fast for human comprehension (1 clock cycle every 20 nanoseconds!).

$$
(\frac{50\times10^6\text{clk}}{1\text{sec}})(\frac{1\text{sec}}{1\times10^9\text{ns}})=\frac{1\text{clk}}{20\text{ns}}
$$  

At the same week and the week after that, my thesis partner and I had to finish our research proposal transcript. Due to limited time constraints, the deadline was extended to a week after the start of Christmas break. It still took a week out of our Christmas vacation but hey, at least we were given more time and were not pushed to the wall. I was out of town during the few days of that week so I had limited working capabilities. Not that I didn't contribute at all, of course! *But maybe I'll just make it up to him, lol*. Big thanks to my partner Joross for his diligence and effort he put into our work during those days.

## What I expect in 2026
The 2026's dynamic is going to be a massive shift from how my years usually go. As a junior and an upcoming senior, there are lots of pages yet to be turned. A new set of experiences, people, and opportunities. The academic rigor will also intensify. OJT, fieldtrip, and ultimately, the final boss—*thesis*. The difficulty of the courses (colloquially subjects) is obviously not something new. Thinking about the OJT, I am on edge about it. I also anticipate spending a lot of money for fieldtrip and thesis expenses. From what I heard from the previous batch, the fieldtrip alone costs roughly 34k pesos for local trip and roughly 59k if they choose to have the trip in Singapore. Thailand was also a choice but I forgot how much that trip cost. For local trip, I believe they went to three places in the country, but I forgot where exactly.

On the other hand, my proposed thesis, together with my thesis partner, can't share much information about it for now. But in a nutshell, we will have to design and implement a custom processor for a microcontroller. And just by reading our manuscript, it is apparent that we're gonna spend a lot of time debugging and figuring out whether the physics or the code is the issue.

Despite that, I still broadly consider myself optimistic. At the end of 2026, I may write a follow-up blog how things turned out.
