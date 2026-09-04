# Thinking Inventory

This inventory stores reusable thinking assets for multi-frame and general-structure analysis.

Use it as a compact catalog, not as a mandatory checklist. Select only the items that change the analysis.

## Layer taxonomy

```text
Frame
  -> Thinking Operator
  -> General Structure
  -> Pattern
  -> Mechanism
  -> Tool / Processor
```

## Frames

Frames are lenses that reveal different variables and causal models.

- Engineering / systems: interfaces, state, invariants, maintainability.
- Scientific method: hypothesis, baseline, evidence, falsification.
- Product / user value: pain, adoption, workflow friction, usefulness.
- Market / incentives: scarce resources, price-like signals, selection pressure.
- Organization / management: roles, delegation, accountability, handoffs.
- Operating systems: scheduling, memory management, isolation, permissions, IPC.
- Distributed systems: partial failure, consensus, replication, eventual consistency.
- Security / adversarial: trust boundaries, abuse cases, containment.
- Reliability engineering: fallback, retry, SLO, incident, postmortem.
- Control theory: feedback, stability, overshoot, delay, correction.
- Compiler / type system: IR, passes, typed boundaries, linting, optimization.
- Information theory: compression, signal/noise, bandwidth, entropy.
- Learning / education: practice, feedback, transfer, scaffolding.
- Governance / law: permission, review, appeal, audit, precedent.
- Ecology / evolution: variation, selection, retention, niches, decay.
- Cognitive science / attention: salience, working memory, interference, consolidation.
- Cost / operations: budget, latency, throughput, amortization, maintenance.

## Thinking operators

Thinking operators are cognitive actions. They help diagnose or reveal structures.

- Reference-first transfer: find solved analogues before inventing.
- Breakdown: split a complex object into parts.
- Trade-off analysis: identify variables that cannot be maximized together.
- Contradiction-to-structure: use tension to find what is conflated.
- Boundary finding: identify what should be isolated and what interface connects it.
- Bottleneck finding: locate the limiting resource or stage.
- Causal attribution: ask what actually caused the outcome.
- Ablation: remove one component to test contribution.
- Counterexample search: find where a claim or pattern fails.
- Baseline comparison: compare against the simplest existing method.
- Credit assignment: assign success/failure to responsible components.
- Reversibility analysis: prefer reversible actions when uncertainty is high.
- Granularity control: decide whether to work at small, medium, or large scope.
- Externalization: turn hidden state into artifact.
- Compression: reduce future access or execution cost while preserving useful structure.
- Source-of-truth analysis: rank evidence by authority and freshness.
- Feedback tracing: follow action -> observation -> correction.
- Signal/noise separation: distinguish useful evidence from distracting data.
- Transfer mapping: map source-domain elements to target-domain elements.
- Failure-boundary search: define when a pattern stops helping.
- Patch budgeting: constrain change size to preserve attribution and reviewability.
- Information gain estimation: prefer actions that reduce key uncertainty.

## General structures

General structures are recurring solution shapes.

- Generate -> Select -> Verify -> Retain.
- Variation -> Selection -> Retention.
- Stable substrate + dynamic layer.
- Externalized trainable control state.
- Artifact-centered coordination.
- Feedback control loop.
- Exploration-exploitation allocation.
- Multi-objective Pareto frontier.
- Progressive deepening.
- Fork-verify-merge.
- State-diff judging.
- Source-of-truth hierarchy.
- Cache hierarchy / memory stratification.
- Quarantine / containment.
- Backpressure.
- Decay / forgetting.
- Review-gated change.
- Typed interface / protocol boundary.
- Attention routing / salience routing.
- Price-like coordination signal.
- Evidence ledger / provenance chain.

## Patterns

Patterns bind a constraint, structure, mechanism, trade-off, failure boundary, and minimal experiment.

- Reference-First Transfer.
- Taste-Guided Source Discovery.
- Transfer Map.
- Artifact-Centered Research Loop.
- State-Diff Judging.
- Evidence-Gated Self-Improvement.
- Progressive Deepening.
- Issue as Attention Object.
- Branch as Exploration Boundary.
- PR as Experiment Package.
- CI/Review as Verification Gate.
- Merge as Retention.
- Reviewed Memory Card.
- Failure Card.
- Processor Feedback Log.
- Champion/Challenger Policy Update.
- Attention Graph.
- Source Card.
- Reference Packet.

## Mechanisms / tools

Mechanisms and tools implement patterns.

- GitHub issue templates.
- GitHub labels and projects.
- Branches and pull requests.
- CI checks and review bots.
- `aros gate`.
- `aros start`.
- `aros verify`.
- `aros recall`.
- Reference packet artifact.
- Memory card / failure card artifact.
- JSONL nodes/edges for attention graph.
- Processor SPEC.md and feedback logs.

## Selection rule

When analyzing a problem:

1. Pick 3-8 frames.
2. Pick 2-5 thinking operators.
3. Extract 1-3 general structures.
4. Convert only mature structures into patterns.
5. Choose mechanisms/tools only after the pattern is clear.

## Skill / prompt quality as cognitive pathway

A strong prompt or skill is usually not just a better instruction. It encodes a better cognitive pathway.

```text
weak prompt:
  tell me X

strong skill:
  move through the right sequence of representations until X becomes natural
```

### General structure: Concrete-to-Abstract Ladder

```text
concrete scene
  -> analogy / story
  -> conflict or surprise
  -> hidden structure
  -> concept name
  -> formal definition
  -> examples
  -> counterexamples
  -> transfer to target domain
```

### Pattern: Story-to-Structure Explanation

Use when the user is trying to understand an abstract concept.

```text
familiar story
  -> extract hidden structure
  -> name the concept
  -> formalize it
  -> apply it elsewhere
```

### Why it works

First principles:

```text
working memory is limited
abstract concepts need anchors
attention follows conflict and salience
understanding requires compression
transfer requires mapping from concrete case to abstract structure
```

### Taxonomy placement

```text
Frame:
  learning / cognitive science

Thinking operators:
  analogy
  concrete-to-abstract
  contrast
  transfer mapping
  compression

General structure:
  scaffolded understanding ladder

Pattern:
  Story-to-Structure Explanation

Mechanism:
  fable/story -> hidden structure -> formal concept -> examples/counterexamples -> transfer

Tool / skill:
  concept-teaching skill
```

### AROS implication

AROS skills and processors should not only describe outputs. They should encode cognitive workflows.

Example:

```text
issue-generation skill:
  observed friction
    -> concrete failure story
    -> hidden bottleneck
    -> general structure
    -> bounded issue
    -> verification method
```

