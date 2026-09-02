
export const meta = {
  name: 'theory-organism-v2-verification',
  description: 'Theory Organism Workflow v2 with objective Verify via predictions + historical evidence + experiments',
  phases: ['Acquire', 'Generate', 'Inner-Loop', 'Extract-Predictions', 'Find-Evidence', 'Run-Experiments', 'Compute-Score', 'Retain'],
}

const TOPIC = 'AI Agent'

const STRATEGIES = [
  'Analogical Reasoning',
  'Contradiction Mining',
  'Complexity Science',
  'Biological Analogies',
  'Game Theory',
]

// ── Stage 1: Acquire ──────────────────────────────────────────────────────
phase('Acquire')

const [papersResult, webResult] = await parallel([
  () => agent('Use paper-acquire to find 5 papers on AI Agent, multi-agent systems, self-evolution. Return title, arXiv ID, abstract.', {label: 'papers', phase: 'Acquire'}),
  () => agent('Use doko-search to find 5 web articles on AI Agent research. Return title, URL, source, summary.', {label: 'web', phase: 'Acquire'}),
])

const materials = {
  papers: papersResult?.papers ?? [],
  web: webResult?.articles ?? [],
}

log(`Acquired ${materials.papers.length} papers, ${materials.web.length} web articles`)

// ── Stage 2: Generate 5 cards ──────────────────────────────────────────────
phase('Generate')

const CARD_SCHEMA = {
  type: 'object',
  properties: {
    theoryName: {type: 'string'},
    coreClaim: {type: 'string'},
    analogy: {type: 'string'},
    caseStudies: {type: 'array'},
    agentImplications: {type: 'string'},
    evidence: {type: 'array'},
    probe: {type: 'string'},
  },
  required: ['theoryName', 'coreClaim'],
}

const genResults = await pipeline(
  STRATEGIES,
  async (strategy) => {
    const prompt = `Generate 1 Theory Card about "${TOPIC}" using ${strategy} strategy.

Return JSON with: theoryName, coreClaim (1 sentence), analogy, caseStudies (3: domain/name/description), agentImplications, evidence (2-3 items), probe.

Materials: ${JSON.stringify(materials).substring(0, 2000)}`
    return agent(prompt, {label: 'gen:' + strategy, phase: 'Generate', schema: {type: 'object', properties: {cards: {type: 'array'}}, required: ['cards']})
  }
)

const cards = genResults.flatMap(r => r?.cards ?? []).filter(Boolean)
log(`Generated ${cards.length} cards`)

// ── Stage 3: Inner-Loop ─────────────────────────────────────────────────
phase('Inner-Loop')

const innerResults = await pipeline(
  cards,
  async (card) => {
    const prompt = `For this Theory Card:
Name: ${card.theoryName}
Claim: ${card.coreClaim}

Generate 3 counterfactual tests: "What if X?", "What if the opposite?", "What if scale 100x?"

Return JSON: {counterfactualTests: [string], refinedClaim: string, consistencyScore: 0-1}`
    return agent(prompt, {label: 'inner:' + card.theoryName.substring(0,15), phase: 'Inner-Loop', schema: {type: 'object', properties: {counterfactualTests: {type: 'array'}, refinedClaim: {type: 'string'}, consistencyScore: {type: 'number'}}})
  }
)

const refinedCards = cards.map((c, i) => ({
  ...c,
  counterfactualTests: innerResults[i]?.counterfactualTests ?? [],
  refinedClaim: innerResults[i]?.refinedClaim || c.coreClaim,
  consistencyScore: innerResults[i]?.consistencyScore ?? 0.5,
  strategy: c.strategy || STRATEGIES[i] || 'Unknown',
}))

// ── Stage 4: Extract Predictions ───────────────────────────────────────────
phase('Extract-Predictions')

const predictionResults = await pipeline(
  refinedCards,
  async (card) => {
    const prompt = `Extract 2-4 TESTABLE PREDICTIONS from this Theory Card.

A testable prediction has:
- Specific condition (e.g., "when X > Y")
- Specific outcome (e.g., "then Z happens")
- Can be verified by experiment or historical data

Theory: ${card.theoryName}
Claim: ${card.refinedClaim || card.coreClaim}
Case Studies: ${JSON.stringify(card.caseStudies)}

Return JSON: {
  predictions: [{
    id: "pred_1",
    statement: "When [condition], then [outcome]",
    condition: "X > Y",
    outcome: "Z happens",
    testable: true/false,
    test_method: "experiment/beyond/paper"
  }]
}`
    return agent(prompt, {label: 'pred:' + card.theoryName.substring(0,15), phase: 'Extract-Predictions', schema: {type: 'object', properties: {predictions: {type: 'array'}}})
  }
)

const cardsWithPredictions = refinedCards.map((c, i) => ({
  ...c,
  predictions: predictionResults[i]?.predictions ?? [],
}))

log(`Extracted predictions from ${cardsWithPredictions.length} cards`)

// ── Stage 5: Find Historical Evidence ──────────────────────────────────────
phase('Find-Evidence')

// For each card, find historical evidence for its predictions from materials
const evidenceResults = await pipeline(
  cardsWithPredictions,
  async (card) => {
    const evidencePrompt = `Find HISTORICAL EVIDENCE from these materials for each prediction.

Card: ${card.theoryName}
Predictions: ${JSON.stringify(card.predictions)}
Materials (papers): ${JSON.stringify(card.caseStudies)}

For each prediction, find if there is historical evidence supporting or refuting it.
Evidence types: paper_data, web_case, known_experiment, none

Return JSON: {
  evidence: [{
    prediction_id: "pred_1",
    source: "paper/web/experiment name",
    outcome: "confirmed/failed/partial/none",
    strength: 0-1,
    description: "what the evidence shows"
  }]
}`
    return agent(evidencePrompt, {label: 'evid:' + card.theoryName.substring(0,15), phase: 'Find-Evidence', schema: {type: 'object', properties: {evidence: {type: 'array'}}})
  }
)

const cardsWithEvidence = cardsWithPredictions.map((c, i) => ({
  ...c,
  evidence: evidenceResults[i]?.evidence ?? [],
}))

// ── Stage 6: Run Experiments (for predictions without evidence) ────────────
phase('Run-Experiments')

// For predictions without historical evidence, run lightweight experiments
const experimentResults = await pipeline(
  cardsWithEvidence,
  async (card) => {
    // Find predictions that need experiments (no evidence yet)
    const needExperiment = (card.evidence || []).filter(e => e.outcome === 'none' || !e.outcome)

    if (needExperiment.length === 0) {
      return {cardId: card.theoryName, experiments: [], results: []}
    }

    const experimentPrompt = `Design and run a lightweight experiment for these predictions WITHOUT historical evidence.

Card: ${card.theoryName}
Predictions needing validation: ${JSON.stringify(needExperiment)}

Design a minimal experiment (Python-like simulation or logical reasoning) that can test the prediction.
Run the experiment mentally and report results.

Return JSON: {
  experiments: [{
    prediction_id: "pred_X",
    design: "brief experiment description",
    result: "confirmed/failed/partial",
    data: {key: value}
  }]
}`
    return agent(experimentPrompt, {label: 'exp:' + card.theoryName.substring(0,15), phase: 'Run-Experiments', schema: {type: 'object', properties: {experiments: {type: 'array'}}})
  }
)

const cardsWithExperiments = cardsWithEvidence.map((c, i) => ({
  ...c,
  experiments: experimentResults[i]?.experiments ?? [],
}))

// ── Stage 7: Compute Objective Verification Score ──────────────────────────
phase('Compute-Score')

const scoredCards = cardsWithExperiments.map(card => {
  // Combine all evidence
  const allEvidence = [
    ...(card.evidence || []),
    ...(card.experiments || []).map(e => ({
      prediction_id: e.prediction_id,
      outcome: e.result,
      source: 'experiment',
      strength: e.result === 'confirmed' ? 1.0 : e.result === 'partial' ? 0.5 : 0,
    }))
  ]

  // Compute objective accuracy
  const confirmed = allEvidence.filter(e => e.outcome === 'confirmed' || e.outcome === 'true').length
  const failed = allEvidence.filter(e => e.outcome === 'failed' || e.outcome === 'false').length
  const partial = allEvidence.filter(e => e.outcome === 'partial').length
  const total = confirmed + failed + partial

  const verification_score = total > 0 ? (confirmed + partial * 0.5) / total : 0

  // Verdict based on objective score
  let verdict = 'REFINE'
  if (verification_score >= 0.7) verdict = 'RETAIN'
  else if (verification_score < 0.4) verdict = 'PRUNE'

  return {
    ...card,
    verification_score: Math.round(verification_score * 100) / 100,
    verdict,
    stats: { confirmed, failed, partial, total },
  }
})

// ── Stage 8: Retain ──────────────────────────────────────────────────
phase('Retain')

const retained = scoredCards.filter(c => c.verdict === 'RETAIN')
const pruned = scoredCards.filter(c => c.verdict === 'PRUNE')
const refine = scoredCards.filter(c => c.verdict === 'REFINE')

log(`Final: ${retained.length} RETAIN, ${refine.length} REFINE, ${pruned.length} PRUNE`)

// Output summary
for (const card of scoredCards) {
  log(`[${card.verdict}] ${card.theoryName}`)
  log(`  Predictions: ${card.predictions.length}, Evidence: ${card.stats.total}`)
  log(`  Verification Score: ${card.verification_score}`)
}

return {
  topic: TOPIC,
  materials: { papers: materials.papers.length, web: materials.web.length },
  cards: scoredCards,
  stats: {
    total: scoredCards.length,
    retained: retained.length,
    refine: refine.length,
    pruned: pruned.length,
    avgScore: (scoredCards.reduce((s, c) => s + c.verification_score, 0) / scoredCards.length).toFixed(3),
  },
}
