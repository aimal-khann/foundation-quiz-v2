// Section 2: Tour of the Apps
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["02_tour_of_the_apps"] = {
  "sectionId": "02_tour_of_the_apps",
  "chapterId": 1,
  "chapterTitle": "Claude and ChatGPT 2.0",
  "title": "Section 2: Tour of the Apps",
  "totalQuestions": 20,
  "questions": [
    {
      "id": 1,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Unified Conversations & Auto vs. Manual Permission Setting",
      "question": "A compliance manager on a Claude Team plan notices that a single conversational request\u2014asking Claude to pull vendor records from Slack, verify registration status in Chrome, and update a local spreadsheet\u2014automatically triggers connectors, browser navigation, and screen actions without prompting to switch into a separate Cowork mode. Which governance control determines whether Claude executes each tool step independently or pauses beforehand?",
      "options": {
        "A": "Switching the workspace model picker from Opus 5.5 to Haiku 5.5 before submitting the request",
        "B": "Configuring individual tool approval rules inside the Artifacts sidebar before starting the thread",
        "C": "Toggling the conversation-level permission setting between Auto and Manual to govern action approvals",
        "D": "Disabling cloud task continuity in Settings so multi-step actions pause at every external connector"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Claude unified chat and Cowork into a single conversation where Claude automatically decides when a request becomes a multi-tool task, and the single conversation-level setting\u2014Auto (runs with automated safety checks) vs. Manual (asks before each action)\u2014governs action approvals.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: conversations and artifacts (Two places to work)",
        "source_file": "tour of the apps.md",
        "core_concept": "One conversation decides whether a request becomes a task; Auto vs. Manual governs how freely Claude acts across connectors, browser, and screen."
      },
      "why_incorrect": {
        "A": "Changing the model affects reasoning capability and speed, not step-by-step tool approval prompts.",
        "B": "The Artifacts tab stores created deliverables and templates; it does not configure per-tool execution approvals.",
        "D": "Cloud task continuity governs background execution after lid closure, not interactive tool permission prompts."
      },
      "full_justification": "Option C is correct because toggling between Auto and Manual controls whether Claude acts with automated safety checks or asks before each action in a unified conversation. Option A changes model selection rather than permissions. Option B misattributes tool governance to the Artifacts sidebar. Option D confuses cloud continuity with approval prompts.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 2,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Design vs. Motion Artifact Capabilities & Plan Tiers",
      "question": "A product marketing team on a Claude Pro plan needs to generate an interactive, brand-compliant landing page prototype that can be exported as clean HTML for developers, alongside an animated explainer video where individual text timings can be tweaked without re-rendering the entire clip. Which artifact capabilities and plan boundaries apply to these two deliverables?",
      "options": {
        "A": "Both Design and Motion artifacts are included on Pro plans and export natively to HTML and MP4 formats",
        "B": "Design artifacts require Enterprise seats, whereas Motion artifacts are included on every Pro and Free account",
        "C": "Both Design and Motion artifacts export exclusively as static PNG images and shareable dashboard links",
        "D": "Design artifacts are available on Pro with HTML export, whereas Motion is in beta on Team and Enterprise"
      },
      "correct": "D",
      "explanation": "Option D succeeds because Design artifacts (prototypes, landing pages) are included on every plan including Free and Pro with export to PDF, PowerPoint, HTML, or .zip, whereas Motion artifacts (animated explainers exporting to MP4) are in beta on Team and Enterprise plans.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: conversations and artifacts (New artifacts: documents, slides, sheets, designs, data, whiteboards and motion)",
        "source_file": "tour of the apps.md",
        "core_concept": "Design is on all plans (exports PDF, PowerPoint, HTML, .zip); Motion is in beta on Team and Enterprise (exports MP4)."
      },
      "why_incorrect": {
        "A": "Motion is not included on individual Pro plans; it is restricted to Team and Enterprise beta access.",
        "B": "This reverses availability: Design is on every plan, whereas Motion requires Team or Enterprise.",
        "C": "Static PNG export applies to Whiteboards, and shareable links apply to Data artifacts\u2014not Design or Motion."
      },
      "full_justification": "Option D is correct because Design is available on Pro with HTML export while Motion is in beta exclusively on Team and Enterprise. Option A falsely includes Motion on Pro. Option B inverts plan eligibility. Option C cites export formats belonging to Whiteboards and Data.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 3,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Shared Live Artifacts: Per-Viewer Connections & Usage Billing",
      "question": "A Forward Deployed Engineer builds a shared Claude artifact\u2014an interactive procurement compliance coach connected to Google Drive that invokes Claude internally to evaluate vendor contracts\u2014and distributes the link to 40 external client analysts on their own paid Claude plans. How are app authentication and model usage billed when those 40 analysts use the shared tool?",
      "options": {
        "A": "Each analyst connects their own apps, and their Claude calls count against their own respective plans",
        "B": "All analysts inherit the creator's app credentials, and embedded calls bill to the creator's plan",
        "C": "Shared artifacts disable connected apps and embedded model calls once opened outside the author's workspace",
        "D": "Embedded model usage splits evenly across accounts, while app connectors authenticate via a shared workspace key"
      },
      "correct": "A",
      "explanation": "Option A succeeds because live shared artifacts require each person who opens the artifact to connect their own apps, and any Claude calls made inside the artifact count against the viewer's own plan rather than the creator's.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: conversations and artifacts (New artifacts: documents, slides, sheets, designs, data, whiteboards and motion)",
        "source_file": "tour of the apps.md",
        "core_concept": "Live artifacts that can think: each person connects their own apps, and each person's Claude usage counts against their own plan, not the creator's."
      },
      "why_incorrect": {
        "B": "Artifacts never share the creator's personal app credentials, nor does the creator pay for recipients' model usage.",
        "C": "Shared artifacts retain live connector and embedded-Claude capabilities for paid recipients rather than disabling them.",
        "D": "Usage is billed strictly to each viewer's own Claude plan, and authentication is per-user rather than via a shared key."
      },
      "full_justification": "Option A is correct because both app authentication and model consumption are scoped to each individual viewer's account and plan. Option B falsely routes credentials and billing to the creator. Option C falsely disables live features. Option D invents split billing and shared keys.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 4,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Code Tab Context Compaction & Cloud View-Only Files",
      "question": "A non-technical finance lead opens an active cloud session in Claude's Code tab to review a multi-file reconciliation, notices the context ring approaching capacity, and needs to edit a single typo inside a generated Markdown report directly in the Files pane. Which operational rules govern context management and file editing in this cloud session?",
      "options": {
        "A": "Compaction clears loaded skills and memory files, while cloud files remain editable directly in the Files pane",
        "B": "Compacting summarizes earlier context to free space, while cloud files are view-only and require asking Claude",
        "C": "Switching Ctrl+O to Verbose unlocks direct inline file editing while automatically compacting older message turns",
        "D": "Cloud sessions disable context compaction at capacity and require downloading files locally for any text revisions"
      },
      "correct": "B",
      "explanation": "Option B succeeds because the Context card's compact button summarizes the conversation so far to free context space, and while local sessions let you edit files directly in the Files pane, cloud sessions display files view-only so you ask Claude to make the change.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: the Code tab and running work (The Code tab's new layout)",
        "source_file": "tour of the apps.md",
        "core_concept": "Context card compaction summarizes older conversation turns; cloud sessions show files view-only in the Files pane (ask Claude for changes)."
      },
      "why_incorrect": {
        "A": "Compaction summarizes older conversation messages rather than clearing loaded skills/memory, and cloud files are view-only.",
        "C": "Ctrl+O toggles display verbosity (Normal, Thinking, Verbose); it does not unlock cloud file editing or trigger compaction.",
        "D": "Cloud sessions support context compaction and allow you to ask Claude to edit files directly without downloading them locally."
      },
      "full_justification": "Option B is correct because compaction summarizes prior conversation context and cloud sessions enforce view-only file panes. Option A misstates what compaction clears and cloud editability. Option C confuses Ctrl+O verbosity modes with file editing. Option D falsely claims compaction is disabled in cloud sessions.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 5,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Code Tab /btw Side Chat vs. Fork, Rewind & Split View",
      "question": "While Claude spends eight minutes executing a complex supplier audit in the Code tab, an operations analyst wants to ask a quick clarifying question about an earlier vendor discrepancy without polluting the active session's main context or altering its ongoing execution path. Which Code tab feature satisfies this requirement, and what persistence rule applies to it?",
      "options": {
        "A": "Using /rewind to step back to the discrepancy turn, which branches the conversation into a saved session",
        "B": "Clicking Fork on the active message, which merges clarifying answers back into the primary session transcript",
        "C": "Opening Split View from the sidebar, which links two sessions while syncing prompts into project memory",
        "D": "Opening a /btw side chat, which reads prior context without adding back to it and is not saved on close"
      },
      "correct": "D",
      "explanation": "Option D succeeds because a side chat opened with /btw reads the main conversation up to that point to answer questions without adding anything back into the main conversation, and side chats are not saved after you close the app.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: the Code tab and running work (Asking without interrupting)",
        "source_file": "tour of the apps.md",
        "core_concept": "/btw side chat reads the main conversation up to that point, adds nothing back, and is not saved after closing the app."
      },
      "why_incorrect": {
        "A": "/rewind rolls back the active session to an earlier point like undo rather than opening an isolated side query.",
        "B": "Forking copies the conversation into a new session to explore an alternate path; it does not merge answers back.",
        "C": "Split View displays two existing sessions side by side rather than creating an unrecorded side chat."
      },
      "full_justification": "Option D is correct because /btw side chats provide read-only context queries that neither pollute the active thread nor persist after app closure. Option A describes undo rollback. Option B describes branching into a new session. Option C describes side-by-side windowing.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 6,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "/goal Evaluator Limits & Completion vs. Permission",
      "question": "A controller runs a weekly 15-invoice reconciliation in the Code tab using /goal \"all 15 invoices have a pay, hold or ask decision, and the run total matches the checking program\", and the session halts with the goal marked as met. Why must the controller still independently run the checking program and approve downstream payments before acting on the result?",
      "options": {
        "A": "The /goal evaluator only reads conversation text without opening files, and completion never grants permission",
        "B": "The /goal evaluator runs on Haiku by default, which samples random file rows rather than auditing totals",
        "C": "The /goal evaluator clears automatically after three turns, marking incomplete reconciliations as tentatively met",
        "D": "The /goal evaluator verifies spreadsheet formulas in the cloud, but Manual mode blocks automated file exports"
      },
      "correct": "A",
      "explanation": "Option A succeeds because the /goal evaluator (a separate small model, Haiku by default) reads only what the conversation shows\u2014it does not open files or rerun checks (making it a second opinion, not independent verification)\u2014and a met goal never grants permission for downstream actions.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: the Code tab and running work (Keeping the work running when you step away)",
        "source_file": "tour of the apps.md",
        "core_concept": "/goal cautions: the checker reads only the conversation (does not open files or rerun checks), and completion is not permission."
      },
      "why_incorrect": {
        "B": "Haiku evaluates the conversation transcript rather than sampling file rows.",
        "C": "/goal continues until judged met, judged impossible, halted by a user-fixable error, or cleared via /goal clear.",
        "D": "The /goal evaluator does not open or verify spreadsheet files in the cloud; it inspects conversation text only."
      },
      "full_justification": "Option A is correct because /goal judges only conversational evidence rather than independently inspecting files, and finishing a goal never authorizes subsequent actions. Option B misstates how Haiku evaluates. Option C invents a three-turn auto-pass. Option D falsely claims the evaluator checks cloud spreadsheets.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 7,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Cloud Session VM Reclamation & Persistence Boundaries",
      "question": "An analyst starts a cloud session in the Code tab to scrape pricing data from three allowlisted supplier portals and install a custom Python parser, then steps away for two hours until the idle session's virtual machine is reclaimed by Anthropic. When the analyst reopens the session, what state persists and what must be re-established?",
      "options": {
        "A": "The virtual machine resumes from hibernation intact with all background scripts and installed packages running",
        "B": "Both the conversation history and saved account files are purged alongside the reclaimed virtual machine",
        "C": "The conversation and saved account files return, while background tasks and VM-installed tools are lost",
        "D": "Installed packages persist inside an organization-wide VM cache, while the session transcript resets to blank"
      },
      "correct": "C",
      "explanation": "Option C succeeds because when an idle Code tab cloud session has its virtual machine reclaimed and replaced with a fresh one, the conversation and files saved to your account survive, whereas running background work and anything installed or left on the VM are lost.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: the Code tab and running work (Where the work actually runs)",
        "source_file": "tour of the apps.md",
        "core_concept": "Idle sessions lose their VM; when reopened on a fresh VM, conversation and account files survive, while background work and VM-installed items do not."
      },
      "why_incorrect": {
        "A": "Idle VMs are reclaimed and replaced with fresh ones rather than hibernated with live background tasks and installed packages preserved.",
        "B": "Conversations and files saved to your Claude account persist across VM reclamation.",
        "D": "Cloud VMs are never shared across sessions or organizations, and the session transcript is restored."
      },
      "full_justification": "Option C is correct because account-level conversation history and saved files survive VM reclamation, while temporary VM state and background processes are wiped. Option A falsely assumes stateful hibernation. Option B falsely claims total data loss. Option D invents shared org VM caches and transcript resets.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 8,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Coordinating Session vs. Nested Sessions & Projects",
      "question": "An operations lead has 14 separate local sessions running in Claude's Code tab across different client folders and wants a single control-center view to check which sessions have finished, which are waiting for approval, and which are still working\u2014without spawning new cloud threads. Which orchestration pattern fits this exact operational need?",
      "options": {
        "A": "Creating a rebuilt Project, which imports all 14 local folders into a unified cloud coordinator thread",
        "B": "Pinning one Code session as a coordinating session and asking it \"what's waiting on me?\" across local sessions",
        "C": "Triggering nested sessions from each active chat so every local job reports back to a parent thread",
        "D": "Enabling Remote Control on a primary chat so mobile notifications aggregate status across all 14 workspaces"
      },
      "correct": "B",
      "explanation": "Option B succeeds because every Code session can list, read, message, rename, and archive other sessions; pinning one session to the top of the sidebar as a coordinating session and asking 'what's waiting on me?' reviews up to your 20 most recently active local sessions without spawning new cloud threads.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: the Code tab and running work (Three ways to run several things at once)",
        "source_file": "tour of the apps.md",
        "core_concept": "A coordinating session watches and steers up to 20 recently active local sessions via 'what's waiting on me?' without starting new cloud threads."
      },
      "why_incorrect": {
        "A": "Rebuilt Projects spawn cloud threads by default rather than acting as a local control plane over existing local sessions.",
        "C": "Nested sessions split one job into parallel child jobs; a coordinator watches sessions already running.",
        "D": "Remote Control mirrors a single session to mobile/web rather than aggregating status across 14 local workspaces."
      },
      "full_justification": "Option B is correct because a pinned coordinating session inspects and manages existing local sessions directly. Option A misapplies cloud-first Projects. Option C confuses job-splitting nested sessions with status coordination. Option D misattributes multi-session aggregation to Remote Control.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 9,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Rebuilt Projects: Thread-Level Approvals & Opus High-Effort Default",
      "question": "A team lead sets up a rebuilt Claude Project for recurring weekly procurement runs, sends a multi-part brief that spawns three parallel cloud threads, and later notices one thread is paused awaiting tool approval while weekly plan limits are depleting rapidly. Why did approvals stall when answered in the top-level project chat, and what configuration explains the rapid usage burn?",
      "options": {
        "A": "Project conversations cannot execute tools, and spawned threads default to Fable 5.1 on paid usage credits",
        "B": "Cloud threads inherit local workstation permissions, and project memory reloads every library file on every turn",
        "C": "Top-level project chats override thread approvals only in Manual mode, while Sonnet burns triple weekly limits",
        "D": "Permission requests wait inside each individual thread, and project threads default to Opus at high effort"
      },
      "correct": "D",
      "explanation": "Option D succeeds because in rebuilt Projects, each thread is its own session where permission requests wait inside that specific thread (telling Claude in the top-level project conversation to go ahead does not reach it), and threads default to Opus at high effort, which consumes plan limits fastest unless changed in Project settings > General.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: the Code tab and running work (Projects: one conversation that runs the work)",
        "source_file": "tour of the apps.md",
        "core_concept": "Steering a thread & Check four things: permission requests wait inside each thread, and every thread starts on Opus at high effort."
      },
      "why_incorrect": {
        "A": "Threads default to Opus at high effort\u2014not Fable 5.1.",
        "B": "Cloud threads do not inherit local workstation permissions, and the project conversation stays lean using recent threads and memory rather than reloading all Library files every turn.",
        "C": "Top-level project chats cannot approve thread-level permission prompts in any mode, and Opus (not Sonnet) is the high-burn default."
      },
      "full_justification": "Option D is correct because approvals must be answered inside the waiting thread and the default Opus high-effort setting accelerates quota consumption. Option A misidentifies the default model. Option B misstates permission inheritance and memory loading. Option C falsely claims Manual mode enables top-level overrides.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 10,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Code Tab Mods Unsandboxed Host Access",
      "question": "A developer advocates installing a community-built Code tab mod that adds a custom usage-tracking status line and automatically approves routine file-write permissions during local builds. What critical security architecture constraint must the security team evaluate before permitting this mod on corporate laptops?",
      "options": {
        "A": "Mods are unsandboxed with full host computer access like Claude Code itself, requiring trusted code review",
        "B": "Mods run inside isolated cloud containers that block access to local environment variables and host secrets",
        "C": "Mods execute inside an OS-level browser sandbox that restricts all file modifications to temporary folders",
        "D": "Mods require Enterprise administrator signing before they can inspect conversation text inside the Code tab"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Code tab mods can alter panes, status lines, and permission handling, and they are not sandboxed: they have the exact same access to your computer as Claude Code itself, so you must install only mods you have read or that come from a trusted source.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: the Code tab and running work (Mods: changing the app itself)",
        "source_file": "tour of the apps.md",
        "core_concept": "Mods are not sandboxed: they have the same access to your computer as Claude Code itself."
      },
      "why_incorrect": {
        "B": "Mods execute locally with Claude Code's privileges rather than inside isolated cloud containers.",
        "C": "Mods are explicitly unsandboxed and are not confined to a browser sandbox or temporary folder.",
        "D": "While company admins can restrict plugin sources and a built-in safety mod blocks the riskiest changes, mods are not blocked from inspecting conversation text by default."
      },
      "full_justification": "Option A is correct because unsandboxed mods inherit full host-level privileges equivalent to Claude Code itself. Option B and Option C falsely attribute container or browser sandboxing to mods. Option D misstates Enterprise signing behavior.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 11,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "ChatGPT Slides Space Sharing Inheritance & Export Behavior",
      "question": "A strategy director builds an investor presentation using ChatGPT Slides inside a shared Space workspace, invites an external advisor directly to the deck, and later removes that advisor's direct invitation after discovering the advisor also holds general membership in the parent Space. What access governance rule governs the advisor's ability to view or edit the deck?",
      "options": {
        "A": "Removing a direct deck invitation revokes inherited Space access immediately, while exported PowerPoint files stay live",
        "B": "Exported Google Slides copies sync back to Space edits automatically, while direct deck invites override Space rules",
        "C": "Decks inherit their parent Space's access rules, so removing a direct invite leaves Space access intact",
        "D": "Removing a direct deck invitation blocks editing rights immediately, while Space membership preserves read-only viewing"
      },
      "correct": "C",
      "explanation": "Option C succeeds because ChatGPT Slides live inside Space and share their parent Space's access settings\u2014meaning removing someone's direct invitation to a deck does not stop them if they can still open its Space\u2014while exporting to PowerPoint, PDF, or Google Slides creates a static copy.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "ChatGPT 2.0 (What Work can do)",
        "source_file": "tour of the apps.md",
        "core_concept": "ChatGPT Slides live in Space and inherit Space sharing rules; removing a direct deck invite does not remove access inherited from the parent Space."
      },
      "why_incorrect": {
        "A": "Parent Space membership overrides direct invite removal, and exported PowerPoint files are static copies rather than live-synced decks.",
        "B": "Exported files do not sync back to Space, and Space sharing rules take precedence over individual deck invitations.",
        "D": "Space-level membership governs the deck's access settings rather than downgrading the user to read-only."
      },
      "full_justification": "Option C is correct because Space-level permissions govern all decks inside that Space even when a direct file invitation is revoked. Option A, Option B, and Option D each misstate Space permission inheritance or static export behavior.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 12,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "ChatGPT Work VM Reuse & OS-Native Local Sandboxing",
      "question": "A cloud security architect compares how Anthropic and OpenAI isolate cloud-hosted task execution and local desktop operations when evaluating both platforms for regulated client work. Which architectural distinction accurately characterizes OpenAI's execution design?",
      "options": {
        "A": "Cloud Work destroys every virtual machine immediately on task end, while local desktop work runs in cloud VMs",
        "B": "Cloud Work sandboxes can reuse environments across tasks, while local desktop execution uses OS-native sandboxes",
        "C": "Cloud Work runs inside OS-native sandboxes on your machine, while local Codex work provisions new cloud VMs",
        "D": "Ending a Work task immediately purges all saved state, while local desktop tasks share one cross-tenant container"
      },
      "correct": "B",
      "explanation": "Option B succeeds because OpenAI's Work cloud tasks run in VM-backed sandboxes that can reuse an environment across tasks (or replace it while preserving eligible state), whereas local work in the ChatGPT desktop app and Codex runs inside the operating system's own sandbox (Seatbelt on Mac, bubblewrap on Linux, Windows sandbox on Windows).",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "ChatGPT 2.0 (Where ChatGPT's work actually runs)",
        "source_file": "tour of the apps.md",
        "core_concept": "Work cloud tasks use VM-backed sandboxes that can be reused with preserved state; local desktop/Codex work uses OS-native sandboxes (Seatbelt, bubblewrap, Windows sandbox)."
      },
      "why_incorrect": {
        "A": "Immediate per-session VM destruction describes Claude's cloud sessions rather than ChatGPT Work, and local desktop tasks run locally rather than in cloud VMs.",
        "C": "This reverses the two environments: cloud Work runs on OpenAI's servers in VM sandboxes, while local desktop/Codex work uses OS-native sandboxes.",
        "D": "Deleting a chat or ending a task does not immediately purge saved state (retention settings govern it), and sandboxes are never shared across tenants."
      },
      "full_justification": "Option B is correct because ChatGPT Work supports stateful sandbox reuse in the cloud while local execution relies on OS-native sandboxing. Option A describes Claude's VM lifecycle. Option C swaps cloud and local runtimes. Option D misstates retention and tenant isolation.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 13,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "ChatGPT Approve for Me Auto-Review & Cloud Browser Action Separation",
      "question": "An operations manager configures ChatGPT Desktop to run a recurring procurement research task that navigates external vendor portals via the cloud browser and updates local workspace files, selecting the Approve for me permission mode. How does ChatGPT govern file/internet actions and cloud-browser interactions under this setup?",
      "options": {
        "A": "Every routine workspace read pauses for human approval, while cloud-browser site access authorizes purchases",
        "B": "Rules from a custom settings file block workspace edits, while cloud-browser sessions share your local tabs",
        "C": "Workspace limits are removed across the host machine, while cloud-browser visits require manual step approval",
        "D": "An auto-review model screens actions and escalates risky ones, while site visits and consequential acts stay separate"
      },
      "correct": "D",
      "explanation": "Option D succeeds because Approve for me keeps workspace limits intact while sending approval requests to auto-review (a reviewing model that asks you only about risky actions), and in the cloud browser permission to visit a website is separate from permission to take a consequential action such as a purchase.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "ChatGPT 2.0 (Permissions and governance)",
        "source_file": "tour of the apps.md",
        "core_concept": "Approve for me routes approvals to auto-review (escalating risky actions); cloud browser separates permission to visit a site from permission to take a consequential action."
      },
      "why_incorrect": {
        "A": "This inverts both rules: routine safe actions pass auto-review without pausing, and permission to visit a site never authorizes consequential actions like purchases.",
        "B": "Settings-file rules belong to Custom mode (not Approve for me), and the cloud browser runs on a separate remote computer without your local browser tabs.",
        "C": "Removing file and internet limits describes Full access mode rather than Approve for me."
      },
      "full_justification": "Option D is correct because Approve for me pairs model-assisted auto-review with separate confirmation gates for consequential cloud-browser actions. Option A inverts both gates. Option B mixes Custom mode and local browser state. Option C describes Full access.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 14,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "ChatGPT PIN-Locked Chats: Removal from Projects, Non-Encryption & Reset Rule",
      "question": "A corporate paralegal organizes confidential M&A diligence inside a ChatGPT Project, enables a four-digit PIN lock on one sensitive negotiation chat to hide it from shared workstation users, and later forgets the PIN while attempting to recover the thread. Which operational rules govern PIN-locked chats in ChatGPT?",
      "options": {
        "A": "Locking hides the chat, removes it from its Project, is not encryption, and resetting deletes all locked chats",
        "B": "Locking encrypts the transcript, keeps it inside its Project, allows SSO recovery, and preserves search indexing",
        "C": "Locking restricts the chat to cloud execution, mirrors it to mobile search, and resets via workspace admin keys",
        "D": "Locking hides the chat from history, retains its Project membership, encrypts storage, and restores single threads"
      },
      "correct": "A",
      "explanation": "Option A succeeds because locking a chat behind a four-digit PIN hides it from history and search under Projects > Locked chats, automatically removes a locked chat from its parent Project, is a device-visibility hide rather than encryption, and resetting a forgotten PIN requires deleting every locked chat.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "ChatGPT 2.0 (What Work can do)",
        "source_file": "tour of the apps.md",
        "core_concept": "Locked chats hide from history/search under Projects > Locked chats, are removed from their Project, are not encrypted, and a forgotten PIN resets only by deleting all locked chats."
      },
      "why_incorrect": {
        "B": "Locked chats are explicitly not encrypted, are removed from their parent Project upon locking, and have no SSO PIN recovery.",
        "C": "Locked chats disappear from history and search rather than mirroring to search, and have no admin recovery keys.",
        "D": "Locking removes a chat from its Project, is not encryption, and resetting deletes all locked chats rather than restoring single threads."
      },
      "full_justification": "Option A is correct because all four documented rules apply simultaneously to ChatGPT locked chats. Option B, Option C, and Option D each misstate encryption, Project membership, or PIN reset consequences.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 15,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "OpenCode Multi-Provider & Local Model Independence",
      "question": "A European healthcare technology firm wants to deploy an AI coding and automation agent across three internal engineering squads, but strict data-residency policies require running self-hosted open-weight models on internal servers with zero lock-in to a single commercial frontier lab. Why does the firm select OpenCode over the Claude and ChatGPT desktop apps?",
      "options": {
        "A": "OpenCode provides hosted cloud virtual machines and built-in Record & Replay screen automation out of the box",
        "B": "OpenCode includes native collaborative Whiteboard artifacts and event triggers for Gmail, Slack, and GitHub",
        "C": "OpenCode supports over 75 model providers including local models, prioritizing data location and independence",
        "D": "OpenCode runs exclusively inside Anthropic's cloud sandboxes while offering free enterprise compliance hosting"
      },
      "correct": "C",
      "explanation": "Option C succeeds because OpenCode is an open-source coding agent that runs models from over 75 providers\u2014including models hosted on your own computer\u2014making it the right fit where cost, data location, or vendor independence comes first.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Side by side (Feature map & Where they differ)",
        "source_file": "tour of the apps.md",
        "core_concept": "OpenCode supports over 75 providers including models run on your own computer, prioritizing cost, data location, and vendor independence."
      },
      "why_incorrect": {
        "A": "Hosted cloud virtual machines and Record & Replay computer-use workflows are undocumented in OpenCode and belong to the commercial desktop apps.",
        "B": "Collaborative Whiteboards belong to Claude, and Gmail/Slack/GitHub event triggers belong to ChatGPT rather than OpenCode.",
        "D": "OpenCode runs on your own computer (unless self-hosted elsewhere) rather than inside Anthropic's cloud sandboxes."
      },
      "full_justification": "Option C is correct because OpenCode provides multi-provider and local-model flexibility for strict data location and vendor independence. Option A, Option B, and Option D attribute commercial vendor features or cloud hosting to OpenCode.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 16,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Briefing Claude 2.0 & ChatGPT 2.0: Effort, 'Done When' & Check Evidence",
      "question": "A Forward Deployed Engineer reviews a junior consultant's draft brief for Claude Opus 5.5 and GPT-6 Astra that begins with \"Think very carefully and double-check everything twice\" and sets reasoning effort to maximum by default for a routine weekly reconciliation. Based on both vendors' latest briefing guidance, how should the FDE refactor the brief and effort setting?",
      "options": {
        "A": "Keep maximum reasoning effort active, expand reflective warnings, state \"Done when\" last, and omit check notes",
        "B": "Drop to low reasoning effort, keep \"double-check\" prompts, remove format rules, and rely on self-graded scores",
        "C": "Switch to medium effort, replace \"Done when\" with open goals, add persona prompts, and log token budgets",
        "D": "Start at medium effort, strip \"think carefully\" filler, state \"Done when\" upfront, and require check evidence"
      },
      "correct": "D",
      "explanation": "Option D succeeds because both Anthropic and OpenAI recommend starting at medium effort (raising it only when justified by evals), removing filler like 'think carefully' or 'double-check everything' (since effort controls thinking depth), stating the testable 'Done when' condition upfront, and ending with a requirement to show what was checked and what the checks found.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Claude 2.0: the Code tab and running work (Briefing Claude 2.0) & ChatGPT 2.0 (Briefing ChatGPT 2.0)",
        "source_file": "tour of the apps.md",
        "core_concept": "Start at medium effort, remove 'think carefully' / 'double-check' filler, state 'Done when' upfront, and require check evidence at the end."
      },
      "why_incorrect": {
        "A": "Both vendors advise starting at medium effort rather than defaulting to maximum, and against redundant 'think carefully' filler.",
        "B": "Vendors recommend medium effort, stripping 'double-check' filler, and reviewing check evidence rather than self-graded scores.",
        "C": "Replacing 'Done when' with open goals removes the concrete completion test required for delegation."
      },
      "full_justification": "Option D is correct because it applies all four modern briefing principles shared across Opus 5.5 and GPT-6. Option A, Option B, and Option C violate effort defaults, conciseness rules, or verifiable outcome criteria.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 17,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Claude Model Specialization: Haiku 5.5 vs. Fable 5.1",
      "question": "A team lead on a Claude Max plan is partitioning a large quarterly audit workflow into two stages: first classifying 4,000 raw vendor receipts into standardized categories at high speed, and then running a multi-hour deep synthesis of cross-border tax anomalies where Opus 5.5 at higher effort previously fell short. Which Claude model pairing matches these two stages and their plan implications?",
      "options": {
        "A": "Fable 5.1 for high-volume receipt classification, and Haiku 5.5 for multi-hour deep tax anomaly synthesis",
        "B": "Haiku 5.5 for fast high-volume receipt sorting, and Fable 5.1 for the hardest multi-hour synthesis tasks",
        "C": "Opus 5.5 for the /goal evaluator loop, and Sonnet 5.5 for multi-hour deep research on paid usage credits",
        "D": "Sonnet 5.5 for high-volume receipt triage, and Haiku 5.5 for multi-hour synthesis without impacting limits"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Haiku 5.5 is Anthropic's fastest, lowest-cost model designed for high-volume sorting, classifying, and field extraction, whereas Fable 5.1 is built for the hardest, multi-hour deep research and synthesis tasks where Opus 5.5 at higher effort still falls short (consuming plan limits much faster).",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Which model for which job (Claude)",
        "source_file": "tour of the apps.md",
        "core_concept": "Haiku 5.5 handles high-volume, simple, fast sorting/classifying; Fable 5.1 handles the hardest hours-long deep research where Opus 5.5 falls short."
      },
      "why_incorrect": {
        "A": "This reverses the two specialists: Fable 5.1 is built for multi-hour deep synthesis, while Haiku 5.5 handles fast high-volume sorting.",
        "C": "Haiku 5.5 (not Opus 5.5) judges /goal conditions by default, and Fable 5.1 (not Sonnet 5.5) handles the hardest multi-hour synthesis.",
        "D": "Haiku 5.5 is not built for multi-hour deep tax synthesis, and Fable 5.1 consumes weekly limits much faster."
      },
      "full_justification": "Option B is correct because it matches Haiku 5.5's high-throughput classification strength with Fable 5.1's deep multi-hour synthesis capability. Option A swaps the models. Option C and Option D misassign /goal evaluation and deep synthesis.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 18,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "ChatGPT Model Specialization: GPT-6.1 Terra vs. GPT-6 Astra",
      "question": "An operations team using ChatGPT Desktop needs to automate two distinct workflows: (1) operating an on-screen legacy ERP interface via visual reasoning and computer use, and (2) running an ambiguous, multi-source competitive market analysis in Work mode on a Plus plan. Which GPT-6 model pairing aligns with these two jobs?",
      "options": {
        "A": "GPT-6.1 Terra for screen-based computer use, and GPT-6 Astra for ambiguous deep analysis in Work mode",
        "B": "GPT-6 Luna for on-screen ERP computer use, and GPT-6.1 Sol as the exclusive Work mode model on Plus plans",
        "C": "GPT-6 Astra for ultra-fast routine email triage, and GPT-6 Luna for multi-hour ambiguous Work deliverables",
        "D": "GPT-6.1 Sol for visual screen automation, and GPT-6.1 Terra for general conversational Q&A on Free accounts"
      },
      "correct": "A",
      "explanation": "Option A succeeds because GPT-6.1 Terra is OpenAI's specialist model for screen-based work, computer use, visual reasoning, and concise writing (where it can beat larger models), while GPT-6 Astra is OpenAI's most capable model for ambiguous problems and deep analysis, reported as the model behind Work on Plus and higher plans.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Which model for which job (ChatGPT)",
        "source_file": "tour of the apps.md",
        "core_concept": "GPT-6.1 Terra specializes in screen-based work, computer use, and visual reasoning; GPT-6 Astra handles ambiguous problems and deep analysis in Work on Plus+."
      },
      "why_incorrect": {
        "B": "GPT-6 Luna is the lightweight fast-triage model (not a visual computer-use specialist), and Astra (not Sol) powers Work mode on Plus plans.",
        "C": "This reverses Luna and Astra: Astra handles ambiguous deep deliverables, while Luna handles fast routine triage.",
        "D": "Terra is the visual/computer-use specialist, while Luna is the reported Free-tier Chat default."
      },
      "full_justification": "Option A is correct because Terra specializes in visual/computer-use workflows while Astra leads deep analytical Work tasks. Option B, Option C, and Option D misassign model roles and Plus/Free defaults.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 19,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Deterministic Code/Formulas for Math & Cross-Model Regression Testing",
      "question": "A financial controller transitions a validated weekly supplier-variance brief from Claude Sonnet 5.5 to GPT-6 Astra and notices that the brief asks the model to compute net currency adjustments directly in prose before generating the final summary table. Which two cross-model operational rules must the controller enforce?",
      "options": {
        "A": "Allow frontier models to compute currency adjustments inline, and skip retesting briefs when upgrading models",
        "B": "Restrict arithmetic to the model's highest reasoning effort setting, and reuse prior \"Done when\" check logs",
        "C": "Delegate all arithmetic to tested code or formulas, and rerun the brief against its \"Done when\" test after switching",
        "D": "Rewrite the brief's constraints in prose to prohibit math errors while keeping the upgraded model untested"
      },
      "correct": "C",
      "explanation": "Option C succeeds because two universal rules apply across every model choice: (1) a model never performs final arithmetic\u2014all calculations must be done by tested code or spreadsheet formulas, and (2) whenever you switch models, you must rerun reusable briefs against their 'Done when' sentences because a brief tuned for one model may behave differently on another.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Which model for which job (By kind of job)",
        "source_file": "tour of the apps.md",
        "core_concept": "Three cautions: models never do final arithmetic (use tested code/formulas), and rerun reusable briefs against 'Done when' sentences when switching models."
      },
      "why_incorrect": {
        "A": "Violates both rules: frontier models still make inline prose math errors, and switching models requires mandatory regression testing.",
        "B": "Even at maximum reasoning effort, arithmetic belongs to deterministic code/formulas, and historical logs from another model do not validate a new model.",
        "D": "Prompt wording cannot guarantee deterministic math, and leaving the switched model untested violates cross-model validation discipline."
      },
      "full_justification": "Option C is correct because deterministic math tooling and post-switch 'Done when' verification are mandatory across both platforms. Option A, Option B, and Option D omit one or both safeguards.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 20,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Tour of the Apps",
      "sourceFile": "tour of the apps.md",
      "concept": "Empirical Head-to-Head Evaluation Protocol Across Platforms",
      "question": "A VP of Operations asks whether Claude 2.0 or ChatGPT 2.0 produces fewer spreadsheet formula errors and completes multi-step browser procurement tasks more reliably, noting that neither vendor's documentation publishes comparative error rates. Which evaluation protocol provides a valid empirical answer?",
      "options": {
        "A": "Running identical briefs and limits on both platforms, then relying on each worker's self-reported check summary",
        "B": "Comparing vendor-published reasoning benchmark tables across Opus 5.5 and GPT-6 Astra on general suites",
        "C": "Running the same job at medium effort on Claude and maximum effort on ChatGPT, then inspecting output files",
        "D": "Running the exact same job, inputs, \"Done when\" test, and limits on both, then auditing the output files"
      },
      "correct": "D",
      "explanation": "Option D succeeds because neither vendor's documentation shows which app makes fewer spreadsheet errors or finishes more web tasks; the only fair comparison is running the exact same job, same inputs, same 'Done when' sentence, and same limits repeatedly on both platforms, and checking the results against the files each run left behind\u2014never trusting the worker's own account of its work.",
      "source_reference": {
        "chapter": "F00T: Tour of the Apps",
        "sub_section": "Side by side (What the comparison cannot tell you)",
        "source_file": "tour of the apps.md",
        "core_concept": "Run the same job, same inputs, same 'Done when' sentence, and same limits on both repeatedly, checking output files directly\u2014never the worker's self-report."
      },
      "why_incorrect": {
        "A": "Correctly holds briefs and limits constant, but fails by trusting the worker's own account of its work rather than inspecting the actual output files.",
        "B": "General benchmark tables cannot measure spreadsheet formula accuracy or multi-step reliability on your specific operational files.",
        "C": "Audits the output files properly, but invalidates the controlled comparison by changing effort settings across the two platforms."
      },
      "full_justification": "Option D is correct because controlled variables (identical job, inputs, 'Done when' sentence, and limits) paired with direct inspection of output files form the only valid cross-platform benchmark. Option A trusts self-reports, Option B relies on external general benchmarks, and Option C breaks experimental control.",
      "category": "Claude 2.0 Features & Tooling"
    }
  ]
};
