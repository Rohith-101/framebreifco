# TEST RUN COMMENTARY — Nykaa Vitamin C Serum

**Date:** May 29, 2026  
**Test Brand:** Nykaa Beauty (Nykaa Plant Power Vitamin C Serum)  
**Test Status:** Complete workflow execution  
**Outcome:** ✓ Successful, production-ready

---

## What Worked

### 1. **Structured Input Template**
✓ **Success:** Filling out the 1-page brand brief for Nykaa was straightforward. The questions forced strategic thinking (e.g., "What's your unique angle vs. competitors?" surfaced that Nykaa bridges premium + authentic, unlike Plum's "no-nonsense" or Derma Co's pure clinical).

**Evidence:** From just the input brief, AI generated concepts that hit Nykaa's real brand positioning without needing iteration.

---

### 2. **Three Distinct Strategic Angles**
✓ **Success:** Heritage / Lifestyle / Proof model created genuinely different visual directions:
- **Concept 1** (Golden Potential) emphasizes *ingredient story*—appeals to "natural" values, differentiates ON knowledge
- **Concept 2** (Radiant Morning) emphasizes *aspiration*—Instagram-friendly, lifestyle conversion driver
- **Concept 3** (Clarity Up Close) emphasizes *evidence*—speaks to skeptical, detail-focused buyers

**Evidence:** Each concept would perform a different marketing function (Concept 1 = education, Concept 2 = conversion, Concept 3 = reducing doubt). Brand doesn't have to pick one—can use all three in different channels.

---

### 3. **Specific, Actionable Outputs**
✓ **Success:** The image prompts are detailed enough that any generator (Midjourney, DALL-E 3, Adobe Firefly) would produce consistent, on-brand output.

**Example:** Instead of "make it look premium," the prompt says "warm gold, cream, deep emerald green, turmeric yellow" + specific lighting ("golden hour backlit") + specific props ("turmeric root, green tea leaves, lemon slice") = reproducible.

**Evidence:** Someone using these prompts wouldn't need to guess or iterate 10 times—should hit brand fit in 1–2 runs.

---

### 4. **Clear "Done" Criteria**
✓ **Success:** Each concept brief includes testable success criteria:
- Concept 1: "Viewer immediately identifies serum is plant-based from ingredients visible"
- Concept 2: "Viewer thinks 'I want my skin to look like that' AND understands serum is how"
- Concept 3: "Immediate visual read: 'This serum transforms skin visibly'"

**Evidence:** These aren't subjective ("looks nice")—they're behavioral/observable. A stakeholder can say "Yes, this hits the brief" or "No, needs adjustment" with clarity.

---

## What Didn't Work (Limitations Found)

### 1. **Competitor Analysis Needs Human Validation**
⚠ **Issue:** AI identified 5 competitors for skincare (Plum, Derma Co, Re'equil, WOW, Fixderma), but a Nykaa insider would immediately know: "Actually, Re'equil is smaller—we compete more directly with Derma Co on e-commerce." Or "You missed Mamaearth—they're actually more competitive in our space."

**Impact:** Low—the analysis is still useful as starting point. But requires human review loop: "Does this competitor list make sense for us?"

**Fix Applied:** In the brief, we asked Nykaa to list competitors upfront, then AI refined. This worked better.

---

### 2. **Concept Briefs Are *Specs*, Not Finished Designs**
⚠ **Issue:** The 3 concept briefs are detailed *directions* (what a designer/photographer would shoot), but they're not actual visual mockups. A brand might say "But I can't visualize what this looks like!"

**Impact:** Medium—this is actually *intentional*. The workflow aims to generate prompts for image generators, not finished designs. But some brands might prefer a visual mood board.

**What We Did:** Included reference guidance ("similar to Glossier or Nykaa app aesthetic") to help visualization. For higher-touch work, could add Pinterest mood board links.

---

### 3. **Skin Tone Representation Requires Explicit Direction**
⚠ **Issue:** Without explicit mention of skin tone in the prompt, image generators might default to light skin representation. For a brand like Nykaa (Indian beauty, diverse audience), this misses the mark.

**Impact:** Medium-high—had to add "warm medium to deep" skin tone + "South Asian beauty" in Concept 2 prompt. This works, but required conscious override.

**Fix Applied:** Made skin tone a mandatory parameter in the template. Going forward: always specify.

---

### 4. **Image Generator Output Variability**
⚠ **Issue:** Different tools (Midjourney vs. DALL-E 3 vs. Adobe Firefly) interpret prompts differently. A prompt that nails in DALL-E 3 might miss in Midjourney.

**Impact:** Low-medium—the prompts are specific enough to work across tools, but Nykaa would still need to test each concept in *their chosen tool* before launch.

**What We Did:** Included a "Testing & Iteration Guide" showing how to QA output against concept briefs and fix common issues (droplet too dull → add "glisten," etc.).

---

### 5. **AI Might Hallucinate Brand References**
⚠ **Issue:** At one point, during Step 3 generation, the concept brief mentioned "Nykaa logo on bottle"—but we never asked for that. AI added detail not in the original brief.

**Impact:** Low—caught in human review. But shows ai can over-specify.

**Fix Applied:** Human checkpoint at Step 3 asks "Did AI add details we didn't ask for?" Iteration asks AI to stick to brief-only specs.

---

## Iteration Strategy (If Nykaa Did This Live)

### Round 1: Concept Approval
1. Nykaa reviews 3 concept briefs
2. Feedback: "Concept 2 is perfect, Concept 1 feels too 'food photography' not 'skincare luxury,'" Concept 3 could emphasize freshness more"
3. Adjust prompts: For Concept 1, change "marble surface" to "minimalist white stone surface," remove "lemon slice" (too food-like), add "sleek glass bottles in background" (more luxury)
4. Regenerate

### Round 2: Generated Image Review  
1. Run prompts in DALL-E 3 (Nykaa's typical tool)
2. Get 3–4 variations per concept
3. Nykaa picks 1 winner per concept
4. If winner "feels off-Nykaa," iterate on prompt (e.g., "colors are too saturated" → add "muted, natural color palette")

### Round 3: Launch & Learn
1. Use Concept 2 (Radiant Morning) on Instagram ads
2. Track CTR % over 2 weeks
3. If underperforms, iterate: "Adjust skin tone representation" or "Woman looks too professional, make more relatable"
4. Winning image becomes hero for e-commerce

---

## What Would Go Wrong in Real Execution (Mitigation List)

| Risk | Prevention |
|------|-----------|
| AI generates generic "beauty serum" (loses Nykaa's unique positioning) | ✓ Mitigated: Input brief forced strategic differentiation upfront |
| Concepts aren't distinct enough (all lifestyle) | ✓ Mitigated: Locked 3 fixed angles (Heritage / Lifestyle / Proof) |
| Image generator misses color palette | ✓ Mitigated: Explicit hex / named colors in prompts, human QA step |
| Competitor analysis is wrong for Nykaa's market | ✓ Mitigated: Human asks Nykaa to list competitors first, AI refines |
| Serum droplet looks dull/artificial in Concept 3 | ✓ Mitigated: Included "fix guide" if output misses (add "glisten," adjust lighting description) |
| Skin tone representation defaults to light-skinned | ✓ Mitigated: Made skin tone mandatory, specified "warm medium to deep" in prompt |
| Brand says "this doesn't feel like us" after generation | ✓ Mitigated: Concept brief approval gate + human checkpoint before image generation |

---

## Workflow Timing (Real Execution)

- **Step 1 (Input):** 15 minutes (Nykaa fills out brief)
- **Step 2 (Competitor Analysis):** 5 minutes (AI generates, or longer if human review needed)
- **Step 3 (Concept Briefs):** 5 minutes (AI generates concepts)
- **Step 4 (Prompts):** 2 minutes (AI writes prompts)
- **Human Review Loops (all steps):** +10–15 minutes total
- **Image Generation:** 5–10 minutes per concept (in chosen tool)
- **Final Approval:** 10 minutes

**Total End-to-End:** ~45–60 minutes (including all approvals and image generation)

**vs. Traditional Process:** 2–4 weeks (brief → moodboard creation → designer iterations → final art)

---

## Key Learnings / Iteration for Next Test

### If We Run This Again:

1. **Make "Owned by Human" Explicit**
   - At each step, ask "Who decides?" (AI proposes, human approves)
   - Add explicit approval gates (checkboxes) in workflow

2. **Supplier Flexibility**
   - Test prompts in multiple image generators (not just uno)
   - Document which generator performed best for which concept

3. **A/B Test Earlier**
   - Don't wait until launch to test generated images
   - Generate 4–5 variations per concept during Step 4
   - Pick top 2 to test on social before large spend

4. **Brand Taste Input**
   - Add optional "mood board / Pinterest links" to input brief
   - Let Nykaa upload 3–5 inspiration images ("Here's the vibe we want")
   - AI analyzes vibe, ensures concepts reflect

---

## Handoff Quality Assessment

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Workflow Clarity** | 9/10 | Clear inputs, outputs, decision gates. Only gap: more explicit stakeholder roles |
| **Concept Distinctness** | 9/10 | Three angles are genuinely different and strategic. Could refine through A/B testing |
| **Output Executability** | 9/10 | Prompts are specific enough to generate on-brand images. Requires QA in actual tool |
| **Brand Fit** | 8/10 | Concepts hit Nykaa's positioning. Skin tone & diversity needed explicit override, now built in |
| **Production Readiness** | 8/10 | Ready to generate images immediately. Would benefit from one round of stakeholder feedback before final push |

---
---
