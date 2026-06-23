// 14-Day Study Roadmap — IBAM Fundamentals of Insurance (Manitoba)
// Sources verified (June 2026):
//   • Insurance Act of Manitoba — Statutory Conditions (Wawanesa SH3 05 2017 form, mirrors C.C.S.M. c.I40 Part V)
//   • Manitoba Public Insurance — 2026 Guide to Autopac, effective April 1 2026
//   • Insurance Council of Manitoba (ICM) — Licensing structure, 3-level General Insurance system
//   • IBAS / IBAM Fundamentals of Insurance Practice Exam (90-question pool used by IBAM)
//   • Manitoba Public Insurance Corporation Act, C.C.S.M. c.P215

export const curriculum = [
  {
    day: 1,
    title: 'Risk & The Role of Insurance',
    category: 'Foundations',
    estMinutes: 90,
    objective:
      'Define risk, hazard, and peril; understand why insurance only addresses pure risk and how the spread of risk works.',
    summary: [
      'The MAIN PURPOSE of insurance is to allow the SPREAD OF RISK across a large pool of similar exposures (it is NOT to provide loans, employment, or loss prevention — those are byproducts).',
      'Risk = the chance of FINANCIAL LOSS. Two types: PURE risk (loss or no loss — insurable) and SPECULATIVE risk (loss, no loss, or gain — never insurable).',
      'Risk-handling methods: Avoidance, Retention, Loss Control, TRANSFER. For most people, TRANSFER through insurance is the best option.',
      'PERIL = the cause of loss (fire, theft, hail). HAZARD = a condition that increases the chance or severity of loss.',
      'Three hazard categories: PHYSICAL (faulty wiring), MORAL (intentional dishonesty — arson), MORALE (carelessness because insurance exists).'
    ],
    secrets: [
      'When the exam asks the "main purpose" of insurance, the answer is the SPREAD OF RISK — not loss reduction.',
      'Underwriters check claims history and credit to detect MORAL HAZARD (not physical hazard).',
      'Law of Large Numbers makes losses predictable in large groups — it is the math behind premium pricing.',
      'Speculative risk (gambling, stock market) is NEVER insurable in Canada.'
    ],
    flashcards: [
      { term: 'Pure Risk', definition: 'A risk with only two outcomes — financial loss or no loss. The only type of risk that is insurable.' },
      { term: 'Speculative Risk', definition: 'A risk with three outcomes — loss, no loss, OR gain. Not insurable (e.g., investments, gambling).' },
      { term: 'Peril', definition: 'The CAUSE of a loss (fire, theft, wind, collision).' },
      { term: 'Hazard', definition: 'A condition that INCREASES the chance or severity of a loss.' },
      { term: 'Physical Hazard', definition: 'A tangible condition increasing loss likelihood (icy stairs, faulty wiring).' },
      { term: 'Moral Hazard', definition: 'Dishonesty by the insured (arson, inflated claims). Underwriters screen for this through claims/credit history.' },
      { term: 'Morale Hazard', definition: 'Carelessness or indifference because insurance exists (leaving keys in car).' },
      { term: 'Law of Large Numbers', definition: 'The larger the pool of similar exposures, the more predictable actual losses become.' },
      { term: 'Spread of Risk', definition: 'The MAIN purpose of insurance — many premiums cover the few who suffer loss.' }
    ]
  },

  {
    day: 2,
    title: 'The Insurance Contract — Legal Elements',
    category: 'Contract Law',
    estMinutes: 120,
    objective:
      'Identify the legal elements required for any valid contract and the characteristics unique to insurance contracts.',
    summary: [
      'Five elements of a VALID CONTRACT: (1) Offer & Acceptance, (2) Consideration, (3) Legal Capacity, (4) Legal Object (Purpose), (5) Genuine Intention.',
      'Only the INSURANCE contract requires a sixth element: INDEMNITY (or a payment limited to actual loss).',
      'CONSIDERATION = exchange of something of value (premium for promise to pay).',
      'LEGAL CAPACITY — corporations always have it; minors and intoxicated persons may lack it.',
      'BINDER = temporary contract created when a broker commits an insurer to a risk (oral or written, valid until policy issues).',
      'ENDORSEMENT (or rider) = a written amendment to an existing policy after both insurer and insured agree to change terms.',
      'Coverage commences at 12:01 a.m. STANDARD time at the address of the NAMED INSURED.',
      'Insurance contracts are: ALEATORY (unequal exchange), ADHESIVE (drafted by insurer, ambiguities favour insured), UNILATERAL (only insurer promises), CONDITIONAL, UTMOST GOOD FAITH.'
    ],
    secrets: [
      'A "binder" exists the moment a broker commits an insurer to a risk — even before any paperwork is exchanged. Brokers must be careful.',
      'When the exam asks the element ONLY in an insurance contract, the answer is INDEMNITY.',
      'Coverage starts at 12:01 a.m. at the NAMED INSURED\'s address — NOT the address of the risk or the insurer.',
      'Brokers have a fiduciary duty to REGULARLY REMIT collected premiums to insurers (Insurance Act of Manitoba).'
    ],
    flashcards: [
      { term: 'Consideration', definition: 'Exchange of something of value between the parties — premium for the insurer\'s promise to pay.' },
      { term: 'Indemnity (as contract element)', definition: 'Element UNIQUE to insurance contracts — payment limited to actual loss, no more, no less.' },
      { term: 'Binder', definition: 'A temporary contract created when a broker commits an insurer to a risk; can be oral or written.' },
      { term: 'Endorsement / Rider', definition: 'Written amendment that adds, removes, or modifies coverage after the policy is issued.' },
      { term: 'Aleatory Contract', definition: 'Values exchanged are unequal and depend on chance.' },
      { term: 'Contract of Adhesion', definition: 'Drafted by one party (insurer) on a take-it-or-leave-it basis. Ambiguities interpreted AGAINST the drafter.' },
      { term: 'Utmost Good Faith', definition: 'BOTH parties must disclose all material facts. Higher standard than ordinary contracts.' },
      { term: 'Material Fact', definition: 'Information that would influence the insurer\'s decision to accept the risk or set the premium.' },
      { term: 'Coverage Commencement', definition: '12:01 a.m. standard time at the address of the NAMED INSURED, unless otherwise stated.' }
    ]
  },

  {
    day: 3,
    title: 'Insurance Principles — Indemnity & Insurable Interest',
    category: 'Contract Law',
    estMinutes: 120,
    objective: 'Master the core principles that govern every property/casualty claim in Manitoba.',
    summary: [
      'INSURABLE INTEREST — the insured must stand to suffer financial loss. For property: required at TIME OF LOSS. For life: at time policy is issued.',
      'INDEMNITY AGREEMENT — settlement is the LESSER of: amount of insurance, ACV (or RC) of the property, or the insured\'s financial interest in the property.',
      'Factors NOT considered in indemnity: future investment value, sentimental value.',
      'ACV = REPLACEMENT COST minus DEPRECIATION.',
      'SUBROGATION — after paying a claim, the insurer takes over the insured\'s right to recover from the negligent third party. Prevents double recovery.',
      'CONTRIBUTION — when multiple policies cover the same loss, each insurer pays a proportionate share.',
      'PAIR & SET CLAUSE — if part of a set is lost and the rest found, settlement is value claimed MINUS value of the recovered item.',
      'REMOVAL CLAUSE — extends coverage to property temporarily relocated to protect it from an imminent peril (e.g., wildfire).'
    ],
    secrets: [
      'Indemnity calculation: building ACV $400K, mortgage $200K, insured for $350K → total loss settlement = $350K (lesser of insurance, ACV, interest).',
      'Subrogation is the legal process the insurer uses to RECOVER from a negligent third party — not arbitration, restitution, or mediation.',
      'Insurance does NOT cover sentimental value or future investment value, even if the insured paid premiums based on those amounts.',
      'STANDARD MORTGAGE CLAUSE protects the mortgagee EVEN IF the insured breaches a policy condition or warranty.'
    ],
    flashcards: [
      { term: 'Insurable Interest', definition: 'A financial stake in the subject matter such that the person would suffer loss if it is damaged.' },
      { term: 'Indemnity', definition: 'Restoring the insured to the same financial position as before the loss — no profit allowed.' },
      { term: 'Indemnity Settlement', definition: 'LESSER of: amount of insurance, ACV/RC, or insured\'s financial interest in the property.' },
      { term: 'Actual Cash Value (ACV)', definition: 'Replacement cost MINUS depreciation. Default measure of indemnity.' },
      { term: 'Subrogation', definition: 'Insurer\'s right to step into the insured\'s shoes and sue a negligent third party after paying the claim.' },
      { term: 'Contribution', definition: 'When two or more policies cover the same loss, each shares the payment proportionately.' },
      { term: 'Pair & Set Clause', definition: 'Loss to one item of a set is valued at the full set value MINUS the value of the surviving items.' },
      { term: 'Removal Clause', definition: 'Extends coverage to property TEMPORARILY moved to escape an imminent peril (e.g., wildfire, flood).' },
      { term: 'Standard Mortgage Clause', definition: 'Protects the mortgagee\'s interest even if the insured breaches a condition or warranty.' }
    ]
  },

  {
    day: 4,
    title: 'Manitoba Insurance Act — Statutory Conditions (Part 1)',
    category: 'Manitoba Law',
    estMinutes: 120,
    objective:
      'Memorize Statutory Conditions 1–7 of the Manitoba Insurance Act — these are word-for-word tested.',
    summary: [
      'The Manitoba Insurance Act prescribes 14 STATUTORY CONDITIONS that must appear in every fire/property policy in the province. No insurer may vary or omit them.',
      'SC 1 — MISREPRESENTATION: Any material false statement or omission voids the contract as to the affected property.',
      'SC 2 — PROPERTY OF OTHERS: Insurer is not liable for loss to property owned by someone else unless specifically stated or the insured\'s interest is shown.',
      'SC 3 — CHANGE OF INTEREST: Insurer remains liable after assignment under the Bankruptcy Act or change of title by succession/death/operation of law.',
      'SC 4 — MATERIAL CHANGE IN RISK: The insured must give PROMPT WRITTEN notice of any material change within their control. Failure VOIDS the affected portion of the policy. The insurer may then terminate, OR demand additional premium within 15 days.',
      'SC 5 — TERMINATION: (a) Insurer may cancel with 15 days\' notice by REGISTERED MAIL or 5 days personal delivery. (b) Insured may cancel ANYTIME on request. Insurer cancellation = PRO-RATA refund. Insured cancellation = SHORT-RATE refund.',
      'SC 6 — REQUIREMENTS AFTER LOSS: Insured must immediately give written notice, then file a sworn PROOF OF LOSS as soon as practicable, including a complete inventory and circumstances.',
      'SC 7 — FRAUD: Any fraud or wilfully false statement in the proof of loss INVALIDATES the entire claim.'
    ],
    secrets: [
      'Insurer cancellation = 15 days REGISTERED MAIL or 5 days PERSONAL DELIVERY. Memorize these numbers.',
      'PRO-RATA = no penalty (insurer cancels). SHORT-RATE = with penalty (insured cancels).',
      'A material change UNREPORTED voids only the part of the policy AFFECTED by the change, not the whole policy.',
      'A misrepresentation that makes the risk LOOK BETTER than it really is is a textbook exam definition.',
      'Even if an insured cancels mid-term, the insured IS entitled to a refund (short-rate). "No refund" is wrong.'
    ],
    flashcards: [
      { term: 'SC 1 — Misrepresentation', definition: 'Material false statement or omission about the risk — contract void as to the affected property.' },
      { term: 'SC 2 — Property of Others', definition: 'Insurer not liable for non-insured property unless specified or insured\'s interest is stated.' },
      { term: 'SC 3 — Change of Interest', definition: 'Coverage continues after bankruptcy assignment, death, or change of title by operation of law.' },
      { term: 'SC 4 — Material Change in Risk', definition: 'Insured must PROMPTLY notify insurer in writing of any change within their control. Failure voids the affected portion.' },
      { term: 'SC 5 — Termination', definition: 'Insurer: 15 days registered mail / 5 days personal. Insured: anytime. Pro-rata vs. short-rate refunds.' },
      { term: 'SC 6 — Requirements After Loss', definition: 'Immediate written notice + sworn Proof of Loss with inventory and circumstances.' },
      { term: 'SC 7 — Fraud', definition: 'Any fraud or wilfully false statement in the proof of loss invalidates the entire claim.' },
      { term: 'Pro-Rata Refund', definition: 'Exact unused portion of premium. Used when the INSURER cancels.' },
      { term: 'Short-Rate Refund', definition: 'Refund minus an administrative penalty. Used when the INSURED cancels mid-term.' }
    ]
  },

  {
    day: 5,
    title: 'Manitoba Statutory Conditions (Part 2) & Claims Process',
    category: 'Manitoba Law',
    estMinutes: 120,
    objective: 'Finish Statutory Conditions 8–14 and walk through a claim from notice to settlement.',
    summary: [
      'SC 8 — WHO MAY GIVE NOTICE AND PROOF: The insured\'s agent can file if the insured is absent or unable; a payee may file if the insured refuses.',
      'SC 9 — SALVAGE: The insured must take all reasonable steps to PREVENT FURTHER LOSS. The insurer contributes pro-rata to those expenses.',
      'SC 10 — ENTRY, CONTROL, ABANDONMENT: The insurer has IMMEDIATE right of entry to investigate. The insurer cannot take CONTROL without consent, and the insured cannot ABANDON property to the insurer without consent.',
      'SC 11 — DISPUTE RESOLUTION: Disagreement over value or amount goes to the dispute-resolution process in the Insurance Act, independent of other questions.',
      'SC 12 — WHEN LOSS PAYABLE: 60 DAYS after proof of loss is completed and delivered (unless policy says less).',
      'SC 13 — REPAIR OR REPLACEMENT: Insurer may elect to repair/rebuild/replace by giving written notice within 30 DAYS after proof of loss; must commence within 45 DAYS.',
      'SC 14 — NOTICE: Written notice to insurer goes to its head/chief office in the province (registered mail). Written notice to insured goes to last known address.',
      'Additional Conditions (not part of the 14, but in every policy): Canadian Currency; Insurance under more than one coverage (no double pay); Liberalization Clause; Changes only in writing; Examination Under Oath.'
    ],
    secrets: [
      'Claim must be paid within 60 DAYS of complete proof of loss — memorize.',
      'Insurer\'s notice of election to repair/replace must come within 30 DAYS, work must START within 45 DAYS.',
      'If the insured FAILS to take reasonable salvage steps, that failure CAN affect the claim — the textbook "exception" answer.',
      'Limitation period to sue the insurer in Manitoba is now 2 YEARS under the Limitations Act (it used to be 1 year for fire).'
    ],
    flashcards: [
      { term: 'SC 9 — Salvage', definition: 'Insured must reasonably prevent further loss; insurer contributes pro-rata to the cost.' },
      { term: 'SC 10 — Entry, Control, Abandonment', definition: 'Insurer has immediate right of entry; insurer cannot take control nor can the insured abandon property without consent.' },
      { term: 'SC 11 — Dispute Resolution', definition: 'Disagreements over value/amount go to the Insurance Act dispute-resolution process, independent of other issues.' },
      { term: 'SC 12 — When Loss Payable', definition: '60 days after the proof of loss is completed and delivered to the insurer.' },
      { term: 'SC 13 — Repair or Replacement', definition: 'Insurer may elect to repair/rebuild within 30 days of proof; must begin work within 45 days.' },
      { term: 'SC 14 — Notice', definition: 'Insurer: notice to chief/head office in the province. Insured: notice to last known address.' },
      { term: 'Liberalization Clause', definition: 'If the insurer broadens coverage during the policy period at no extra premium, the broader coverage applies automatically.' },
      { term: 'Examination Under Oath', definition: 'Additional condition allowing the insurer to examine the insured under oath as part of claims investigation.' }
    ]
  },

  {
    day: 6,
    title: 'Property Insurance — Forms, Perils & Exclusions',
    category: 'Property',
    estMinutes: 120,
    objective: 'Distinguish the three Homeowners forms (IBC1151 Basic, IBC1154 Broad, IBC1155 Comprehensive) and master perils & exclusions.',
    summary: [
      'NAMED PERILS = covers only listed perils. ALL RISK / COMPREHENSIVE = covers all causes EXCEPT exclusions.',
      'IBC 1151 BASIC FORM = Named Perils on building AND contents.',
      'IBC 1154 BROAD FORM = All Risk on building, Named Perils on contents.',
      'IBC 1155 COMPREHENSIVE FORM = All Risk on building AND contents.',
      'Fire policies (per Manitoba Insurance Act) automatically include LIGHTNING and EXPLOSION of natural/coal/manufactured gas, EXCLUDING damage to electrical appliances and devices.',
      'Standard exclusions: war/nuclear, earthquake, flood, sewer backup, wear & tear, settling, smoke from agricultural smudging/industrial operations, fireplace smoke, mechanical breakdown, animals owned/kept, intentional acts.',
      'Excluded property under typical policies: money & securities, books of account, motorized vehicles (cars/motorcycles), aircraft, vacant building (after 30 days).',
      'Properties needing endorsements: sewer backup, earthquake, overland flood, identity theft, scheduled valuables.'
    ],
    secrets: [
      'IBC1155 Comprehensive does NOT cover earthquake, flood, settling, wear & tear, mechanical breakdown, OR smoke from fireplace — these are excluded EVEN under "all risk".',
      'Damage from RACCOONS trying to enter the attic — under Comprehensive, wild animal damage to BUILDING is COVERED (animal exclusion is for owned/kept animals).',
      'Direct damage from FIRE is covered AND firefighting damage (water/axe) is covered as "consequential" within direct damage. LOSS OF RENTAL INCOME is NOT direct damage.',
      'When the Insurance Act adds explosion to fire, it EXCLUDES damage to electrical appliances and devices from the explosion peril.'
    ],
    flashcards: [
      { term: 'Named Perils Policy', definition: 'Covers only the perils specifically listed in the policy.' },
      { term: 'All Risk / Comprehensive', definition: 'Covers all causes of direct physical loss EXCEPT those specifically excluded.' },
      { term: 'IBC 1151 — Basic Form', definition: 'Named Perils on building AND contents.' },
      { term: 'IBC 1154 — Broad Form', definition: 'All Risk on building, Named Perils on contents.' },
      { term: 'IBC 1155 — Comprehensive Form', definition: 'All Risk on building AND contents (subject to exclusions).' },
      { term: 'Fire Peril (Manitoba)', definition: 'Includes lightning and explosion of natural/coal/manufactured gas — but EXCLUDES damage to electrical appliances and devices.' },
      { term: 'Vacancy Exclusion', definition: 'Coverage suspends/voids if the building is vacant beyond a stated period (typically 30 days).' },
      { term: 'Excluded Property', definition: 'Money/securities, books of account, motor vehicles, aircraft, and pets are typically excluded from standard property policies.' }
    ]
  },

  {
    day: 7,
    title: 'Homeowners Package — Coverages A–G',
    category: 'Property',
    estMinutes: 120,
    objective: 'Memorize each coverage section, automatic limits, special limits, and Section II Personal Liability.',
    summary: [
      'Coverage A — DWELLING BUILDING (main residence, attached structures).',
      'Coverage B — DETACHED PRIVATE STRUCTURES — 10% of Coverage A, IN ADDITION to Coverage A.',
      'Coverage C — PERSONAL PROPERTY — typically 70-80% of Coverage A; worldwide.',
      'Coverage D — ADDITIONAL LIVING EXPENSE — extra costs (hotel, meals, kennel for pet) to maintain normal living. Does NOT cover mortgage payments (continuing expense, not "extra").',
      'Coverage E — PERSONAL LIABILITY — covers insureds anywhere in the world for legal liability arising from PRIVATE (not business or auto) activities.',
      'Coverage F — VOLUNTARY MEDICAL PAYMENTS — pays medical for injured third party regardless of negligence, up to one year.',
      'Coverage G — VOLUNTARY PAYMENT FOR DAMAGE TO PROPERTY — pays for damage caused by an INSURED to others\' property even without legal liability; includes deliberate acts of minor children (typically under 13).',
      'INSUREDS include: spouse, common-law partner, dependent relatives, students living away while at school. NOT included: tenants.',
      'SPECIAL LIMITS apply to: jewellery, furs, watercraft, business property, money/securities, computers, collectibles.',
      'ACV settlement (not RC) on: fences, outdoor antennae, awnings, carpeting in some forms, satellite dishes.'
    ],
    secrets: [
      'A tenant who occupies a basement suite in the insured\'s dwelling is NOT an "insured" under the homeowner policy.',
      'Coverage D does NOT cover mortgage payments (they\'re continuing expenses).',
      'Voluntary Property Damage (Coverage G) covers deliberate acts of MINORS under ~13. A 14-year-old\'s vandalism is NOT covered.',
      'Section II Personal Liability covers insureds as private citizens ANYWHERE IN THE WORLD — but excludes business and auto use.',
      'Coverage B (detached structures) is 10% of Coverage A and IS IN ADDITION to Coverage A — not included within it.'
    ],
    flashcards: [
      { term: 'Coverage A — Dwelling', definition: 'Main residential structure including attached additions.' },
      { term: 'Coverage B — Detached Structures', definition: '10% of Coverage A IN ADDITION to it — covers detached sheds, garages, fences.' },
      { term: 'Coverage C — Personal Property', definition: 'Typically 70-80% of Coverage A. Worldwide coverage on the insured\'s belongings.' },
      { term: 'Coverage D — Additional Living Expense', definition: 'EXTRA costs to maintain normal living after a covered loss (hotel, meals, pet boarding). NOT mortgage.' },
      { term: 'Coverage E — Personal Liability', definition: 'Covers insureds anywhere in the world for liability from PRIVATE activities (excludes auto and business).' },
      { term: 'Coverage F — Voluntary Medical Payments', definition: 'No-fault medical expenses for an injured third party, paid up to 1 year from accident.' },
      { term: 'Coverage G — Voluntary Property Damage', definition: 'Pays for accidental damage caused by insureds (incl. deliberate acts of minors under ~13).' },
      { term: 'Insureds (HO Policy)', definition: 'Named insured + spouse/common-law + dependent relatives + students away at school. NOT tenants.' },
      { term: 'Special Limits', definition: 'Sub-limits on jewellery, furs, watercraft, money/securities, business property, computers — schedule items for full value.' }
    ]
  },

  {
    day: 8,
    title: 'Commercial Property & Business Interruption',
    category: 'Commercial',
    estMinutes: 120,
    objective: 'Understand IBC4037 Broad Form, the co-insurance formula, and Business Interruption (Earnings vs Profits).',
    summary: [
      'IBC 4037 — Commercial Property BROAD FORM provides the widest commercial coverage. Covers fire, lightning, smoke (except agricultural smudging or industrial smoke), explosion, vehicle impact (even by insured/employee), water escape from pipes, etc. Does NOT cover theft of MONEY (that needs Crime/Burglary coverage).',
      'Fire rate factors: BUILDING USE/OCCUPANCY, CONSTRUCTION TYPE, FIRE PROTECTION (public and private). NOT a factor: number of employees.',
      '"BUILDING" includes: permanent fixtures, signs the insured installed, rooftop A/C units, building materials on premises. Does NOT include: live plants/trees, stock, equipment.',
      'TENANT IMPROVEMENTS (floor coverings, paneling, wired security) are insured as BUILDING coverage in the TENANT\'S OWN policy — not under the landlord\'s.',
      'CO-INSURANCE CLAUSE — penalizes underinsurance on PARTIAL losses only. Formula: Payment = (Amount Carried / Amount Required) × Loss.',
      'Example: $500,000 building, 80% coinsurance required = $400K. Insured for $300K. $50K loss → (300/400) × 50,000 = $37,500 paid; insured absorbs $12,500.',
      'REINSTATEMENT CLAUSE — after a loss is paid, the amount of insurance does NOT change and the insured does NOT pay additional premium.',
      'BUSINESS INTERRUPTION — triggered by a covered property loss; pays LOST INCOME and CONTINUING expenses. Does NOT pay to order new equipment (that\'s property).',
      'EARNINGS FORM — pays until property is RESTORED, max 12 months from loss. PROFITS FORM — pays until profits return to pre-loss level (can extend past restoration).',
      'EXTRA EXPENSE — pays only the EXTRA costs to keep operating (temporary rental, contractor bonus, overtime). Continuing expenses like mortgage are NOT extra.'
    ],
    secrets: [
      'Co-insurance applies ONLY to partial losses — on a TOTAL loss, the insured collects the full policy limit (subject to ACV/RC).',
      'On the exam, when given a co-insurance problem: compute the penalty, then subtract from the loss to find what the INSURED absorbs.',
      'Theft of MONEY from a cash register is NEVER covered by a property policy — requires Crime / Money & Securities coverage.',
      'Builder\'s Risk — covers materials/supplies for the project but does NOT cover contractors\' tools/equipment.',
      'Builder\'s Risk coverage ends when construction is complete AND the building is occupied (not at policy expiry).'
    ],
    flashcards: [
      { term: 'IBC 4037 — Commercial Broad Form', definition: 'Widest commercial property coverage. Covers vehicle impact even when driven by insured; excludes theft of money.' },
      { term: 'Co-insurance Formula', definition: '(Amount Carried ÷ Amount Required) × Loss = amount paid. Applies on partial losses only.' },
      { term: 'Tenant\'s Improvements', definition: 'Insured under the TENANT\'S own property policy as building coverage — not the landlord\'s.' },
      { term: 'Reinstatement Clause', definition: 'After a paid loss, the policy limit does not reduce, and no additional premium is required.' },
      { term: 'Business Interruption — Earnings Form', definition: 'Pays loss of income until property restored, maximum 12 months from date of loss.' },
      { term: 'Business Interruption — Profits Form', definition: 'Pays until profits return to pre-loss level — can extend beyond restoration.' },
      { term: 'Extra Expense Insurance', definition: 'Pays the ADDITIONAL costs to maintain operations (temp location, overtime). Mortgage payments are not "extra".' },
      { term: 'Builder\'s Risk Broad Form', definition: 'Covers materials and project property; excludes contractors\' tools. Ends when construction complete AND building occupied.' },
      { term: 'Safe Burglary', definition: 'Requires combination lock and visible signs of forced entry into the safe. Covers theft of safe contents only on those terms.' }
    ]
  },

  {
    day: 9,
    title: 'Liability Insurance — Torts, Negligence & CGL',
    category: 'Liability',
    estMinutes: 120,
    objective: 'Master tort principles, the elements of negligence, and the structure of the Commercial General Liability policy.',
    summary: [
      'CRIMINAL LAW addresses wrongs against society; CIVIL LAW addresses wrongs between parties. The remedy in civil law is COMPENSATION (money) — not punishment.',
      'PLAINTIFF = the party bringing the lawsuit. DEFENDANT = the party being sued. TORTFEASOR = the wrongdoer.',
      'Four elements of NEGLIGENCE: (1) legal DUTY OF CARE owed, (2) BREACH of that legal duty, (3) DAMAGES suffered, (4) PROXIMATE CAUSE linking breach to damage. (Note: it must be a LEGAL duty — NOT a moral duty.)',
      'STATUTE LAW is written, enacted by legislatures. COMMON LAW is based on precedent. They differ.',
      'Occupier\'s duty to an INVITEE = protect from any dangers the occupier KNOWS or SHOULD HAVE KNOWN of.',
      'Vicarious liability: employers are responsible for employees\' acts within course of employment. Workers Compensation (WCB) — employees CANNOT sue their employer for work-related injuries.',
      'Liability policies cover BI/PD on an OCCURRENCE basis: the policy limit applies PER occurrence, available for each occurrence during the policy period.',
      'Liability covers UNINTENTIONAL torts. PUNITIVE/EXEMPLARY damages are typically NOT covered. Compensatory damages ARE covered.',
      'SUPPLEMENTARY PAYMENTS (defense costs, court costs, interest on within-limits judgments, pre-judgment) are PAID IN ADDITION to the policy limit. Damages awarded IN EXCESS of the limit are NOT covered.',
      'COMMERCIAL GENERAL LIABILITY (CGL) — main sections: (a) Premises & Operations, (b) Products & Completed Operations, (c) Personal Injury (libel, slander, false arrest, wrongful entry), (d) Medical Payments.',
      'PRODUCTS LIABILITY responds to harm caused by the insured\'s products after they\'ve left the insured\'s possession (e.g., chicken bone in pizza topping).'
    ],
    secrets: [
      'NEGLIGENCE requires a LEGAL duty of care — moral duty alone is NOT enough. Watch for this trick.',
      'Punitive damages are NOT covered by liability insurance (public policy — would defeat the punishment).',
      'PERSONAL INJURY in insurance ≠ bodily injury. It means libel, slander, false arrest, wrongful entry — non-physical torts.',
      'A doctor\'s professional liability is called MALPRACTICE insurance — not E&O (that\'s for brokers/agents).',
      'Insured\'s duties after a liability claim: report promptly, cooperate, do not pay anything (except first-aid) without insurer permission, do NOT discourage third parties from pursuing claims.'
    ],
    flashcards: [
      { term: 'Plaintiff', definition: 'The person who FILES a lawsuit against another.' },
      { term: 'Defendant', definition: 'The person being SUED.' },
      { term: 'Tortfeasor', definition: 'The party who committed the wrongful act (tort).' },
      { term: 'Negligence Elements', definition: 'LEGAL duty of care, breach, damages, proximate cause. (Moral duty alone is insufficient.)' },
      { term: 'Common Law vs Statute Law', definition: 'Common law = based on judicial precedent. Statute law = written, enacted by legislature.' },
      { term: 'Occurrence Basis', definition: 'Policy limit applies per occurrence during the policy period — not aggregated across all occurrences.' },
      { term: 'Punitive Damages', definition: 'Damages awarded to punish wrongdoer. Generally NOT covered by liability insurance.' },
      { term: 'Personal Injury (insurance)', definition: 'Non-bodily torts: libel, slander, false arrest, wrongful entry, invasion of privacy.' },
      { term: 'Products Liability', definition: 'Covers harm caused by the insured\'s product after it has left the insured\'s control (e.g., contaminated food).' },
      { term: 'Supplementary Payments', definition: 'Defense costs, court costs, and interest on within-limits judgments — paid IN ADDITION to the policy limit.' },
      { term: 'Malpractice Insurance', definition: 'Professional liability for doctors and similar medical professionals.' },
      { term: 'Errors & Omissions (E&O)', definition: 'Professional liability for brokers, agents, adjusters — covers negligent advice/service to clients.' }
    ]
  },

  {
    day: 10,
    title: 'MPI / Autopac — Basic Coverage & PIPP',
    category: 'MPI / Autopac',
    estMinutes: 150,
    objective:
      'Master Manitoba Public Insurance\'s Basic Autopac program: PIPP, third-party liability, all-perils, deductibles.',
    summary: [
      'Manitoba Public Insurance (MPI) is a CROWN CORPORATION created by the Manitoba Public Insurance Corporation Act. It administers Basic compulsory auto insurance (AUTOPAC) and is the EXCLUSIVE provider of basic auto cover in Manitoba.',
      'MPI is regulated by the PUBLIC UTILITIES BOARD (PUB), which approves Autopac rates (unlike private insurers who set their own rates).',
      'BASIC AUTOPAC (mandatory for every registered vehicle, effective April 1, 2026) includes THREE coverages:',
      '   • Personal Injury Protection Plan (PIPP) — no-fault bodily injury benefits',
      '   • Third-Party Liability — $500,000 default limit',
      '   • All-Perils — physical damage to the registered vehicle, up to $50,000 with a $1,000 DEDUCTIBLE (increased from $750 on April 1, 2026).',
      'PIPP is a TRUE NO-FAULT plan: each driver collects bodily-injury benefits from MPI regardless of who caused the accident. PIPP largely REPLACES the right to sue for injuries.',
      'PIPP applies to all Manitoba residents anywhere in CANADA OR THE UNITED STATES.',
      'PIPP Income Replacement: 90% of NET INCOME, up to a maximum insurable GROSS income of $123,000 (2026), with a 7-DAY waiting period.',
      'PIPP also pays: medical/rehab benefits, permanent impairment lump-sum, death benefits, caregiver/personal-care/student/non-earner benefits.',
      'For drivers TRAVELLING OUTSIDE Manitoba: tort still applies for PROPERTY DAMAGE and for injury beyond PIPP limits.'
    ],
    secrets: [
      'Basic Autopac liability default is $500,000 — drivers can purchase Extension to raise it (up to $10 million in 2026).',
      'The all-perils deductible on Basic was raised from $750 to $1,000 EFFECTIVE APRIL 1, 2026. Be careful with older study material that still says $750.',
      'PIPP benefits = 90% of NET (not gross) income. The maximum insurable GROSS yearly income for 2026 is $123,000.',
      'PIPP\'s no-fault scheme does NOT eliminate consequences — at-fault drivers still move DOWN the Driver Safety Rating scale.',
      'Basic Autopac all-perils covers the vehicle up to $50,000. For vehicles worth more, Extension EXCESS VALUE is required.'
    ],
    flashcards: [
      { term: 'Manitoba Public Insurance (MPI)', definition: 'Crown corporation, exclusive provider of compulsory basic auto insurance in Manitoba; rates approved by the PUB.' },
      { term: 'Autopac', definition: 'The brand name for MPI\'s auto insurance products: Basic, Extension, and Special Risk Extension (SRE).' },
      { term: 'PIPP', definition: 'Personal Injury Protection Plan — MPI\'s no-fault bodily injury benefits scheme covering Manitobans in Canada and the U.S.' },
      { term: 'Basic Autopac Liability', definition: '$500,000 third-party liability (BI and PD) included with every registered vehicle.' },
      { term: 'Basic Autopac Deductible (2026)', definition: '$1,000 all-perils deductible effective April 1, 2026 (raised from $750).' },
      { term: 'Basic All-Perils Limit', definition: 'Up to $50,000 for accidental physical damage to the registered vehicle.' },
      { term: 'PIPP Income Replacement', definition: '90% of net income, max insurable gross $123,000 (2026), 7-day waiting period.' },
      { term: 'No-Fault Insurance', definition: 'Each insured collects bodily-injury benefits from their own insurer regardless of fault. Right to sue is largely removed.' }
    ]
  },

  {
    day: 11,
    title: 'MPI Extension, Special Risk & the Driver Safety Rating',
    category: 'MPI / Autopac',
    estMinutes: 120,
    objective: 'Understand optional Extension coverages, Special Risk Extension (SRE), and how the Driver Safety Rating affects premiums.',
    summary: [
      'AUTOPAC EXTENSION — optional coverages SOLD BY MPI through private brokers: increased liability (up to $10 million), lower deductible options, Loss of Use, family protection, Excess Value, replacement-cost endorsement.',
      'SPECIAL RISK EXTENSION (SRE) — MPI division that insures atypical or high-value risks: rare/antique vehicles, commercial fleets, vehicles >$150K, etc.',
      'DRIVER SAFETY RATING (DSR) — replaced the merit/demerit system. For policies effective April 1, 2026 and later, the scale has 41 LEVELS, ranging from −20 (worst) up to NEW +20 (best).',
      'Each clean year (no at-fault claims, no convictions, no suspensions) moves the driver UP one level — increasing driver\'s licence and vehicle discounts. Top of scale = up to 53% off vehicle premium + $30 off licence.',
      'Demerits (moving DOWN the scale):',
      '   • Each AT-FAULT vehicle claim = −5 levels',
      '   • Hand-held electronic device while driving = −5 levels',
      '   • Speeding 30–49 km/h over limit = −2 levels',
      '   • Not obeying a traffic sign / no seatbelt = −2 levels',
      '   • IMPAIRED driving = −10 levels',
      '   • Speeding >49 km/h over limit = −10 levels',
      '   • Leaving the scene of an accident = −10 levels',
      '   • Impaired driving CAUSING DEATH = −15 levels',
      'When driving OUTSIDE Manitoba, tort still applies for property damage and excess injury. Carry adequate Extension liability for U.S. trips.'
    ],
    secrets: [
      'You CANNOT buy Basic auto insurance from a private insurer in Manitoba — Basic is sold only by MPI through registered Autopac brokers.',
      'Extension liability up to $10M is the maximum that MPI sells; higher limits require Special Risk Extension (SRE).',
      'A single AT-FAULT claim = −5 DSR levels. A cell-phone conviction = −5 DSR levels. Memorize.',
      'Impaired causing death is the harshest single demerit on the DSR: −15 levels.',
      'For policies effective April 1, 2026, MPI added a new TOP level (+20) to recognize the safest drivers.'
    ],
    flashcards: [
      { term: 'Autopac Extension', definition: 'Optional MPI coverages: higher liability, lower deductible, loss of use, excess value, family protection.' },
      { term: 'Special Risk Extension (SRE)', definition: 'MPI division for unusual or high-value risks (antiques, fleets, vehicles >$150K).' },
      { term: 'Driver Safety Rating (DSR)', definition: 'MPI\'s 41-level merit scale (2026): −20 to +20. Replaces the old merit/demerit system.' },
      { term: 'DSR — Clean Year', definition: 'One level UP the scale; increases discount on vehicle premium and driver\'s licence.' },
      { term: 'DSR — At-Fault Claim', definition: 'Drops driver 5 levels DOWN per claim.' },
      { term: 'DSR — Impaired Driving', definition: 'Drops driver 10 levels DOWN; impaired causing death = 15 levels down.' },
      { term: 'DSR — Cell Phone', definition: 'Using a hand-held electronic device while driving = 5 levels down.' },
      { term: 'Out-of-Province Driving', definition: 'PIPP follows Manitoba residents in Canada/U.S.; TORT still applies to property damage and excess injury.' }
    ]
  },

  {
    day: 12,
    title: 'Industry Structure — Underwriting, Brokers, Agents & Claims',
    category: 'Industry',
    estMinutes: 90,
    objective: 'Understand who does what in the insurance industry and the duties brokers owe.',
    summary: [
      'INSURERS: Stock companies (owned by shareholders), Mutuals (owned by policyholders), Reciprocals, Crown corporations (MPI, SGI, ICBC), Lloyd\'s (a market — not a company).',
      'BROKER = independent intermediary representing the CLIENT, places business with multiple insurers. AGENT = represents ONE insurer.',
      'Broker\'s primary duty: act in the client\'s best interest. Brokers must also disclose all material facts about the risk truthfully TO THE INSURER.',
      'Fiduciary duty: brokers must regularly REMIT collected premiums to insurers as required by the Insurance Act.',
      'UNDERWRITER\'S PRIMARY FUNCTION: select risks most likely to be PROFITABLE for the insurer (rate, accept, decline). Checks claims/credit history to detect MORAL HAZARD.',
      'Provincial regulators DO NOT set premium rates for private insurers (those are set by insurers themselves). Provincial duties: license insurers, supervise contract terms/conditions, monitor solvency of non-federally-licensed insurers.',
      'SOLVENCY = the ability of an insurer to pay all insured losses.',
      'E&O (Errors & Omissions) insurance protects brokers from claims of NEGLIGENT advice or service. Most common cause of E&O claims: FAILING TO IDENTIFY a client\'s loss exposures and offer required coverages.',
      'REINSURANCE = insurance for insurers — transfers excess risk, lets primary insurer write larger policies than its capital alone would support.'
    ],
    secrets: [
      'Provincial governments do NOT set premium levels for private insurers — only Crown insurers (like MPI) are rate-regulated.',
      'Brokers are NOT employees of the insurance companies they represent — they are independent.',
      'The #1 cause of E&O claims is failure to identify the client\'s loss exposures and offer the right coverages — NOT mis-cancellation or selling unwanted coverage.',
      'An underwriter\'s PRIMARY function is RISK SELECTION for profitability — not binding every risk or setting rates.',
      'Lloyd\'s of London is a MARKETPLACE of syndicates, not an insurance company.'
    ],
    flashcards: [
      { term: 'Broker', definition: 'Independent intermediary representing the CLIENT; places business with multiple insurers.' },
      { term: 'Agent', definition: 'Representative of ONE insurer; owes duty primarily to that insurer.' },
      { term: 'Stock Insurer', definition: 'Insurer owned by SHAREHOLDERS; profits distributed as shareholder dividends.' },
      { term: 'Mutual Insurer', definition: 'Insurer owned by POLICYHOLDERS; "profits" returned as policyholder dividends or rate reductions.' },
      { term: 'Lloyd\'s of London', definition: 'A marketplace where syndicates of underwriters subscribe to insurance risks — NOT a single insurer.' },
      { term: 'Underwriter', definition: 'Selects risks most likely to be profitable for the insurer; sets terms and rates.' },
      { term: 'Solvency', definition: 'The financial ability of an insurer to pay all insured losses.' },
      { term: 'Reinsurance', definition: 'Insurance purchased by an insurer from another insurer to transfer part of its risk.' },
      { term: 'E&O Insurance', definition: 'Errors & Omissions — protects brokers from negligent advice claims. Top trigger: failing to identify a client\'s loss exposures.' },
      { term: 'Adjuster', definition: 'Investigates and negotiates settlement of insurance claims.' }
    ]
  },

  {
    day: 13,
    title: 'Specialty Lines, Licensing & Ethics in Manitoba',
    category: 'Practice & Ethics',
    estMinutes: 120,
    objective: 'Cover travel/condo/specialty insurance and the Insurance Council of Manitoba (ICM) licensing structure.',
    summary: [
      'INSURANCE COUNCIL OF MANITOBA (ICM) is the regulatory body for licensing agents, brokers, and independent adjusters in Manitoba. It handles licensing, complaints, and discipline.',
      'MANITOBA uses a 3-LEVEL LICENCE SYSTEM for general insurance:',
      '   • LEVEL 1 — entry; can sell INSIDE the office of a general insurance agency only, under supervision of a Level 2+.',
      '   • LEVEL 2 — can sell inside AND outside the office; can MANAGE an agency.',
      '   • LEVEL 3 — must hold Level 2 for at least 2 years; can OWN an agency.',
      'IBAM (Insurance Brokers Association of Manitoba) is the BROKER ASSOCIATION (not the regulator). IBAM administers the Fundamentals of Insurance (FOI) course, which satisfies the education requirement for the Level 1 licence. Candidates may CHALLENGE the FOI exam max 3 times in 6 months.',
      'Provincial Superintendent of Insurance — oversees the Insurance Act and market conduct. Federal OSFI — supervises solvency of FEDERALLY-licensed insurers.',
      'Acts that result in licence TERMINATION: misrepresentation/fraud/dishonesty; offering UNAUTHORIZED inducements (gifts, free memberships); failing to remit collected premiums. (An authorized premium discount approved by the insurer is FINE.)',
      'CONDO UNIT OWNERS FORM (IBC 1132) covers personal property, unit improvements & betterments, and LOSS ASSESSMENT (when the condo corp\'s policy doesn\'t fully respond). Does NOT cover the purchase value of the unit.',
      'TRAVEL INSURANCE — premium factors: trip LENGTH, DESTINATION, AGE/HEALTH of applicant. Method of transportation is NOT a factor. Excluded conditions typically include: late-term pregnancy, hazardous-sport injuries (skydiving), self-inflicted/drug overdose. Sudden food-poisoning emergency IS covered.'
    ],
    secrets: [
      'In Manitoba the regulator is the INSURANCE COUNCIL OF MANITOBA (ICM) — not the "General Insurance Council" (which is the name used in some other provinces).',
      'A premium discount AUTHORIZED by the insurer is NOT an illegal inducement. Unauthorized "rebates" or freebies are.',
      'FOI students may challenge the exam a maximum of 3 TIMES in a 6-MONTH period.',
      'A Level 1 agent CANNOT sell outside the office or operate without Level 2 supervision.',
      'Loss Assessment under IBC1132 responds when the condo corp\'s policy fails — NOT for the unit owner\'s own deductible.'
    ],
    flashcards: [
      { term: 'Insurance Council of Manitoba (ICM)', definition: 'Regulator that licenses and disciplines agents/brokers/adjusters in Manitoba.' },
      { term: 'IBAM', definition: 'Insurance Brokers Association of Manitoba — broker association; administers the FOI course (NOT the licensing regulator).' },
      { term: 'Level 1 Licence', definition: 'Entry-level. Sell inside the office only, under Level 2+ supervision.' },
      { term: 'Level 2 Licence', definition: 'Sell inside or outside the office; can manage an agency.' },
      { term: 'Level 3 Licence', definition: 'Requires 2+ years at Level 2; allows ownership of an agency.' },
      { term: 'Superintendent of Insurance (MB)', definition: 'Provincial market-conduct regulator under the Insurance Act of Manitoba.' },
      { term: 'OSFI', definition: 'Office of the Superintendent of Financial Institutions — federal solvency regulator of federally-licensed insurers.' },
      { term: 'IBC 1132 — Condo Unit Owners', definition: 'Covers personal property, improvements & betterments, and loss assessment; does NOT cover unit purchase value.' },
      { term: 'Loss Assessment', definition: 'Covers a unit owner\'s share of an assessment levied by the condo corp due to a loss not fully paid by the corp\'s policy.' },
      { term: 'Travel Insurance Premium Factors', definition: 'Trip length, destination, age and health of applicant. Method of transport is NOT a factor.' }
    ]
  },

  {
    day: 14,
    title: 'Final Review & Exam-Day Strategy',
    category: 'Review',
    estMinutes: 90,
    objective: 'Light review of weak areas, exam-day logistics, and high-impact final tips.',
    summary: [
      'Take ONE more full timed mock today, then review only your incorrect answers.',
      'Re-read all "Must-Know Exam Secrets" from Days 1–13 — these are the highest-yield content for the exam.',
      'Numbers to MEMORIZE: 15-day registered mail / 5-day personal cancellation notice; 60 days to pay loss after proof; 30 days to elect repair / 45 days to start; $500K liability / $1,000 deductible / $50K all-perils on Basic Autopac.',
      'Bring: government ID, registration confirmation, simple calculator (no phones). Confirm exam location and start time the day before.',
      'Pacing: roughly 1 minute per MCQ. Flag tough ones, return at the end.',
      'Sleep > Cram. The night before, REST. Cramming reduces working memory.'
    ],
    secrets: [
      'Read EVERY option before choosing — many wrong answers contain absolute words ("always", "never", "only") that signal a trap.',
      'On numeric questions (co-insurance, indemnity), write out the formula and substitute. Don\'t do it in your head.',
      'If two answers seem nearly identical, find the qualifier ("ACV" vs "RC"; "named insured" vs "address of risk").',
      'When asked "EXCEPT" or "NOT", physically scan each option twice. These are the highest-error question types.',
      'Trust first instinct on recall questions; double-check only on calculation questions.'
    ],
    flashcards: [
      { term: 'Cancellation: Insurer', definition: '15 days REGISTERED MAIL or 5 days personal delivery. Pro-rata refund.' },
      { term: 'Cancellation: Insured', definition: 'Anytime on request. Short-rate refund.' },
      { term: 'Loss Payable', definition: 'Within 60 days of completed proof of loss (SC 12).' },
      { term: 'Election to Repair', definition: 'Insurer must give written notice within 30 days of proof; must begin work within 45 days (SC 13).' },
      { term: 'Basic Autopac (2026)', definition: '$500K liability • $1,000 deductible • $50K all-perils • PIPP no-fault.' },
      { term: 'Active Recall', definition: 'Retrieving information without looking — the highest-yield study method.' }
    ]
  }
]
