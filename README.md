# PCAO-F V2 & CCAO-F Certification Exam Portal (203-Scenario Master Bank)

An uncompromising, zero-guess assessment simulation platform prepared for the **Panaversity Certified Associate Foundations (PCAO-F V2, Part II)** and Anthropic's **Claude Certified Associate Foundations (CCAO-F)** examinations.

---

## 🚀 Key Highlights & Standards

* **Total Scenarios:** Exactly 203 high-friction, zero-guess operational MCQs covering the official *Claude and ChatGPT 2.0* curriculum.
* **Strict Anti-Guessing Symmetry:** Calibrated option length parity ($\pm 1\text{–}2$ words) with parallel syntactic rhythm to eliminate heuristic tells.
* **Zero Strawman Distractors:** Every wrong option represents an authentic technical misapplication, swapped architecture mechanism (e.g. ephemeral microVM vs persistent VM sandbox), or adjacent policy confusion.
* **Surgical Justifications:** Every item features a complete mechanism-of-success breakdown and surgical dissection of all three distractors.
* **Auditable Citations:** Every question links directly to its source document, exhibit, and subsection in *Claude & ChatGPT 2.0*.

---

## 📚 Curriculum & Domain Blueprint (203 Questions)

| Domain | Scope & Core Topics | Questions | Modules |
| :--- | :--- | :---: | :--- |
| **Domain 1: Claude 2.0 Features & Tooling** | Firecracker microVMs (PID 1), 4-layer pipeline, 4-part briefs (*Outcome, Context, Format, Constraints*), 7 artifact types, `/goal`, `/btw`, Code tab mods, ChatGPT Work & Codex. | **107 Qs** | `00` Overview, `01` The New Way of Working, `02` Tour of the Apps, `03` Behind the Screens, `04` The Architecture, `05` Build Something |
| **Domain 2: The Four Operational Case Studies** | Nisha's operational cases: dual-run cross-audits, self-grading biases, client sanitization, multi-user Slack governance, and month-end cash covenant reconciliation. | **64 Qs** | `06` Case 1 (Nisha's Team), `07` Case 2 (First Client), `08` Case 3 (Nisha's Firm), `09` Case 4 (Month-End) |
| **Domain 3: The Five Horizons** | Horizon 0 to Horizon 5 evolutionary architecture, persistent role ownership, multi-worker swarms, and autonomous coordination mechanisms. | **10 Qs** | `10` The Five Horizons |
| **Domain 4: Preface: The Text Box That Became a Worker** | The text box paradigm shift, Ladder of Interaction, Digital FTEs, and human accountability. | **10 Qs** | `11` Preface |
| **Domain 5: From Skills to Income** | The 4 economic monetization pathways (Job, FDE, Client Retainers, Product Founder), Storefront vs. Cash Register MCP architecture, and commercial SLAs. | **12 Qs** | `12` From Skills to Income |
| **Total** | **Official 5-Domain Certification Bank** | **203 Qs** | **13 Modules** |

---

## 🛠 Project Structure

```
MCQS 2.0/
├── index.html                      # Landing page & domain overview
├── quiz.html                       # 203-Scenario Exam Workbench
├── app.js                          # Core simulation engine & state manager
├── questions.js                    # Compiled 203-question master dataset
├── styles.css                      # Editorial UI styling (Light/Dark themes)
├── chatgpt and claude 2.0 mcqs/    # 13 Clean Section JavaScript Files
│   ├── 00_claude_and_chatgpt_2_overview.js (10 Qs)
│   ├── 01_the_new_way_of_working.js        (15 Qs)
│   ├── 02_tour_of_the_apps.js              (20 Qs)
│   ├── 03_behind_the_screens.js            (16 Qs)
│   ├── 04_the_architecture.js              (30 Qs)
│   ├── 05_build_something.js               (16 Qs)
│   ├── 06_case1_nishas_ai_team.js          (16 Qs)
│   ├── 07_case2_nishas_first_client.js     (16 Qs)
│   ├── 08_case3_nishas_firm.js             (16 Qs)
│   ├── 09_case4_nishas_month_end.js        (16 Qs)
│   ├── 10_the_five_horizons.js             (10 Qs)
│   ├── 11_preface.js                       (10 Qs)
│   └── 12_from_skills_to_income.js         (12 Qs)
├── Claude and Chatgpt 2.0/         # Official curriculum source documentation
├── vercel.json                     # Vercel deployment configuration
└── .gitignore                      # Git exclusion rules
```

---

## 💻 Local Testing & Usage

You can test the site locally using any simple web server:

### Python:
```bash
python -m http.server 8000
```
Open `http://localhost:8000/` in your browser.

### Node / npx:
```bash
npx serve .
```

---

## ☁️ Deployment

### GitHub:
```bash
git init
git add .
git commit -m "feat: complete 203-question zero-guess certification portal"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Vercel:
The project is pre-configured with `vercel.json` for one-click deployment:
* **Option 1:** Connect your GitHub repository to Vercel. Deploy with default settings.
* **Option 2:** Using the Vercel CLI:
  ```bash
  vercel --prod
  ```

