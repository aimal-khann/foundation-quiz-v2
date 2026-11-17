// Section 8: Case 3 - Nisha's Firm
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["08_case3_nishas_firm"] = {
  "sectionId": "08_case3_nishas_firm",
  "chapterId": 2,
  "chapterTitle": "The Four Operational Case Studies",
  "title": "Section 8: Case 3 - Nisha's Firm",
  "totalQuestions": 16,
  "questions": [
    {
      "id": 1,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Personal Project Bottleneck vs. Team Worker Migration",
      "question": "A boutique accounting practice expands from one solo founder to a three-person team and needs both junior and senior staff to hand weekly client reconciliation jobs directly to their AI Worker without routing every request through the founder. Why must the firm migrate away from its existing Claude Project architecture when adopting a Slack-based team worker on a Team plan?",
      "options": {
        "A": "Projects share across Team seats automatically, but require each staff member to sign in with the founder's password",
        "B": "Projects belong to one user and are unavailable on Team plans, so moving to Slack leaves the Library and memory behind",
        "C": "Slack channels point directly to a single-user Project's Library, but cap concurrent staff prompts at one per day",
        "D": "Upgrading to a Team plan migrates Project memory into Slack threads automatically while locking connectors to the Owner"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Anthropic's documentation states that a Project belongs to one user, cannot be shared with another user, is not offered on Team or Enterprise plans yet, and cannot be pointed at by a Slack channel\u2014so moving to Slack via Claude Tag leaves the Project, its Library, and its memory behind.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "A firm of three & Exhibit 2",
        "source_file": "casse3.md",
        "core_concept": "Single-user Projects are unavailable on Team plans and cannot link to Slack channels, forcing a growing firm to leave Project Libraries and memory behind."
      },
      "why_incorrect": {
        "A": "Projects belong strictly to one user and cannot be shared across Team seats, and sharing the founder's password would falsify attribution so every action appeared as Nisha.",
        "C": "A Slack channel cannot be pointed at a Project at all, and there is no one-prompt-per-day cap on staff.",
        "D": "Project memory does not migrate automatically into Slack threads, and channel-scoped connectors in Claude Tag are shared by everyone in that channel."
      },
      "full_justification": "Option B is correct because single-user Project isolation and Team-plan unavailability force the move to Slack, forfeiting the Project Library and memory. Options A, C, and D misstate Project sharing, Slack-to-Project linking, and memory migration.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 2,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Service-Account Identity vs. Personal DMs & Member Connectors",
      "question": "A practice owner configures Claude Tag inside a private #client-work Slack channel with a dedicated reports@ service mailbox so clients can distinguish automated worker deliveries from the owner's personal emails. How does identity attribution differ across channel mentions, 1:1 direct messages, and a staff member's personal connector?",
      "options": {
        "A": "Channel tasks act under the worker's service accounts, whereas 1:1 DMs and personal connectors act under that member",
        "B": "Both channel mentions and 1:1 DMs act under the channel Owner's personal account, while personal connectors use reports@",
        "C": "Channel mentions execute under whichever staff member tagged @Claude, while 1:1 DMs execute under shared service accounts",
        "D": "Personal connectors execute anonymously without attribution, while 1:1 DMs route outbound emails through reports@"
      },
      "correct": "A",
      "explanation": "Option A succeeds because in Claude Tag channels, Claude acts with its own dedicated service accounts (such as reports@), whereas a one-to-one direct message runs with the sender's own claude.ai account and a member's personal connectors in a channel run only for that member's task after explicit permission and are recorded under their name.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "A worker with its own name & Exhibit 2",
        "source_file": "casse3.md",
        "core_concept": "Channel shared access executes under dedicated worker service accounts, whereas 1:1 DMs and member-authorized connectors attribute actions to the individual member."
      },
      "why_incorrect": {
        "B": "Channel mentions use dedicated service accounts (not the Owner's personal account), and personal connectors record actions under the individual member's name.",
        "C": "This inverts the identity model: channel shared access acts under the worker's service accounts, whereas 1:1 DMs act under the individual member's account.",
        "D": "Personal connectors are explicitly recorded under the member's name (never anonymously), and 1:1 DMs use the member's personal account."
      },
      "full_justification": "Option A is correct because channel shared tools act under service accounts while 1:1 DMs and personal connectors execute under the invoking user's identity. Options B, C, and D scramble service-account and personal-account attribution.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 3,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Channel-Scoped Shared Access & Write-Only Credential Injection",
      "question": "An administrator attaches three credentials exclusively to a private #lakeshore-work Slack channel\u2014a read-only bank export key, a single shared drive folder, and the reports@ outbound mailbox\u2014and wants to restrict junior analysts in that channel from triggering the mailbox. Which access and credential rules govern this channel configuration?",
      "options": {
        "A": "Admins can configure a per-channel responder allowlist blocking junior analysts while keeping them inside #lakeshore-work",
        "B": "Bank keys entered in channel setup remain visible to Owners in plain text, and capabilities narrow automatically by role",
        "C": "Channel access is identical for every member with no per-channel allowlist, while the proxy injects write-only keys outside",
        "D": "Credentials attached to one private channel inherit automatically across all public workspace channels unless revoked per user"
      },
      "correct": "C",
      "explanation": "Option C succeeds because in Claude Tag, access belongs to the place (channel), not the person\u2014every member of #lakeshore-work shares identical access with no per-channel responder allowlist available\u2014and saved credentials are write-only (never displayed again) and injected by the proxy outside the sandbox so neither the model nor admins can see them.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "What the channel holds & Two routines and one rule",
        "source_file": "casse3.md",
        "core_concept": "Every channel member shares identical connector access without per-channel responder allowlists, and write-only keys are proxy-injected outside the sandbox."
      },
      "why_incorrect": {
        "A": "Anthropic explicitly lists a 'Per-channel responder allowlist' among controls that do not exist.",
        "B": "Saved credentials are write-only (even the Owner cannot view them again), and worker capabilities never change based on who asked.",
        "D": "Admins scope connectors down to specific channels; credentials attached to #lakeshore-work do not leak into other workspace channels."
      },
      "full_justification": "Option C is correct because channel permissions are uniform across channel members without per-channel allowlists, and write-only credentials are injected by the proxy outside the model's sandbox. Options A, B, and D invent non-existent allowlists, plain-text key exposure, or workspace-wide leakage.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 4,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "UPGRADED",
      "concept": "Ephemeral Thread Sandboxes & UTC Routine Scheduling",
      "question": "A team's weekly reconciliation worker runs scheduled routines every Wednesday and Friday at 4:00 p.m. Karachi time to reconcile cash for a Cleveland, Ohio client facing a 9:00 a.m. local bank deadline, while storing generated outputs across Slack threads and a shared drive. Which operational failure modes must the administrator manage regarding workspace persistence and routine timing?",
      "options": {
        "A": "Idle thread sandboxes preserve generated files indefinitely, while routines run at fixed UTC times across DST shifts",
        "B": "Idle thread desks clear and delete unsaved files, while routines run at fixed UTC times and shift on DST changes",
        "C": "Files saved only inside the sandbox persist across threads, while routines shift automatically with U.S. daylight saving",
        "D": "Posting a file in the thread keeps it in the Project Library, while routines pause until an Owner confirms local offsets"
      },
      "correct": "B",
      "explanation": "Option B succeeds because each Slack thread runs on an ephemeral borrowed desk (sandbox) that clears when the thread goes quiet\u2014deleting any file that was not posted in the thread or saved to external storage like the shared drive\u2014and Claude Tag routines run at a fixed UTC time, shifting by an hour relative to Cleveland's 9:00 a.m. deadline every March and November when U.S. clocks change.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Nothing lasts at the desk & Exhibit 3 (A detail about time)",
        "source_file": "casse3.md",
        "core_concept": "Ephemeral Slack thread sandboxes clear when idle (requiring thread posts or external drive saves), and fixed-UTC routines drift by one hour across DST transitions."
      },
      "why_incorrect": {
        "A": "While routines do run at fixed UTC times, files left solely inside an idle thread's sandbox are deleted when the desk is released.",
        "C": "Files existing only inside the sandbox do not persist once the desk clears, and fixed-UTC routines do not automatically adjust for U.S. daylight saving time.",
        "D": "Claude Tag in Slack has no Project Library (files persist in the Slack thread and external shared drive), and routines execute automatically on schedule without waiting for offset confirmation."
      },
      "full_justification": "Option B is correct (A: 16w | B: 18w | C: 16w | D: 18w) because idle thread desks clear unsaved files and fixed-UTC routines drift across daylight saving changes. Option A falsely claims sandboxes persist files, Option C reverses both sandbox persistence and DST adjustment, and Option D invents a Project Library in Slack and manual offset pauses.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 5,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "UPGRADED",
      "concept": "Channel Instructions as Guidance vs. Default Member Editability",
      "question": "To prevent unapproved client reports from leaving #lakeshore-work, an Owner adds the instruction 'Send the Friday file to Lakeshore only after Nisha or Sana has approved it' in channel instructions while leaving default organization permissions unchanged. Why does this configuration fail to provide technical enforcement?",
      "options": {
        "A": "Channel instructions apply to typed requests only and are skipped when scheduled channel routines run",
        "B": "Channel instructions are non-enforced guidance rather than guardrails, and any org member in the channel can edit them",
        "C": "Channel instructions pull rules from Nisha's personal Project, allowing junior staff to override them via thread memory",
        "D": "Only the organization Owner can edit channel instructions by default, but scheduled routines ignore guidance rules"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Anthropic's documentation explicitly states that channel custom instructions are guidance\u2014not an enforced guardrail\u2014and should not be relied upon to block actions, and by default anyone in a channel who belongs to the Claude organization can edit those instructions unless an Owner disables 'Channel member edits.'",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Two routines and one rule (What the setup did not say)",
        "source_file": "casse3.md",
        "core_concept": "Channel instructions are non-enforced guidance and remain editable by any organization member in the channel by default."
      },
      "why_incorrect": {
        "A": "Channel instructions are read ahead of both typed requests and scheduled routines, but remain non-enforced guidance rather than system locks.",
        "C": "A Slack channel cannot point to or read instructions from a personal Project.",
        "D": "By default, any organization member in the channel (not just the Owner) can edit channel instructions unless restricted by the Owner."
      },
      "full_justification": "Option B is correct (A: 15w | B: 17w | C: 16w | D: 16w) because channel instructions act only as guidance and are editable by any organization member in the channel by default. Option A falsely claims routines skip instructions, Option C falsely links Slack channels to personal Projects, and Option D misstates default edit permissions.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 6,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Friday Reconciliation Method Failure vs. Behavioral Refusal",
      "question": "During a Friday reconciliation run, the bank export shows two $4,800 debits to Great Lakes Paper for invoice INV-7731 while the company ledger records only one $4,800 payment; following instructions to make reconciled cash agree with the ledger, the worker adds back the unexplained $4,800 debit to report $212,400 on line 1, then refuses a junior analyst's request to send the file using Wednesday's draft approval. Which assessment accurately separates the accounting flaw from the worker's refusal?",
      "options": {
        "A": "Adding back an unverified cleared debit inflated cash by $4,800 (true cash $207,600), and behavioral refusal is not a lock",
        "B": "Adding back the cleared debit was proper timing treatment, and a system guardrail blocked the analyst's send command",
        "C": "True reconciled cash was $215,950 from Wednesday's draft, and the worker refused because the bank key lacked write access",
        "D": "Unexplained cleared bank debits must always be added back to match the ledger, while channel rules enforce hard send locks"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Sana identified two distinct failures: (1) a method failure, where Nisha's four-sentence instruction told the worker to add back unexplained differences so cash matched the ledger\u2014inflating reconciled cash by $4,800 from its true $207,600 balance to $212,400; and (2) an authority failure, where the worker's refusal was model behavior rather than a technical lock.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "The Friday send & Sana's skill",
        "source_file": "casse3.md",
        "core_concept": "Cleared bank payments without ledger lines are open items ($207,600 true cash), and model refusal is non-enforced behavior rather than a lock."
      },
      "why_incorrect": {
        "B": "A payment that has already cleared the bank with no ledger line is an open item\u2014never a timing item\u2014and no system guardrail stopped the send.",
        "C": "$215,950 was Tuesday's draft balance (before Wednesday/Thursday lines), and the read-only bank key had no bearing on outbound email sending.",
        "D": "Cleared bank payments without ledger lines are never added back without documentation, and channel rules are guidance rather than hard locks."
      },
      "full_justification": "Option A is correct because adding back an unverified cleared debit overstated reconciled cash by $4,800 and behavioral refusal is not technical containment. Options B, C, and D misstate accounting treatment, Tuesday vs. Thursday balances, and rule enforcement.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 7,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Post-Incident Forensic Audit Across Three Records (Exhibit 6)",
      "question": "On Monday morning after a Friday client deadline was missed because the worker refused to send an unapproved file, the firm's Owner inspects the reports@ sent folder, the #lakeshore-work Slack thread, and the Claude Tag admin pages to audit what happened. What forensic evidence is available across these three records, and what critical blind spot remains?",
      "options": {
        "A": "Admin pages log every per-action requester by user ID, while the Slack thread hides refused requests from channel members",
        "B": "The mailbox log records which Slack member triggered each refusal, while admin pages prove a setting blocked the email",
        "C": "The mailbox shows nothing sent and the thread shows who asked, but no per-action requester log or send-blocking lock exists",
        "D": "All three records confirm that an automated proxy guardrail intercepted the outbound email after the worker tried to send"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Exhibit 6 demonstrates that the reports@ mailbox log shows nothing was sent (but not who asked), the Slack thread records every message (showing Hamza asked twice and the worker refused twice), and the Claude Tag admin pages show routine ownership/channel bindings\u2014but Anthropic documents that there is no per-action log of every task and who asked, and no technical setting stood between Hamza's request and a send.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "What held the file back & Exhibit 6",
        "source_file": "casse3.md",
        "core_concept": "Claude Tag lacks a per-action requester log, and nothing in the setup technically prevented the file from leaving if the worker had agreed."
      },
      "why_incorrect": {
        "A": "Claude Tag explicitly lacks a per-action log showing who asked for each task, and all channel members can read messages in the private channel thread.",
        "B": "The mailbox log records only outbound/inbound mail activity (not Slack requester identities or refusals), and no setting blocked the email.",
        "D": "No proxy guardrail blocked the send; only the model's behavioral reading of the channel rule stopped the file from leaving."
      },
      "full_justification": "Option C is correct because the three records show non-delivery and channel dialogue while confirming the absence of both a per-action requester log and an enforced send lock. Options A, B, and D invent non-existent audit logs or proxy blocks.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 8,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Agent Skill Architecture & Method-vs.-Lock Boundary (Exhibit 9)",
      "question": "Following a reconciliation error where an unexplained bank debit was added back to force ledger agreement, a senior audit reviewer packages her method into an open-standard weekly-cash-reconciliation folder containing SKILL.md and references/labels.md, which the Owner installs for the channel. How does this skill load and operate, and what boundary can it never cross?",
      "options": {
        "A": "The worker loads the full SKILL.md permanently into every active thread and uses it to block unauthorized email connectors",
        "B": "The worker keeps only name and description in mind until a task matches, reaches new threads only, and cannot lock sends",
        "C": "Installing an org-wide skill retroactively rewrites existing open threads and converts channel rules into enforced locks",
        "D": "Skills require proprietary vendor formats incompatible with ChatGPT and automatically revoke junior staff mailbox access"
      },
      "correct": "B",
      "explanation": "Option B succeeds because under the open Agent Skills specification, a worker keeps only each skill's name and description in mind at startup, loading the full SKILL.md (and references/labels.md if needed) only when a task matches the description\u2014applying to new threads only and fixing calculation method and NOT READY status without acting as an outbound lock.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Sana's skill & Exhibit 9",
        "source_file": "casse3.md",
        "core_concept": "Agent skills load progressively on task match, apply to new threads only, and govern task method rather than enforcing access locks."
      },
      "why_incorrect": {
        "A": "Skills use progressive disclosure (only name/description are kept in mind initially) and cannot technically block access to an attached email connector.",
        "C": "Newly added skills reach new threads only (never retroactively rewriting open threads), and skills remain instructions rather than enforced system locks.",
        "D": "SKILL.md is an open standard supported by ChatGPT and Codex as well as Claude, and installing a skill does not alter channel connector permissions."
      },
      "full_justification": "Option B is correct because Agent Skills rely on progressive metadata matching, take effect in new threads only, and shape method rather than enforcing permissions. Options A, C, and D misstate skill loading, thread retroactivity, and cross-platform portability.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 9,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "UPGRADED",
      "concept": "Evaluating Monday's Three Release Architectures (Exhibit 8)",
      "question": "Facing a client's demand to know who can release Friday files when the Owner is traveling\u2014and preparing to onboard a fourth client paying $1,500/month\u2014the Owner evaluates three release architectures: (1) writing a stricter channel rule, (2) moving the reports@ mailbox to a private #lakeshore-release channel restricted to Nisha and Sana, or (3) commissioning a $6,000 external approval web page with single-use expiring records. Which operational trade-off distinguishes Option 2 from Options 1 and 3?",
      "options": {
        "A": "Option 2 enforces send access via channel settings at zero software cost, but requires an approver reachable Friday",
        "B": "Option 2 lets junior staff trigger sends from #lakeshore-work via cross-channel posts while costing $60/month to run",
        "C": "Option 2 enforces sends via an expiring SHA-256 approval record while letting Sana approve automatically without Friday coverage",
        "D": "Option 2 relies on non-enforced channel guidance like Option 1, whereas Option 3 deploys in half a day for $0"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Option 2 (moving reports@ from #lakeshore-work to a private #lakeshore-release channel containing only Nisha and Sana) enforces send access via a platform setting at $0 software cost (roughly half a day setup) because Claude never posts into a private channel from outside it\u2014while requiring at least one of the two approvers to be awake and reachable before 6:00 p.m. Friday.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Monday's decision & Exhibit 8",
        "source_file": "casse3.md",
        "core_concept": "A private release channel enforces send boundaries through connector-scope settings at zero build cost, but still requires Friday approver availability."
      },
      "why_incorrect": {
        "B": "Nothing asked in #lakeshore-work can make Claude post into a private #lakeshore-release channel, and the $60/month operating fee belongs to Option 3.",
        "C": "Expiring SHA-256 approval records belong to Option 3, and Option 2 still requires either Nisha or Sana to be reachable on Friday.",
        "D": "Option 2 is enforced by a connector-scope setting (unlike Option 1's words), whereas Option 3 requires ~$6,000 and ~3 weeks to build."
      },
      "full_justification": "Option A is correct (A: 16w | B: 16w | C: 17w | D: 16w) because Option 2 uses private-channel connector scoping at $0 build cost while requiring Friday approver availability. Option B falsely claims cross-channel posting works and misassigns Option 3's monthly cost, Option C blends Option 3's cryptographic record into Option 2, and Option D swaps Options 1, 2, and 3's enforcement and build costs.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 10,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Residual Human Trust & File-Specific Approval Messages",
      "question": "After comparing a better written rule, a private release channel, and a cryptographic approval system, a firm Owner realizes that no technical architecture completely removes human trust\u2014each merely narrows who is trusted and improves the record\u2014and drafts a new approval standard for weekly files. What must a valid approval message specify so it cannot carry over to a different file, and what residual trust remains across all three options?",
      "options": {
        "A": "Naming only 'this week's file' prevents carry-over, and Option 3 removes all trust that the approver actually read the file",
        "B": "Approving Wednesday's draft covers Friday automatically if cash agrees, and Option 2 removes trust in the two approvers",
        "C": "Saying 'Approved' in a 1:1 DM binds to all future runs, and Option 1 restricts trust exclusively to the Owner's account",
        "D": "Naming the exact file, coverage date, and figure prevents carry-over, while every option still trusts approvers to inspect it"
      },
      "correct": "D",
      "explanation": "Option D succeeds because an approval covers one exact deliverable\u2014so a valid approval message must explicitly name the specific file, coverage date, and reconciled cash figure (plus any open exceptions) to prevent carry-over\u2014and across all three release options, every design still trusts the designated approver(s) to genuinely inspect the file before approving.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Monday's decision (What each option still trusted) & Exhibit 8",
        "source_file": "casse3.md",
        "core_concept": "Valid approvals must name the exact file, date, and figure to prevent carry-over, and all architectures still rely on approvers reading what they approve."
      },
      "why_incorrect": {
        "A": "Vague phrases like 'this week's file' allow approval carry-over across versions, and even Option 3 still trusts that the approver reads what the approval page displays.",
        "B": "Wednesday's draft approval never covers Friday's updated file, and Option 2 explicitly trusts the two approvers in #lakeshore-release to inspect files before typing.",
        "C": "Generic one-word approvals in DMs do not authorize channel sends or bind to future files, and Option 1 leaves trust exposed across everyone in the work channel."
      },
      "full_justification": "Option D is correct because file-specific metadata prevents approval drift and every governance tier still trusts human approvers to read before signing off. Options A, B, and C each allow vague approvals or falsely claim human review trust is eliminated.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 11,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "UPGRADED",
      "concept": "Claude Tag vs. OpenAI Workspace Agents Governance Gaps (Exhibit 2)",
      "question": "An enterprise architect evaluates migrating a three-person accounting team's Slack worker from Anthropic's Claude Tag to OpenAI's Workspace Agents after learning that OpenAI's write-capable actions require human approval by default. Why does switching platforms fail to solve the firm's core authorization gap in a shared Slack channel?",
      "options": {
        "A": "OpenAI Workspace Agents disable Slack human approvals by default and omit run traces from Compliance API logs",
        "B": "Workspace Agents bind every Slack channel message to each individual user's private OAuth token without shared tools",
        "C": "Both platforms use shared connections in Slack, and neither defines who may approve a send in a shared channel",
        "D": "OpenAI's parameter constraints lock channel responder allowlists per user, preventing senior reviewers from approving sends"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Exhibit 2 shows that OpenAI's Workspace Agents default to requiring human approval before write-capable actions (whereas Claude Tag relies on non-enforced guidance), yet both platforms rely on shared connections in Slack and neither vendor's documentation defines who may grant that approval in a shared channel.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Monday's decision & Exhibit 2 (The same questions in both products)",
        "source_file": "casse3.md",
        "core_concept": "Both Claude Tag and OpenAI Workspace Agents use shared Slack connections without defining which channel member may approve a write or send action."
      },
      "why_incorrect": {
        "A": "OpenAI's security overview states that write-capable actions default to requiring human approval and that the Compliance API exposes audit logs and run traces.",
        "B": "In Slack, OpenAI Workspace Agents generally rely on shared/builder-configured app connections because Slack cannot pause runs to authenticate each invoking user.",
        "D": "OpenAI's workspace parameter constraints limit accepted action parameters rather than defining per-user channel approver allowlists in Slack."
      },
      "full_justification": "Option C is correct (A: 16w | B: 16w | C: 17w | D: 15w) because switching to OpenAI Workspace Agents leaves shared Slack credentials and shared-channel approver identity unresolved. Option A inverts OpenAI's approval and Compliance API defaults, Option B falsely claims Slack authenticates per user, and Option D mischaracterizes workspace parameter constraints.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 12,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Slack Connect External Exposure & Self-Hosted Runner Boundaries",
      "question": "An accounting practice receives two requests from prospective clients: (1) joining the firm's shared Slack channel via Slack Connect to ask the worker questions directly, and (2) running the worker on a self-hosted runner so client ledger files never leave the client's network. Which security and architectural constraints govern these two requests?",
      "options": {
        "A": "Slack Connect exposes channel-attached credentials to external guests, and self-hosted runners still send prompts to Anthropic",
        "B": "Slack Connect isolates external guests from channel connectors, and self-hosted runners keep all prompts air-gapped locally",
        "C": "Self-hosted runners allow admin-added connectors to run inside client networks, while Slack Connect blocks external mentions",
        "D": "External Slack Connect guests act only under their own company's billing, while self-hosted runners eliminate API traffic"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Anthropic's documentation warns that in a Slack Connect channel, once Claude is enabled there, it holds the connector credentials attached to that channel and can use them for anyone it answers\u2014including external guests\u2014while in self-hosted environments, files and secrets stay on local machines but conversation transcripts and tool results still go to Anthropic (and admin-added connectors are disabled).",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Questions for discussion (Optional questions 11 & 14)",
        "source_file": "casse3.md",
        "core_concept": "Slack Connect exposes channel credentials to external company users, and self-hosted runners still transmit conversation/tool results to Anthropic without admin connectors."
      },
      "why_incorrect": {
        "B": "Slack Connect exposes channel-attached connectors to external guests, and self-hosted environments still transmit conversation content and tool results to Anthropic.",
        "C": "In self-hosted sessions, Claude cannot use admin-added connectors, and Slack Connect allows external members in the channel to invoke Claude.",
        "D": "Self-hosted runners still send prompts and tool results to Anthropic's API, and external guests can invoke channel-attached credentials."
      },
      "full_justification": "Option A is correct because Slack Connect shares channel-attached connector capabilities with external guests and self-hosted runners still send conversation payloads to Anthropic. Options B, C, and D misstate Slack Connect isolation, admin connector support in self-hosted runs, and API traffic.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 13,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Containment vs. Authority & The Four Business-Layer Pillars",
      "question": "During a post-incident architecture review, a compliance director maps an accounting firm's Slack worker against the four business-layer pillars (identity, lasting record, enforced approvals, monitoring) and distinguishes containment controls from authority controls. Which diagnostic assessment accurately reflects the firm's posture before Monday's redesign?",
      "options": {
        "A": "The read-only bank key enforced authority, while all four business-layer pillars were fully active in Slack",
        "B": "Outbound email access provided containment, while cryptographic approval records captured every Friday sign-off",
        "C": "Both the bank key and mailbox were containment locks, leaving monitoring as the only missing business pillar",
        "D": "The read-only bank key provided containment, while enforced approvals and decision records were missing pillars"
      },
      "correct": "D",
      "explanation": "Option D succeeds because in Series Questions 12 and 13, the read-only, write-only bank export key provided containment (limiting what the worker could reach or alter), whereas outbound email dispatch needed authority\u2014and across the four business-layer pillars, the firm had worker identity (reports@) and partial monitoring, but lacked enforced approvals and a lasting record tying an approval to a specific file.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Questions for discussion (Series questions 12 & 13) & Teaching Note",
        "source_file": "casse3.md",
        "core_concept": "Read-only/write-only credentials enforce containment, whereas outbound sending requires authority, enforced approvals, and lasting decision records."
      },
      "why_incorrect": {
        "A": "A read-only key is a containment control (not authority), and enforced approvals plus decision records were missing.",
        "B": "Open outbound email access provided no containment, and no cryptographic approval records existed prior to Monday's options.",
        "C": "The reports@ mailbox had no containment or authority limits in #lakeshore-work, and enforced approvals/decision records were the critical missing pillars."
      },
      "full_justification": "Option D is correct because the restricted bank key enforced containment while enforced approvals and durable decision records remained absent. Options A, B, and C confuse containment with authority and misidentify missing governance pillars.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 14,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "UPGRADED",
      "concept": "Cryptographic Approval Records & Separation of Duties (Exhibit 8 & 10)",
      "question": "To prevent unauthorized or altered client reports from leaving the firm while the Owner travels, an engineer proposes removing the reports@ mailbox from the AI Worker so the worker can only propose a send, paired with a small approval web page that logs Sana's sign-in, file name, SHA-256 hash, recipient, and expiration window. What turns that saved record from post-hoc evidence into an active control?",
      "options": {
        "A": "Posting the SHA-256 hash inside the Slack channel's custom instructions so the worker verifies it before emailing",
        "B": "Having the sending service verify identity, file hash, recipient, expiry, and unused status before dispatching",
        "C": "Logging the approval record in a shared drive sheet while letting the worker retain direct reports@ send access",
        "D": "Allowing any channel member to reuse a valid approval record across consecutive Friday runs until it expires"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Exhibit 8 ('A record is not yet a control') explains that a saved approval record is merely post-hoc evidence unless the sending system itself checks it before dispatching\u2014refusing whenever the named approver, SHA-256 file hash, recipient, or expiration window does not match, or when the single-use record has already been used.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Monday's decision & Exhibit 8 (A record is not yet a control)",
        "source_file": "casse3.md",
        "core_concept": "An approval record becomes an active control only when the sending system blocks dispatch unless approver, SHA-256 hash, recipient, expiry, and single-use status match."
      },
      "why_incorrect": {
        "A": "Placing hash checks inside channel instructions relies on non-enforced model guidance rather than a hard system gate.",
        "C": "If the worker retains direct reports@ access without a pre-send system gate, the log only records what went wrong after dispatch.",
        "D": "Approval records in Option 3 are strictly single-use ('one approval, one send') and bound to one specific file hash so they cannot carry over."
      },
      "full_justification": "Option B is correct (A: 16w | B: 14w | C: 17w | D: 16w) because programmatic pre-send verification across identity, file hash, recipient, expiry, and single-use consumption turns passive evidence into an enforced gate. Option A relies on non-enforced instructions, Option C leaves direct send access open, and Option D allows multi-week replay.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 15,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "KEPT AS-IS",
      "concept": "Transfer Assessment \u2014 Workspace-Wide Credential Leakage & Vague Approvals (Riverbend League Parts A\u2013B)",
      "question": "A volunteer coordinator sets up an AI Worker for Riverbend Youth Soccer League (412 families, 14 coaches, 3 board members) by attaching the league@ mailbox, the registration sheet, and the payment account across every channel of the workspace, with a written instruction: 'Email families only when Carla has okayed it.' On a rainy Saturday after Carla texts Priya to cancel 9 a.m. games on flooded Field 3, Coach Ben asks @Claude in #coaches to email parents that games are canceled; Claude asks Carla to confirm, Carla replies 'Yes, go ahead' in #coaches, and Claude emails all 412 families canceling all games before another coach asks @Claude to refund a family. What caused both the erroneous mass email and the active refund exposure?",
      "options": {
        "A": "Workspace-wide credentials let any coach trigger tools, and Carla's three-word reply omitted field, time, and scope",
        "B": "Carla's reply came from a private direct message, while #coaches lacked read access to the registration sheet",
        "C": "Coach Ben edited the channel instructions to delete Carla's rule, while the payment account was read-only",
        "D": "The worker ignored Carla's message in #coaches and acted solely on Ben's initial prompt without confirmation"
      },
      "correct": "A",
      "explanation": "Option A succeeds because in the Riverbend Youth Soccer League assessment (Parts A\u2013B), attaching all three credentials workspace-wide gave every coach in #coaches access to league@, the registration sheet, and the payment account\u2014and Carla's vague reply ('Yes, go ahead') failed to specify which field (Field 3), which game time (9 a.m.), and which recipients.",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Final assessment: find the gap (Parts A & B)",
        "source_file": "casse3.md",
        "core_concept": "Workspace-wide credential attachment exposes write/send tools to every channel member, and vague approvals authorize unintended scope."
      },
      "why_incorrect": {
        "B": "Carla replied directly inside #coaches (not a DM), and #coaches had full workspace-wide access to all three credentials.",
        "C": "Ben did not edit the instructions (Claude read and followed the rule by asking Carla), and the payment account had full refund capability.",
        "D": "Claude refused Ben's initial prompt and waited for Carla's confirmation, acting only after Carla wrote 'Yes, go ahead' in #coaches."
      },
      "full_justification": "Option A is correct because workspace-wide credential scoping exposed send and refund tools in #coaches while Carla's three-word approval omitted field, time, and recipient scope. Options B, C, and D misstate the incident sequence and channel permissions.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 16,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 3: Nisha's Firm",
      "sourceFile": "casse3.md",
      "status": "UPGRADED",
      "concept": "Transfer Assessment \u2014 Volunteer League Channel Redesign & Skill Selection (Riverbend League Parts C\u2013E)",
      "question": "Following the Saturday mass-cancellation error at Riverbend Youth Soccer League (which operates with zero software budget and rotating seasonal volunteers), the board must redesign its Slack workspace so coaches can check today's schedule without triggering mass emails or refunds, and ensure future cancellation notices specify the field, game time, and teams rather than saying 'all games.' Which zero-budget architecture solves both requirements?",
      "options": {
        "A": "Keep all credentials in #coaches, tighten the written cancellation rule, and rely on coaches to self-police refunds",
        "B": "Purchase a $6,000 custom approval portal and grant coaches write access to the registration sheet for schedule edits",
        "C": "Restrict mailbox and payment credentials to private board channels, and install a cancellation formatting skill",
        "D": "Keep league@ in #coaches with a stricter SKILL.md approval rule while moving the payment account to #board"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Riverbend has zero budget and rotating seasonal volunteers, making Option 2 (channel credential scoping) the right fit: move league@ and the payment account out of public channels into #board (or separate director/treasurer channels) while leaving only read-only schedule access in #coaches, paired with an agent skill to standardize cancellation email formatting (naming field, time, and teams).",
      "source_reference": {
        "chapter": "F00E: Case 3 - Nisha's Firm",
        "sub_section": "Final assessment: find the gap (Parts C, D & E)",
        "source_file": "casse3.md",
        "core_concept": "Channel credential isolation enforces zero-budget separation of duties, while an agent skill standardizes output format without acting as a send lock."
      },
      "why_incorrect": {
        "A": "Leaving credentials in #coaches and tightening written rules relies on non-enforced words rather than technical channel locks.",
        "B": "The league explicitly has zero budget (ruling out a $6,000 custom portal), and coaches should not hold write access to family registration records.",
        "D": "Leaving league@ in #coaches still lets any coach trigger mass emails because a SKILL.md file is a method instruction, not an enforced send lock."
      },
      "full_justification": "Option C is correct (A: 16w | B: 17w | C: 15w | D: 16w) because private-channel credential scoping blocks coaches from sending mass emails or issuing refunds at zero cost, while an agent skill enforces structured cancellation notices. Options A and D leave outbound mail exposed in #coaches, and Option B violates the league's zero-budget constraint.",
      "category": "The Four Operational Case Studies"
    }
  ]
};
