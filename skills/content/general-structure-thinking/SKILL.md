---
name: general-structure-thinking
description: Use when analyzing any paper, repo, product, system, failure, observation, source graph, person/taste signal, idea, or design problem to extract frames, first principles, thinking operators, general structures, transfer maps, mechanisms, patterns, skills, and minimal experiments. Trigger on requests like "think from first principles", "find the general structure", "use different frames", "what pattern is this", "why does this method work", "how can this transfer", "turn this insight into a pattern", "analyze this paper/repo/system structurally", "how do I think about this", "find sources/people by taste", or "make this into a skill/tool".
---

# General Structure Thinking

Use this skill to convert observations into reusable structural understanding.

Core chain:

```text
observation / source / problem
  -> grounding: object -> operator -> artifact
  -> frames
  -> first principles / constraints
  -> thinking operators
  -> general structures
  -> transfer maps
  -> mechanisms / instances
  -> pattern candidates
  -> minimal experiments
  -> skill/tool/substrate retention
  -> use feedback
```

## Default workflow

0. **Ground the thinking**
   - Ask: What is the object? What operator are we applying? What artifact should this produce?
   - Example: `paper -> extract structure -> pattern card`; `person follow graph -> mine taste -> source map`; `failure -> contradiction-to-structure -> failure-boundary card`.

1. **State the observation**
   - What concrete thing happened, failed, worked, or appeared?
   - Do not start with a solution.

2. **Run multi-frame analysis**
   - Consider several frames when useful: market, memory, network, security, ecology, distributed systems, organization, science/evidence, software architecture, learning, governance.
   - For each important frame, say what it reveals and what it hides.

3. **Extract first principles**
   - Identify unavoidable constraints such as finite attention, finite context, stale memory, costly communication, local observation, fallible agents, delayed feedback, scarce resources, interdependence, scale phase transitions, or variation-selection-retention.

4. **Apply thinking operators**
   - Use trade-off, breakdown, bottleneck, boundary, coupling, source of truth, representation, feedback, reversibility, signal vs noise, credit assignment, path dependence, entropy/maintenance, and granularity.

5. **Name candidate general structures**
   - Examples: routing, shared substrate, compression, boundary/interface, source-of-truth hierarchy, decay, quarantine, feedback loop, selection/retention, cache hierarchy, fork-merge, ledger/provenance, triage, backpressure, price-like signals, dependency graph, fast/slow path, governance.

6. **Separate structure from mechanism and instance**
   - General structure: recurring solution to recurring constraint.
   - Mechanism: concrete implementation.
   - Instance: domain-specific appearance.

7. **Produce a transfer map**
   - Do not stop at "A is like B"; map `source domain element -> target domain element`.
   - Explain how the structure maps to agent ecology or the user's target system.
   - Include what transfers cleanly and what breaks.

8. **Propose a minimal experiment**
   - Compare against a simple baseline.
   - Name metrics and failure boundaries.

9. **Retain as artifact when useful**
   - Pattern card, aha note, transfer map, source map, taste profile, failure-boundary card, rubric, doctrine, skill spec, tool spec, or experiment plan.

10. **Plan use feedback**
   - How will this pattern/skill be updated, decayed, or rejected after use?

## Idea discovery flywheel

Use this loop when the user wants to discover new ideas, sources, people, tools, skills, or research directions:

```text
Source Discovery
  -> Structure Extraction
  -> Transfer Mapping
  -> Minimal Experiment
  -> Pattern / Skill Retention
  -> Use Feedback
  -> Source Discovery ...
```

Key principle:

```text
Use other people's taste as a routing signal, not as truth.
```

Taste-guided source discovery can mine:

- follow graphs
- citation graphs
- dependency graphs
- stars/forks
- issue/PR activity
- benchmark leaderboards
- blogrolls / reading lists
- repeated tool choices

Always calibrate for goal mismatch, stale signals, echo chambers, popularity bias, and downstream usefulness.

## Thinking router

When the user feels confused or says they do not know how to think, route the task before analyzing:

```text
Input:
  problem / confusion / desired output / budget

Output:
  mode / operators / artifact / depth
```

Common modes:

- solve mode -> reference-first transfer, tests, state diff -> answer/patch
- understand mode -> frames, primitives, mechanism -> explanation/transfer map
- source mode -> taste-guided search, graph expansion -> source map/taste profile
- structure mode -> invariants, cross-domain recurrence -> pattern card
- experiment mode -> hypothesis, baseline, metrics -> experiment plan
- skill mode -> repeated process, procedure, failure boundary -> skill spec

## Output shapes

### Compact structural analysis

```text
Object:
Operator:
Target artifact:
Observation:
Frames:
First principles:
Thinking operators:
General structures:
Transfer map:
Mechanisms:
Instances:
Failure boundary:
Minimal experiment:
Retention:
```

### Pattern card

```text
Name:
Core constraint:
General structure:
Mechanism:
Cross-domain examples:
What breaks without it:
Trade-off:
Agent ecology transfer:
Failure boundary:
Minimal experiment:
Use feedback:
```

### Aha artifact

```text
Before:
Trigger:
New frame:
Compression:
Transfer:
Pattern candidate:
Evidence:
Boundary:
```

### Transfer map

```text
Source domain:
Target domain:
Constraint match:
Element map:
Mechanism map:
What transfers cleanly:
What must change:
What should not transfer:
Failure boundary:
Minimal experiment:
```

### Taste profile

```text
Person/source:
Observed choices:
Inferred taste:
Strong domains:
Blind spots:
Useful graph edges:
Calibration notes:
Downstream usefulness:
```

## Important distinctions

- **Frame** decides what world and variables are visible.
- **Taste** evaluates what good looks like inside a frame.
- **Mental model** explains causal relations among variables.
- **First principle** is an unavoidable constraint.
- **Thinking operator** reveals structure or boundary.
- **General structure** is a reusable solution pattern.
- **Mechanism** is implementation.
- **Instance** is a domain-specific occurrence.
- **Pattern** is a reusable problem-structure-mechanism card.
- **Skill** is a pattern turned into an executable procedure.
- **Tool** is an automated or semi-automated skill.
- **Substrate** is shared infrastructure enabling many tools/workflows.

## Layer taxonomy for "thinking methods"

When the user asks whether a thinking method is a pattern, classify it instead
of forcing everything into one bucket.

```text
Frame
  -> Thinking Operator
  -> General Structure
  -> Pattern
  -> Mechanism
  -> Tool / Processor
```

Use these definitions:

- **Frame**: a lens or discipline that reveals variables, e.g. market thinking, control theory, compiler thinking, governance, product thinking, reliability engineering.
- **Thinking operator**: an analysis action, e.g. ablation, counterexample search, causal attribution, breakdown, trade-off, boundary finding.
- **General structure**: a recurring solution shape, e.g. feedback loop, exploration-exploitation, Pareto frontier, stable typed interface, review-gated change.
- **Pattern**: a reusable card binding a constraint, structure, mechanism, trade-off, failure boundary, and minimal experiment.
- **Mechanism**: a concrete implementation of the pattern.
- **Tool / processor**: an executable implementation with input/output contract and evaluation.

Example:

```text
Frame:
  scientific method

Operator:
  baseline comparison / falsification

General structure:
  hypothesis -> experiment -> evidence -> revision

Pattern:
  Evidence-Gated Self-Improvement

Mechanism:
  self-improvement issue + validation PR + scorecard

Tool:
  aros verify --pr N
```

This distinction matters because AROS should not store everything as a pattern.
Frames guide routing, operators guide diagnosis, structures guide design,
patterns guide reuse, mechanisms guide implementation, and tools/processors
execute.

## References

Read references only when deeper context is needed:

- `references/core.md` — core first principles, frames, structures, price-like signals.
- `references/paper-reading.md` — structural reading workflow for papers/repos/tools.
- `references/agent-ecology-transfer.md` — mapping structures into agent ecology.
