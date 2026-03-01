---
author:
  - Allan Robert Tan
title: "Post-Mortem #1: Missed Connection on a PCB"
description: "Incident Report on my mistake designing a PCB for my Computer Architecture class."
summary: "Incident report on a PCB design."
date: 2026-02-23T03:02:06+08:00
draft: false
tags:
  - Post-Mortem
categories:
  - Engineering and Technology
series:
  - Post-Mortem
slug: post-mortem-1-missed-connection-on-a-pcb
---

{{< callout type="info" title="Note" >}}
Requires a little bit of knowledge in basic electronics.
These post-mortems are not my typical posts but rather a series of my incident reports.
{{< /callout >}}

# Raison D'être
I made a careless mistake missing a connection on my EDA design. We were tasked to design and fabricate a custom [PCB](https://en.wikipedia.org/wiki/Printed_circuit_board) as a development board for our future FPGA design tasks in our Computer Architecture class. We utilized [EasyEDA](https://easyeda.com/) to create the schematic diagram and design the PCB.
![An LED with a resistor Diagram. LED's cathode is not connected to the GND. The output signal is also not connected to the LED's current-limiting resistor.](https://cdn.eillanrt.com/projects/cao_pcb_led13_err.jpg)
As seen above, the LED's cathode (the negative side) is not properly attached to the GND. Its current-limiting resistor is also not properly connected to `O13`, a signal output from the FPGA. The `LED13` and `R29` got isolated with no connection from the power source and the GND. I did not realize it until I had to use a multimeter to check each of the LED's connection while soldering. There were 16 LEDs that share the same common GND. Fortunately enough, only this one specific LED had this issue.
# Probable Cause
I must have missed it when I was moving components on the shematic diagram to organize them. We were required to use [net ports](https://prodocs.easyeda.com/en/schematic/place-net-port/) instead of wires to connect the pins of the components, making it easier to assign connections. However, it might have made me more complacent to depend on the sotftware. Albeit I double-checked the other flags on the other pins, this one was inconspicuous. I was also the one who managed the logistics for ordering the fabricated PCBs for the group to save some money. While helpful, it might have affected my focus.
# Mitigation
To remedy the situation, I asked Ruejen to connect the LED 13's cathode to the cathode of LED 14, allowing shared GND Connection. He then soldered a thin lead to manually connect the `O13` to the LED 13's resistor.
# Lesson Learned
- Always make sure that the connections are attached to its assigned pin in the schematic diagram.
- Make sure the connections are proper in the PCB design before generating the Gerber file.
- The Psychological state of a person affects his performance.
- Hardware mistakes are expensive.