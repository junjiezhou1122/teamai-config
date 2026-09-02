---
name: latent-variable-thinking
description: Use when the user wants to quickly understand a paper, repo, system, framework, product, codebase, method, architecture, research idea, or analogy by extracting first principles, controlling latent variables, mechanisms, transfer maps, and failure boundaries. Trigger on requests like "why can we understand this quickly", "what are the latent variables", "extract the first principles", "what transfers", "analyze this structure", "compare these systems deeply", or "turn this into a general pattern".
---

# Latent Variable Thinking

Use this skill to compress surface complexity into the variables and constraints
that make a thing understandable, transferable, and testable.

Core thesis:

```text
Understanding is search-space compression.
Fast understanding comes from finding controlling latent variables.
```

## Workflow

1. **Name the object**
   - Paper, repo, system, framework, product, method, architecture, failure, or analogy.

2. **List surface details briefly**
   - APIs, modules, claims, steps, components, examples, observed behavior.
   - Keep this short; do not get stuck summarizing.

3. **Extract first-principle constraints**
   - What is unavoidable?
   - Examples: finite context, scarce attention, delayed feedback, stale memory,
     noisy sources, costly verification, local observation, partial failure,
     coordination cost, privacy, latency, budget, drift.

4. **Name controlling latent variables**
   - Which few variables explain many details?
   - Examples: state representation, routing, memory, verifier, reward signal,
     feedback delay, granularity, source of truth, trust, cost, uncertainty.

5. **Map mechanisms to variables**
   - For each mechanism, ask:

```text
what constraint forced it?
which search space does it reduce?
what failure does it prevent?
what happens if it is removed?
```

6. **Separate structure from implementation**

```text
general structure = reusable causal pattern
mechanism = concrete way it works
instance = domain-specific implementation
```

7. **Check transfer validity**
   - Transfer requires shared causal structure, not surface similarity.

```text
shared constraints?
matching variables?
similar feedback?
compatible failure modes?
implementation details that must change?
```

8. **Define failure boundary**
   - Where does this latent map break?
   - What variable may have been overcompressed away?

9. **Propose a minimal probe**
   - What cheap test would verify that this latent structure is useful?

10. **Retain the pattern**
   - Pattern card, design-space axis, failure-boundary note, skill, verifier,
     or issue proposal.

## Output Template

```text
Object:
Surface details:
First-principle constraints:
Controlling latent variables:
Mechanisms:
Search spaces reduced:
Transferable structure:
Non-transferable details:
Failure boundary:
Minimal probe:
Retained pattern:
```

## Common Latent Variables

Use these as starting candidates, not a fixed checklist:

```text
state
representation
granularity
attention
routing
workflow
memory
source of truth
feedback
verifier
trust
cost
risk
latency
uncertainty
credit assignment
retention
governance
```

## Good Transfer Test

Good transfer:

```text
market auction -> agent routing
because both have scarce action slots, distributed local information,
price-like signals, selection pressure, and historical credit.
```

Weak transfer:

```text
"agents are like humans, markets have humans"
```

This matches surface metaphor, not causal structure.

## Quick Final Thesis

When summarizing, end with the strongest compression:

```text
The surface thing looks complex because it has many details.
The deep structure is simpler: [latent variables].
Most mechanisms are expansions or optimizations around those variables.
```

