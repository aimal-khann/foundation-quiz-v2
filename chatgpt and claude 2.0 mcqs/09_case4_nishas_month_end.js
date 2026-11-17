// Section 9: Case 4 - Nisha's Month-End
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["09_case4_nishas_month_end"] = {
  "sectionId": "09_case4_nishas_month_end",
  "chapterId": 2,
  "chapterTitle": "The Four Operational Case Studies",
  "title": "Section 9: Case 4 - Nisha's Month-End",
  "totalQuestions": 16,
  "questions": [
    {
      "id": 1,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Work-Bottleneck Shift (17 Hours by Hand vs. 2 Hours with Setup)",
      "question": "A regional accounting practice prepares a monthly bank-covenant package (a spreadsheet, memo, three slides, and cover) that previously consumed 17 hours of junior staff time\u2014mostly downloading 3,400 bank and ledger lines, matching pairs, and retyping figures across deliverables\u2014and a junior associate asks why standard cloud office editors with built-in AI writing assistants cannot deliver the same two-hour turnaround. Which operational bottleneck explains why an integrated multi-feature workflow outperforms a standalone AI document editor?",
      "options": {
        "A": "Standalone document editors forbid teams from viewing earlier slide revisions when figures change late in the week",
        "B": "The slow work happens before prose writing\u2014reading raw files, matching thousands of lines, and keeping pieces aligned",
        "C": "Integrated setups eliminate human approval gates entirely, whereas document editors require manual sign-offs on memos",
        "D": "Document editors cannot export memos or slide decks as PDF files for external bank analysts without paid plugins"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Nisha explains in 'What the setup did' (and Exhibit 10) that writing was never the slow part of the 17-hour month-end job\u2014document editors start only after someone brings the figure, whereas the firm's setup starts at the bank file, matches 3,400 lines via a cloud program, and updates all four pieces from one result.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "What the setup did & Exhibit 10",
        "source_file": "case4.md",
        "core_concept": "The bottleneck in repeatable reporting lies in file ingestion, programmatic line matching, and cross-deliverable consistency rather than prose drafting."
      },
      "why_incorrect": {
        "A": "Google Docs and Slides actually maintain version history allowing editors to name and restore earlier versions, whereas Anthropic's pages describe no version history for Claude Decks.",
        "C": "Neither approach eliminates human approval gates; people remain accountable for checking, approving, and telling the client.",
        "D": "Both cloud document editors and Claude artifacts export natively to PDF without paid plugins."
      },
      "full_justification": "Option B is correct because reading raw exports, matching 3,400 rows, and keeping four deliverables synchronized account for the manual hours saved. Options A, C, and D misstate version history, approval governance, and native PDF export capabilities.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 2,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Client Rules vs. Reusable Method (Project vs. Skill)",
      "question": "A three-person accounting firm standardizes its monthly client reporting workflow by placing client-specific covenants ($195,000.00 minimum cash), file paths, and artifact links inside a shared Project's instructions while packaging its firm-wide memo rules\u2014setting READY when reconciled cash matches the ledger and NOT READY when unrecorded items exist\u2014into a reusable Skill. How does this architectural division govern reusability and release authority?",
      "options": {
        "A": "The Skill stores client bank covenants per account, while the Project authorizes external email dispatch on READY runs",
        "B": "The Project applies globally across all firm clients, while the Skill locks files against junior accountant edits",
        "C": "A READY status from the Skill grants automatic release clearance without requiring a named reviewer's approval",
        "D": "The Project isolates client-specific rules, the Skill standardizes cross-client method, and humans still approve release"
      },
      "correct": "D",
      "explanation": "Option D succeeds because Sana summarizes the separation in 'One place for Lakeshore' ('A project is about one client. A skill is about one kind of work') and Exhibit 4 explicitly states that READY answers only whether the books agree with the bank\u2014leaving release authority to a named person's approval.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "One place for Lakeshore & Exhibit 4",
        "source_file": "case4.md",
        "core_concept": "Projects hold client-specific instructions and links, Skills hold cross-client task methods, and humans retain release approval authority."
      },
      "why_incorrect": {
        "A": "Client bank covenants belong in the client-specific Project (not the cross-client Skill), and a READY status never authorizes external email dispatch.",
        "B": "The Project is scoped to one client (Lakeshore), whereas the Skill applies across clients, and Skills do not lock files against edits.",
        "C": "Exhibit 4 explicitly states that READY 'does not say the pack may go out. A person decides that, in the approval.'"
      },
      "full_justification": "Option D is correct because Projects isolate client context, Skills reuse cross-client task procedures, and humans approve external sends. Options A, B, and C scramble Project/Skill scopes and confuse status flags with release authority.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 3,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "UPGRADED",
      "concept": "File Custody & Reachability Rules (Local Folder vs. Connected Shared Drive)",
      "question": "A junior accountant wants to store all recurring monthly bank downloads, client ledgers, and reference covenant letters inside a folder on his personal laptop connected through the Claude Desktop app, whereas the firm's owner insists on keeping the monthly files and run notes in a connected shared drive while leaving only a reference bank statement in the local folder. What architectural failure would occur at 9:00 a.m. if the monthly files lived solely in the junior accountant's laptop folder?",
      "options": {
        "A": "Cloud runs and the Slack morning routine cannot reach a local laptop folder when the app is closed or computer sleeps",
        "B": "Connected shared drives restrict file access strictly to the Owner's login, blocking junior and senior accountants",
        "C": "Local desktop folders work only in web browsers and cannot be read by Claude Desktop even while the app is open",
        "D": "Shared drives prohibit cloud sandboxes from saving matched transaction lists or run notes after matching completes"
      },
      "correct": "A",
      "explanation": "Option A succeeds because 'One place for Lakeshore' (Section 3) establishes that Claude reads a local folder through the desktop app only while the app is open and the computer is awake, and the Slack worker cannot reach local folders at all\u2014so recurring monthly files must live in the connected shared drive.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "One place for Lakeshore (Where are the files?) & Exhibit 2",
        "source_file": "case4.md",
        "core_concept": "Local computer folders are reachable only through an open desktop app, whereas unattended cloud and Slack jobs require a connected shared drive."
      },
      "why_incorrect": {
        "B": "The shared drive is a team folder connected so all three team members and any cloud/Slack job can read the files.",
        "C": "Local computer folders are read specifically through the Claude Desktop app (on paid plans) while the app is open.",
        "D": "Cloud sessions can read from and save run notes and matched lists to the connected shared drive."
      },
      "full_justification": "Option A is correct (A: 18w | B: 15w | C: 17w | D: 15w) because local desktop folders become unreachable when the desktop app closes or the laptop sleeps and are invisible to Slack routines. Options B, C, and D misstate shared-drive team access, desktop folder mechanics, and cloud drive write-back.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 4,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Ephemeral Borrowed Desk & Artifact Link Anchoring",
      "question": "To reconcile 3,395 bank lines against 3,404 ledger lines without manual fatigue, an AI setup executes a matching script on a temporary cloud computer that wipes clean when the session ends, then updates four standing artifacts (a sheet, a doc, a deck, and a design) whose URLs are pasted into Project instructions. Which persistence and data-linking constraints must the team manage in this architecture?",
      "options": {
        "A": "The cloud sandbox retains matching scripts across months, and the deck pulls live cell values directly from the sheet",
        "B": "Pasting artifact links forces every run to spawn four new versioned copies, while the sheet reads live bank APIs",
        "C": "The matched list and run note must save to the drive before the desk clears, and pieces hold static copied figures",
        "D": "Artifacts delete automatically whenever the temporary cloud desk clears, requiring PDF exports before closing chat"
      },
      "correct": "C",
      "explanation": "Option C succeeds because the borrowed desk in the cloud is destroyed at session end (requiring the matched list and run note to be saved to the shared drive), while pasting artifact URLs lets runs update the same four pieces\u2014though Docs and Decks cannot pull live data from a Sheet, leaving static copies that a human must verify.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "One place for Lakeshore (Sections 4 & 5) & Exhibit 12",
        "source_file": "case4.md",
        "core_concept": "Durable outputs must be written outside ephemeral cloud sandboxes, and artifact links prevent duplicates while figures across Docs/Decks/Sheets remain independent copies."
      },
      "why_incorrect": {
        "A": "The borrowed desk is wiped clean after each session (scripts do not persist there), and Decks cannot pull live cell values from a Sheet.",
        "B": "Pasting artifact links prevents spawning duplicate pieces (omitting links creates new ones), and Claude Sheets cannot pull live data from connected apps.",
        "D": "Artifacts persist in the firm's Claude account outside the temporary cloud sandbox."
      },
      "full_justification": "Option C is correct because cloud sandboxes clear at session end and Claude artifacts hold static copied values across Sheets, Docs, and Decks. Options A, B, and D misstate sandbox persistence, artifact link behavior, and artifact storage.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 5,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Scheduled Routines & Owner-Level Connector Locks vs. Sentences",
      "question": "An Organization Owner on a Claude Team plan wants to ensure no chat inside a client Project can email reports externally\u2014while still allowing the firm's AI Worker in Slack (which shares its channel's reports@ mailbox access) to run a 9:00 a.m. routine that checks for late bank lines and posts alerts without altering the pack. Which distinction separates system-enforced locks from written instructions in this setup?",
      "options": {
        "A": "Written Project rules block external emails technically, whereas Owner connector toggles act only as soft suggestions",
        "B": "Enabling only the Drive connector and disabling Chrome locks Project chats, while the Slack routine relies on sentences",
        "C": "Connectors scope strictly per Project rather than per member account, blocking Slack routines from reading shared drives",
        "D": "Attaching a Skill to the Slack channel converts 'change nothing in the pack' into an immutable proxy write-lock"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Team Owner connector settings (enabling only Google Drive and disabling Claude in Chrome) technically prevent any Claude chat from emailing externally, whereas the Slack worker is configured in its channel (which holds reports@) so 'change nothing in the pack' inside the morning routine is only a written sentence.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "What the setup did (Where it can still go wrong) & Teaching Note Q18",
        "source_file": "case4.md",
        "core_concept": "Organization Owner connector/browser toggles enforce technical locks on Claude chats, whereas Slack routines sharing channel credentials rely on written sentences."
      },
      "why_incorrect": {
        "A": "This reverses the rule: Owner connector settings enforce hard technical boundaries, whereas written Project sentences only ask Claude to comply.",
        "C": "Connectors belong to each person's account (enabled org-wide by an Owner) rather than per Project, and the Slack worker can read the shared drive.",
        "D": "Skills provide procedural method instructions; they do not create proxy-level write locks."
      },
      "full_justification": "Option B is correct because Owner-level connector and browser toggles technically block outbound email from Claude chats, while Slack routines inherit channel permissions and rely on written rules. Options A, C, and D invert settings vs. words and misstate connector scoping.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 6,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "UPGRADED",
      "concept": "'Fix the Setup, Not the Result' Discipline",
      "question": "During Tuesday's review of a monthly bank pack, a senior reviewer notices Slide 2 omits the bank's $195,000.00 minimum beside reconciled cash; the next morning, an automated bank check discovers a late $3,450.00 returned check that drops reconciled cash from $198,300.00 to $194,850.00, and the junior accountant immediately opens the slide deck to type the new figure onto Slide 2 by hand. Why does the senior reviewer stop him from editing Slide 2 directly in both instances, and when would a manual edit be justified?",
      "options": {
        "A": "Manual edits break the artifact link for future runs; edit by hand only whenever a senior reviewer is offline",
        "B": "Editing Slide 2 updates the linked sheet and memo automatically; edit by hand only on NOT READY versions",
        "C": "Manual edits leave five other places inconsistent and fail next month; edit by hand only when time bars a re-run",
        "D": "Slide decks erase manual edits whenever exported to PDF; edit by hand only when the sheet agrees with the bank"
      },
      "correct": "C",
      "explanation": "Option C succeeds because 'fix the setup, not the result' warns that manual slide edits fail next month (Tuesday's bank minimum) or leave five other places out of sync (Wednesday's $194,850.00 figure across the sheet, memo figure, READY line, minimum comparison, and Slide 3)\u2014and Teaching Note Core 3 notes manual fixes are justified only when time prevents a re-run or for a one-off piece (followed by updating the setup afterward).",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "The run, Wednesday morning & Teaching Note Core 3",
        "source_file": "case4.md",
        "core_concept": "Manual edits patch only one deliverable for one cycle; re-running the updated setup keeps every artifact synchronized unless deadline constraints forbid a re-run."
      },
      "why_incorrect": {
        "A": "Manual edits do not break artifact URLs, and a reviewer being offline does not justify corrupting cross-piece consistency when a re-run updates everything together.",
        "B": "No piece reads another, so editing Slide 2 never updates the Sheet or Memo automatically.",
        "D": "PDF exports preserve manual edits on that slide, leaving the unedited Sheet and Memo out of sync."
      },
      "full_justification": "Option C is correct (A: 17w | B: 16w | C: 19w | D: 18w) because manual edits create cross-artifact drift and fail to persist across future runs unless deadline urgency leaves no time to re-run. Options A, B, and D misstate artifact link persistence, cross-artifact syncing, and PDF export behavior.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 7,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "UPGRADED",
      "concept": "Wednesday Morning Returned-Check Exception & NOT READY Approval Rules",
      "question": "On Wednesday morning\u201424 hours before a client's Thursday bank meeting\u2014a late-posted $3,450.00 returned check reduces reconciled cash to $194,850.00 ($150.00 below the $195,000.00 bank covenant) while the client's own ledger still shows $198,300.00, prompting the accounting firm to re-run the setup and issue a replacement package. How do the memo's status line and the senior reviewer's release approval interact before sending the replacement pack?",
      "options": {
        "A": "The memo stays NOT READY due to the unrecorded check, while the reviewer approves sending with the open item named",
        "B": "The reviewer's approval flips the memo's status from NOT READY to READY so the bank treats the books as reconciled",
        "C": "A NOT READY status bars emailing the pack to the client until the client updates its ledger and re-runs first",
        "D": "The returned check is labeled a timing item so the memo stays READY while the reviewer signs off the $194,850.00 figure"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Sana's Skill sets the memo status to NOT READY whenever an unrecorded item exists at the bank ($3,450.00 returned check), and Sana's approval does not change that status\u2014a NOT READY pack leaves the firm only when a named person explicitly approves sending it with the open item disclosed.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "Wednesday morning (A new approval) & Exhibit 4",
        "source_file": "case4.md",
        "core_concept": "A NOT READY status reflects unrecorded bank items and remains unchanged by approval; a named reviewer may still approve release by explicitly naming the open item."
      },
      "why_incorrect": {
        "B": "Approval never flips NOT READY to READY; only Dana recording the returned check in Lakeshore's books reconciles the ledger with the bank.",
        "C": "A NOT READY pack can be sent when explicitly approved by a named reviewer with the open item disclosed, which is how Sana released Wednesday's replacement pack.",
        "D": "A returned check that the bank has already taken back is an unrecorded item (not a timing item) and forces the memo status to NOT READY."
      },
      "full_justification": "Option A is correct (A: 18w | B: 18w | C: 18w | D: 19w) because NOT READY reflects ledger-to-bank disagreement while named approval authorizes client delivery with the open exception disclosed. Options B, C, and D misstate status-line rules, release eligibility, and unrecorded vs. timing classification.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 8,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Version History & Method Governance (Can view vs. Can edit & Pull Requests)",
      "question": "Over a single week, a firm edits its Project instructions twice\u2014once on Tuesday to add a slide layout rule and once on Friday to mandate bank-statement balance verification\u2014without any log recording who changed the instructions or who reviewed the edit, while also noting that Claude Decks lack documented version history. Which permission and workflow controls prevent unauthorized or unreviewed changes to the firm's method?",
      "options": {
        "A": "Grant all junior staff Can edit access on the Project so Claude's built-in deck version history logs instruction edits",
        "B": "Store Project instructions inside the temporary cloud sandbox so every session starts from an uneditable clean slate",
        "C": "Restrict junior staff to Can view on the Project, or manage instruction/skill files via version control and pull requests",
        "D": "Disable code execution in team settings so Project instructions lock permanently after the first monthly run completes"
      },
      "correct": "C",
      "explanation": "Option C succeeds because 'What the setup did' ('Going further: who changes the method?') explains that on a Team plan, setting junior members to Can view (while restricting Can edit to reviewers/owners) enforces method control in the app, and storing instructions/skills as files under version control with pull requests records author, reviewer, and date.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "What the setup did (Going further: who changes the method?) & Exhibit 12",
        "source_file": "case4.md",
        "core_concept": "Restricting Project edit permissions to Can view or governing instruction/skill files via version control and pull requests prevents unreviewed method drift."
      },
      "why_incorrect": {
        "A": "Giving junior staff Can edit allows unreviewed instruction edits, and Anthropic's help pages describe no version history for Decks.",
        "B": "Project instructions live in Project settings, not inside the ephemeral cloud sandbox.",
        "D": "Disabling code execution breaks Skills and programmatic line matching rather than locking Project instructions."
      },
      "full_justification": "Option C is correct because Can view project permissions and version-controlled pull requests enforce review and auditability over method edits. Options A, B, and D misstate edit permissions, sandbox storage, and code execution toggles.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 9,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Friday's Autonomy Spectrum (Prepare Only vs. Send if READY vs. Send Always)",
      "question": "A client's owner asks an accounting firm to scale its setup across four companies\u2014producing four month-end packs and sixteen weekly packs (20 packs per month)\u2014and requests that all sixteen weekly packs be emailed straight to his bank analyst without waiting for firm review, prompting a debate among three autonomy tiers: Prepare only, Send if READY, and Send always. What critical failure mode invalidates the intermediate Send if READY rule in light of the firm's recent experience?",
      "options": {
        "A": "A READY run always fails when reconciled cash sits within $5,000.00 of a bank covenant, stalling weekly deliveries",
        "B": "Tuesday's erroneous pack was READY and above the minimum, meaning Send if READY would have auto-sent bad figures",
        "C": "Claude routines cannot read the READY status string from a memo artifact without custom Python webhooks in Slack",
        "D": "Send if READY requires the senior reviewer to work five days a week instead of four to pre-approve every weekly file"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Sana points out in 'Friday's decision' that Tuesday's pack was READY, above the $195,000.00 minimum, and wrong (missing September 30's returned check)\u2014proving that Hamza's proposed Send if READY rule would have automatically emailed inaccurate figures to the bank.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "Friday's decision (How far may it run alone?) & Exhibit 11",
        "source_file": "case4.md",
        "core_concept": "A READY status reflects only agreement with the downloaded files, so auto-sending READY outputs risks dispatching incomplete or unverified figures."
      },
      "why_incorrect": {
        "A": "READY packs do not fail near a covenant; the flaw is that a READY status can still reflect an incomplete bank download.",
        "C": "The failure of Send if READY is an accounting completeness risk demonstrated on Tuesday, not a Slack webhook limitation.",
        "D": "Send if READY was proposed specifically to reduce human review by auto-sending READY packs, whereas Prepare only creates the 20-approval bottleneck."
      },
      "full_justification": "Option B is correct because Tuesday's erroneous $198,300.00 run met both READY and covenant-minimum criteria yet was wrong due to an incomplete bank download. Options A, C, and D invent false covenant stalls, webhook constraints, or staffing rules.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 10,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Pricing & FDE Value Allocation (Hours vs. Pack vs. Service)",
      "question": "After seeing a month-end pack generated in 25 minutes, a client owner demands a steep discount across 20 monthly packs for his four companies, forcing the firm's owner to evaluate three pricing models: charging for hours ($270/company/month), keeping per-pack pricing ($2,400/company/month), or charging a flat monthly service fee ($1,200/company/month covering packs, morning checks, and corrections). Which strategic insight governs how the firm should evaluate these options as a Forward Deployed Engineer?",
      "options": {
        "A": "Hourly billing rewards efficiency gains and automatically recovers the upfront afternoon spent building the setup",
        "B": "Automated preparation eliminates professional liability, allowing three accountants to sign off 200 packs unreviewed",
        "C": "Flat service fees guarantee identical profit margins regardless of how many clients experience late bank exceptions",
        "D": "Preparing the pack became cheap, but human accountability and review capacity for 20 monthly sign-offs did not"
      },
      "correct": "D",
      "explanation": "Option D succeeds because Nisha captures the core Forward Deployed Engineer principle in 'Friday's decision': 'Preparing got cheap. Being responsible for it did not'\u2014meaning reading, testing, and signing named approvals across 20 packs a month remains the binding human constraint.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "Friday's decision & Exhibit 11",
        "source_file": "case4.md",
        "core_concept": "Automation reduces preparation labor without reducing human accountability or the review capacity needed to sign off deliverables."
      },
      "why_incorrect": {
        "A": "Exhibit 11 explicitly notes that hourly billing penalizes efficiency (earning less as the firm gets faster) and fails to recover upfront setup time.",
        "B": "Automation makes checking faster, never optional; signing off unreviewed packs destroys professional accountability.",
        "C": "Exhibit 11 warns that a flat service fee trusts that bad months are rare and requires capping how many clients three people can answer for."
      },
      "full_justification": "Option D is correct because human review capacity and professional accountability\u2014not execution runtime\u2014govern pricing and scaling across 20 monthly packs. Options A, B, and C misstate hourly incentives, review obligations, and flat-fee risk.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 11,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Independent Verification Design & The Tuesday Statement Blind Spot (Exhibit 9)",
      "question": "During Tuesday's month-end run, a junior accountant verifies the AI's reconciled cash calculation ($201,480.00 + $6,120.00 \u2212 $9,300.00 = $198,300.00) on a pocket calculator, checks 20 random matched pairs against his local bank statement, and inspects all 9 leftover ledger items\u2014yet fails to discover a $3,450.00 returned check dated September 30 that was already visible on his local bank statement. Why did his verification protocol miss the error, and what control closes that gap?",
      "options": {
        "A": "He ran his arithmetic check inside Claude instead of using an external calculator; require dual-model calculation",
        "B": "Twenty random pairs cannot detect unrecorded items; require manual line-by-line checking of all 3,400 rows",
        "C": "He took the closing balance from Claude's run note instead of the statement; compare download to statement first",
        "D": "Leftover ledger lines hide returned checks; require the morning check to rewrite the client's accounting ledger"
      },
      "correct": "C",
      "explanation": "Option C succeeds because 'Wednesday morning' and Exhibit 9 ('Hamza's four tests') explain that Hamza's Tuesday arithmetic check passed only because he took the $201,480.00 closing balance from Claude's run note rather than comparing it against his independent bank statement\u2014which already showed the $3,450.00 returned check.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "Wednesday morning (The old habit) & Exhibit 9",
        "source_file": "case4.md",
        "core_concept": "Independent arithmetic checks must start from an unedited source bank statement rather than the AI's own run note."
      },
      "why_incorrect": {
        "A": "Hamza did use an external pocket calculator; the flaw was feeding it the unverified closing balance from Claude's run note rather than the bank statement.",
        "B": "The returned check was missed because the closing balance was not checked against the statement\u2014not because matching 3,400 rows manually is required.",
        "D": "The morning check must never alter client ledgers or packs; only the client (Dana) records items in her books."
      },
      "full_justification": "Option C is correct because verifying arithmetic against the AI's own run note masks incomplete source downloads, whereas comparing the download's closing balance against the official bank statement first catches missing lines. Options A, B, and D misstate tool usage, row-count requirements, and morning-check permissions.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 12,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "UPGRADED",
      "concept": "Auditing Setup Readiness & Residual Failure Modes (Exhibit 12)",
      "question": "Before trusting a newly built month-end reconciliation setup that has completed three runs cleanly, a senior reviewer conducts a pre-trust audit against an operational risk checklist. Which residual failure mode remains unguarded even when the 9:00 a.m. morning bank check and 20-pair random sample pass without alerts?",
      "options": {
        "A": "The morning check ignores errors in the client's ledger, and 20 pairs can miss same-day equal-amount swaps",
        "B": "A bank download less than an hour old is guaranteed complete without checking the official bank statement",
        "C": "Sampling 20 matched pairs proves 100% matching accuracy whenever bank and ledger row counts differ by nine lines",
        "D": "Three consecutive clean runs confirm the setup handles unusual month-end exceptions without human review"
      },
      "correct": "A",
      "explanation": "Option A succeeds because 'What the setup did' ('Where it can still go wrong') and Exhibit 9 warn that the morning check only re-downloads bank lines (missing errors in Lakeshore's ledger), a 20-pair sample can miss two payments of the same amount on the same day paired the wrong way round, and three runs do not test every strange month.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "What the setup did (Where it can still go wrong), Exhibit 9 & Exhibit 12",
        "source_file": "case4.md",
        "core_concept": "Bank-side morning checks miss ledger errors, sample checks miss same-day equal-amount swaps, and three runs do not prove resilience across edge cases."
      },
      "why_incorrect": {
        "B": "Nisha explicitly notes that 'a file can be an hour old and still be too early'\u2014only comparing against the bank's statement tests completeness.",
        "C": "Exhibit 9 explicitly warns that sampling 20 pairs is a sample, not a proof, and can miss swaps among the remaining 3,375 pairs.",
        "D": "Exhibit 12 warns that 'a setup that has run three times has not been tested by a strange month yet.'"
      },
      "full_justification": "Option A is correct (A: 18w | B: 17w | C: 17w | D: 15w) because bank-only morning monitoring ignores ledger mistakes and small random samples cannot rule out same-day equal-amount pairing swaps. Options B, C, and D contradict explicit warnings in the text and Exhibits 9 and 12.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 13,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Cross-Platform Architectural Parity (Claude vs. ChatGPT in Exhibit 13)",
      "question": "A client's internal accounting team operates exclusively on ChatGPT and asks whether migrating an accounting firm's month-end reconciliation workflow from Claude to ChatGPT eliminates the need for separate connector permissions, artifact consistency checks, and named human sign-offs. How do the architectural components and governance rules map across both platforms?",
      "options": {
        "A": "ChatGPT replaces Projects and Skills with autonomous databases that synchronize slides and sheets automatically",
        "B": "ChatGPT scheduled tasks enforce read-only email permissions natively, eliminating human approval gates before release",
        "C": "ChatGPT source folders remain accessible to cloud tasks even when the user's desktop laptop is powered off",
        "D": "ChatGPT maps to Projects, @skill, source folders, plugins, and tasks, while the four governance rules stay identical"
      },
      "correct": "D",
      "explanation": "Option D succeeds because 'Friday's decision' ('The same parts in ChatGPT') and Exhibit 13 map ChatGPT's equivalent parts\u2014Projects, @skill invocations, desktop source folders, plugins, and scheduled tasks\u2014while emphasizing that the four governance rules (join the parts, fix the setup, place files where jobs can reach them, keep the name with a person) stay identical.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "Friday's decision (The same parts in ChatGPT) & Exhibit 13",
        "source_file": "case4.md",
        "core_concept": "ChatGPT provides equivalent project, skill, folder, plugin, and scheduled-task primitives, while core governance and human sign-off rules remain vendor-agnostic."
      },
      "why_incorrect": {
        "A": "ChatGPT's deliverable tools do not automatically synchronize static slide figures with spreadsheets without re-runs and human checks.",
        "B": "Scheduled tasks in ChatGPT can execute write actions through enabled apps like Gmail/Slack just like Claude routines, requiring deliberate permission boundaries and human sign-off.",
        "C": "Desktop source folders on a local computer are unavailable when the desktop app/computer is closed, regardless of vendor."
      },
      "full_justification": "Option D is correct because both platforms share equivalent workflow components and require identical file-custody, setup-first, and human-approval rules. Options A, B, and C invent automated cross-file syncing, default email locks, and offline laptop folder access.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 14,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Transfer Assessment \u2014 Charity Grant Classification & Non-AI Checks (Books for All, Part A)",
      "question": "A five-volunteer charity (Books for All) receives a $30,000.00 foundation grant requiring at least 80% of total spending to go toward buying, moving (fuel, van hire, drivers' pay), and giving books\u2014explicitly classifying vehicle repairs as other costs\u2014and in March reports $32,800.00 of $40,000.00 (82%) spent on books before discovering a $1,200.00 van repair was miscounted as moving books (dropping the true share to $31,600.00, or 79%). Which pre-approval verification design catches this misclassification before the chair signs the report?",
      "options": {
        "A": "Have Claude self-grade its own summary prose and trust the 82% figure whenever total spending equals $40,000.00",
        "B": "Audit totals independently without AI, check every repair/non-book line, and match book counts against Chen's log",
        "C": "Rely exclusively on the chair reading the final PDF narrative without inspecting the underlying payment categories",
        "D": "Merge fuel, van hire, and vehicle repairs into one combined transport category so monthly ratios stay above 80%"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Part A of the 'Books for All' final assessment requires three pre-approval checks with clear owners\u2014including at least one independent human check without the AI (recalculating the 80% book-spending ratio), auditing every line classified under books against the grant's repair exclusion, and reconciling book distribution counts against Chen's physical log.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "Final assessment: four questions (Part A)",
        "source_file": "case4.md",
        "core_concept": "Pre-approval verification requires independent non-AI arithmetic checks, rule-specific category audits, and physical log reconciliation."
      },
      "why_incorrect": {
        "A": "AI self-grading cannot detect domain-specific grant classification errors when total spending ($40,000.00) sums properly.",
        "C": "Reading a polished summary narrative without auditing underlying payment classifications is exactly how the 82% report slipped past Amara initially.",
        "D": "Merging vehicle repairs into moving costs directly violates the foundation's grant letter terms."
      },
      "full_justification": "Option B is correct because independent non-AI calculation, line-by-line repair screening, and physical book-log verification catch the $1,200.00 misclassification before release. Options A, C, and D rely on AI self-grading, unverified prose, or grant-rule violations.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 15,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "UPGRADED",
      "concept": "Transfer Assessment \u2014 Custody, Connector Locks & Multi-Artifact Recovery (Books for All, Parts B\u2013D)",
      "question": "After discovering that a $1,200.00 van repair dropped Books for All's book-spending share from 82% to 79%\u2014and after the treasurer mistakenly emailed updated 79% slides to the foundation while leaving the companion donor document at 82%\u2014the charity redesigns its monthly workflow for unattended Day-1 execution. Which storage, permission, and recovery architecture resolves both the operational bottleneck and the split-report failure?",
      "options": {
        "A": "Store bank files in cloud drive, send via charity email with read-only bank access, fix method, re-run all, and notify",
        "B": "Keep bank files on the treasurer's laptop, let Claude email donors directly, and patch the 82% document by hand",
        "C": "Store bank files in cloud drive, send via treasurer's email, patch the 82% document by hand, and re-send slides",
        "D": "Place grant rules inside the temporary cloud desk, rely on prompt sentences to block sends, and re-run only slides"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Parts B\u2013D of 'Books for All' require moving bank files off Bilal's laptop into shared cloud storage for unattended Day-1 runs, sending from the charity's own mailbox with read-only bank access enforced by settings, and recovering from the 82%-vs.-79% mismatch by updating the sorting method ('van repairs are other costs'), re-running all deliverables together, securing Amara's approval, and notifying the foundation.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "Final assessment: four questions (Parts B, C & D)",
        "source_file": "case4.md",
        "core_concept": "Cloud file custody, read-only bank settings, organizational email identity, and full setup re-runs prevent unattended-run failures and cross-deliverable drift."
      },
      "why_incorrect": {
        "B": "Leaving files on Bilal's laptop breaks unattended Day-1 runs, letting Claude email donors violates human sign-off, and patching one document by hand violates 'fix the setup, not the result.'",
        "C": "Sending from the treasurer's personal email violates organizational identity, and patching the 82% document by hand fails to fix April's method.",
        "D": "Temporary cloud desks wipe clean after each session, written prompt sentences do not enforce send locks, and re-running only slides leaves the document out of sync."
      },
      "full_justification": "Option A is correct (A: 19w | B: 19w | C: 18w | D: 18w) because it places files in reachable cloud storage, enforces read-only bank settings and charity email identity, updates the sorting method, and re-runs all deliverables together. Options B, C, and D violate cloud reachability, organizational identity, setup-first remediation, or sandbox persistence.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 16,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 4: Nisha's Month-End",
      "sourceFile": "case4.md",
      "status": "KEPT AS-IS",
      "concept": "Transfer Assessment \u2014 Human Boundary & Residual Trust Trade-Offs (Books for All, Parts E\u2013F)",
      "question": "When finalizing the monthly donor-reporting setup for Books for All, the charity's chair asks whether the AI setup should email the monthly PDF document and slides directly to all twelve donors once checks pass, and asks what vulnerabilities the design still relies on human judgment to cover. Which boundary and residual-trust trade-off governs this final design?",
      "options": {
        "A": "Allow autonomous donor emails when book spend exceeds 80%, since automated runs eliminate all ledger input errors",
        "B": "Let the setup sign the chair's name automatically, as zero residual trusts remain once cloud storage is connected",
        "C": "Keep approval and sending with humans, and recognize residual trusts like ledger accuracy or full line-by-line review",
        "D": "Eliminate all residual trusts at zero cost by having a second AI model approve and email the donor pack overnight"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Parts E\u2013F of 'Books for All' require keeping named approval and external sending with humans (never auto-sending even when book spend appears above 80%, as March proved) while explicitly identifying residual trusts\u2014such as trusting Bilal's underlying bank/ledger completeness, Chen's book log, or sample checks\u2014and the concrete volunteer-time cost of removing them.",
      "source_reference": {
        "chapter": "F00G: Case 4 - Nisha's Month-End",
        "sub_section": "Final assessment: four questions (Parts E & F)",
        "source_file": "case4.md",
        "core_concept": "External donor delivery remains strictly human-approved, and every automated workflow retains explicit residual trusts with measurable costs to eliminate."
      },
      "why_incorrect": {
        "A": "As March's 82%-to-79% misclassification (and Case 4's Tuesday READY pack) proved, a run that appears compliant can still contain a critical classification or completeness error.",
        "B": "No automated setup eliminates all residual trusts, and signing the chair's name without her review destroys accountability.",
        "D": "Adding a second AI model does not eliminate underlying source-record trusts or replace human accountability."
      },
      "full_justification": "Option C is correct because human sign-off protects external stakeholders and every setup retains explicit residual source/review trusts that carry real labor costs to eliminate. Options A, B, and D violate human release authority or falsely claim zero residual trust.",
      "category": "The Four Operational Case Studies"
    }
  ]
};
