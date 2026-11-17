// Section 7: Case 2 - Nisha's First Client
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["07_case2_nishas_first_client"] = {
  "sectionId": "07_case2_nishas_first_client",
  "chapterId": 2,
  "chapterTitle": "The Four Operational Case Studies",
  "title": "Section 7: Case 2 - Nisha's First Client",
  "totalQuestions": 16,
  "questions": [
    {
      "id": 1,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "The Shift from 'While She Watched' to 'While She Slept'",
      "question": "A solo chartered accountant transitions from interactively supervising two AI tools on a single evening manuscript (1 hour 40 minutes total) to deploying an overnight AI Worker inside a rebuilt Claude Project for a four-day cross-border client engagement, discovering that personal hands-on time actually rises to roughly 8 hours 35 minutes across brief design, project setup, morning checks, second-opinion filtering, and client correspondence. What did the practitioner genuinely gain from this architectural shift, and what new drafting requirement did unattended execution impose?",
      "options": {
        "A": "Complete elimination of human verification duties, paired with persistent cross-session chat memory at 1 a.m.",
        "B": "Real-time interactive steering during overnight runs, paired with automatic removal of all prior draft versions",
        "C": "Work executed while asleep plus a durable Library record, requiring a standalone brief written for a stranger",
        "D": "Lower total personal hours on the first engagement, requiring live human approvals during every 1 a.m. step"
      },
      "correct": "C",
      "explanation": "Option C succeeds because moving from Case 1 ('while she watched', 1 h 40 min) to Case 2 ('while she slept', ~8 h 35 min illustrative) did not save personal hours on the first job, but yielded overnight execution and a versioned Library record\u2014requiring a self-contained brief written for a stranger arriving at 1 a.m. with nobody awake to ask.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Building the AI Worker & Exhibit 8",
        "source_file": "case2.md",
        "core_concept": "Overnight AI Workers trade interactive presence for unattended execution and durable Library records, requiring a standalone brief."
      },
      "why_incorrect": {
        "A": "Human verification remained essential every morning and Thursday night, and scheduled runs cannot rely on cross-session conversation memory.",
        "B": "Nisha was asleep during the 1 a.m. run (no real-time steering), and dated bridge versions were preserved in the Library rather than deleted.",
        "D": "Her personal hours increased rather than decreased, and no human was awake to approve steps at 1 a.m."
      },
      "full_justification": "Option C is correct because unattended overnight execution requires a standalone brief that needs no live clarifications while persisting versioned outputs in the Library. Option A falsely claims memory persists and checks disappear, Option B invents live steering and version deletion, and Option D falsely claims lower hours and live 1 a.m. approvals.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 2,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Rebuilt Project Coordinator, Area Threads & Library Persistence",
      "question": "A practice lead configures a rebuilt Claude Project (claude.ai/code) for an IFRS-to-US GAAP profit bridge by placing standing instructions in Project settings, uploading source files to the Library, instructing the top-level coordinator conversation to spawn three area threads (inventory, development costs, leases) plus one read-only reviewer thread, and scheduling a 1 a.m. run. Which architectural property governs data persistence, connector routing, and record governance in this setup?",
      "options": {
        "A": "The Library preserves files after desks clear without acting as a governed business record; coordinator lacks connectors",
        "B": "The coordinator holds all account connectors directly, while each spawned thread shares one persistent disk mount",
        "C": "The Project Library provides immutable audit trails and formal sign-off ownership equivalent to an ERP ledger",
        "D": "Clearing an idle thread's temporary desk permanently erases every dated bridge version stored inside the Library"
      },
      "correct": "A",
      "explanation": "Option A succeeds because in a rebuilt Claude Project, the Library sits outside every thread's temporary borrowed desk so uploaded client files and dated bridges survive after desks are cleared\u2014though a Library is for drafts/learning and is not a governed business record\u2014while the coordinator conversation has no connectors of its own.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Building the AI Worker & Exhibit 2",
        "source_file": "case2.md",
        "core_concept": "The Project Library persists drafts outside ephemeral borrowed desks without providing governed business-record audit trails, and the coordinator has no connectors."
      },
      "why_incorrect": {
        "B": "The coordinator has no connectors (cloud threads get tools from account connectors), and each thread works on its own isolated borrowed desk.",
        "C": "The case explicitly warns that a project Library is not a governed business record with formal change history and approval ownership.",
        "D": "The Library sits outside every desk specifically so files remain intact when a thread's desk is cleared."
      },
      "full_justification": "Option A is correct because the Library outlives cleared sandboxes without serving as a governed system of record, and connectors attach to cloud threads rather than the coordinator. Option B reverses connector routing and desk isolation, Option C exaggerates Library governance, and Option D falsely claims desk clearing wipes the Library.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 3,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "UPGRADED",
      "concept": "Account-Level Connector Locks vs. Task Defaults & Network Allowlists",
      "question": "To prevent an overnight scheduled run inside a rebuilt Claude Project from emailing a client directly or querying unauthorized external web domains, a practitioner empties the scheduled task's connector list, disconnects Gmail at the Claude account level, and leaves the cloud environment on Default (Limited network access with package managers allowed). Why is the account-level Gmail disconnection the true outbound lock, and what happens when a thread tries to query KPMG's website?",
      "options": {
        "A": "Emptying the task list blocks all Project-spawned threads, while Limited access permits accounting firm domains",
        "B": "Connectors scope strictly per Project by default, while Default network access blocks package manager registries",
        "C": "Account disconnection applies only to the coordinator, while un-allowlisted web lookups wait for user approval",
        "D": "Connectors belong to the whole account across threads, and un-allowlisted sites fail with host not allowed"
      },
      "correct": "D",
      "explanation": "Option D succeeds because connectors belong to the whole Claude account and every cloud thread inherits them (emptying a scheduled task's connector list is only a task default not documented to limit Project-spawned threads), while the Default cloud environment's Limited network access restricts outbound calls to allowlisted developer sites, failing KPMG/Deloitte lookups with 'host not allowed.'",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "What the worker could reach & Exhibit 6",
        "source_file": "case2.md",
        "core_concept": "Account-level connector removal is the true outbound lock, and Limited network access blocks un-allowlisted domains with host_not_allowed."
      },
      "why_incorrect": {
        "A": "Anthropic's docs do not state that emptying a scheduled task's connector list limits threads a Project starts, and KPMG/Deloitte are not on the Limited developer allowlist.",
        "B": "Connectors belong to the entire claude.ai account with no per-project setup, and Default/Limited access has 'Allow package managers' checked.",
        "C": "The coordinator has no connectors of its own (cloud threads hold them), and blocked domains fail with a 403/host-not-allowed error rather than pausing for approval."
      },
      "full_justification": "Option D is correct (A: 15w | B: 15w | C: 15w | D: 15w) because account-level Gmail disconnection removes outbound mail across all cloud threads and Limited access blocks un-allowlisted hosts. Option A misstates task-list scope and allowlist domains, Option B misstates per-project connector scoping and package-manager access, and Option C misstates coordinator connectors and network failure behavior.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 4,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "UPGRADED",
      "concept": "Usage-Limit Pauses, Auto-Continue & Instruction Propagation Rules",
      "question": "On Wednesday evening, an accountant adds two new formatting requirements to Project instructions, and at 1:00 a.m. Thursday the scheduled task starts a fresh thread that halts partway through due to a plan usage limit before auto-continuing at lunch once the limit resets\u2014producing Bridge Version 2 with both new formatting rules applied. Which platform mechanics explain why Version 1 survived the halt and why Version 2 reflected Wednesday's updated instructions?",
      "options": {
        "A": "Usage-limit halts preserve Library files while running threads reload edited Project settings at each limit reset",
        "B": "Halted threads wait and auto-continue on reset without wiping the Library; new threads load updated instructions",
        "C": "Scheduled runs always continue Tuesday's existing thread, which re-reads Project instructions after every reset",
        "D": "Auto-continue requires sending a manual prompt after reset, and instruction edits update running threads live"
      },
      "correct": "B",
      "explanation": "Option B succeeds because a thread that stops at a plan's usage limit waits and by default continues on its own when the limit resets without affecting saved Library files, and changes to Project instructions reach new threads (not threads already running)\u2014meaning Wednesday night's fresh thread loaded the updated rules before pausing.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Thursday morning & Footnotes 2\u20133",
        "source_file": "case2.md",
        "core_concept": "Usage-limit pauses auto-continue on reset while preserving the Library, and Project instruction updates apply only to newly started threads."
      },
      "why_incorrect": {
        "A": "While Library files survive halts, Anthropic's docs explicitly state that changes to Project instructions reach new threads, not threads already running.",
        "C": "Although a Project scheduled run can continue an earlier thread, Wednesday's run started a new thread\u2014and already-running threads do not reload instruction edits.",
        "D": "Auto-continue is enabled by default (manual prompting is only needed if Auto-continue is turned off in Project settings), and running threads do not reload edited instructions."
      },
      "full_justification": "Option B is correct (A: 16w | B: 16w | C: 15w | D: 16w) because auto-continue resumes halted runs without touching the Library and newly spawned threads load updated Project instructions. Options A and C falsely claim already-running threads reload edited instructions on reset, while Option D misstates default auto-continue behavior.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 5,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Multi-Reviewer Visibility Boundaries & Client-Relationship Authority",
      "question": "During a multi-reviewer audit of an IFRS-to-US GAAP bridge, each area thread checks only its assigned topic, the Project's internal reviewer thread inspects all Library files and flags both a rent discrepancy (Rs 12.0M vs. Rs 10.0M) and a Rs 2.0M inventory gap, and ChatGPT reviews only the bridge document without seeing client files\u2014confirming the arithmetic while flagging that the lease type remains unsettled. What operational conclusion follows from this visibility matrix?",
      "options": {
        "A": "ChatGPT's failure to catch the Rs 2.0M inventory gap proves its arithmetic audit is inferior to the area threads",
        "B": "Internal reviewer threads can resolve conflicting client records autonomously without contacting the target company",
        "C": "Reviewers catch only what they are shown, and only the human owning the client relationship can close source gaps",
        "D": "Providing source files to an independent second model eliminates any need for human follow-up with the exporter"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Exhibit 5 demonstrates that each reviewer only catches what it can see (ChatGPT never saw Sutlej's files, and area threads saw only their slice), and finding a discrepancy is not closing it\u2014only Nisha, who owned the human client relationship, could email Sutlej to resolve which figures were accurate.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Three nights of work & Exhibit 5",
        "source_file": "case2.md",
        "core_concept": "Reviewers are bounded by their input visibility, and resolving source discrepancies requires human client-relationship authority."
      },
      "why_incorrect": {
        "A": "ChatGPT never received Sutlej's inventory note or engagement letter, so not flagging file discrepancies reflects its input boundary rather than inferior reasoning.",
        "B": "The reviewer thread flagged the discrepancies but had neither external email access nor client authority to contact Sutlej.",
        "D": "Even with full files, an AI cannot resolve contradictory client records or obtain missing signed contracts from an external counterparty."
      },
      "full_justification": "Option C is correct because input boundaries govern what each reviewer can detect, and closing source gaps requires external human communication. Option A confuses input visibility with reasoning quality, Option B overstates reviewer thread autonomy, and Option D falsely claims full file access removes human follow-up.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 6,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "UPGRADED",
      "concept": "Personal Proxy Identity ('Appears as You') & Cross-Tool Equivalence",
      "question": "A US finance director asks a solo accounting consultant to connect her AI system so it emails nightly bridge progress updates directly to him each morning without waiting for her manual review, noting that she could switch from Claude's scheduled task to ChatGPT Work's email plugin if needed. Why does neither tool solve the core identity and governance risk of unattended client emails?",
      "options": {
        "A": "Actions sent through personal connectors appear as the user, hiding which numbers were checked by a human",
        "B": "ChatGPT Work plugins run under a separate service badge, preventing recipients from verifying sender authority",
        "C": "Scheduled tasks in both platforms execute under project memory rules rather than enforcing account-level locks",
        "D": "Personal email connectors require interactive confirmation prompts on every run, halting unattended 1 a.m. delivery"
      },
      "correct": "A",
      "explanation": "Option A succeeds because anything a scheduled task does through connected apps (in Claude or ChatGPT Work) appears as the user\u2014arriving from Nisha's own email address under her name\u2014leaving Mark unable to distinguish human-verified figures from unreviewed AI output.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "What the worker could reach & Thursday night",
        "source_file": "case2.md",
        "core_concept": "Connected apps act under the user's personal identity on every plan, blurring human-approved and unreviewed AI communications."
      },
      "why_incorrect": {
        "B": "ChatGPT Work's email plugin still sends from the user's own connected account rather than a separate business service badge.",
        "C": "While project memory is non-enforced, the core governance failure here is personal identity attribution ('appears as you'), not memory persistence.",
        "D": "Cloud scheduled runs execute in auto mode without pausing for interactive prompts if a connector is left enabled."
      },
      "full_justification": "Option A is correct (A: 17w | B: 15w | C: 15w | D: 15w) because both tools execute outbound connector actions under the user's personal identity. Option B falsely attributes a team service badge to ChatGPT Work, Option C misidentifies the failure mechanism as memory rules, and Option D falsely claims cloud scheduled tasks pause for interactive confirmation.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 7,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "UPGRADED",
      "concept": "The Thursday-Night Release Dilemma (Three Drafts Trade-Off Analysis)",
      "question": "At 10:40 p.m. Thursday\u2014hours before a 9:00 a.m. New York board meeting\u2014a consultant holds a bridge showing US GAAP profit before tax at Rs 103.2M (operating lease assumed) versus Rs 102.0M (finance lease), while the target company's signed warehouse lease contract will not arrive until Friday and the client has also requested direct nightly AI emails. Which risk comparison accurately evaluates her three draft responses?",
      "options": {
        "A": "Draft 1 sends verified lines with auto-emails, Draft 2 sends full figures, and Draft 3 declines nightly updates",
        "B": "Draft 2 sends checked lines tonight but misses Friday's board deadline; Draft 1 keeps human review on future emails",
        "C": "Draft 3 guarantees board members read lease caveats, while Draft 2 delivers both lease scenarios on Thursday night",
        "D": "Draft 1 risks sending unverified lines as her, Draft 2 risks losing the client, and Draft 3 risks ignored footnotes"
      },
      "correct": "D",
      "explanation": "Option D succeeds because Exhibit 7 shows Draft 1 ('Say yes to both') sends the unchecked lease line tonight and authorizes unread nightly emails under her name; Draft 2 ('Keep the second signature') sends only checked lines tonight and holds the lease line until Monday, risking losing Mark before Friday's meeting; and Draft 3 ('Send everything, with a note') shows both lease figures tonight with caveats, risking that board members overlook the note.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Thursday night & Exhibit 7",
        "source_file": "case2.md",
        "core_concept": "Each Thursday-night draft trades off completeness, deadline responsiveness, and accountability risk."
      },
      "why_incorrect": {
        "A": "Draft 1 sends the unchecked lease line (not just verified lines), Draft 2 omits the lease line until Monday, and Draft 3 leaves the nightly email request unanswered.",
        "B": "Draft 1 removes human review from future nightly emails rather than keeping it.",
        "C": "Draft 3 cannot guarantee a non-accountant board will read explanatory notes, and Draft 2 holds back the lease line until Monday."
      },
      "full_justification": "Option D is correct (A: 17w | B: 17w | C: 16w | D: 17w) because it accurately captures the specific trade-off of each draft in Exhibit 7. Options A, B, and C each misstate either the lease-line coverage or the nightly-email commitment of the three drafts.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 8,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "UPGRADED",
      "concept": "Pre-Release Acceptance Checklist & Sign-Off Authority (Exhibit 10)",
      "question": "Before releasing a preliminary IFRS-to-US GAAP bridge to an acquiring company's board, a chartered accountant who is still learning US GAAP reviews an acceptance checklist where the warehouse lease contract is still missing and a Rs 2.0M inventory variance is explained only by an accountant's email promising shipping documents on Monday. Which release conditions and document status govern what may leave her desk?",
      "options": {
        "A": "Email explanations close the inventory variance permanently, allowing release once the signed lease contract arrives",
        "B": "Label every page preliminary scenario analysis (not signed-off conversion), and name who holds sign-off authority",
        "C": "Showing both Rs 103.2M and Rs 102.0M scenarios closes the lease check and authorizes a final board sign-off",
        "D": "Checking Sutlej's notes against the trial balance grants full US GAAP sign-off authority to the preparer"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Exhibit 10 establishes that when material source documents remain open (the signed lease contract and Monday's shipping documents for the Rs 2.0M goods in transit) and the preparer is still learning US GAAP without formal US GAAP sign-off authority, any deliverable released must carry 'Preliminary scenario analysis, not a signed-off conversion' on every page and name who holds authority and expertise to sign off a final conversion.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Exhibit 10: Before anything is released",
        "source_file": "case2.md",
        "core_concept": "Unclosed source checks and limited US GAAP authority require labeling every page as preliminary scenario analysis and naming a qualified signer."
      },
      "why_incorrect": {
        "A": "In Exhibit 10, the Rs 2.0M inventory variance is 'explained, not yet supported' until Monday's shipping documents arrive and match the trial balance.",
        "C": "Displaying both lease scenarios leaves the lease check 'Open' until the signed contract is evaluated against ASC 842 classification tests.",
        "D": "Nisha is a Pakistani chartered accountant still learning US GAAP and lacks formal US GAAP sign-off authority even on verified lines."
      },
      "full_justification": "Option B is correct (A: 16w | B: 16w | C: 16w | D: 16w) because Exhibit 10 requires explicit preliminary labeling on every page and naming an authorized US GAAP signer until open source items close. Option A treats an email explanation as supported evidence, Option C mistakes dual-scenario display for closing the lease check, and Option D conflates trial-balance verification with US GAAP sign-off authority.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 9,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Handling Unresolved Source Ambiguity During Unattended Runs",
      "question": "During a 1:00 a.m. unattended run, the lease area thread discovers that the client's lease note specifies an 8% interest rate and Rs 10.0M annual rent but omits end-of-lease ownership transfer terms needed to classify the contract as an operating or finance lease under US GAAP; in Version 1, the thread assumes an operating lease (Rs 103.2M) and places the Rs 102.0M finance-lease figure in a single line beneath the total. How should this execution and presentation choice be evaluated?",
      "options": {
        "A": "Assuming an operating lease and logging it avoided a 1 a.m. stall, but both answers belonged side by side",
        "B": "The thread should have halted at 1 a.m. and emailed the target exporter directly to request the missing lease deed",
        "C": "Placing Rs 102.0M in a single line beneath the total was superior because boards ignore side-by-side comparisons",
        "D": "Assuming a finance lease by default would have eliminated all balance-sheet and profit uncertainty without the contract"
      },
      "correct": "A",
      "explanation": "Option A succeeds because at 1:00 a.m. with nobody awake to answer questions, stalling would have wasted the overnight run; assuming an operating lease (Rs 103.2M) and explicitly logging that assumption followed the brief, but burying Rs 102.0M in a single line under the total risked misleading a board\u2014prompting Nisha's Wednesday instruction to show both answers side by side.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Three nights of work & Optional question 6",
        "source_file": "case2.md",
        "core_concept": "Unattended workers should proceed with documented assumptions rather than stalling at night, while presenting material scenario alternatives side by side."
      },
      "why_incorrect": {
        "B": "The worker was architecturally blocked from emailing external parties and explicitly prohibited from contacting Sutlej.",
        "C": "Burying the alternative figure in a single footnote beneath a headline total is dangerous because boards often read only the headline figure.",
        "D": "Assuming a finance lease without the contract would be equally unverified and would still fail to settle balance-sheet and profit treatment."
      },
      "full_justification": "Option A is correct because documented assumptions keep overnight runs productive while side-by-side presentation prevents headline bias. Option B violates outbound containment, Option C inverts board communication risk, and Option D falsely claims a finance-lease assumption removes contract uncertainty.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 10,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Scaling from One Client to Six & Fixed-Fee Pricing Risk",
      "question": "After completing an initial fixed-fee (US$2,500) cross-border accounting bridge requiring over eight hours of personal setup, morning audits, and late-night deadline stress due to delayed client documents, a solo consultant is offered five additional acquisition targets in the same quarter. Which operational and pricing adjustments are required before scaling from one job to six concurrent jobs?",
      "options": {
        "A": "Maintain fixed-fee pricing with zero client document SLAs, and connect Gmail so all six projects auto-email nightly",
        "B": "Merge all six target companies into a single shared Project Library so area threads cross-reference every client file",
        "C": "Price around fixed human review bottlenecks, enforce data-readiness gates, and separate per-client Project state",
        "D": "Eliminate independent second-opinion reviews across targets two through six since the initial prompt is already tuned"
      },
      "correct": "C",
      "explanation": "Option C succeeds because scaling from one engagement to six concurrent targets exposes the real bottleneck: human verification, client follow-up, and morning audit time\u2014requiring pricing tied to human review capacity, client document-readiness gates before clock start, and isolated per-client Projects to prevent cross-client data contamination.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Questions for discussion (Optional questions 8 & 9)",
        "source_file": "case2.md",
        "core_concept": "Scaling AI-assisted client work requires pricing human review bottlenecks, enforcing document-readiness gates, and isolating per-client workspaces."
      },
      "why_incorrect": {
        "A": "Taking on six fixed-fee deadlines without document-delivery SLAs and connecting unsupervised nightly emails multiplies reputational and financial liability.",
        "B": "Mixing six different acquisition targets into one shared Project Library creates severe client confidentiality breaches and cross-file contamination.",
        "D": "Every new client engagement brings unique accounting facts and source discrepancies requiring independent second-opinion review and human verification."
      },
      "full_justification": "Option C is correct because human verification capacity, source readiness, and client isolation govern safe multi-client scaling. Option A multiplies SLA and email risks, Option B violates client confidentiality, and Option D removes essential cross-checking.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 11,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Locked by Setting vs. Only Asked & Empirical Lock Testing (Exhibit 6 & Lab Part 3)",
      "question": "During a pre-deployment permission audit of a rebuilt Claude Project configured with 'prepare and check only' in Project instructions, a disconnected account-level Gmail app, and a project memory note reading 'check rent against the lease note', a security reviewer asks how these controls behave and how to prove outbound messaging is blocked. Which enforcement classification and verification test satisfy the audit?",
      "options": {
        "A": "Written brief rules block Library file overwrites automatically, and a screenshot of Project settings proves Gmail is locked",
        "B": "Missing email apps lock sending, while file-edit bans and memory notes are only asked; prove locks via a live test thread",
        "C": "Project memory notes are hard system locks enforced at the proxy, while account connectors scope strictly per thread",
        "D": "Emptying the scheduled task's connector list guarantees thread isolation without disconnecting Gmail at the account level"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Exhibit 6 separates controls into 'Locked by a setting' versus 'Only asked': disconnecting Gmail and file-sharing apps at the account level locks outbound sending, whereas 'prepare and check only' in the brief (which cannot stop a thread from saving a modified copy of a client file in the Library) and memory notes (MEMORY.md) are only asked\u2014and Lab Part 3 requires running a live test thread to prove sending tools are absent rather than relying on settings screenshots.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Exhibit 6 & Lab Part 3 (Lock what matters, then test the lock)",
        "source_file": "case2.md",
        "core_concept": "Account-level missing connectors enforce outbound locks (verified by negative test threads), whereas brief rules and MEMORY.md notes are non-enforced instructions."
      },
      "why_incorrect": {
        "A": "Written brief rules do not block a thread from saving a modified copy of a file in the Library, and screenshots of settings do not prove capability locks.",
        "C": "Anthropic explicitly characterizes project memory notes as non-enforced preferences rather than hard system locks, and connectors belong to the whole account rather than scoping per thread.",
        "D": "Anthropic's docs do not guarantee that emptying a scheduled task's connector list limits threads spawned by a Project; account-level disconnection is the true lock."
      },
      "full_justification": "Option B is correct because missing account connectors enforce outbound containment and require empirical test-thread proof, while file-modification bans and memory notes remain non-enforced instructions. Option A mistakes written rules and screenshots for system enforcement, Option C misstates memory enforcement and per-thread connector scoping, and Option D relies on a task default rather than account-level removal.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 12,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Containment vs. Authority & Project Deletion Custody",
      "question": "An engagement manager evaluates two distinct security layers in a client-bridge Project\u2014preventing cloud threads from emailing external recipients versus requiring the practitioner to review and manually dispatch every client email\u2014and asks what persists if the entire Project is deleted on Friday afternoon. Which statement accurately distinguishes containment from authority and identifies post-deletion custody?",
      "options": {
        "A": "Containment protects the client, authority protects the worker, and Project deletion leaves Library files and memory intact",
        "B": "Both containment and authority reside inside Project instructions, and deleting a Project archives its threads permanently",
        "C": "Authority blocks threads from reading client files, while containment guarantees every bridge figure is accounting-certified",
        "D": "Containment protects the practitioner, authority protects the client, and Project deletion wipes threads, memory, and Library"
      },
      "correct": "D",
      "explanation": "Option D succeeds because in Series Question 12 and the Teaching Note, containment (removing outbound email/sharing tools so threads cannot transmit externally) protects Nisha from unauthorized sends under her address, while authority (Nisha's human review and manual dispatch) protects Mark from receiving unverified figures\u2014and deleting a Project permanently removes the project, its threads, its memory, and its Library files.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Questions for discussion (Series questions 11 & 12) & Teaching Note",
        "source_file": "case2.md",
        "core_concept": "Containment protects the practitioner, human release authority protects the client, and Project deletion wipes threads, memory, and Library files."
      },
      "why_incorrect": {
        "A": "Containment protects Nisha (the sender/practitioner) while authority protects Mark (the client), and Project deletion permanently wipes Library files and memory.",
        "B": "Containment relies on missing connectors/environment settings (not just Project instructions), and deleting a Project permanently deletes its threads.",
        "C": "Threads could read client files in the Library, and containment restricts outbound reach rather than certifying accounting accuracy."
      },
      "full_justification": "Option D is correct because containment prevents unauthorized outbound sends under the practitioner's identity, release authority protects the client from unverified deliverables, and Project deletion erases all internal Project state. Option A inverts containment/authority and deletion custody, Option B treats containment as a written rule, and Option C misstates read permissions and certification.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 13,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Team Plan Migration Trade-Offs (Claude Tag vs. Rebuilt Projects)",
      "question": "A solo accounting consultant hires a junior assistant and considers upgrading from a personal Pro account to a Claude Team plan so they can collaborate using Claude Tag in Slack while handling multiple client conversion engagements. What architectural trade-offs and governance gaps arise from this migration?",
      "options": {
        "A": "Claude Tag adds channel service identities and audit trails, but loses rebuilt Projects and still lacks a client business record",
        "B": "Rebuilt Projects expand automatically across Team seats, and Claude Tag enforces pre-send human approval gates natively",
        "C": "Claude Tag runs 1:1 direct messages under shared workspace service tokens, eliminating all personal connector exposure",
        "D": "Upgrading to Team converts the Project Library into an immutable ERP ledger with formal multi-partner sign-off workflows"
      },
      "correct": "A",
      "explanation": "Option A succeeds because moving to a Team/Enterprise plan for Claude Tag (public beta) lets an Owner/admin configure workspace or channel service connections with audit trails (though 1:1 DMs still run on the member's own Claude account), whereas rebuilt Projects are not yet offered on Team or Enterprise plans\u2014and Claude Tag still lacks a governed client business record or an enforced pre-send approval gate.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Questions for discussion (Series question 13) & Teaching Note",
        "source_file": "case2.md",
        "core_concept": "Migrating to Team/Enterprise for Claude Tag trades away rebuilt Projects (not yet on Team/Enterprise) while still requiring external business records and approval gates."
      },
      "why_incorrect": {
        "B": "Rebuilt Projects are currently unavailable on Team and Enterprise plans, and Claude Tag does not natively enforce external client email approval workflows.",
        "C": "In a one-to-one DM, Claude Tag runs on the individual member's own claude.ai account rather than a shared service account.",
        "D": "Team plans do not convert a Project Library into an immutable ERP ledger with formal multi-partner approval sign-offs."
      },
      "full_justification": "Option A is correct because Claude Tag introduces workspace/channel service accounts and auditability while forfeiting rebuilt Projects and still leaving governed client records and pre-send approvals unbuilt. Options B, C, and D misstate Team Project availability, 1:1 DM connector execution, and ERP-level sign-off features.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 14,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Transfer Assessment \u2014 Execution vs. Drafting Boundaries (Greenfield School Part A)",
      "question": "An office manager deploys an overnight AI Worker every Thursday to prepare a weekly Friday 8:00 a.m. parent newsletter for 400 students from a shared school calendar spreadsheet, a teacher-notes folder, and a canteen menu, under strict school rules requiring principal sign-off and exact calendar dates. Which action classification enforces safe operational boundaries?",
      "options": {
        "A": "Read calendar/notes/menu and verify dates autonomously; draft the newsletter; never send, post, reply, or edit calendar alone",
        "B": "Read inputs and draft the newsletter autonomously; fix apparent calendar date typos directly; email parents at 7:55 a.m.",
        "C": "Draft the newsletter and publish it to the public school website automatically; hold parent email replies for morning review",
        "D": "Verify calendar dates and reply to routine parent schedule questions autonomously; hold website posting for principal approval"
      },
      "correct": "A",
      "explanation": "Option A succeeds because in the Greenfield Community School transfer assessment (Part A), the AI Worker may autonomously execute read-only synthesis and deterministic checks (reading the calendar, teacher notes, and menu, and cross-checking every draft date against the calendar), may only prepare a draft of the newsletter for human review, and must never execute external publication/communication (sending to 400 parents, posting to the website, replying to parent emails) or mutate authoritative source state (editing the shared calendar).",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Final assessment: a new AI Worker (Part A)",
        "source_file": "case2.md",
        "core_concept": "AI Workers may read inputs and verify deterministic rules autonomously, draft outbound communications, and never publish, reply externally, or mutate source-of-truth records alone."
      },
      "why_incorrect": {
        "B": "Allowing the worker to mutate the shared calendar or auto-send to 400 parents violates source-of-truth governance and Principal Okafor's mandatory approval rule.",
        "C": "Publishing the newsletter on the public school website without principal approval exposes unverified dates and student privacy risks publicly.",
        "D": "Replying autonomously to parent emails bypasses human communication custody and risks leaking parent email addresses or unapproved school commitments."
      },
      "full_justification": "Option A is correct because read-only ingestion and date verification are safe autonomous operations, newsletter composition must remain a draft, and external communication or calendar edits must never execute without human authority. Options B, C, and D violate mandatory principal sign-off, external communication custody, or source-record integrity.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 15,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "UPGRADED",
      "concept": "Transfer Assessment \u2014 Durable State Custody & Permission Locks (Greenfield School Parts B & C)",
      "question": "Because the school newsletter AI Worker runs Thursday nights on an ephemeral borrowed desk that clears after execution, the office manager must store operational state externally with clear ownership and test outbound locks before going live. Which storage-custody and lock-verification plan prevents data loss and unauthorized parent mailings?",
      "options": {
        "A": "Keep drafts and photo consents in school folders, store principal approvals in MEMORY.md, and verify locks via screenshots",
        "B": "Store records in school-owned sheets/folders outside the desk, lock mailing/CMS access, and run a negative test-thread send",
        "C": "Save drafts in the Project Library, grant the worker read-only mailing-list access, and confirm locks with a brief rule",
        "D": "Store approvals in school-owned sheets, keep parent email lists inside thread memory, and test locks by emptying task defaults"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Parts B and C of the final assessment require all durable state (drafts, Principal Okafor's formal approval, sent-issue records, late notes, and parent photo/name consent lists) to live outside the borrowed desk in school-owned records with named human owners, while parent mailing-list and website CMS access are locked via missing connectors/read-only permissions and verified through a harmless negative test-thread send attempt.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Final assessment: a new AI Worker (Parts B & C)",
        "source_file": "case2.md",
        "core_concept": "Durable operational records and approvals belong in organization-owned systems outside the borrowed desk, backed by disconnected outbound tools and live negative lock tests."
      },
      "why_incorrect": {
        "A": "Principal approvals must live in governed school records rather than non-enforced MEMORY.md notes, and settings screenshots do not prove capability locks.",
        "C": "Granting any mailing-list connector access violates the rule that parent email addresses stay inside the school, and a written brief rule is not an enforced lock.",
        "D": "Thread memory clears with the borrowed desk, and emptying task defaults alone does not guarantee account-level connector isolation across spawned threads."
      },
      "full_justification": "Option B is correct (A: 16w | B: 17w | C: 16w | D: 16w) because school-owned external records preserve governance across cleared desks and negative test-thread execution empirically proves outbound locks. Option A relies on MEMORY.md and screenshots, Option C exposes parent mailing lists and relies on written rules, and Option D stores parent data in ephemeral thread memory.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 16,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 2: Nisha's First Client",
      "sourceFile": "case2.md",
      "status": "KEPT AS-IS",
      "concept": "Transfer Assessment \u2014 5-Minute Principal Evidence & Exception Handling (Greenfield School Parts D & E)",
      "question": "To let the school principal review and approve the weekly newsletter within five minutes every Friday morning without repeating last term's wrong-date turnout or missed 9:00 p.m. teacher note, what must the Friday approval packet include and how must Thursday-night exceptions be handled?",
      "options": {
        "A": "Full raw teacher transcripts only; auto-send prior week's draft if a usage limit pauses the Thursday night run",
        "B": "A 20-page audit log of model reasoning tokens; allow 9:00 p.m. teacher notes to publish unapproved into the live email",
        "C": "Self-reported AI confidence scores; grant the office manager's assistant permission to bypass principal sign-off on late runs",
        "D": "Date-check diff, photo-consent check, and late-note log; halt/hold unapproved issues if limits pause or 9:00 p.m. notes arrive"
      },
      "correct": "D",
      "explanation": "Option D succeeds because in Parts D and E of the final assessment, Principal Okafor's 5-minute Friday review requires targeted risk evidence\u2014a date-reconciliation diff against the school calendar, a student name/photo consent check, and a late-arriving teacher notes log\u2014and when a Thursday-night usage limit pauses the run or a 9:00 p.m. note arrives, nothing reaches parents without Principal Okafor's approval while Sara sees the exact run/cutoff status on Friday morning.",
      "source_reference": {
        "chapter": "F00D: Case 2 - Nisha's First Client",
        "sub_section": "Final assessment: a new AI Worker (Parts D & E)",
        "source_file": "case2.md",
        "core_concept": "Five-minute executive approval requires targeted risk diffs (dates, consents, late items) and fail-closed exception handling that never bypasses sign-off."
      },
      "why_incorrect": {
        "A": "Auto-sending last week's issue on a usage-limit pause sends stale dates without principal sign-off, and raw transcripts take too long for a 5-minute check.",
        "B": "Twenty pages of reasoning tokens overwhelm a 5-minute review, and letting 9:00 p.m. teacher notes bypass principal review violates school governance.",
        "C": "Subjective AI confidence scores do not verify calendar dates or photo consents, and bypassing principal sign-off violates mandatory approval rules."
      },
      "full_justification": "Option D is correct because compact risk-focused verification artifacts fit a five-minute executive review and fail-closed exception handling guarantees nothing leaves without principal approval. Options A, B, and C each bypass mandatory sign-off or overwhelm the five-minute review window.",
      "category": "The Four Operational Case Studies"
    }
  ]
};
