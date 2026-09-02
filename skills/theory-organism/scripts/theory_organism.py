#!/usr/bin/env python3
"""
Theory Organism Core Script

Runs the theory generation and verification workflow:
1. Generate theory cards
2. Extract predictions
3. Find historical evidence
4. Compute objective scores
5. Output verdicts
"""

import json
import sys
from dataclasses import dataclass, field
from typing import Any


@dataclass
class Prediction:
    id: str
    statement: str
    condition: str
    outcome: str
    testable: bool = True


@dataclass
class Evidence:
    prediction_id: str
    outcome: str  # confirmed, failed, partial, none
    source: str
    strength: float = 0.5


@dataclass
class TheoryCard:
    theoryName: str
    coreClaim: str
    strategy: str
    predictions: list = field(default_factory=list)
    caseStudies: list = field(default_factory=list)
    evidence: list = field(default_factory=list)
    verificationScore: float = 0.5
    verdict: str = "REFINE"
    stats: dict = field(default_factory=dict)

    def to_dict(self) -> dict:
        return {
            "theoryName": self.theoryName,
            "coreClaim": self.coreClaim,
            "strategy": self.strategy,
            "predictions": [
                {"id": p.id, "statement": p.statement, "condition": p.condition, "outcome": p.outcome}
                for p in self.predictions
            ],
            "caseStudies": self.caseStudies,
            "verificationScore": self.verificationScore,
            "verdict": self.verdict,
            "stats": self.stats
        }


def compute_score(evidence: list) -> tuple[float, str, dict]:
    """
    Compute objective verification score from evidence.

    Returns: (score, verdict, stats)
    """
    confirmed = sum(1 for e in evidence if e.outcome == 'confirmed')
    failed = sum(1 for e in evidence if e.outcome == 'failed')
    partial = sum(1 for e in evidence if e.outcome == 'partial')
    total = confirmed + failed + partial

    if total == 0:
        score = 0.5
    else:
        score = (confirmed + partial * 0.5) / total

    score = round(score, 2)

    if score >= 0.7:
        verdict = "RETAIN"
    elif score >= 0.4:
        verdict = "REFINE"
    else:
        verdict = "PRUNE"

    stats = {"confirmed": confirmed, "failed": failed, "partial": partial, "total": total}

    return score, verdict, stats


def format_results(cards: list, topic: str) -> str:
    """Format results for display."""
    output = []
    output.append("=" * 60)
    output.append(f"Theory Organism Results")
    output.append("=" * 60)
    output.append(f"Topic: {topic}")
    output.append("")
    output.append(f"Cards Generated: {len(cards)}")
    output.append("")

    retained = [c for c in cards if c.verdict == "RETAIN"]
    refined = [c for c in cards if c.verdict == "REFINE"]
    pruned = [c for c in cards if c.verdict == "PRUNE"]

    for card in cards:
        status_icon = {"RETAIN": "✓", "REFINE": "~", "PRUNE": "✗"}[card.verdict]
        output.append(f"{status_icon} [{card.verdict}] {card.theoryName} (score={card.verificationScore})")
        output.append(f"  Strategy: {card.strategy}")
        if card.predictions:
            output.append(f"  Predictions: {len(card.predictions)}")
        output.append("")

    output.append("Summary:")
    output.append(f"  RETAIN: {len(retained)}")
    output.append(f"  REFINE: {len(refined)}")
    output.append(f"  PRUNE: {len(pruned)}")

    if cards:
        avg = sum(c.verificationScore for c in cards) / len(cards)
        output.append(f"Average Score: {avg:.2f}")

    return "\n".join(output)


def main():
    """Main entry point for theory-organism script."""
    print("Theory Organism Core Script")
    print("=" * 40)
    print("")
    print("To run the full workflow, use /theory-organism in Claude Code.")
    print("")
    print("Core functions:")
    print("  - compute_score(evidence) -> (score, verdict, stats)")
    print("  - TheoryCard: data structure for theory cards")
    print("  - Prediction: data structure for testable predictions")
    print("  - Evidence: data structure for verification evidence")
    print("")
    print("Verdict thresholds:")
    print("  RETAIN: score >= 0.7")
    print("  REFINE: 0.4 <= score < 0.7")
    print("  PRUNE: score < 0.4")


if __name__ == "__main__":
    main()
