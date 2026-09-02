---
name: trace-compiled-reflex-loop
description: Use when analyzing or designing systems that need both stable fast workflows and adaptive slow reasoning, especially when discussing fast/slow cognition, workflow updates from traces, rule evolution, product/software updates, taste calibration, meta-judges, agent learning, or turning repeated failures into reusable rules.
---

# Trace-Compiled Reflex Loop

## Core Idea

Long-running intelligent systems need two paths:

```text
Fast path = retained rules, workflows, schemas, defaults, habits
Slow path = reasoning, exploration, exception handling, taste, frame revision
Trace     = task history, failures, feedback, corrections, environment signals
Update    = compile repeated slow insights into better fast rules
```

Use this pattern when a system should be quick on known cases but still adapt when the world, user taste, or task distribution changes.

## When To Use

- A workflow feels useful but too rigid, or exploratory work feels smart but hard to repeat.
- A product, agent, team, or personal process must adapt from usage traces and failures.
- You are deciding what should become a rule, checklist, rubric, skill, memory, or workflow.
- You are analyzing software/product updates as changes to default assumptions.
- You need to explain why fast rules are useful without making them permanent truth.

## Pattern

```text
fast rule acts
  -> trace records outcome
  -> slow review detects mismatch, novelty, or repeated pattern
  -> propose rule/workflow/schema update
  -> verify on future cases
  -> retain, revise, decay, or delete the rule
```

The point is not to standardize everything. Standardize only the part that has become stable enough to save future cognition.

## Analysis Template

```text
Object:
Current fast system:
Current slow system:
Trace available:
Mismatch or repeated pattern:
Candidate update:
What becomes fast:
What must stay slow:
Verifier:
Failure boundary:
Retained artifact:
```

## Rule Promotion Test

Promote a slow insight into a fast rule only when it is:

- **Repeated**: appears across multiple traces, not one anecdote.
- **High-value**: prevents costly mistakes or saves real effort.
- **Low-ambiguity**: can be applied without destroying context.
- **Observable**: has signals a future agent can check.
- **Reversible**: can be revised, scoped, or deleted when stale.

Keep it slow when it depends on taste, hidden context, new categories, or unresolved tradeoffs.

## Examples

Search:

```text
Trace: first-round landscape searches repeatedly return broad link lists.
Slow insight: good landscape search needs taxonomy, primary sources, benchmarks, failure modes, and a gap review.
Fast update: add those buckets to the default search workflow.
Keep slow: revising the taxonomy when a new dimension appears.
```

Design:

```text
Trace: user repeatedly rejects generic SaaS-template polish.
Slow insight: "template smell" is a taste boundary.
Fast update: add a detector for oversized cards, decorative gradients, shallow icon grids, and vague marketing copy.
Keep slow: deciding whether a specific expressive visual choice is actually appropriate.
```

Product:

```text
Trace: old workflow handles manual composition, but users now expect AI assistance.
Slow insight: environment shifted from composable workspace to intelligent workspace.
Fast update: add AI search, summarization, automation, or agents as first-class defaults.
Keep slow: choosing the new representation and migration path.
```

## Common Mistakes

- Treating fast rules as truth instead of search-path priors.
- Turning a taste heuristic into a hard rule.
- Updating rules from a single vivid failure without checking recurrence.
- Keeping rules forever without decay or versioning.
- Letting slow reasoning rediscover hygiene rules every time.

## Output Shape

When useful, end with a compact update proposal:

```text
Fast-rule patch:
Scope:
Evidence traces:
Expected benefit:
Verifier:
Rollback / decay condition:
```

