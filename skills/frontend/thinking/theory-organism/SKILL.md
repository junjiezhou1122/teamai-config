---
name: theory-organism
description: |
  Run Theory Organism workflow for AI Agent research theory generation and verification.
  
  Use this skill when:
  - User wants to generate theory cards about AI agents
  - User wants to verify theories against historical data
  - User wants to score theories by prediction accuracy (not LLM subjective judgment)
  - User mentions "theory organism", "theory cards", "verify theory", "objective verification"
  - User wants to research AI agent coordination, emergence, or collaboration
  
  This skill implements a prediction-accuracy based verification framework where theories are scored by how well their predictions match historical evidence, not by LLM subjective scoring.
  
  Core workflow: Generate → Extract Predictions → Find Evidence → Compute Score → Retain/Refine/Prune
---

# Theory Organism Skill

Theory Organism is a workflow for generating and verifying AI Agent theories using **objective prediction-accuracy scoring** (not LLM subjective judgment).

## Core Concept

```
Theory Card = {
  theoryName: string,
  coreClaim: string,        // ONE sentence
  predictions: [            // 2-4 testable predictions
    {
      statement: "When [condition], then [outcome]",
      condition: string,
      outcome: string,
      testable: true/false
    }
  ],
  caseStudies: [...],       // Historical evidence
  verificationScore: 0-1,   // Objective score = confirmed/total
  verdict: "RETAIN" / "REFINE" / "PRUNE"
}
```

## Why Prediction-Based Verification?

LLM subjective scoring is unreliable. Instead, verify by:
1. Extract **specific, testable predictions** from theory
2. Find **historical evidence** (papers, experiments, case studies)
3. Score = `confirmed_predictions / total_testable_predictions`

**Verdict thresholds**:
- RETAIN: score ≥ 0.7
- REFINE: 0.4 ≤ score < 0.7  
- PRUNE: score < 0.4

## Workflow Stages

### Stage 1: Acquire Materials

Use `paper-acquire` and `doko-search` to find:
- Relevant papers on the topic
- Web articles / case studies
- Historical data for verification

### Stage 2: Generate Theory Cards

Generate 5 theory cards using different strategies:
1. Analogical Reasoning (analogies from biology/physics/economics)
2. Contradiction Mining (find interesting contradictions)
3. Complexity Science (emergence, phase transitions)
4. Biological Analogies (immune system, swarms, evolution)
5. Game Theory (Nash equilibrium, mechanism design)

**Output format**:
```json
{
  "theoryName": "...",
  "coreClaim": "ONE sentence",
  "analogy": "vivid analogy for non-researchers",
  "caseStudies": [
    {"domain": "...", "name": "...", "description": "..."}
  ],
  "agentImplications": "2-3 sentences",
  "evidence": ["item1", "item2"],
  "probe": "specific experiment to validate"
}
```

### Stage 3: Extract Predictions

For each card, extract 2-4 **testable predictions**:

```
A testable prediction has:
- Specific condition (e.g., "when X > Y")
- Specific outcome (e.g., "then Z happens")
- Can be verified by experiment or historical data
```

### Stage 4: Find Historical Evidence

Match predictions against:
- Papers found in Stage 1
- Case studies in the card
- Known experiments (e.g., emergence-gap simulation results)

### Stage 5: Compute Objective Score

```python
confirmed = sum(1 for e in evidence if e.outcome == 'confirmed')
failed = sum(1 for e in evidence if e.outcome == 'failed')
partial = sum(1 for e in evidence if e.outcome == 'partial')
total = confirmed + failed + partial

score = (confirmed + partial * 0.5) / total if total > 0 else 0

if score >= 0.7: verdict = 'RETAIN'
elif score >= 0.4: verdict = 'REFINE'
else: verdict = 'PRUNE'
```

### Stage 6: Retain

Output final results:
- RETAIN cards: high confidence, keep for further use
- REFINE cards: promising but need more evidence
- PRUNE cards: contradicted by evidence

## Usage

### Basic usage:
```
/theory-organism AI Agent coordination
```

### With custom topic:
```
/theory-organism multi-agent task allocation
```

### Options:
- `--strategies`: Override default generation strategies
- `--min-score`: Minimum score threshold (default 0.7)
- `--output`: Output file path

## Example Output

```
Theory Organism Results
=======================
Topic: AI Agent Coordination

Cards Generated: 5
├── AI Agents as Digital Ant Colonies (RETAIN, score=0.83)
├── AI Agent Coordination Paradox (RETAIN, score=1.00)
├── Emergent Agency in Multi-Agent Systems (RETAIN, score=0.83)
├── Multi-Agent Emergence as Game-Theoretic Equilibrium (RETAIN, score=0.88)
└── AI Agents as Artificial Organisms (REFINE, score=0.67)

Summary: 4 RETAIN, 1 REFINE, 0 PRUNE
Average Score: 0.84
```

## Key Principles

1. **Objective over subjective**: Score by prediction accuracy, not LLM vibes
2. **Specific predictions**: Vague theories score low
3. **Evidence-based**: Match predictions to real data
4. **Iteration**: Low-score theories → refine → re-verify
5. **Emergence**: Let roles and strategies emerge from the process

## Workflow Scripts

The skill includes a workflow script at `scripts/theory-organism-v2-wf.js` that implements the full Theory Organism workflow.

### To run the workflow directly:

In Claude Code with the Workflow tool:
1. Load the workflow script from `~/.claude/skills/theory-organism/scripts/theory-organism-v2-wf.js`
2. Execute it with `/workflow`

### Alternative: Run via skill command:

```
/theory-organism AI Agent coordination
```

## Integration with Implementation Workflow

After Theory Organism completes:
- RETAIN theories → implement in code
- REFINE theories → extract new predictions → re-verify
- PRUNE theories → archive with reason

This creates a complete: Generate → Verify → Implement → Learn → Regenerate cycle.
