---
name: reference-first-reasoning
description: Use this skill whenever the user wants to solve, understand, design, debug, research, or reason through a problem by first finding similar examples, precedents, analogies, prior cases, related papers, known patterns, or self-generated examples. Especially use it when the user mentions analogical reasoning, "similar problems", "have we seen this before", reference-first thinking, case-based reasoning, examples before solving, self-generated context, or asks for a stronger way to reason before answering.
---

# Reference-First Reasoning

This skill captures the core idea from analogical prompting:

```text
Do not solve from a blank page.
First recall or construct similar cases, extract their reusable structure, then transfer that structure to the current problem.
```

The goal is not to copy an old answer. The goal is to build a temporary reasoning scaffold from related examples.

## Core Loop

```text
target problem
-> recall / generate similar cases
-> extract shared structure
-> map old structure to new problem
-> solve using the mapped structure
-> verify where the analogy breaks
```

## When To Use

Use this skill for:

```text
math or coding problems
paper and theory understanding
research idea generation
system design
debugging
product or workflow design
agent capability design
cross-domain transfer
```

It is especially useful when direct reasoning would be too generic or when a problem likely has useful precedents.

## Workflow

### 1. State The Target

Briefly restate the problem and what kind of output is needed.

Ask:

```text
What is the object?
What is the desired artifact?
What must be solved, explained, designed, or decided?
```

### 2. Recall Similar Cases

Find 2-5 related cases.

Cases may come from:

```text
known algorithms
previous bugs
papers
design patterns
GitHub workflows
scientific methods
organizational examples
human reasoning habits
cross-domain analogies
```

If no exact case exists, move outward:

```text
same mechanism
same constraint
same failure mode
same input/output shape
same trade-off
same evaluation problem
```

### 3. Extract The Shared Structure

For each case, do not only summarize it. Extract the reusable structure:

```text
What was the bottleneck?
What representation made it easier?
What operation solved it?
What verifier showed it worked?
What failed when the analogy was overused?
```

Then compress the examples into a common pattern:

```text
When X constraint appears,
use Y representation / operation,
verify by Z signal.
```

### 4. Build A Transfer Map

Map source cases to the current target.

Use this shape:

```text
Source case element -> Current problem element
old object          -> new object
old operation       -> new operation
old artifact        -> new artifact
old verifier        -> new verifier
old failure mode    -> new failure boundary
```

Analogies are only useful when the mapped structure is explicit.

### 5. Solve Or Design

Now solve the original problem using the extracted structure.

Prefer concrete outputs:

```text
answer
plan
architecture
pattern card
theory candidate
debug hypothesis
minimal experiment
implementation sketch
```

### 6. Check Where The Analogy Breaks

Always include a short failure boundary:

```text
What transfers cleanly?
What does not transfer?
What assumption could be false?
What would make this analogy misleading?
What quick test can check it?
```

This prevents superficial analogy.

## Default Output Shape

Use this compact structure unless the user asks for a different format:

```text
Target:
Similar cases:
Shared structure:
Transfer map:
Solution / design:
Failure boundary:
Quick verification:
```

For very small questions, compress it into a few paragraphs instead of using all headers.

## Example

Target:

```text
How should an agent retain useful memory?
```

Similar cases:

```text
Git merge retains accepted branches.
Scientific literature retains peer-reviewed claims.
Package managers retain reusable modules.
Biological evolution retains traits that survive selection.
```

Shared structure:

```text
Variation produces candidates.
Selection filters by evidence.
Retention stores reusable survivors.
Future generation reuses retained structure.
```

Transfer:

```text
branch      -> memory candidate
CI/review   -> verifier
merge       -> retained memory
main branch -> canonical memory
```

Result:

```text
Retain memory only after it has provenance, downstream usefulness, and a verifier signal.
```

Failure boundary:

```text
Git merge is stricter than memory retention; memory may need decay and confidence rather than binary merge/reject.
```

## Relationship To Dream Functions

Reference-first reasoning can itself be a dream function:

```text
retrieve_analogies(problem) -> AnalogySet
extract_shared_structure(AnalogySet) -> PatternCandidate
transfer_structure(problem, PatternCandidate) -> SolutionPlan
verify_transfer(SolutionPlan) -> VerificationReport
```

It is a local reasoning workflow that can feed larger theory discovery and paradigm shift loops.

