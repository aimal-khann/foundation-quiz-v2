// Section 10: The Five Horizons
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["10_the_five_horizons"] = {
  "sectionId": "10_the_five_horizons",
  "chapterId": 3,
  "chapterTitle": "The Five Horizons",
  "title": "Section 10: The Five Horizons",
  "totalQuestions": 10,
  "questions": [
    {
      "id": 1,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "KEPT AS-IS",
      "concept": "Shift from Task Delegation (Horizon 0) to Persistent Role Ownership (Horizon 1)",
      "question": "A logistics director deploys a background AI system to handle the ongoing duty of customs clearance compliance, operating asynchronously overnight while staff are offline rather than waiting for per-shipment commands. Which operational shift defines this architectural transition from a traditional software agent to an AI Worker?",
      "options": {
        "A": "Replacing prompt-driven task delegation with persistent role ownership",
        "B": "Eliminating human review gates through deterministic tool execution",
        "C": "Migrating local inference workloads onto proprietary vendor cloud hosts",
        "D": "Converting unstructured policy manuals into static vector embeddings"
      },
      "correct": "A",
      "explanation": "Option A succeeds because the defining shift from Horizon 0 (AI Agents) to Horizon 1 (AI Workers) moves the unit of handoff from discrete tasks to a persistent role that keeps working on its own while humans are away, governed and managed like a team role.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "Overview & The five horizons",
        "source_file": "the five horizon.md",
        "core_concept": "Evolution from task-level delegation (Horizon 0) to ongoing role ownership and management (Horizon 1)."
      },
      "why_incorrect": {
        "B": "Horizon 1 explicitly requires verifiable output and human checking of work rather than eliminating human review gates.",
        "C": "AI Workers can run either on proprietary vendor clouds or locally via open-source tools; cloud migration is not the defining conceptual shift.",
        "D": "Vectorizing policy manuals is a standard retrieval technique, not the shift from task delegation to persistent role ownership."
      },
      "full_justification": "Option A is correct (A: 9w | B: 8w | C: 9w | D: 8w) because Horizon 1 elevates AI from executing isolated tasks to holding an ongoing governed role. Options B, C, and D misidentify review removal, cloud hosting, or vector retrieval as the defining shift.",
      "category": "The Five Horizons"
    },
    {
      "id": 2,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "KEPT AS-IS",
      "concept": "Self-Hosted Open-Source Runtimes vs. Hosted Vendor AI Workers",
      "question": "A regulated financial institution requires an autonomous background AI Worker that operates continuously while analysts are away, but internal data-sovereignty rules forbid sending client ledgers to external vendor clouds. Which deployment architecture aligns with the ecosystem capabilities established in late 2026?",
      "options": {
        "A": "Provisioning a hosted vendor worker with strict role-based cloud identities",
        "B": "Deploying a self-hosted open-source runtime on internal corporate hardware",
        "C": "Routing batch ledger queries through an interactive web-browser chatbot UI",
        "D": "Delegating overnight reconciliations to a stateless conversational assistant"
      },
      "correct": "B",
      "explanation": "Option B succeeds because by October 2026, alongside proprietary vendor workers (such as OpenAI's dots and Anthropic's Claude Duet), open-source tools (such as OpenClaw) allow organizations to run continuous background AI Workers on their own computers.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "Overview & Footnotes 1\u20133",
        "source_file": "the five horizon.md",
        "core_concept": "Open-source AI Worker runtimes enable continuous background execution on self-hosted hardware when vendor clouds are restricted."
      },
      "why_incorrect": {
        "A": "Hosted vendor workers run on external vendor infrastructure, violating the firm's strict prohibition against sending ledgers to external clouds.",
        "C": "Interactive web-browser chatbots represent pre-horizon prompting and cannot run continuous asynchronous background work while analysts are away.",
        "D": "Stateless conversational assistants lack persistent role ownership and unattended background execution capabilities."
      },
      "full_justification": "Option B is correct (A: 10w | B: 10w | C: 10w | D: 8w) because open-source runtimes like OpenClaw support continuous background AI Workers on local/internal hardware. Options A, C, and D violate external cloud restrictions or lack background worker capabilities.",
      "category": "The Five Horizons"
    },
    {
      "id": 3,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "UPGRADED",
      "concept": "Cumulative Horizon Dependencies (Horizon 1 Builds on Horizon 0 Foundations)",
      "question": "During an enterprise architecture review, a lead developer proposes deprecating all Horizon 0 agent guardrails\u2014specifically tool reliability checks and persistent identity bindings\u2014because the firm is upgrading to Horizon 1 AI Workers. Why must this proposal be rejected?",
      "options": {
        "A": "Horizon 1 capabilities depend directly on Horizon 0 governance foundations",
        "B": "Horizon 0 guardrails automatically generate cross-border export compliance",
        "C": "Horizon 1 replaces tool reliability checks with autonomous fleet budgeting",
        "D": "Horizon 0 policies replace the need for verifiable output audits later"
      },
      "correct": "A",
      "explanation": "Option A succeeds because capabilities across the five horizons are cumulative\u2014later horizons build on earlier ones, so Horizon 1 (AI Workers) carries forward Horizon 0's foundational principles of reliable tools, persistent identity, and governed knowledge and action.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "Overview & The five horizons (Horizon 0 -> Horizon 1)",
        "source_file": "the five horizon.md",
        "core_concept": "Later horizons build cumulatively on Horizon 0 principles (reliable tools, persistent identity, governed knowledge and action)."
      },
      "why_incorrect": {
        "B": "Cross-border export capacity is a macro-level Horizon 3 concern, not an automatic byproduct of Horizon 0 guardrails.",
        "C": "Horizon 1 does not replace tool reliability checks, and autonomous fleet budgeting belongs to Horizon 4 (Autonomous Economy).",
        "D": "Verifiable output is a core Horizon 1 requirement that builds upon\u2014rather than gets replaced by\u2014Horizon 0 tool reliability."
      },
      "full_justification": "Option A is correct (A: 9w | B: 8w | C: 9w | D: 10w) because Horizon 1 depends directly on Horizon 0 governance foundations. Options B, C, and D misassign Horizon 3/4 concepts or invert cumulative dependency rules.",
      "category": "The Five Horizons"
    },
    {
      "id": 4,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "KEPT AS-IS",
      "concept": "Horizon 1 Governance Triad (Governed Knowledge, Clear Authority, Verifiable Output)",
      "question": "A legal operations manager assigns an AI Worker to draft and route vendor non-disclosure agreements without real-time supervision. To satisfy the core governance challenges of the AI Worker era, which control triad must the manager establish before deployment?",
      "options": {
        "A": "Unbounded tool discovery, dynamic budget bidding, and peer agent voting",
        "B": "Governed knowledge sources, explicit authority limits, and verifiable outputs",
        "C": "Automated fleet composition, cross-firm API billing, and sovereign hosting",
        "D": "Continuous model fine-tuning, stateless session memory, and open web access"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Horizon 1 (the AI Worker era, 2026 to 2028) is explicitly defined by three core challenges: governed knowledge, clear authority, and verifiable output.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "The five horizons (Horizon 1)",
        "source_file": "the five horizon.md",
        "core_concept": "Horizon 1 challenges are governed knowledge, clear authority, and verifiable output."
      },
      "why_incorrect": {
        "A": "Unbounded tool discovery violates clear authority limits, while dynamic budget bidding belongs to Horizon 4.",
        "C": "Fleet composition belongs to Horizon 2 (AI Workforce era), and national export capacity belongs to Horizon 3.",
        "D": "Stateless session memory contradicts persistent role ownership, and open web access undermines governed knowledge."
      },
      "full_justification": "Option B is correct (A: 9w | B: 8w | C: 8w | D: 9w) because governed knowledge, clear authority, and verifiable output form the exact Horizon 1 governance triad. Options A, C, and D mix later-horizon concepts or unsafe open-access settings.",
      "category": "The Five Horizons"
    },
    {
      "id": 5,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "KEPT AS-IS",
      "concept": "Early Signals of Horizon 2 (Composable Multi-Worker Fleets)",
      "question": "An enterprise software vendor trials pre-packaged AI Workers for corporate clients where each worker holds a distinct corporate identity and isolated system permissions tailored to a single job function. What architectural shift does this trial signal?",
      "options": {
        "A": "The immediate arrival of fully self-governing autonomous economies",
        "B": "The retirement of human accountability across routine back-office roles",
        "C": "The early emergence of composable multi-worker organizational fleets",
        "D": "The replacement of deterministic APIs with conversational search tools"
      },
      "correct": "C",
      "explanation": "Option C succeeds because the chapter notes that early signs of Horizon 2 (the AI Workforce era, 2028 to 2032, where AI Workforces are composed and coordinated) are already visible as vendors test ready-made AI Workers with distinct identities and role-scoped system access.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "The five horizons (Horizon 2 early signals)",
        "source_file": "the five horizon.md",
        "core_concept": "Vendor trials of role-scoped AI Workers with distinct identities signal the early emergence of Horizon 2 composable workforces."
      },
      "why_incorrect": {
        "A": "Self-governing autonomous economies belong to Horizon 4 (2035 onward, a possible future), not early enterprise role trials.",
        "B": "Human accountability is invariant across every horizon and is never retired.",
        "D": "Conversational search tools represent pre-horizon rungs at the bottom of the ladder."
      },
      "full_justification": "Option C is correct (A: 9w | B: 9w | C: 9w | D: 9w) because role-scoped, identity-bound AI Workers lay the building blocks for Horizon 2 workforce composition. Options A, B, and D misidentify the horizon or violate invariant human accountability.",
      "category": "The Five Horizons"
    },
    {
      "id": 6,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "KEPT AS-IS",
      "concept": "Bottom-Up National AI Export Prerequisite (Horizon 1 -> Horizon 3)",
      "question": "A national technology ministry is drafting a five-year industrial strategy to position its domestic service sector as a global exporter of AI-driven back-office operations. According to the evolutionary progression of AI-native economies, which prerequisite must be satisfied before the country can reliably export AI work?",
      "options": {
        "A": "Domestic firms must first master the governance of single AI Workers",
        "B": "Autonomous workforces must self-allocate sovereign capital budgets",
        "C": "Local vendors must abandon open-source runtimes for hosted clouds",
        "D": "Regulators must transfer legal liability onto autonomous software roles"
      },
      "correct": "A",
      "explanation": "Option A succeeds because 'Where this book starts' explicitly states that managing one AI Worker well is the foundation for coordinating a workforce, and a country needs people and companies with these skills before it can produce and export AI work (Horizon 3).",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "Where this book starts & Horizon 3",
        "source_file": "the five horizon.md",
        "core_concept": "Mastering single AI Worker management is the prerequisite for workforce coordination and national AI work exports."
      },
      "why_incorrect": {
        "B": "Self-allocating autonomous workforces describe Horizon 4 (2035+), whereas national export capacity is a Horizon 3 milestone.",
        "C": "Both open-source and hosted vendor stacks are valid; abandoning open-source runtimes is not a prerequisite.",
        "D": "Human accountability remains fixed across every horizon rather than transferring legal liability onto software."
      },
      "full_justification": "Option A is correct (A: 10w | B: 8w | C: 9w | D: 9w) because national AI work export capability depends bottom-up on individuals and firms mastering single AI Worker governance. Options B, C, and D misplace Horizon 4 concepts or invent false constraints.",
      "category": "The Five Horizons"
    },
    {
      "id": 7,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "KEPT AS-IS",
      "concept": "Horizon 4 (Autonomous Economy, 2035+) Core Challenge",
      "question": "In a long-range scenario planning exercise for the mid-2030s, a board evaluates an operating model where primary AI workforces autonomously recruit, budget, and supervise subordinate AI workforces. What remains the primary governance risk in this operating model?",
      "options": {
        "A": "Ensuring continuous alignment and preserving human accountability",
        "B": "Eliminating latency in single-turn conversational chatbot prompts",
        "C": "Provisioning basic read-only tool connectors for individual tasks",
        "D": "Converting static search engine queries into structured text messages"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Horizon 4 (the Autonomous Economy, 2035 onward, a possible future) describes workforces managing workforces within human-set goals, budgets, and limits, where the defining challenge is alignment and human accountability.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "The five horizons (Horizon 4)",
        "source_file": "the five horizon.md",
        "core_concept": "Horizon 4's core challenge is alignment and human accountability when workforces manage subordinate workforces."
      },
      "why_incorrect": {
        "B": "Single-turn chatbot prompting is a pre-horizon rung, unrelated to multi-tier autonomous workforce governance.",
        "C": "Basic tool reliability and connectors are foundational Horizon 0 concerns already addressed prior to Horizon 4.",
        "D": "Search queries and text messages represent the earliest pre-horizon interaction modes."
      },
      "full_justification": "Option A is correct (A: 8w | B: 8w | C: 8w | D: 9w) because alignment and human accountability define Horizon 4 governance. Options B, C, and D reference pre-horizon or Horizon 0 mechanics.",
      "category": "The Five Horizons"
    },
    {
      "id": 8,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "UPGRADED",
      "concept": "Indicative and Overlapping Horizon Timelines vs. Rigid Sequential Gates",
      "question": "A chief technology officer delays all multi-agent coordination research until 2028, arguing that the industry timeline places workforce composition strictly after the 2026\u20132028 single-worker phase. What methodological error is the CTO making regarding horizon planning?",
      "options": {
        "A": "Treating indicative, overlapping forecast ranges as rigid sequential cutoffs",
        "B": "Assuming Horizon 2 workforce trials cannot start before 2028 ends",
        "C": "Confusing conversational search engines with persistent background agents",
        "D": "Overlooking the mandatory decommissioning of Horizon 0 tool integrations"
      },
      "correct": "A",
      "explanation": "Option A succeeds because the chapter explicitly explains that the horizon dates are indicative (not exact), the future horizons are forecasts, and the horizons overlap\u2014with early signs of Horizon 2 already visible in late 2026.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "The five horizons (timeline caveats and overlap)",
        "source_file": "the five horizon.md",
        "core_concept": "Horizon dates are indicative and overlapping rather than rigid sequential cutoffs."
      },
      "why_incorrect": {
        "B": "While the CTO is making a timeline error, Option B merely restates the CTO's specific mistake rather than identifying the underlying methodological flaw of treating overlapping forecasts as hard gates.",
        "C": "The CTO's error concerns timeline rigidity and overlap between Horizons 1 and 2, not search engines vs. agents.",
        "D": "Horizon 0 principles and tool integrations carry forward cumulatively rather than being decommissioned."
      },
      "full_justification": "Option A is correct (A: 10w | B: 10w | C: 8w | D: 9w) because horizon timelines are indicative and overlapping rather than rigid sequential cutoffs. Option B restates the symptom rather than the methodological error, Option C misidentifies the rungs involved, and Option D invents tool decommissioning.",
      "category": "The Five Horizons"
    },
    {
      "id": 9,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "KEPT AS-IS",
      "concept": "Seven-Rung Ladder of Interaction (Production Rungs Today vs. Future Forecasts)",
      "question": "A workforce transformation consultant maps an organization's current human-AI workflows against the seven-rung Ladder of Interaction. Which operational activity represents the highest rung that actively exists in production today rather than as a future forecast?",
      "options": {
        "A": "Governing self-directed autonomous economies across supply chains",
        "B": "Managing individual AI Workers assigned to bounded operational roles",
        "C": "Constructing fully AI-native enterprises run entirely on AI labor",
        "D": "Composing multi-tier AI workforces that coordinate cross-team functions"
      },
      "correct": "B",
      "explanation": "Option B succeeds because on the seven-rung Ladder of Interaction ('How the human role changes'), only the bottom four rungs exist today\u2014(1) querying search engines, (2) prompting chatbots, (3) delegating tasks to agents (Horizon 0), and (4) managing AI Workers (Horizon 1)\u2014while the top three rungs remain forecasts.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "How the human role changes (Ladder of Interaction)",
        "source_file": "the five horizon.md",
        "core_concept": "Rung 4 (managing AI Workers, Horizon 1) is the highest rung that exists today; Rungs 5\u20137 are forecasts."
      },
      "why_incorrect": {
        "A": "Governing autonomous economies is Rung 7 (Horizon 4), a speculative future forecast.",
        "C": "Building AI-native companies is Rung 6 (Horizon 3), a future forecast.",
        "D": "Composing AI workforces is Rung 5 (Horizon 2), a future forecast."
      },
      "full_justification": "Option B is correct (A: 8w | B: 9w | C: 9w | D: 9w) because managing AI Workers (Horizon 1) sits at Rung 4\u2014the top of the four rungs existing today. Options A, C, and D correspond to Rungs 7, 6, and 5, which are forecasts.",
      "category": "The Five Horizons"
    },
    {
      "id": 10,
      "chapter": "The Five Horizons",
      "chapterId": 3,
      "section": "The Five Horizons",
      "sourceFile": "the five horizon.md",
      "status": "KEPT AS-IS",
      "concept": "Invariant Cross-Horizon Human Accountability",
      "question": "A compliance audit reveals that an autonomous procurement worker approved a fraudulent supplier invoice while operating within its configured spending threshold. Under the foundational governance rule governing all five horizons, where does ultimate accountability for the erroneous approval reside?",
      "options": {
        "A": "With the foundational model vendor that trained the underlying weights",
        "B": "With the autonomous worker identity recorded in the enterprise directory",
        "C": "With the open-source framework maintainers who published the runtime",
        "D": "With the human principal who defined the worker's purpose and authority"
      },
      "correct": "D",
      "explanation": "Option D succeeds because the book's foundational invariant states: 'Across every horizon, humans set purpose, define authority, and remain accountable.' Even when an AI Worker acts within configured limits, ultimate accountability remains with the human principal.",
      "source_reference": {
        "chapter": "F0: The Five Horizons - From Agent to Autonomous Economy",
        "sub_section": "The five horizons & Where this book starts",
        "source_file": "the five horizon.md",
        "core_concept": "Across every horizon, humans set purpose, define authority, and remain accountable."
      },
      "why_incorrect": {
        "A": "Foundation model providers supply underlying capabilities rather than bearing operational accountability for enterprise deployment governance.",
        "B": "System identities provide access scoping and auditability, not legal or organizational accountability.",
        "C": "Open-source maintainers publish runtime code (such as MIT-licensed OpenClaw) without assuming liability for user-defined workflows."
      },
      "full_justification": "Option D is correct (A: 10w | B: 10w | C: 9w | D: 10w) because human principals retain ultimate accountability across all five horizons. Options A, B, and C shift accountability onto vendors, technical service identities, or open-source maintainers.",
      "category": "The Five Horizons"
    }
  ]
};
