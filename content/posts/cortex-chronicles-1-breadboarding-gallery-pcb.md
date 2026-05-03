---
author:
  - Allan Robert Tan
title: "Cortex Chronicles #1: Breadboarding, Gallery, and PCB"
description: Talking about my first breadboarding competition, few tweaks in this blog, etc.
summary: The first Chronicle!
date: 2026-05-03T16:00:29+08:00
draft: false
tags:
  - internship
  - thesis
categories:
  - personal
series:
  - Cortex Chronicles
slug: cortex-chronicles-1-breadboarding-gallery-pcb
---

{{< callout type="info" title="Cortex Chronicles Series" >}}
In this series, I'll write posts to share occasional updates. Instead of writing separate post to each small updates, I'll squash them into a single post over a period of time. But I cannot promise to post regularly in a consistent timely manner.
{{< /callout >}}

# Updates
## Breadboarding
On the same day as my birthday, I participated in the breadboarding competition at the ICpEP.SE Regional challenge for breadboarding. There were three of us who represented UNO-Recoletos at the Negros Island Region Chapter. Due to CHED's mandate and the exorbitant price of fuel, the event was held online. We used Tinkercad for the actual breadboarding and Zoom for the online conference. I wouldn't say I was weirded out by the setup but it could have been way better if it was held face-to-face. This is my first breadboarding competition I have ever joined and I believe it could have been more exciting if we were tinkering actual hardware together with students from other universities—the pressure and the noise—that delightful chaos.

The problems they gave were not as difficult as expected as the[ truth tables](https://en.wikipedia.org/wiki/Truth_table) were already given, so we just had to synthesize it through Boolean algebra and logic gates. We managed to place 1st among four other Universities. Whereas TUP Visayas took place as the champion. Thanks to Sir Brian Lumauag for his unwavering support for us throughout the event!

{{< figure
  src="https://cdn.eillanrt.com/gallery/post-icpepse-challenge-breadboarding2026-noodles.jpg"
  alt="A photo of four of us having egg noodles for lunch."
  caption="Us having egg noodles for lunch after the said event. A treat from sir Brian (The one serendipitously giving a thumbs up)." >}}

The egg noodle was delicious and for me, worth the price for its portion size. It costs around 150-250 pesos depending on the variant. I chose the beef one. I was not even able to finish the beef as the portions were huge and I was not hungry enough to be prepared for it. And hey, having the competition and noodles treat is not a bad way to celebrate my `age++` day.

I recommend visiting [Commis](https://maps.app.goo.gl/efojG4cjYEFH4eyR8) if you're around Bacolod City. For the curious, I looked up their menu page for you. [Here you go](https://mastudios.my.canva.site/revised-commisandco-2025).

{{< callout type="info" >}}
I was not paid to promote anything btw.
{{< /callout >}}

## Gallery and R2
If you know me personally, you may know that I am almost functionally absent in Social Media. Which is one of the reasons why I decided to have a gallery page on this blog, which serves as my own "Instagram" in case I may want to share some photos. As of now, it does not support videos. I could implement a separate section for videos instead of placing them under gallery in the future but it is not really on my list right now. I use [Cloudflare R2](https://www.cloudflare.com/developer-platform/products/r2/) for storage. It is essentially like Google Drive but for software development. Cloudflare R2 is a cheaper alternative to [Amazon S3](https://aws.amazon.com/s3/).

## The PCB
From my last [post-mortem](https://blog.eillanrt.com/posts/post-mortem-1-missed-connection-on-a-pcb/), I wrote an incident report about my mistake in designing a PCB. Though I thought I have remedied the situation, it resulted to a more annoying problem. The problem was that the PCB had 16 LEDs, when I probed the LED 5 with a multimeter, the LED 12 lit up. I suspect it was a [short issue](https://www.fcpcba.com/guide/pcb-short-circuit/). I just decided to fix the entire PCB layout again and have it reordered from JLCPCB. Fortunately, it only costs 90 pesos and arrived 2 weeks after. I chose E-post (Post Office) as shipping method, which is cheaper than commercial carriers and reliable enough if you do not mind waiting for weeks or do not have a strict deadline to meet.

# On the Horizon
In my [2026 Anticipation](https://blog.eillanrt.com/posts/2026-anticipation/) post, I shared that I have got a big year ahead of me. Recently I have been processing my requirements for the DV Bootcamp at Analog Devices, which will serve as my OJT, one of my academic requirements. I am expected to fly to Manila this June and have my trip arranged to General Trias, Cavite.

I recently just found out that our final defense for thesis will be on December 2026, which I originally thought would be on 2027. That makes my timeline a bit tighter. Considering we'll still have fieldtrips, general education courses and laboratory design tasks. *Dugangan ko pa sang procrastination ko* (Plus my procrastination).

Outside Career and Academics, I have also been exploring some things about on how to navigate my humanity side. I don't mean to sound deep here. I just simply think I should spend more time building a life outside of engineering, simply said. I am going to take a break from writing here for a while because I just don't think I will have enough bandwidth considering this is a pivotal year. I would like to spend more time on focusing on things that matter for now. BRB.
