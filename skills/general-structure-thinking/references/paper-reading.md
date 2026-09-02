# Paper / Repo / Tool Structural Reading

Use this when reading a paper, repo, tool, benchmark, product, postmortem, or field note.

Do not only summarize the method. Extract transfer structure.

## Questions

1. What concrete problem or failure does it address?
2. Which first principles does it expose?
3. Which frame makes the contribution obvious?
4. Which thinking operator reveals the need? Trade-off, breakdown, bottleneck, source of truth, etc.
5. What is the general structure?
6. What mechanisms implement it?
7. What are the domain instances?
8. What would break without this structure?
9. What transfers to agent ecology or the target system?
10. What minimal experiment would test the transfer?

## Output

```text
Item:
Surface contribution:
First principles:
Frames:
Thinking operators:
General structure:
Mechanisms:
Instances:
Transfer:
Failure boundary:
Minimal experiment:
Pattern candidate:
```

## Example mappings

- DCI / direct corpus interaction -> interface shapes intelligence; semantic similarity is lossy; Direct Artifact Interaction.
- SkillsVote -> retention needs selection; Evidence-Gated Skill Evolution.
- Code as Agent Harness -> executable shared substrate.
- CiteVQA -> claim-evidence ledger; provenance matters.
- SpecBench -> visible metrics get gamed; Held-Out Intent Verification.
- MINTEval -> memory interference; Revision-Aware Memory Graph.
- Temporal caching -> semantic match is not validity; Temporal Validity Gate.
