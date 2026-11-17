// Section 1: The New Way of Working
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["01_the_new_way_of_working"] = {
  "sectionId": "01_the_new_way_of_working",
  "chapterId": 1,
  "chapterTitle": "Claude and ChatGPT 2.0",
  "title": "Section 1: The New Way of Working",
  "totalQuestions": 15,
  "questions": [
    {
      "id": 1,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "AI Worker Platforms vs. Agentic AI Platforms",
      "question": "A healthcare compliance director evaluates desktop AI applications for a quality-assurance team, observing that while foundation model benchmark scores improved modestly over the past year, team throughput surged once the desktop environment began executing multi-step spreadsheet builds, browser lookups, and programmatic calculations autonomously. Why does the curriculum classify these systems as \"AI Worker platforms\" rather than solely \"agentic AI platforms\"?",
      "options": {
        "A": "Because the label centers on frontier reasoning weights rather than autonomous tool execution loops",
        "B": "Because the label restricts multi-step job orchestration strictly to cloud-hosted browser sessions",
        "C": "Because the label accounts for isolated compute, local file access, permission limits, and audit controls",
        "D": "Because the label prioritizes programmatic code generation over conversational natural-language reasoning"
      },
      "correct": "C",
      "explanation": "Option C succeeds because while 'agentic AI platforms' accurately describes autonomous step-by-step action, it puts too much focus on the AI itself; 'AI Worker platforms' captures the full workplace\u2014a computer to work on, your files and apps, permission limits, and ways for you to follow and check its work.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "What has changed",
        "source_file": "the new way of working.md",
        "core_concept": "AI Worker platforms provide a workplace: compute, files and apps, permission settings, and verification mechanisms where you act as manager."
      },
      "why_incorrect": {
        "A": "Agentic emphasizes autonomous step-by-step action toward a goal rather than static model weights.",
        "B": "AI Worker platforms operate across both local desktop folders and remote cloud sandboxes, not solely cloud browsers.",
        "D": "Programmatic math is one capability of modern workflows, not the defining distinction of an AI Worker platform."
      },
      "full_justification": "Option C is correct because AI Worker platforms encompass the complete operational environment (compute, files/apps, permission boundaries, and verification tools) around the model. Option A misstates the focus of agentic labels. Option B restricts execution to cloud browsers. Option D reduces the platform concept to code generation.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 2,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Cloud Sandbox Persistence & Local-Folder Lid-Closure Behavior",
      "question": "A financial analyst uploads a trial balance CSV into a cloud work session in Claude Desktop, closes the laptop lid to commute home, and monitors progress via mobile while a colleague runs an equivalent task on ChatGPT Work referencing an un-uploaded local folder on a separate workstation. What happens to both jobs upon lid closure, and how do the two platforms manage their cloud sandboxes?",
      "options": {
        "A": "Both jobs pause until reconnection; Claude preserves its container across sessions while ChatGPT deletes its VM immediately",
        "B": "Both jobs continue remotely; Claude reuses its VM across consecutive tasks while ChatGPT provisions a fresh container per prompt",
        "C": "The local-folder job syncs to mobile while the uploaded job pauses; Claude purges containers on exit while ChatGPT retains state",
        "D": "The uploaded job continues while the local-folder job pauses; Claude deletes its container on exit while ChatGPT may reuse its VM"
      },
      "correct": "D",
      "explanation": "Option D succeeds because uploaded files are copied to vendor servers so cloud jobs keep running after lid closure, whereas files kept only on a laptop need the desktop app open and online; meanwhile, Claude deletes its temporary cloud computer when a session ends, whereas ChatGPT may reuse its VM sandbox or replace it while preserving eligible state.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "Where the work happens",
        "source_file": "the new way of working.md",
        "core_concept": "Uploaded files continue in the cloud after lid closure while local-only files need the desktop app open; Claude deletes session VMs on exit while ChatGPT may reuse VMs or preserve state."
      },
      "why_incorrect": {
        "A": "Uploaded cloud jobs continue after lid closure, and this reverses Claude's and ChatGPT's sandbox lifecycles.",
        "B": "Local-folder jobs cannot continue when the workstation lid is closed, and this reverses both vendors' sandbox retention models.",
        "C": "Local-only folders cannot run remotely when the laptop is closed, whereas uploaded cloud files remain active."
      },
      "full_justification": "Option D is correct because cloud continuity requires uploaded/cloud files and differs across vendors' sandbox lifecycles (ephemeral per-session VMs in Claude vs. reusable/state-preserving VMs in ChatGPT). Option A, Option B, and Option C each invert lid-closure reachability or vendor sandbox lifecycles.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 3,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Four-Part Brief Outcome ('Done When') & Independent Verification",
      "question": "A procurement manager drafts a delegation brief for Brightline's Friday supplier payment run containing the instruction: \"Done when every invoice due in the next seven days is marked pay, hold, or ask, and your invoice total matches the checking program's total.\" Which structural function does this sentence perform within the four-part brief, and what verification duty remains afterward?",
      "options": {
        "A": "It defines testable success criteria within the Outcome clause, while a human must still independently inspect the checking program",
        "B": "It establishes technical execution boundaries within the Constraints clause, while a human must still resolve flagged exceptions",
        "C": "It specifies deliverable schema rules within the Format clause, while a human must still audit individual policy citations",
        "D": "It scopes active reference versions within the Context clause, while a human must still reconcile historical ledger entries"
      },
      "correct": "A",
      "explanation": "Option A succeeds because the sentence starting with 'Done when' ends the Outcome part of the four-part brief as testable success criteria so the worker knows when to stop, while the human manager must still check the trusted checking program's result independently rather than relying on the worker's claim.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "One job, start to finish",
        "source_file": "the new way of working.md",
        "core_concept": "Outcome ends with 'Done when' (success criteria), while you still inspect the checking program's result yourself."
      },
      "why_incorrect": {
        "B": "Constraints define rules and action boundaries (such as 'Only suggest, and never pay'), not the 'Done when' completion criteria.",
        "C": "Format defines output shape (such as a spreadsheet with one row per invoice), not the 'Done when' completion test.",
        "D": "Context specifies who the output is for and what sources to use (such as version 3 of the payment policy), not the 'Done when' sentence."
      },
      "full_justification": "Option A is correct because 'Done when' serves as the Outcome's self-testable stopping rule while human verification of the checking program remains mandatory. Option B, Option C, and Option D misassign the sentence to Constraints, Format, or Context.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 4,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Brightline Payment Run Separation of Duties & System Blocks",
      "question": "During Brightline's weekly payment run, an AI Worker classifies 15 supplier invoices against version 3 of the payment policy, flags three high-value or new-supplier invoices as \"ask,\" and reconciles the batch total against the accounting checking program. Which division of responsibilities governs the final execution of approved supplier disbursements?",
      "options": {
        "A": "The brief author resolves \"ask\" items and approves the batch, while the AI Worker executes transfers via a sandboxed connector",
        "B": "A human manager resolves \"ask\" items and verifies totals, while a separate payment officer disburses funds via a worker-blocked system",
        "C": "The AI Worker routes \"ask\" items to a second review model, while the brief author releases funds after automated consensus",
        "D": "A separate payment officer audits the checking program total, while the AI Worker disburses approved invoices below manager thresholds"
      },
      "correct": "B",
      "explanation": "Option B succeeds because in Brightline's workflow, the reviewing manager checks the checking program's total and decides the 'ask' invoices, and a separate authorized payment officer sends the payments using a payment system that blocks the AI Worker.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "One job, start to finish",
        "source_file": "the new way of working.md",
        "core_concept": "Five-step workflow: human checks totals and resolves 'ask' items (Step 4); separate payment officer pays via a system that blocks the AI Worker (Step 5)."
      },
      "why_incorrect": {
        "A": "The AI Worker is strictly blocked from sending payments; disbursements are executed by a separate payment officer.",
        "C": "Humans\u2014not a second AI model\u2014decide 'ask' exceptions and authorize disbursements.",
        "D": "The AI Worker never disburses funds at any threshold, and the reviewing manager verifies the checking program total before handoff."
      },
      "full_justification": "Option B is correct because human review of exceptions/totals is separated from payment execution, and the payment system technically blocks the AI Worker. Option A, Option C, and Option D allow automated or AI-executed payments.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 5,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Step-by-Step Execution Workspaces: Code Tab vs. Codex",
      "question": "A Forward Deployed Engineer standardizes cross-platform runbooks for a client operations team using both Claude Desktop and ChatGPT Desktop, needing a dedicated interface where non-programmers can watch multi-step file work unfold step by step. Which interface pairing provides equivalent step-by-step observability across both desktop applications?",
      "options": {
        "A": "Switching Auto to Manual under Claude's message box and selecting Ask for approval in ChatGPT's permissions menu",
        "B": "Opening Project or folder in Claude Desktop and selecting New project under Choose project in ChatGPT Desktop",
        "C": "Selecting the Code tab in Claude Desktop and switching to the Codex area in ChatGPT Desktop",
        "D": "Enabling Incognito chat in Claude Desktop and selecting Temporary chat in ChatGPT Desktop"
      },
      "correct": "C",
      "explanation": "Option C succeeds because for jobs you want to watch step by step\u2014even without knowing programming\u2014Claude Desktop provides the Code tab and ChatGPT Desktop provides Codex.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "The two apps side by side",
        "source_file": "the new way of working.md",
        "core_concept": "Comparison table: Jobs you want to watch step by step use the Code tab in Claude (no programming needed) and Codex in ChatGPT."
      },
      "why_incorrect": {
        "A": "Manual and Ask for approval govern pre-action confirmation prompts rather than opening the step-by-step execution view.",
        "B": "Project or folder and New project attach local directories to workspaces rather than switching to the step-by-step execution view.",
        "D": "Incognito and Temporary chats exclude conversations from memory and model training rather than providing step-by-step observability."
      },
      "full_justification": "Option C is correct because the Code tab (Claude) and Codex (ChatGPT) are the parallel dedicated views for inspecting multi-step task execution. Option A sets approval modes, Option B attaches folders, and Option D configures ephemeral privacy.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 6,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Claude Rebuilt Projects Multi-Part Job Decomposition",
      "question": "An enterprise program manager on a Claude Max plan needs to produce a comprehensive market-entry package containing a financial model, a regulatory brief, and an executive slide deck that all follow identical brand guidelines and shared background research. Which workflow leverages Claude's rebuilt Projects architecture rather than running isolated conversations?",
      "options": {
        "A": "Mounting a local project directory in Manual mode while running each deliverable sequentially inside a single chat thread",
        "B": "Describing the entire multi-part job once so Claude splits it into sub-jobs sharing instructions and memory",
        "C": "Opening the Code tab in Developer Mode so each deliverable executes inside a dedicated third-party gateway session",
        "D": "Uploading separate brand files into Incognito sessions while linking outputs through cross-chat account memory"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Claude's rebuilt Projects (in beta on Pro, Max, and Ultra plans) let you describe a large multi-part job once so Claude splits it into parts, running each part as its own job with shared instructions and memory.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "The two apps side by side",
        "source_file": "the new way of working.md",
        "core_concept": "Rebuilt Projects (beta on Pro, Max, Ultra): describe the whole job once, and Claude splits it into parts with shared instructions and memory."
      },
      "why_incorrect": {
        "A": "Running sequentially inside one chat thread does not decompose the job into parallel sub-jobs via rebuilt Projects.",
        "C": "Developer Mode configures third-party inference gateways (which run locally without cloud/mobile sync or native Projects orchestration).",
        "D": "Incognito chats add nothing to account memory and do not coordinate multi-part jobs."
      },
      "full_justification": "Option B is correct because rebuilt Projects decompose one overarching brief into parallel jobs sharing standing instructions and memory. Option A runs sequentially in a single chat, Option C misapplies third-party gateways, and Option D misuses Incognito sessions.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 7,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Panaversity Team Method: 9.5 Rubric, Cross-Model Audit & Human Check",
      "question": "An editorial operations team tasks Claude with drafting and self-grading a technical policy guide against a 9.5/10 rubric across three automated refinement rounds, then passes the resulting draft and source documents to ChatGPT for an independent audit before human sign-off. Why does the workflow incorporate ChatGPT and cap self-grading rounds rather than relying solely on Claude reaching a 9.5 score?",
      "options": {
        "A": "Self-grading guides iterative refinement without proving factual accuracy, while a differently trained model catches missed flaws",
        "B": "Capping refinement rounds prevents token quota exhaustion, while ChatGPT enforces system permissions over draft edits",
        "C": "Reaching a 9.5 score certifies source grounding, while ChatGPT formats deliverables into multi-folder archive packages",
        "D": "Limiting rounds preserves cross-session memory, while ChatGPT transfers verification sign-off away from human reviewers"
      },
      "correct": "A",
      "explanation": "Option A succeeds because self-assessed grades (such as 9.5/10) are a guide rather than proof of factual accuracy\u2014capping rounds (e.g., at three) keeps improvements honest\u2014while ChatGPT (trained differently by another company) spots problems Claude missed before a person checks every fact against official sources.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "How the Panaversity team works",
        "source_file": "the new way of working.md",
        "core_concept": "Grades are a guide, not proof; limit rounds (e.g., to three) to keep revisions honest, use ChatGPT as a differently trained second reviewer, and keep a person as final check."
      },
      "why_incorrect": {
        "B": "Capping rounds prevents score-gaming rather than managing token quotas, and permissions belong to system architecture rather than ChatGPT review prompts.",
        "C": "A 9.5 score never proves factual accuracy against sources, and .zip packaging is a manual file-transfer workflow.",
        "D": "Final verification and sign-off always remain with a human reviewer."
      },
      "full_justification": "Option A is correct because self-grading guides revision without proving truth, while a differently trained second AI exposes blind spots before human source verification. Option B, Option C, and Option D misstate why rounds are capped and what ChatGPT contributes.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 8,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Zip File Packaging Across Ephemeral Cloud Workspaces",
      "question": "A curriculum production team regularly hands multi-folder chapter packages\u2014containing Markdown files, nested image directories, and CSV datasets\u2014to cloud sessions in Claude and ChatGPT, and needs all outputs returned in their exact original folder hierarchy before the temporary cloud computer is deleted. Which file-transfer practice preserves directory structure across cloud session boundaries?",
      "options": {
        "A": "Uploading individual assets separately into a Project workspace and relying on cloud container persistence across sessions",
        "B": "Attaching nested local folders via Incognito mode while keeping the desktop client closed during remote execution",
        "C": "Pasting raw Markdown and CSV text inline into Codex so account memory reconstructs the directory tree afterward",
        "D": "Packaging the project into a single .zip upload and requesting finished deliverables back as a single .zip download"
      },
      "correct": "D",
      "explanation": "Option D succeeds because packing a multi-folder project into one .zip file for upload preserves every file in its proper folder, and requesting the output back as one .zip download brings all finished files home in the right folders before temporary cloud desks are deleted.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "How the Panaversity team works",
        "source_file": "the new way of working.md",
        "core_concept": "Move multi-folder projects in and out of cloud apps as .zip files so folder structures stay intact and outputs return as saved files."
      },
      "why_incorrect": {
        "A": "Claude deletes its temporary cloud computer when a session ends, and uploading loose files does not preserve nested directory trees.",
        "B": "Local-only folders cannot be accessed when the laptop is closed and the desktop app is offline.",
        "C": "Pasting raw text inline strips directory hierarchy, and account memory stores user notes rather than reconstructing file trees."
      },
      "full_justification": "Option D is correct because .zip archives preserve directory hierarchy in transit and extract outputs as durable local files outside ephemeral sandboxes. Option A, Option B, and Option C fail to preserve nested folders or offline access.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 9,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Practitioner Responsibility Rules 1 & 2 (Short Briefs & Checks as Evidence)",
      "question": "A compliance director establishes standing operating procedures for an accounting AI Worker that classifies weekly vendor invoices against Brightline's corporate payment rules. Which governance design adheres to the first two rules of practitioner responsibility?",
      "options": {
        "A": "Embedding full policy rules inside each weekly brief, while treating passed checks as authorization to queue payments",
        "B": "Referencing active policy rules via cross-session memory, while requiring secondary model review before fund release",
        "C": "Keeping the brief short by naming an external policy document, while treating passed checks strictly as evidence",
        "D": "Defining payment thresholds inside the Outcome clause, while restricting disbursements through brief wording alone"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Rule 1 states 'Keep the brief short. Keep the full rules in a document the brief names' (e.g., version 3 of the payment policy), and Rule 2 states 'Passing the checks gives evidence that the work is done. It does not give permission to act, for example to pay.'",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "What stays your responsibility",
        "source_file": "the new way of working.md",
        "core_concept": "Rule 1 (keep the brief short; keep full rules in a named document) and Rule 2 (passing checks is evidence of completion, not permission to act)."
      },
      "why_incorrect": {
        "A": "Violates Rule 1 by embedding full rules inside each brief, and violates Rule 2 by treating passed checks as permission to act.",
        "B": "Standing rules belong in a complete named document rather than inferred memory, and humans\u2014not models\u2014authorize fund release.",
        "D": "Full policy rules belong in a named external document (Rule 1), and words in a brief cannot block actions without enforced permissions (Rule 3)."
      },
      "full_justification": "Option C is correct because externalizing standing policy documents keeps briefs concise and treating checks strictly as evidence preserves human authorization gates. Option A, Option B, and Option D violate Rules 1, 2, or 3.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 10,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Practitioner Responsibility Rules 3 & 4 (Permissions Over Words & Model Retesting)",
      "question": "A fintech operations lead includes the explicit instruction \"Never execute or approve a bank disbursement under any circumstances\" inside a validated payment-reconciliation brief that worked reliably for two months, until the vendor releases a major foundation model upgrade. Which combination of governance controls is required to keep the deployment safe?",
      "options": {
        "A": "Enforcing technical permissions that block payment access, and retesting the brief's \"Done when\" criteria on the new model",
        "B": "Strengthening explicit prohibition clauses in the Constraints section, and retaining prior model scores as baseline proof",
        "C": "Switching the desktop harness from Auto to Manual mode, and removing \"Done when\" criteria to allow model adaptation",
        "D": "Routing the reconciliation brief through Incognito chat, and relying on self-graded 9.5/10 checks after the model update"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Rule 3 states 'Words in a brief cannot block an action. Permissions can' (the payment system must block the AI Worker), and Rule 4 states 'When the model changes, test your briefs again' against their 'Done when' sentence before reusing them.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "What stays your responsibility",
        "source_file": "the new way of working.md",
        "core_concept": "Rule 3 (permissions, not words in a brief, block actions) and Rule 4 (when the model changes, test your briefs again against 'Done when')."
      },
      "why_incorrect": {
        "B": "Stronger prompt wording still relies on words rather than permissions (Rule 3), and skipping retesting after a model upgrade violates Rule 4.",
        "C": "Removing 'Done when' criteria eliminates the objective completion test required when revalidating a brief on a new model.",
        "D": "Incognito mode governs chat retention rather than system permissions, and self-grading cannot replace retesting 'Done when' criteria after a model change."
      },
      "full_justification": "Option A is correct because hard permission locks prevent unauthorized actions and mandatory regression testing validates brief behavior after model updates. Option B, Option C, and Option D omit permission enforcement or post-update verification.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 11,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Non-Retroactive Training Opt-Outs & 30-Day Incognito/Temporary Retention",
      "question": "A legal paralegal installs a desktop AI application on Monday morning, processes confidential client discovery memos during the afternoon, and disables the \"Help improve our AI models\" privacy switch on Tuesday before launching an Incognito chat. Which compliance reality governs Monday's discovery memos and Tuesday's Incognito thread?",
      "options": {
        "A": "Disabling training retroactively removes Monday's chats, while Incognito sessions bypass vendor retention logs completely",
        "B": "Disabling training authorizes confidential client uploads, while Incognito sessions save facts into account memory",
        "C": "Monday's chats remain eligible for model training, while Tuesday's Incognito session is retained for 30 days",
        "D": "Monday's chats transfer into cross-session memory, while Tuesday's Incognito session trains future base models"
      },
      "correct": "C",
      "explanation": "Option C succeeds because turning off model training covers only new chats going forward (it cannot take back Monday's chats), and while Incognito (Claude) and Temporary (ChatGPT) chats add nothing to memory and are not used for training, the vendor still keeps a copy for up to 30 days by default.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "Set up the apps (Step 2. Make two choices before your first message)",
        "source_file": "the new way of working.md",
        "core_concept": "Training opt-outs apply only to new chats (cannot take back earlier chats); Incognito/Temporary chats skip memory and training but are retained up to 30 days."
      },
      "why_incorrect": {
        "A": "Training opt-outs are non-retroactive, and Incognito/Temporary chats are retained for up to 30 days rather than leaving zero server logs.",
        "B": "Turning off training does not make confidential work files safe to upload under company rules, and Incognito chats add nothing to memory.",
        "D": "Incognito chats are excluded from both model training and cross-session account memory."
      },
      "full_justification": "Option C is correct because privacy toggles apply prospectively and ephemeral chat modes still retain server copies for up to 30 days. Option A, Option B, and Option D misstate retroactivity, retention, or memory exclusion.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 12,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Pre-Action Approval Settings: Manual vs. Ask for Approval",
      "question": "During initial onboarding of an AI Worker onto a shared corporate workstation, a risk manager configures both desktop harnesses so the worker must pause and request explicit human confirmation before modifying local files or accessing external websites. Which control settings enforce this safeguard in Claude Desktop and ChatGPT Desktop respectively?",
      "options": {
        "A": "Switching Auto to Manual under Claude's message box, and selecting Ask for approval in ChatGPT's permissions",
        "B": "Keeping Auto active under Claude's message box, and selecting Approve for me in ChatGPT's permissions",
        "C": "Selecting the Code tab in Claude Desktop, and switching to Full access in ChatGPT's permissions",
        "D": "Enabling Incognito mode in Claude Desktop, and setting ChatGPT's run location to cloud sandboxes"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Step 3 ('Make it ask before it acts') instructs changing Auto to Manual under Claude's message box, and switching to Work mode and choosing Ask for approval in ChatGPT's permissions menu.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "Set up the apps (Step 3. Make it ask before it acts)",
        "source_file": "the new way of working.md",
        "core_concept": "Change Auto to Manual in Claude Desktop, and select Work + Ask for approval in ChatGPT Desktop so both ask before acting."
      },
      "why_incorrect": {
        "B": "Auto in Claude keeps working without asking at each step, and Approve for me in ChatGPT grants broader autonomous execution than Ask for approval.",
        "C": "The Code tab provides step-by-step observability rather than confirmation prompts, and Full access removes file and internet approval gates in ChatGPT.",
        "D": "Incognito mode controls chat retention rather than action approvals, and cloud run location does not enforce local pre-action prompts."
      },
      "full_justification": "Option A is correct because Manual (Claude) and Ask for approval (ChatGPT) pause execution for explicit human confirmation before modifying external files or browsing. Option B, Option C, and Option D select autonomous modes or unrelated settings.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 13,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Desktop Built-In Browser Visibility, Site Approval & Paid Plan Requirement",
      "question": "An analyst on a paid desktop plan instructs an AI Worker to open a vendor pricing page inside the desktop application's built-in browser, inspect the subscription tiers, and report the monthly cost. How does the desktop harness manage visibility and security boundaries while executing this web-browsing step?",
      "options": {
        "A": "The browser runs silently inside an isolated cloud container without displaying pages or requesting site approval",
        "B": "The browser opens visibly beside the chat pane and bypasses site prompts whenever Memory is disabled",
        "C": "The browser opens visibly beside the chat pane on Free plans without requiring paid desktop entitlements",
        "D": "The browser opens visibly beside the chat pane and prompts for user permission before visiting a new site"
      },
      "correct": "D",
      "explanation": "Option D succeeds because in the desktop app, the built-in browser opens visibly next to the chat so you can watch the AI read the page, and the app asks for your permission before it visits a new site (requiring a paid plan on Claude).",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "Set up the apps (Optional: give it a folder, and let it use a browser)",
        "source_file": "the new way of working.md",
        "core_concept": "Built-in browser opens next to the chat while you watch, asks permission before visiting a new site, and requires a paid plan on Claude."
      },
      "why_incorrect": {
        "A": "The built-in browser renders visibly alongside the chat pane in the desktop app and enforces domain-level user approval prompts.",
        "B": "Account Memory settings do not disable domain permission prompts in the built-in browser.",
        "C": "On Claude, the built-in browser is unavailable on Free accounts and requires a paid plan."
      },
      "full_justification": "Option D is correct because the built-in browser provides live side-by-side visual observability and enforces per-site user permission gates. Option A misstates visibility and approval, Option B ties permissions to Memory, and Option C misstates Free-plan eligibility.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 14,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Independent Spreadsheet Verification Over Worker Self-Reports (Lab Task 2)",
      "question": "An accounting analyst tasks an AI Worker with calculating weekly office-supply spend from a CSV ledger containing standard purchases alongside a returned merchandise row recorded with a negative quantity (-3), and the worker returns a polished summary table claiming all rows were reconciled. What verification protocol must the analyst execute before accepting the reported grand total?",
      "options": {
        "A": "Instruct the worker to self-grade its arithmetic output until three consecutive rounds reach 9.5 out of 10",
        "B": "Compute line-item products and sums independently in a trusted spreadsheet to confirm the return was subtracted",
        "C": "Pass the summary table to a second AI model in Incognito mode to verify the negative row calculation",
        "D": "Inspect the worker's written verification note to confirm programmatic math was executed inside the sandbox"
      },
      "correct": "B",
      "explanation": "Option B succeeds because a worker's written check note is still only its own account of its work; practitioners must check totals themselves in a trusted program (such as multiplying quantity by unit price and summing in a spreadsheet) to verify edge cases like negative return row O-206 (-3) were subtracted rather than added.",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "Practice lab (Task 2. Check the work, not the claim)",
        "source_file": "the new way of working.md",
        "core_concept": "Check the work, not the claim: verify office-orders.csv totals (including negative return row O-206) independently in a trusted spreadsheet."
      },
      "why_incorrect": {
        "A": "Self-grading loops (9.5/10) guide prose drafting rather than proving deterministic numerical accuracy.",
        "C": "Cross-model review catches prose/source omissions, whereas financial totals must be verified independently in a trusted program like a spreadsheet.",
        "D": "Reading the worker's written verification note still trusts the worker's self-report rather than checking the underlying calculation."
      },
      "full_justification": "Option B is correct because independent spreadsheet calculation validates exact cent-level totals and negative return handling without trusting AI self-reports. Option A, Option C, and Option D rely on AI self-grading, secondary prose review, or unverified check notes.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 15,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "The New Way of Working",
      "sourceFile": "the new way of working.md",
      "concept": "Claude Desktop Third-Party Inference Mode: OpenRouter, Ollama & Lost Sync",
      "question": "A startup engineer without a paid Anthropic subscription configures Claude Desktop in Developer Mode to run local folder tools and Claude Code via third-party inference providers, evaluating both OpenRouter and a local macOS Ollama installation. Which setup requirement and operational limitation apply to this architecture?",
      "options": {
        "A": "OpenRouter uses x-api-key auth across multiple providers, while Ollama supports both Windows and macOS",
        "B": "Anthropic's privacy toggles still govern prompts, while chat histories sync automatically to the mobile app",
        "C": "OpenRouter uses Bearer auth restricted to Anthropic, while Ollama runs on Mac only without cloud sync",
        "D": "Third-party gateway mode disables local folders and Claude Code, while preserving claude.ai web history sync"
      },
      "correct": "C",
      "explanation": "Option C succeeds because in Claude Desktop's third-party inference mode, OpenRouter requires Bearer authentication and restricting providers strictly to Anthropic in OpenRouter's privacy settings; Ollama connects local models on macOS only (Windows support is not yet available); and across all third-party setups, cloud/mobile sync is lost (history stays on that computer only).",
      "source_reference": {
        "chapter": "F00: The New Way of Working",
        "sub_section": "Appendix: the Claude app without a Claude plan",
        "source_file": "the new way of working.md",
        "core_concept": "OpenRouter uses Bearer auth with Anthropic-only provider restriction; Ollama runs on Mac only; third-party mode keeps history on that computer only (no claude.ai or phone sync)."
      },
      "why_incorrect": {
        "A": "x-api-key is used for DeepSeek (OpenRouter uses Bearer and must restrict routing to Anthropic), and Ollama's Claude Desktop integration runs on macOS only.",
        "B": "Prompts go directly to the third-party provider under its terms (Anthropic's privacy choices no longer govern them), and mobile/web sync is unavailable.",
        "D": "Local folders, the built-in browser, and Claude Code remain available in third-party mode, whereas claude.ai web/mobile sync is lost."
      },
      "full_justification": "Option C is correct because OpenRouter requires Bearer auth plus Anthropic-only provider routing, Ollama is Mac-only, and third-party inference sacrifices claude.ai/mobile sync and Anthropic privacy controls. Option A, Option B, and Option D misstate authentication, platform support, or feature availability.",
      "category": "Claude 2.0 Features & Tooling"
    }
  ]
};
