# Creative Process Engineer — Approach Document

## Objective
Design a workflow that transforms brand inputs into 3 strategically distinct product description image concepts, complete with AI-generated prompts ready for any image generator.

---

## 1. Workflow Structure

### Overview
The workflow is a 4-step journey that mimics real product development: **input → research → concept → output**.

```
Step 1: BRAND INPUT (Human)
  ↓ Collect product, audience, positioning, visual preferences
  
Step 2: COMPETITOR ANALYSIS (AI)
  ↓ Identify patterns in 5 competing brands
  ↓ Extract visual signals: what's working, what's missing
  
Step 3: CONCEPT DESIGN (AI)
  ↓ Generate 3 distinct strategic angles
  ↓ Each brief includes: rationale, composition, color, props, success criteria
  
Step 4: PROMPT GENERATION (AI)
  ↓ Convert concepts to production-ready image gen prompts
  ↓ Output: main prompt + negative prompt + specifications
```

### AI vs. Human Decision Points

| Step | AI Role | Human Decision |
|------|---------|-----------------|
| **Step 1** | N/A | Brand defines themselves—what's true about *their* product, market, taste |
| **Step 2** | Identify competitor brands, extract visual patterns | Human reviews: "Does this competitor list make sense? Are these patterns real?" |
| **Step 3** | Generate 3 concepts following a strategic brief | Human reviews: "Are these actually distinct? Do they match our brand?" |
| **Step 4** | Write image generation prompts from concept specs | Human customizes: adjusts color names, mood words, adds brand-specific details |

**Key principle**: AI does research, ideation, and specification-writing. Humans do taste, strategy, and final approval.

---

## 2. Required Brand Input

### Brand Brief Template (One Page)

```
PRODUCT & BRAND DETAILS

Brand Name: ___________________
Product Name: ___________________

PRODUCT
- Core features/USP (3-5 bullets):
- What problem does it solve?
- Price positioning (budget/mid/premium):

TARGET AUDIENCE
- Primary demographic (age, gender, lifestyle):
- What do they value most?
- Where do they discover products? (Instagram, Amazon, word-of-mouth?)

BRAND PERSONALITY & VISUAL IDENTITY
- 3 words that describe your brand tone: _____, _____, _____
- Brand values (e.g., "natural," "premium," "playful," "functional"):
- Color palette (list 3-5 preferred colors):

MARKET CONTEXT
- Who are your main competitors? (3-5 brands)
- What's YOUR unique angle vs. them?
- What do you NOT want to communicate?

SUCCESS CRITERIA
- What feeling should this image evoke?
- Where will this image be used? (e-commerce tile, Instagram, website hero?)
```

**Why this template?**
- Specific enough that AI won't hallucinate (e.g., "natural skincare" vs. vague "beauty")
- Flexible enough to work across categories (skincare, supplements, fashion, food, tech)
- Focuses on strategy, not aesthetics (designers do aesthetics; we design thinking)

---

## 3. Definition of "Done" at Each Step

### Step 2: Good Competitor Analysis
A good analysis has:
- ✓ 5 competitor brands identified (real competitors, not random)
- ✓ For each: visual style, color approach, positioning, and weakness called out
- ✓ Clear "use signals" (visual trends working in the space)
- ✓ Clear "avoid signals" (visual clichés or approaches that dilute the category)
- ✓ All signals are **actionable** ("minimalist aesthetic" → "use negative space, max 2 colors per image")

**Fails if:** Output is generic ("competitors use colors...") or misses the category (suggests a competitor that's actually in a different market)

### Step 3: Good Concept Brief
A good concept brief has:
- ✓ **Clear strategic angle** (not "cool product image" but "heritage storytelling" vs. "lifestyle aspiration" vs. "function proof")
- ✓ **Vivid visual description** (a designer or AI could execute this without guessing)
- ✓ **Specific details**: composition (flat lay? portrait? macro?), lighting (warm? dramatic?), props (which ones?)
- ✓ **Success criteria** that are testable (e.g., "glow visible without looking artificial" vs. "nice lighting")
- ✓ **Human checkpoint** listed (e.g., "verify that skin tone representation matches our audience")

**Fails if:** Too vague ("make it look premium"), off-brand (doesn't match the color palette or tone), or identical to another concept

### Step 4: Good Image Prompt
A good prompt has:
- ✓ **Self-contained** (doesn't reference "the product" or "the brand"—fully describes the scene)
- ✓ **Specific style guidance** (photorealistic vs. illustrated; which photographer's style; which decade's aesthetic)
- ✓ **Color accuracy** (lists exact colors, not "nice colors")
- ✓ **Negative prompt** that blocks common failures (no filters, no AI artifacts, no stock photo look)
- ✓ **Aspect ratio & output specifications** included

---

## 4. What Could Go Wrong & How We Catch It

### Risk 1: AI Generates Off-Brand Concepts
**Problem**: Concepts don't match the brand's visual identity or tone.

**Prevention**:
- Pass brand colors, tone, and values to the AI explicitly in the prompt
- Human review at Step 3: "Do these 3 concepts *feel* like our brand?"
- If not, revise brief inputs and regenerate (e.g., add "this is a luxury brand—no bright neons")

### Risk 2: Competitor Analysis Misses the Real Market
**Problem**: AI identifies generic competitors instead of true direct competitors.

**Prevention**:
- Brands must list their **expected** competitors in the brief (AI validates and expands)
- If analysis feels wrong, human rejects it and clarifies market positioning
- Example: "You said competitors are high-street brands, but analysis mentions luxury—mismatch"

### Risk 3: The 3 Concepts Aren't Actually Distinct
**Problem**: All 3 concepts converge on the same visual strategy (e.g., all lifestyle shots, all hero product focused)

**Prevention**:
- Enforce 3 fixed strategic angles in the prompt (e.g., Heritage / Lifestyle / Function)
- Each angle locks down key decisions (composition, props, framing)
- Human review: "Are these three actually *different* from each other?"

### Risk 4: Image Prompts Don't Translate to Good Output
**Problem**: Generated images don't match the concept or look generic/off-brand.

**Prevention**:
- Provide detailed visual reference points (style, era, photographer, color palette, specific details)
- Include strong negative prompts (what NOT to generate)
- Human tests the prompt in their image generator of choice before going live
- If output is poor, refine the prompt and regenerate

### Risk 5: Prompt Hallucinations (AI Makes Stuff Up)
**Problem**: AI adds details that weren't in the concept (wrong colors, wrong props, misses key elements).

**Prevention**:
- Use structured prompts (JSON format with exact fields: concept, angle, description)
- Pass visual constraints explicitly (colors as hex, props as a list, not prose)
- Human review compares prompt to original concept—if they diverge, flag it

---

## 5. Why This Workflow Works

### For Brands:
- **Fast**: 4 steps in ~10 minutes (vs. 2+ weeks for traditional mood boards)
- **Deliberate**: Every choice has a reason (strategy-first, not aesthetic-first)
- **Testable**: Can generate images immediately and A/B test market fit

### For Our Team:
- **Clear inputs**: No vague briefs—brand tells us exactly what they are
- **Clear outputs**: Designer or image gen AI can execute concepts without debate
- **Quality gate**: Humans approve strategy before AI goes to execution
- **Scalable**: Same workflow works for skincare, supplements, fashion, food, tech

---

## 6. Example: How We'd Use This

**Input (Brand):**
- Brand: Nykaa (Indian beauty D2C)
- Product: Plant-based vitamin C serum
- Audience: Female, 25–35, values natural + performance
- Visual: Minimalist, warm, authentic (not overly glossy)

**Process:**
1. Brand fills out 1-page brief
2. AI analyzes 5 Indian beauty competitors (Plum, Derma Co, Re'equil, WOW, Fixderma)
3. AI generates 3 concepts:
   - *Concept 1 (Heritage)*: Close-up of lemon/turmeric—"what's inside"
   - *Concept 2 (Lifestyle)*: Woman's skin glowing in morning light
   - *Concept 3 (Science)*: Product bottle with ingredient callouts
4. AI writes prompts for each
5. Brand tests in DALL-E 3 or Midjourney
6. Brand picks winning image or blends all 3

---



