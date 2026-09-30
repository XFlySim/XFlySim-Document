# RVSM and Metric Flight Levels in China

> Content on this page is compiled from public sources for learning purposes only. For actual operations, always refer to the currently effective Aeronautical Information Publication (AIP) and civil aviation regulations.

## Background

As civil air traffic grew, the vertical separation between aircraft on airways once became a bottleneck on airspace capacity. In the late 1990s, the International Civil Aviation Organization (ICAO) promoted the **Reduced Vertical Separation Minimum (RVSM)** in airspace that met the required conditions, reducing the vertical separation between FL290 and FL410 from 600 m (2,000 ft) to 300 m (1,000 ft).

With the reduced separation, the number of usable cruise flight levels in the same altitude range increased, improving both airspace capacity and fuel efficiency. RVSM was progressively implemented over Europe, North America and the Pacific. After thorough evaluation and preparation, Civil Aviation Administration of China (CAAC) implemented RVSM over mainland China effective **00:00 Beijing Time, 22 November 2007**.

## What is RVSM

RVSM (Reduced Vertical Separation Minimum) means: within specific airspace, the required minimum vertical separation between aircraft is reduced from 600 m (2,000 ft) to 300 m (1,000 ft), in exchange for more usable cruise flight levels.

Civil aviation in China uses a **metric flight level** system: the RVSM band is **8,900 m to 12,500 m** (roughly equivalent to FL291 to FL410), with a flight level every **300 m**.

## Implementation Airspace

- Scope: airways and controlled airspace within mainland China and the air traffic management responsibility areas of Civil Aviation Administration of China; the exact boundaries are those published in the AIP.
- Altitude band: **8,900 m (inclusive) to 12,500 m (inclusive)**.
- The band contains 13 RVSM flight levels in total; outside the band, the original flight level allocation standards still apply.

## Metric Flight Level Allocation

Chinese flight levels are allocated by **true track angle**: tracks between 0° and 179° (eastbound) use the **odd flight levels**, and tracks between 180° and 359° (westbound) use the **even flight levels**. Within the RVSM band a level is provided every 300 m, so same-direction adjacent levels are 600 m apart and opposite-direction adjacent levels are 300 m apart.

| Flight level (m) | Approx. FL | Track 0°–179° (eastbound, odd) | Track 180°–359° (westbound, even) |
| --- | --- | :---: | :---: |
| 8900 | FL291 | ✓ | |
| 9200 | FL302 | | ✓ |
| 9500 | FL312 | ✓ | |
| 9800 | FL321 | | ✓ |
| 10100 | FL331 | ✓ | |
| 10400 | FL341 | | ✓ |
| 10700 | FL351 | ✓ | |
| 11000 | FL361 | | ✓ |
| 11300 | FL371 | ✓ | |
| 11600 | FL381 | | ✓ |
| 11900 | FL390 | ✓ | |
| 12200 | FL400 | | ✓ |
| 12500 | FL410 | ✓ | |

> The flight level column is approximate, for reference only; refer to the AIP for actual operations.

### Comparison with Levels Outside the Band

| Altitude range | Level spacing | Same direction | Opposite direction |
| --- | --- | --- | --- |
| Below 8,400 m | 300 m (odd east / even west) | 600 m | 300 m |
| 8,900–12,500 m (RVSM) | 300 m (odd east / even west) | 600 m | 300 m |
| Above 12,500 m | 600 m (odd east / even west) | 1200 m | 600 m |

Before RVSM, levels above 8,400 m were provided every 600 m; after implementation, the 8,900–12,500 m band changed to a level every 300 m, notably increasing the number of available flight levels. The segment between 8,400 m and 8,900 m is a transition area; follow controller instructions.

## Operational Requirements

In real-world operations, RVSM imposes specific requirements on aircraft, operators and crews, all centered on ensuring altitude-keeping accuracy:

- **Aircraft**: must meet RVSM airworthiness and continued-airworthiness requirements; the altimetry system must maintain the required accuracy (e.g., Altimetry System Error (ASE) generally no more than about ±65 ft / ±20 m, and Total Vertical Error (TVE) typically required not to exceed about ±300 ft / ±90 m with 95% probability). Refer to ICAO and applicable regulations for the exact criteria.
- **Transponder and equipment**: altitude reporting must be correct; verify that altitude reporting and altitude-keeping equipment are functioning before entering RVSM airspace.
- **Crews and operators**: must complete RVSM training and obtain the required operational approval.

## Application to Online Flight

On XFLYSIM, the platform follows the currently effective AIP for airspace and flight levels. Therefore:

1. **The cruise flight level must be filled in correctly** and consistent with the actual flight (see [User Guidelines](/en/rules/user-rules)).
2. When departing from airports in mainland China, follow the CAAC RVSM flight level allocation rules; the RVSM band is 8,900–12,500 m.
3. Select the flight level by true track angle: eastbound flights use odd levels, westbound flights use even levels.
4. To change flight level, obtain clearance and coordination from the controller first (see [User Guidelines](/en/rules/user-rules)).

## FAQ

### Why does China use metric flight levels?

Civil aviation in China uses a metric flight level system, so the RVSM band is expressed as 8,900–12,500 m; most other regions use the foot-based FL290–FL410, which are roughly equivalent.

### What is 8,900 m in feet?

8,900 m is approximately FL291 and 12,500 m is approximately FL410. 1 m ≈ 3.28084 ft.

### How should the cruise flight level be filled in on the simulator?

Fill in the metric flight level and follow the odd-east / even-west allocation rules. See the [Tutorial](/en/tutorial/) for the specific steps.

### Can I choose a flight level inside the RVSM band on my own?

No. Within controlled airspace, request clearance from the controller and change level only after approval.
