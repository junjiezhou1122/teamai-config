---
name: multi-frame-thinking
description: Use when the user wants to think about a problem from many perspectives, says "different frames", "换个视角", "多角度分析", "how would different people think", "what frames apply", "frame/taste/mental model", or seems stuck because one frame is too narrow. This skill generates multiple useful frames, explains what each reveals and hides, compares tensions between frames, then synthesizes a better problem representation, decision, or next experiment.
---

# Multi-Frame Thinking

Use this skill to analyze one problem through several frames instead of staying trapped in a single ontology.

Core idea:

```text
Same observation
  -> different frames
  -> different visible variables
  -> different failure modes
  -> different actions
  -> synthesized decision / experiment
```

A frame is not just an opinion. A frame selects:

```text
objects
variables
causal model
success criteria
risks
blind spots
```

## Default workflow

### 0. Ground the task

Before generating frames, identify:

```text
Object:
  What are we analyzing?

Current question:
  What decision, confusion, or design problem are we trying to resolve?

Target artifact:
  What should this produce? answer / decision / design options / experiment / pattern card / issue / PR plan
```

If the user is vague, infer a reasonable object and say the assumption briefly.

### 1. State the base observation

Write the problem in one plain sentence.

Example:

```text
Long-running agents drift because exploration, execution, verification, and memory update mix in one context stream.
```

### 2. Select 5-8 relevant frames

Choose frames based on the problem. Do not always use the same list.

Common frames:

```text
Engineering / systems
Scientific method
Product / user value
Market / incentives
Organization / management
Operating systems
Distributed systems
Security / adversarial
Reliability engineering
Control theory
Compiler / type system
Information theory
Learning / education
Governance / law
Ecology / evolution
Cognitive science / attention
Cost / operations
```

### 3. For each frame, output four fields

```text
Frame:
What it sees:
What it suggests:
What it hides / can get wrong:
```

Keep each frame compact. The value is comparison, not long essays.

### 4. Compare tensions between frames

Look for disagreements:

```text
speed vs rigor
exploration vs exploitation
automation vs governance
local optimization vs global robustness
cost vs quality
simplicity vs flexibility
memory retention vs memory pollution
```

These tensions often reveal the actual design problem.

### 5. Synthesize

Produce one of:

```text
better problem statement
recommended decision
architecture direction
experiment plan
pattern candidate
issue decomposition
```

A good synthesis should say:

```text
What all frames agree on
Where they disagree
Which frame should dominate now
Which frame should be revisited later
```

### 6. Convert to action

End with concrete next steps:

```text
Next action:
Minimal experiment:
Artifact to create/update:
Decision boundary:
```


## Thinking inventory

This skill has a maintained inventory of reusable frames, thinking operators, general structures, patterns, and mechanisms:

```text
references/thinking-inventory.md
```

Read it when the user asks to manage known thinking methods, asks whether something is a frame/operator/pattern, or when you need a richer menu of frames/operators. Do not load it for every use; keep ordinary analyses compact.

Key rule from the inventory:

```text
Frame -> Thinking Operator -> General Structure -> Pattern -> Mechanism -> Tool / Processor
```

Useful examples:

```text
Reference-first transfer = thinking operator / strategy
Market thinking = frame
Exploration-exploitation = general structure
State-Diff Judging = pattern
aros verify = tool / processor
```

## Output templates

### Compact multi-frame analysis

```text
Object:
Question:
Target artifact:

Base observation:

Frames:
1. [Frame]
   Sees:
   Suggests:
   Hides:

2. [Frame]
   Sees:
   Suggests:
   Hides:

Tensions:

Synthesis:

Next action:
```

### Decision-oriented output

```text
Decision to make:

Frame comparison:
| Frame | Optimizes for | Recommendation | Risk |
|---|---|---|---|

Dominant frame for this decision:

Rejected/secondary frames:

Decision:

Verification:
```

### Design-oriented output

```text
Design problem:

Frame insights:
- Engineering:
- Product:
- Security:
- Reliability:
- Governance:

Design constraints:

Candidate structures:

Minimal design:

Failure boundaries:

Experiment:
```

## Frame library

Use these as examples, not a mandatory checklist.

### Engineering / systems frame

Sees:

```text
interfaces, state, invariants, failure modes, maintainability
```

Good for:

```text
architecture, modularity, APIs, codebases, processors
```

Blind spot:

```text
may underweight user value or incentives
```

### Scientific method frame

Sees:

```text
hypothesis, baseline, experiment, evidence, falsification
```

Good for:

```text
research claims, self-improvement, benchmark work
```

Blind spot:

```text
can be slow or over-formal for simple decisions
```

### Product frame

Sees:

```text
user pain, workflow, adoption, value, friction
```

Good for:

```text
feature priority, UX, usefulness
```

Blind spot:

```text
may underweight technical correctness or long-term reliability
```

### Market / incentive frame

Sees:

```text
scarce resources, price-like signals, incentives, selection pressure
```

Good for:

```text
routing, prioritization, source scoring, agent behavior shaping
```

Blind spot:

```text
can mistake measurable signals for true value
```

### Organization frame

Sees:

```text
roles, delegation, accountability, shared documents, handoffs
```

Good for:

```text
multi-agent systems, long-running collaboration, governance
```

Blind spot:

```text
may add process overhead
```

### Operating-system frame

Sees:

```text
scheduling, memory management, permissions, isolation, IPC
```

Good for:

```text
agent runtime, task routing, context budgets, tool access
```

Blind spot:

```text
may over-mechanize fuzzy research work
```

### Security / adversarial frame

Sees:

```text
attack surfaces, trust boundaries, abuse cases, containment
```

Good for:

```text
external information, tool permissions, memory writes, automation
```

Blind spot:

```text
may overconstrain exploration
```

### Reliability frame

Sees:

```text
fallback, retry, observability, SLOs, degradation, incident response
```

Good for:

```text
production agents, workflows, CI, verification
```

Blind spot:

```text
may prefer stability over breakthrough exploration
```

### Compiler / type-system frame

Sees:

```text
IR, typed boundaries, passes, linting, optimization, compilation
```

Good for:

```text
artifact pipelines, processors, workflow compilation
```

Blind spot:

```text
may force premature structure on ambiguous problems
```

### Ecology / evolution frame

Sees:

```text
variation, selection, retention, niches, adaptation, decay
```

Good for:

```text
self-improvement, pattern libraries, processor evolution
```

Blind spot:

```text
can tolerate too much waste if not bounded
```

## Important rules

- Do not list frames mechanically. Pick frames that change the answer.
- Always include what each frame hides. Every frame has blind spots.
- Prefer 5-8 frames. More than 10 usually becomes noise.
- End with a synthesis and action; do not leave the user with only perspectives.
- If the problem is high-stakes or implementation-facing, include verification or experiment design.
- If this overlaps with General Structure Thinking, use multi-frame thinking first to generate perspectives, then general-structure-thinking to extract reusable structures.
