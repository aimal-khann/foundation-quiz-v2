// Section 11: Preface (The Text Box That Became a Worker)
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["11_preface"] = {
  "sectionId": "11_preface",
  "chapterId": 4,
  "chapterTitle": "Preface: The Text Box That Became a Worker",
  "title": "Section 11: Preface (The Text Box That Became a Worker)",
  "totalQuestions": 10,
  "questions": [
    {
      "id": 1,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "KEPT AS-IS",
      "concept": "AP Duplicate $8,400 Invoice & Shift from Chatbot to AI Worker",
      "question": "A regional distributor's accounts payable clerk pastes vendor invoices into separate conversational sessions every Monday morning to check purchase order matches, resulting in a duplicate $8,400 disbursement when the same invoice appears under two reference numbers across different chats. Which architectural shift directly eliminates this cross-batch failure mode while preserving financial control?",
      "options": {
        "A": "Assigning an AI Worker standing reconciliation rules over connected systems with a strict ban on payment approval",
        "B": "Expanding the conversational prompt window so larger invoice batches can be pasted into a single chat thread",
        "C": "Deploying an autonomous tool-loop agent to approve matched invoices automatically whenever totals align under $10,000",
        "D": "Routing each weekly invoice batch through independent web-search sessions to verify vendor registration records"
      },
      "correct": "A",
      "explanation": "Option A succeeds because moving from isolated batch prompting (Chatbot mode) to standing responsibility (AI Worker mode) connects the worker directly to the invoice folder and purchasing system under persistent rules\u2014flagging cross-batch duplicates and mismatches over $5,000 while strictly prohibiting payment approval and escalating exceptions.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "The same box, a different machine behind it (Figure F1.1)",
        "source_file": "preface.md",
        "core_concept": "Standing AI Worker responsibility over connected records eliminates cross-batch blindness while enforcing a strict ban on unilateral payment approval."
      },
      "why_incorrect": {
        "B": "Increasing context window size within a manual copy-paste workflow still leaves the clerk doing the work manually and fails to establish persistent cross-week rules.",
        "C": "Allowing an agent to auto-approve disbursements violates the foundational governance rule prohibiting an AI Worker from approving payments.",
        "D": "External web searches do not resolve internal cross-batch duplicate invoice matching against corporate purchase orders."
      },
      "full_justification": "Option A is correct (A: 17w | B: 17w | C: 15w | D: 15w) because standing worker rules over connected invoice and purchasing records catch cross-batch duplicates while keeping payment approval with humans. Options B, C, and D rely on manual batching, unauthorized auto-approvals, or irrelevant web searches.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 2,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "UPGRADED",
      "concept": "Ladder of Interaction (Human Shift from Execution to Intent & Verification)",
      "question": "As an enterprise transitions its operational workflows up the Ladder of Interaction from querying search engines and prompting chatbots to delegating tasks and managing AI Workers, how does the primary responsibility of human staff fundamentally change?",
      "options": {
        "A": "Staff shift from executing work directly toward defining operational intent and verifying final outcomes",
        "B": "Staff move from verifying final deliverables toward turning single chatbot replies into manual work",
        "C": "Staff surrender output verification duties once deterministic tool connectors replace manual batch pasting",
        "D": "Staff focus on checking every individual agent loop instead of managing ongoing role outcomes"
      },
      "correct": "A",
      "explanation": "Option A succeeds because each rung on the Ladder of Interaction (Query -> Message -> Task -> Role -> Workforce) hands a larger unit of work to the machine, progressively moving humans away from direct execution and toward defining intent and verifying outcomes.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "The ladder of interaction (Figure F1.2) & The thesis and five rules",
        "source_file": "preface.md",
        "core_concept": "Climbing the Ladder of Interaction shifts human responsibility from direct execution toward defining intent and verifying outcomes."
      },
      "why_incorrect": {
        "B": "Turning chatbot answers into work describes the lower Chatbot rung, moving backward down the ladder rather than up to AI Workers.",
        "C": "Outcome verification by humans becomes more critical\u2014not obsolete\u2014as machines take on whole roles.",
        "D": "Checking every individual task describes the Agent rung (Horizon 0), whereas managing AI Workers (Horizon 1) focuses on defining intent and verifying role outcomes."
      },
      "full_justification": "Option A is correct (A: 14w | B: 14w | C: 13w | D: 14w) because moving up the Ladder of Interaction shifts humans from executing tasks to defining intent and verifying outcomes. Options B and D describe lower rungs on the ladder, and Option C falsely removes human verification.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 3,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "UPGRADED",
      "concept": "AI Agent (Model in a Loop) vs. AI Worker & Digital FTE",
      "question": "During an enterprise architecture review, a product manager argues that any LLM configured in a repeating loop with code-execution and search tools qualifies as a production Digital FTE. Why does this classification fail under enterprise AI governance standards?",
      "options": {
        "A": "A Digital FTE requires role continuity, bounded authority, evaluation criteria, and a named business owner",
        "B": "A Digital FTE operates as a single-job contractor brief rather than holding a recurring production role",
        "C": "A Digital FTE replaces human business ownership once its automated tool loop reaches full-time throughput",
        "D": "A Digital FTE requires composing multiple autonomous workers before any single role can enter production"
      },
      "correct": "A",
      "explanation": "Option A succeeds because an AI agent is merely 'a model in a loop with tools' (analogous to briefing a contractor for one job), whereas an AI Worker holds a role with identity, skills, knowledge access, bounded authority, evaluation criteria, and continuity\u2014and becomes a Digital FTE when running in production at full-time scope with a named business owner.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "The ladder of interaction (Agent vs. AI Worker vs. Digital FTE)",
        "source_file": "preface.md",
        "core_concept": "A Digital FTE is a production AI Worker operating at full-time scope with role continuity, bounded authority, evaluation criteria, and a named business owner."
      },
      "why_incorrect": {
        "B": "Briefing a contractor for one job describes a transient AI agent, whereas a Digital FTE holds a recurring full-time production role.",
        "C": "A Digital FTE explicitly requires a named business owner; human accountability and ownership are never replaced.",
        "D": "Composing multiple AI Workers describes an AI Workforce (the next rung up), not the definition of a single Digital FTE."
      },
      "full_justification": "Option A is correct (A: 15w | B: 15w | C: 14w | D: 15w) because a Digital FTE requires full-time production role governance and a named business owner rather than a bare tool loop. Options B, C, and D confuse agents, human ownership, and multi-worker workforces.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 4,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "KEPT AS-IS",
      "concept": "10-80-10 Operating Rhythm (Mid-Execution Approval & Escalation)",
      "question": "A compliance director implements the 10-80-10 operating rhythm for a customer-refund AI Worker, defining policy boundaries upfront (first 10%) and auditing completed ledgers at week's end (final 10%). How must oversight operate during the middle 80% execution phase when the worker encounters a refund request exceeding its authorized threshold?",
      "options": {
        "A": "The worker must pause execution and escalate for human approval before taking any irreversible action",
        "B": "The worker must complete the payout immediately and flag the threshold breach in the month-end summary",
        "C": "The worker must query its base training weights to infer whether corporate policy permits an exception",
        "D": "The worker must spawn a secondary peer agent to co-sign the disbursement without human intervention"
      },
      "correct": "A",
      "explanation": "Option A succeeds because under the 10-80-10 operating rhythm, human oversight also happens in the middle: a worker must stop for approval before an action that cannot be undone and escalate whatever falls outside its bounded authority.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "The thesis and five rules (10-80-10 operating rhythm)",
        "source_file": "preface.md",
        "core_concept": "During the middle 80% execution phase, an AI Worker pauses for human approval before irreversible actions and escalates out-of-bounds requests."
      },
      "why_incorrect": {
        "B": "Executing an unauthorized, irreversible financial payout first and reporting it weeks later violates bounded authority and pre-action approval gates.",
        "C": "Base model training weights do not govern corporate policy; approved company rules reside in KSoR and DSoR.",
        "D": "Escalation of out-of-bounds authority must go to a human decision-maker, not a peer agent."
      },
      "full_justification": "Option A is correct (A: 15w | B: 15w | C: 15w | D: 14w) because the 10-80-10 rhythm enforces mid-run stops for irreversible actions and authority escalations. Options B, C, and D bypass human authorization.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 5,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "KEPT AS-IS",
      "concept": "State System of Record (SSoR) vs. KSoR, DSoR, and Runtime",
      "question": "An order-fulfillment AI Worker repeatedly dispatches duplicate replacement shipments because it relies on static policy manuals and chat history rather than checking whether a warehouse ticket was already opened ten minutes earlier. Which governance layer is missing or misconfigured in this deployment?",
      "options": {
        "A": "The State System of Record (SSoR), which tracks open commitments, task status, and actual present state",
        "B": "The Knowledge System of Record (KSoR), which retrains base model weights on approved shipping policies",
        "C": "The Data System of Record (DSoR), which stores static product catalogs and historical marketing brochures",
        "D": "The Runtime Execution Layer, which isolates vendor cloud containers from local network authentication"
      },
      "correct": "A",
      "explanation": "Option A succeeds because SSoR (the State System of Record) governs the current state of the work\u2014open commitments, where each task stands, and what has already happened\u2014so a worker acts on the actual present instead of an assumed one.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "The thesis and five rules (The governance rule: KSoR, DSoR, SSoR)",
        "source_file": "preface.md",
        "core_concept": "SSoR tracks open commitments, task progress, and current operational state so workers act on the actual present."
      },
      "why_incorrect": {
        "B": "KSoR governs approved static/institutional knowledge a worker may cite, and explicitly does not retrain or alter base model weights.",
        "C": "DSoR governs permitted real-system actions and action evidence, not static product catalogs or marketing brochures.",
        "D": "Container network isolation addresses infrastructure hosting rather than operational workflow state tracking."
      },
      "full_justification": "Option A is correct (A: 16w | B: 15w | C: 15w | D: 14w) because SSoR prevents duplicate actions by maintaining live operational state. Options B, C, and D mischaracterize KSoR, DSoR, and runtime isolation.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 6,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "UPGRADED",
      "concept": "The Ownership Rule (Rented Platforms vs. Owned Knowledge & Controls)",
      "question": "A fintech firm builds its compliance workers tightly coupled to proprietary vendor prompt chains and vendor-specific memory stores, leaving its rules and audit trails trapped inside a single platform. Which core architectural principle has the firm violated?",
      "options": {
        "A": "The Ownership Rule, which dictates that platforms are rented while knowledge and controls belong to you",
        "B": "The Operating Rule, which mandates that human managers execute the middle 80% of compliance verification",
        "C": "The Economic Rule, which requires firms to train proprietary foundation models before deploying workers",
        "D": "The Governance Rule, which restricts enterprise workers to a single vendor's closed cloud runtime"
      },
      "correct": "A",
      "explanation": "Option A succeeds because the Ownership Rule states: 'The platforms are rented. The knowledge and the controls are yours.' Since runtimes are replaceable software, institutional knowledge (KSoR), controls (DSoR/SSoR), and evaluations must remain portable rather than trapped inside one vendor.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "The thesis and five rules (The ownership rule)",
        "source_file": "preface.md",
        "core_concept": "Platforms and runtimes are replaceable rentals, whereas institutional knowledge, controls, and evaluations must remain owned and portable."
      },
      "why_incorrect": {
        "B": "The Operating Rule assigns the middle 80% execution to the AI Worker, not human managers.",
        "C": "The Economic Rule advises building, deploying, governing, and managing AI Workers rather than training proprietary foundation models.",
        "D": "The Governance Rule defines KSoR, DSoR, and SSoR across Anthropic, OpenAI, and open-source tools rather than locking firms into one vendor."
      },
      "full_justification": "Option A is correct (A: 16w | B: 15w | C: 14w | D: 14w) because the Ownership Rule decouples durable knowledge and governance controls from replaceable vendor runtimes. Options B, C, and D misstate the Operating, Economic, and Governance rules.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 7,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "KEPT AS-IS",
      "concept": "Dual-Half Trust Architecture (Trust in Person + Trust in Worker)",
      "question": "A mid-sized healthcare logistics company refuses to hire an external consultant to deploy an AI Worker that modifies patient delivery schedules, citing high operational risk. To overcome this adoption barrier, which dual-half trust architecture must be satisfied?",
      "options": {
        "A": "Verifiable practitioner credentials plus strict technical controls governing worker knowledge, actions, and state",
        "B": "Unbounded worker autonomy paired with vendor indemnity clauses covering all downstream scheduling errors",
        "C": "Self-reported developer portfolios combined with unrestricted read-write access to production databases",
        "D": "Fine-tuned open-source model weights bundled with zero-oversight email and calendar integration tools"
      },
      "correct": "A",
      "explanation": "Option A succeeds because 'Why certification, governance and earning belong on one path' (Figure F1.3) shows that client trust has two halves: trust in the person (external certification, evaluated work portfolio, client references) and trust in the worker (KSoR, DSoR, and SSoR controls proportional to action risk).",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "Why certification, governance and earning belong on one path (Figure F1.3)",
        "source_file": "preface.md",
        "core_concept": "Commercial client trust requires both verifiable practitioner credentials/portfolios and governed worker controls (KSoR, DSoR, SSoR)."
      },
      "why_incorrect": {
        "B": "Unbounded autonomy directly violates DSoR governance, and vendor indemnity does not establish operational trustworthiness.",
        "C": "Self-reported claims without third-party verification fail the first half of trust, while unrestricted database write access violates bounded authority.",
        "D": "Fine-tuning weights with zero oversight eliminates all three governance layers required for high-risk record mutations."
      },
      "full_justification": "Option A is correct (A: 14w | B: 13w | C: 12w | D: 13w) because earning commercial trust combines verified practitioner competence with governed worker boundaries. Options B, C, and D omit external verification or eliminate governance controls.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 8,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "UPGRADED",
      "concept": "The Economic Rule & 2026 Labor Market Shift",
      "question": "Amid 2026 labor market shifts showing declining entry-level hiring in routine clerical and data-entry roles alongside rising demand for AI-skilled specialists, a junior operations analyst asks how to protect long-term earning power. Which strategic positioning aligns with the Economic Rule?",
      "options": {
        "A": "Learning to build, govern, and manage AI Workers that execute routine workflows for a specific profession",
        "B": "Competing on low-cost freelance data-entry gigs where employers still rely on manual spreadsheet entry",
        "C": "Mastering vendor-specific chat UI shortcuts while leaving governance and evaluation to platform defaults",
        "D": "Focusing on one-off prompt engineering for isolated tasks rather than building governed role systems"
      },
      "correct": "A",
      "explanation": "Option A succeeds because the Economic Rule states: 'Do not compete with AI for tasks AI can do. Build, deploy, govern and manage the AI Workers that do them'\u2014enabling practitioners to serve a profession as a Forward Deployed Engineer (FDE) or vertical solution founder.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "The thesis and five rules (The economic rule) & Why a second edition",
        "source_file": "preface.md",
        "core_concept": "Rather than competing with AI on routine clerical tasks, practitioners build, deploy, govern, and manage domain-specific AI Workers."
      },
      "why_incorrect": {
        "B": "Competing on routine clerical and freelance data-entry tasks directly violates the Economic Rule as employers shift that work to AI.",
        "C": "Relying on transient vendor UI shortcuts without governance or evaluation mastery ignores the Ownership Rule and fails client trust requirements.",
        "D": "One-off task prompting remains stuck at lower interaction rungs rather than deploying governed, recurring AI Workers."
      },
      "full_justification": "Option A is correct (A: 16w | B: 15w | C: 14w | D: 15w) because combining domain expertise with governed AI Worker deployment captures rising market demand. Options B, C, and D compete on automatable clerical tasks or rely on fragile surface skills.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 9,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "KEPT AS-IS",
      "concept": "Open-Source Local Background Daemon (OpenCode 2.0) vs. Cloud Sessions",
      "question": "An engineering lead compares late-2026 worker runtimes for a sensitive software-maintenance workflow: cloud-hosted task sessions that continue after a laptop closes versus a local background daemon running any model on company-owned hardware. Which architectural trade-off distinguishes the local open-source daemon approach?",
      "options": {
        "A": "The organization retains direct hardware and model control while assuming full responsibility for security",
        "B": "The organization delegates infrastructure security to the model vendor while sacrificing local model choice",
        "C": "The runtime automatically synchronizes documents across proprietary vendor workspaces without configuration",
        "D": "The daemon restricts background execution strictly to active browser sessions when the workstation is awake"
      },
      "correct": "A",
      "explanation": "Option A succeeds because open-source tools (such as OpenCode 2.0 running as a shared background service on your own computer with any model, including local ones) let you choose the model and run the worker on computers you control, with the explicit trade-off that you take on the security work yourself.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "The thesis and five rules (The ownership rule) & The shift in 2026 table",
        "source_file": "preface.md",
        "core_concept": "Open-source local background runtimes provide model and hardware control while shifting security responsibility onto the organization."
      },
      "why_incorrect": {
        "B": "Delegating infrastructure security while sacrificing local model choice describes hosted vendor clouds rather than self-hosted open-source daemons.",
        "C": "Proprietary workspace syncing is a vendor cloud feature, not an automatic property of self-hosted open-source daemons.",
        "D": "OpenCode 2.0 runs as a persistent background service on the host machine rather than being restricted to active browser tabs."
      },
      "full_justification": "Option A is correct (A: 14w | B: 14w | C: 13w | D: 14w) because self-hosted open-source runtimes trade vendor-managed security for direct control over models and infrastructure. Options B, C, and D describe cloud-hosted traits or false browser limits.",
      "category": "Preface: The Text Box That Became a Worker"
    },
    {
      "id": 10,
      "chapter": "Preface: The Text Box That Became a Worker",
      "chapterId": 4,
      "section": "Preface: The Text Box That Became a Worker",
      "sourceFile": "preface.md",
      "status": "KEPT AS-IS",
      "concept": "Bottom-Up Progression from FDE/Founder to AI-Native Country",
      "question": "A national economic development agency aims to transform its domestic services sector into a major exporter of AI-enabled back-office operations. According to the causal chain linking individual capability to macroeconomic outcomes, what foundational progression enables an AI-Native Country?",
      "options": {
        "A": "Practitioners build governed AI Workers that compose into AI-Native Companies capable of exporting work",
        "B": "Government mandates replace private-sector governance with centralized state-owned foundation models",
        "C": "Enterprises bypass single-worker governance to deploy unverified multi-agent swarms across export sectors",
        "D": "Certification exams directly substitute for evaluated production portfolios and technical system controls"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Figure F1.3 and 'Why certification, governance and earning belong on one path' trace a bottom-up chain: verified practitioners with KSoR/DSoR/SSoR governance deploy trusted AI Workers as FDEs or founders, composing into AI-Native Companies and ultimately an AI-Native Country exporting AI work at scale.",
      "source_reference": {
        "chapter": "F1: Preface - The Text Box That Became a Worker",
        "sub_section": "Why certification, governance and earning belong on one path (Figure F1.3)",
        "source_file": "preface.md",
        "core_concept": "Governed AI Workers built by verified practitioners compose into AI-Native Companies and scale into an AI-Native Country."
      },
      "why_incorrect": {
        "B": "The framework relies on distributed practitioners, FDEs, founders, and institutions building governed workers\u2014not centralized state-owned foundation models.",
        "C": "Skipping single-worker governance destroys client trust and prevents commercial adoption and export viability.",
        "D": "A certificate is explicitly a milestone rather than the final product; it must be paired with evaluated portfolios, references, and runtime governance."
      },
      "full_justification": "Option A is correct (A: 13w | B: 12w | C: 13w | D: 13w) because national AI export capacity scales bottom-up from governed AI Workers to AI-Native Companies and AI-Native Countries. Options B, C, and D bypass single-worker governance or overstate exam credentials.",
      "category": "Preface: The Text Box That Became a Worker"
    }
  ]
};
