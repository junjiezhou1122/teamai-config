---
name: search-space-thinking
description: Use when the user wants to analyze a problem, paper, agent workflow, research idea, tool, GitHub/AROS design, representation, transfer learning, market mechanism, workflow, memory, verifier, or skill through the lens of search-space reduction. Trigger on requests like "what search space does this reduce", "why does this method work", "how does representation/transfer/workflow/market help", "analyze this with our search idea", "turn this into AROS design", or "find a good method to compress the search space".
---

# Search Space Thinking

Use this skill to convert vague problem-solving discussion into a precise analysis of:

```text
what space is too large,
what structure compresses it,
what feedback verifies it,
and what artifact should be retained.
```

Core thesis:

```text
Problem solving is not brute-force search.
Problem solving is search-space shaping plus feedback-guided reduction.
```

## Quick Workflow

1. **Name the object**
   - Paper, repo, issue, workflow, agent system, tool, memory, representation, market, benchmark, or failure.

2. **Identify the raw search space**
   - What is too large or ambiguous?
   - Examples: problem space, source space, hypothesis space, action space, path space, actor space, evaluation space, budget space, memory space.

3. **Diagnose the explosion**
   - Too many variables?
   - Too many actions?
   - Too many sources?
   - Too many possible workflows?
   - Too little feedback?
   - Stale/noisy memory?
   - Hidden constraints?

4. **Find the compression operator**
   - Representation, abstraction, hierarchy, workflow, label, market signal, verifier, benchmark, skill registry, memory card, source packet, trace, or governance gate.

5. **Explain the reduced space**
   - Show what the method turns the raw space into.
   - Prefer concrete before/after mappings.

6. **Define feedback / verifier**
   - What tells us the compression helped?
   - CI, benchmark, review, metric, user feedback, trace, acceptance criteria, experiment result.

7. **Define retained artifact**
   - Issue, reference packet, theory card, experiment report, memory card, skill spec, pattern card, workflow patch, PR, policy, or failure card.

8. **Name failure boundary**
   - Where does this compression mislead?
   - What relevant variable might be overcompressed away?

## Core Formula

Use plain text math:

```text
Raw space:
  X = all possible states / actions / explanations / solutions

Representation:
  z = phi(x)

Good representation:
  H(target | z) < H(target | x without z)

Search policy:
  action = pi(state, representation, memory, budget)

Verifier:
  result = V(candidate)

Retention:
  if V passes, retain candidate as memory / skill / pattern / artifact
```

Good compression is not the smallest representation. It is the representation
that preserves controlling variables while discarding irrelevant detail.

```text
Good method score =
  search reduction
  - application cost
  - error risk
  + reuse value
```

## Search Space Taxonomy

Use this table to route the analysis:

| Search Space | Question | Compression Methods |
|---|---|---|
| Problem space | What problems exist? | templates, issue schema, failure-mode checklist, TIDE-style discovery |
| Source space | What should we read? | citation graph, taste-guided search, benchmark leaderboard, source packet |
| Hypothesis space | What could explain this? | theory card, contradiction mining, boundary probing, counterfactuals |
| Variable space | Which variables matter? | abstraction, controlling variables, sufficient statistics, representation |
| Action/tool space | What can act? | skill registry, tool schema, capability profile, reliability/cost score |
| Path/workflow space | In what order should steps happen? | workflow, state machine, depth ladder, stop condition |
| Actor space | Who should act? | market/bid, trust, wealth, role emergence, availability |
| Evaluation space | What is good? | benchmark, CI, review, acceptance criteria, verifier checklist |
| Budget space | How deep should we go? | depth labels, shadow price, marginal utility, budget/stop condition |
| Memory space | What should be remembered? | memory card, principle extraction, decay, provenance, failure card |

## Common Compression Operators

### Representation

Turns vague or high-dimensional state into useful variables.

```text
raw page complaint -> layout / spacing / typography / color / asset / viewport
raw repo chaos     -> issue / label / PR / CI / artifact graph
```

### Workflow

Compresses action-sequence search.

```text
all action paths -> known useful search graph
```

Workflow is a retained search-path prior, not a truth. Keep the outer contract
stable, but allow dynamic routing inside the workflow.

### Market / Price-Like Signal

Compresses actor/action allocation under scarce resources.

```text
who should act now?
-> bid = relevance * confidence * expected_value - cost - risk
```

Market is useful when agents have partial information, action slots are scarce,
specialists exist, and feedback is observable. It can fail when rewards are noisy
or incentives are gameable.

### Transfer

Reuses a search structure discovered elsewhere.

```text
source domain structure -> target domain adaptation
```

Transfer works when source and target share latent structure. Always name what
transfers cleanly and what breaks.

### Trace Feedback

Turns execution into learning data.

```text
trace = (state, operator, output, cost, verifier result, failure reason)
```

Trace feedback improves router, workflow, memory, tool choice, depth policy, and
verifier design.

## AROS Mapping

When analyzing AROS or GitHub-native research systems, use:

```text
Issue       = local problem/search space
Label       = compressed routing metadata
Discussion  = divergent idea/framing search
Comment     = coordination signal / pheromone
Sub-issue   = decomposition / dependency search
Branch      = isolated exploration path
PR          = candidate state transition
CI/review   = verifier / pruning signal
Merge       = retention
Artifact    = externalized search state
Memory card = reusable search prior
Skill       = executable retained operator
Workflow    = retained search-path prior
Trace       = data for improving search methods
```

AROS design question:

```text
What search space does this feature reduce?
What compression operator does it introduce?
How do we verify it helped?
What artifact does it retain?
```

## Output Shapes

### Compact Analysis

```text
Object:
Raw search space:
Explosion source:
Compression operator:
Reduced space:
Feedback / verifier:
Retained artifact:
Failure boundary:
AROS transfer:
```

### Method Card

```text
Name:
Search space reduced:
Core constraint:
Compression mechanism:
Why it works:
What it costs:
Failure boundary:
Verifier:
Reusable artifact:
Minimal experiment:
```

### AROS Issue Framing

```text
Question:
Raw search space:
Bottleneck:
Compression operator:
Comparator:
Metric:
Probe:
Verifier:
Retained artifact:
Stop condition:
```

## Guardrails

- Do not call every abstraction good. Ask what relevant information may be lost.
- Do not force prior-art search for trivial work; search is conditional when novelty, uncertainty, or cost justifies it.
- Do not treat labels, votes, prices, or bids as truth. They are routing signals.
- Do not keep workflows fixed forever. Treat workflows as versioned artifacts that can be improved by trace feedback.
- Prefer a minimal experiment over broad philosophical expansion.
